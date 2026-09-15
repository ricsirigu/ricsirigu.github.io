---
category: 'blog'
cover: './cover.jpg'
title: 'Secure by Design: Escaping the Hamster Wheel of Pain'
description: 'Why recurring vulnerabilities signal systemic management failures, and how secure-by-design practices can break the remediation cycle.'
date: '2026-05-03'
tags: ['cybersecurity', 'Security Architecture', 'security by design']
published: true
---

<article class="prose lg:prose-lg xl:prose-lg">

SQL injection is old. We know how it works, and we have had parameterized queries for a long time. Yet a few weeks ago, during an assessment, the team found a second-order SQL injection.

In 2026, we are still finding this in modern systems.

With second-order SQL injection, attacker-controlled data is stored first and used unsafely in a query later. The first operation may handle the data safely. The problem appears when another part of the application reads it back and treats it as something it can trust.

For example, imagine an application storing a user-supplied value through a parameterized query. Later, a reporting job reads that value and concatenates it into another query. The value came from our database, so it must be safe. Right?

Storing data does not make it trustworthy. At the point where we build the second query, it is still data, and it still needs to be passed as a parameter rather than interpreted as SQL.

That example is enough to explain the bug. But fixing the query only answers the first question.

**Why could we write that unsafe query in the first place?**

## Why was this still possible?

We need to fix the vulnerability. No argument there.

But I also want to know why the code was written that way. Was there a shared database library? Did it support this use case? Was the unsafe helper copied from another service? Did someone assume that values read from the database no longer needed the same care as values from an HTTP request?

Those questions lead to different changes. Another secure coding reminder will not fix a shared helper that encourages string concatenation.

This is the “hamster wheel of pain” described by Andrew J. Stewart in *A Vulnerable System: The History of Information Security in the Computer Age*. We find a vulnerability, patch it, and wait for the next one. A different endpoint, perhaps. A different team. The same kind of mistake.

<img src="hamster-wheel-of-pain.jpg" alt="Hamster wheel of pain">

If the next developer can introduce the same problem just as easily, we have fixed one instance. We have not changed much about how we build software.

## The insecure path is often cheap

Concatenating a query can take a few minutes. Finding and removing it later can require an assessment, a report, triage, a ticket, a release and a retest.

The insecure path is often cheap. The correction is expensive.

And the later we find the problem, the fewer easy options we have. Changing an API before anyone uses it is one thing. Changing it after ten services depend on it is another.

The work does not disappear because we postpone it. Someone still has to do it. Often it is the developer trying to patch a release, the operations team watching for abuse, or the person responding to an incident.

So why was the unsafe option easier than the safe one?

Sometimes the answer is quite ordinary. The old helper was available. The documentation used it. The safe alternative did not support the query we needed. Nobody had time to replace it, and nobody was clearly responsible for maintaining it.

That is useful information. We can work with it.

## Make mistakes harder to introduce

For me, <a href="/expertise/secure-by-design/">Secure by Design</a> starts with questions like these:

- Can our database API keep query structure separate from values by default?
- Can authorization be checked in a shared place, instead of being reimplemented in every endpoint?
- Can the frontend escape output by default, with unsafe rendering requiring an explicit choice?
- Can a new service get its secrets without someone copying credentials into a configuration file?

None of this removes the need to understand security. It reduces the number of places where a small mistake becomes a vulnerability.

An ORM is not a guarantee against SQL injection. Many ORMs allow raw SQL, and a raw query can still be built unsafely. We need to look at the API people actually use, including its escape hatches.

The same is true of authorization. A shared library helps only if it checks the right thing. Knowing who made a request is not the same as knowing whether that person can read this particular record.

Safe building blocks need maintenance, tests and someone responsible for them. Otherwise, we just give the unsafe pattern a nicer interface.

## Developers cannot remember everything

Use parameters. Encode output. Check authorization. Protect secrets. Configure the service correctly. Update dependencies. Understand what happens when a token expires, leaks or is revoked.

All good advice. Now apply every rule, correctly, to every change, in every service.

We all know how that goes.

**Memory is a terrible security boundary.**

Training helps people understand why a rule matters. Code review helps catch mistakes. Neither should be the only thing between an ordinary coding error and a serious incident.

If every developer has to remember to add the same security check, can we put that check somewhere they do not have to remember it?

There will still be exceptions and decisions that need care. The point is to make those fewer and easier to see.

## Make the secure path easier

A shared library is useful when it solves the problem developers actually have. An internal platform is useful when it gives a new service sensible defaults without a separate week of security configuration.

That is what I want from a paved road: a supported way to build something safely, with working examples and fewer decisions to repeat.

For database access, that might mean a small API that uses parameters by default. For secrets, it might mean an integration with the secret store that is already available in the service template. For infrastructure, it might mean a template that starts with limited permissions instead of asking someone to tighten them later.

It does not necessarily mean building a new platform. Sometimes fixing an existing helper and updating its examples is enough.

And if teams keep working around the safe option, ask why. Maybe it is slow. Maybe it is poorly documented. Maybe it cannot do something the product needs.

Making a workaround forbidden does not make the supported option usable.

## What should a finding teach us?

**A security finding should not end with a ticket. It should teach us something about the system that produced it.**

When offensive testing finds a problem, the reproduction steps tell us how the attack worked. We should also use them to understand why it was possible.

For the SQL injection, follow the value from where it entered the application to where it became part of a query. Where did we start trusting it? Was the mistake local, or does the same helper exist elsewhere?

For other findings, the questions change:

- A user accessed another user's record. Why could that endpoint skip the authorization check?
- A server fetched an attacker-chosen URL. Why could it reach sensitive internal services?
- A secret leaked. Why did one credential give access to so much?

These are things to investigate, not conclusions we can draw from the vulnerability name alone.

Technical debt often shows up here. Five copies of an old helper mean five places to fix. A service nobody maintains can leave a known problem unresolved. Inconsistent authorization code makes it harder to tell which checks are missing.

Record the cause alongside the severity. Otherwise, two findings with the same label may hide very different problems, while several different findings may point back to the same bad default.

## Ask these questions before the assessment

This is where threat modeling helps.

You do not need a large workshop for every change. You do need to stop and ask what the system is assuming, especially when a change introduces a new trust boundary or a new way to use existing data.

Who can supply this value? Where will it go next? Who can call this service? What can this identity access? What happens if the dependency is compromised?

Go back to the second-order injection. Looking only at the request handler may not reveal the problem. The dangerous use happens later, perhaps in a background job or a report.

What reads the stored value? Does it become SQL, HTML, a shell argument or something else? Each use has its own rules. Validating a value at the entry point does not replace handling it safely where it is used.

A diagram can help us follow that flow. But the useful part is the conversation and the engineering decisions it changes. Keep the assumptions with the design, and revisit them when the flow changes.

## How much does this matter here?

Understanding an attack does not automatically tell us how much to invest in preventing it.

Is this path reachable in our system? What access would an attacker need? Is that access realistic? What could they read, change or interrupt? Which controls already limit them?

A demonstrated attack gives us evidence. A technically credible path can also deserve attention before we see it exploited widely. But a list of everything that might theoretically go wrong is not a useful engineering plan.

We need to consider exposure, likelihood, attacker capability and impact. We also need to understand how effective a proposed mitigation would be, what it costs to introduce and maintain, and what risk would remain afterward.

Not every service needs the same controls. Not every finding justifies replacing a platform. Sometimes a local fix and a regression test are enough. Sometimes a repeated, widely reachable problem justifies changing a shared library and migrating its callers.

Suppose several services use the same unsafe helper. Patching each caller may be quicker today, but we will keep paying for reviews, fixes and retests while new code can still use it. Replacing the helper takes time too, including testing and migration. Compare that work with the repeated fixes and the exposure we leave in place. If we choose the shared fix, the work needs to include moving its callers, not just publishing a safer version.

If we defer a change, who is accepting the remaining risk? What would make us revisit that decision? The product team needs to understand the trade-off too, especially when a delivery deadline is part of it.

Real attacks provide evidence. Risk determines where engineering effort should go. After making the change, we still need to check whether it reduced that risk.

## Tools help, but they do not redesign the system

Static analysis, dynamic testing, dependency scanners and runtime analysis are useful. So are code review and, where they help, LLM-based reviewers.

They can find mistakes we would otherwise miss. They can also help us check whether an unsafe pattern is still present after a migration.

But a scanner finding raw SQL does not decide what database API the team should use. A report about missing authorization does not define which users should be allowed to access which records.

We still have to make those decisions, implement them and check that they work.

Buying another tool can improve detection. It does not automatically make the next unsafe change harder to write.

## Recurring findings are data

If the same vulnerability class keeps appearing, look at the findings together.

Are they using the same library? Copying the same example? Bypassing the same check? Did we fix the original problem but leave its callers using an older version?

Useful questions include:

- Which problems keep coming back across releases or services?
- Which fixes changed a shared component, and which only patched one caller?
- Are new services still starting with the unsafe default?
- How long does it take to get the safer version into the affected services?
- Are exceptions temporary, or have they quietly become permanent?

Counting findings alone will not answer these questions. A better assessment may find more vulnerabilities, even while the software is improving. Look at whether the same causes remain and whether the changes are reaching the code that needs them.

## Turn the lesson into a guardrail

For the second-order SQL injection, I would start by checking how database access is done across the application.

Where is raw SQL used? Is there a legitimate reason for it? Can values be passed separately? Are stored values treated differently from request values? Do the tests cover the later workflow, not just the initial write?

Depending on what we find, the change might be a safer helper, a check for a known dangerous pattern, or the removal of an old API. It might require a migration if several services depend on it.

Give that work an owner. Make the supported alternative available before asking everyone to move. If an exception is needed, make its limits clear.

Then retest the attack path. Add a regression test that follows the value through storage and reuse. Check other callers of the affected helper. A passing test for the patched endpoint is useful, but it does not prove that every copy of the problem is gone.

That is how an assessment can improve the next release as well as fix the current one.

## What happens when prevention fails?

Even with better defaults and tests, assume that something will eventually go wrong.

If SQL injection gives an attacker the application's database permissions, what do those permissions allow? Can that account only access the data the service needs, or can it read and modify everything?

If an application is compromised, can it reach every internal service? If one secret leaks, can we revoke it without taking the whole product down?

These questions are about limiting the damage. Least privilege, isolation and network boundaries can reduce how far a compromise spreads. Shorter-lived credentials and working revocation can reduce how long access lasts.

We also need to detect the abuse and recover. Would we notice unusual database access? Do we have enough logs to investigate it? Can we restore damaged data? Have we tested that recovery process?

Choose those controls according to the system and the risk. The goal is not to add every possible layer. It is to understand what remains possible if one layer fails, and whether we can live with the result.

## Stop fixing the same vulnerability forever

The second-order SQL injection was worth fixing. But the more useful question was why a well-understood vulnerability class was still possible in the first place.

How did it escape review? We should ask that. We should also ask why the engineering system was still able to create it so easily.

Fix the query. Then look at the library, the examples, the assumptions and the later uses of that data. Decide which changes are justified by the risk, and test whether they actually help.

We cannot make every mistake impossible. We can make familiar mistakes harder to repeat, and limit what happens when one gets through.

If every finding only creates another ticket, we are just getting better at running inside the hamster wheel.

---

### 📚 References
<a href="https://www.csmonitor.com/1999/1007/p18s2.html" target="_blank">Tom Regan, <em>Putting the Dancing Pigs in Their Cyber-Pen</em>, 1999</a>

<a href="https://www.cs.virginia.edu/~evans/cs551/saltzer/" target="_blank">Jerome H. Saltzer, Michael D. Schroeder, <em>The Protection of Information in Computer Systems</em>, 1975</a>

<a href="https://www.jstor.org/stable/10.7591/j.ctv1bxh5t3" target="_blank">Andrew J. Stewart, <em>A Vulnerable System: The History of Information Security in the Computer Age</em></a>

<a href="https://www.enisa.europa.eu/sites/default/files/2026-03/ENISA_Secure_By_Design_and_Default_Playbook_v0.4_draft_for_consultation.pdf" target="_blank">ENISA, <em>Secure by Design and Default Playbook</em></a>

</article>
