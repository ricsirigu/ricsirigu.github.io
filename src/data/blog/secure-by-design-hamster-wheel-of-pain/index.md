---
category: 'blog'
cover: './cover.jpg'
title: 'Secure by Design: Escaping the Hamster Wheel of Pain'
description: 'Recurring vulnerabilities are not engineering accidents. They are management signals.'
date: '2026-05-03'
tags: ['cybersecurity', 'Security Architecture', 'security by design']
published: true
---

<article class="prose lg:prose-lg xl:prose-lg">


# Secure by Design: The Hamster Wheel of Pain

A few weeks ago, during an assessment, we found a second-order SQL injection.

Not a sophisticated zero-day.

Not a complex exploit chain.

Not an obscure edge case hidden behind ten layers of business logic.

A SQL injection.

In 2026.

In a world where secure coding guidelines have existed for decades, frameworks provide safer abstractions, and security tooling is everywhere, we are still finding vulnerabilities that should have been structurally impossible.

That is the interesting part.

Not the vulnerability itself.

The interesting part is what the vulnerability says about the system that produced it.

Because a second-order SQL injection is rarely just a developer mistake. It is a symptom. It tells us that unsafe data flows were possible, that architectural guardrails were weak or missing, and that the organization was relying on people to remember the right thing instead of designing the wrong thing out of the system.

This is the hamster wheel of pain.

<img src="hamster-wheel-of-pain.jpg" alt="Hamster wheel of pain">

We build software fast.  
We discover security issues late.  
We patch them.  
We create tickets.  
We add another checklist.  
We run another scan.  
We remind developers to be careful.  
Then the same class of issue appears again, somewhere else.

Different endpoint.  
Different team.  
Same failure mode.

At that point, the problem is no longer the individual vulnerability.

The problem is the operating model.

## Security Later Is Risk Externalization

Many organizations still treat security as a downstream control.

Design happens first.  
Implementation follows.  
Delivery pressure increases.  
Security reviews happen late.  
Findings are raised.  
Exceptions are discussed.  
Deadlines win.  
Risk is accepted, deferred, or moved somewhere else.

This is often described as a security maturity issue.

I think it is more precise to call it risk externalization.

When security is treated as something that happens after design and implementation, engineering teams unintentionally externalize risk to other parts of the organization:

- AppSec has to find what the system allowed.
- QA has to catch what the architecture did not prevent.
- Operations has to monitor what should not have shipped.
- Incident response has to absorb what delivery pressure ignored.
- Customers eventually experience what the organization failed to design out.

The cost does not disappear.

It just moves.

And when cost moves far enough downstream, it becomes harder to see, harder to measure, and harder to fix structurally.

This is why many security programs feel busy but not effective. They generate findings, reports, dashboards, meetings, and remediation plans, but the organization continues to produce the same categories of risk.

That is not a tooling problem.

That is a design problem.

More specifically, it is an engineering leadership failure.

## Recurring Vulnerabilities Are Management Signals

A single vulnerability can be a mistake.

A recurring vulnerability class is a signal.

If the same type of issue appears repeatedly across teams, products, services, or releases, the useful question is not:

> Who made this mistake?

The useful question is:

> Why does our engineering system keep making this mistake possible?

That changes the conversation.

A SQL injection is not only about parameterized queries.

It is also about whether teams are allowed to build raw query patterns without safe abstractions.  
It is about whether persistence layers are standardized or reinvented.  
It is about whether data flow assumptions are reviewed at design time.  
It is about whether secure defaults exist.  
It is about whether developers have to know every dangerous edge case manually.  
It is about whether the platform makes the secure path the easiest path.

The same applies to other classes of vulnerabilities.

An IDOR is not only a missing authorization check. It may indicate that authorization is implemented inconsistently across services.

An XSS is not only poor output encoding. It may indicate that the frontend stack allows unsafe rendering patterns by default.

An SSRF is not only a bad URL fetch. It may indicate that internal network boundaries, metadata services, and outbound access controls were not designed with abuse cases in mind.

A secret in source code is not only developer negligence. It may indicate that secret management is painful, unclear, or badly integrated into the delivery workflow.

Recurring vulnerabilities are not random.

They are feedback.

The question is whether leadership treats that feedback as a ticket queue or as evidence that the engineering system needs to change.

## The Real Failure Is Not Detection

Most organizations are not blind.

They have scanners.  
They have pentests.  
They have code reviews.  
They have security champions.  
They have ticketing systems.  
They have dashboards.

The problem is not that vulnerabilities are impossible to find.

The problem is that many vulnerabilities are still cheap to create and expensive to remove.

That asymmetry is what keeps the wheel spinning.

If a developer can introduce an unsafe pattern in five minutes, but the organization needs a pentest, a report, a triage meeting, a risk rating, a remediation ticket, a sprint negotiation, a retest, and an exception process to remove it, the system is economically broken.

The insecure path is too easy.

The secure path is too dependent on memory, discipline, and manual review.

And any security model that depends on everyone always remembering everything is not a model.

It is hope.

Hope does not scale.

## Secure by Design Is Not a Slogan

Secure by Design is often reduced to a nice principle:

> Build security in from the beginning.

That is true, but too weak.

For engineering leadership, Secure by Design should mean something more concrete:

> The organization designs its products, platforms, workflows, and incentives so that common classes of vulnerabilities become difficult to introduce, easy to detect early, and structurally unlikely to recur.

This is not only about code.

It is about how engineering is organized.

It is about which patterns are approved.  
Which abstractions are provided.  
Which risks are owned by product teams.  
Which architectural decisions are reviewed.  
Which security controls are embedded into the platform.  
Which exceptions are tolerated.  
Which trade-offs are visible to leadership.  
Which recurring findings trigger systemic remediation instead of local patches.

Secure by Design is not a security initiative.

It is an engineering operating model.

## The Developer Is Not the Control

A common anti-pattern is to make the developer the primary security control.

We tell developers:

- validate input;
- encode output;
- use parameterized queries;
- check authorization;
- avoid unsafe deserialization;
- protect secrets;
- configure headers correctly;
- understand OAuth flows;
- avoid SSRF patterns;
- write secure infrastructure code;
- keep dependencies updated;
- think like an attacker.

All of this matters.

But if every team has to manually remember every rule, every time, in every codebase, under delivery pressure, the organization has already accepted a high failure rate.

Training helps.  
Awareness helps.  
Security champions help.  
Documentation helps.

But they are weak controls if the platform still allows unsafe choices to be the fastest choices.

The job of leadership is not to build a system that requires developers to be perfect.

The job of leadership is to reduce the number of situations where perfection is required.

This is where secure defaults matter.

This is where paved roads matter.

This is where internal platforms matter.

This is where reusable libraries, golden paths, reference architectures, policy-as-code, and automated guardrails matter.

Not because developers do not care.

But because caring is not a control.

## The Secure Path Must Be the Easy Path

If the insecure way is faster, someone will use it.

Not because they are careless.

Because the organization has designed incentives that make the insecure path attractive.

This is one of the most important leadership lessons in application security.

You can tell teams that security is important.  
You can publish standards.  
You can create policies.  
You can run training.  
You can ask for threat models.  
You can require reviews.

But if the delivery system rewards speed, local autonomy, and short-term output while security requires extra work, extra approvals, unclear ownership, and manual interpretation, the outcome is predictable.

Security does not usually lose in one explicit decision.

It loses quietly.

A shortcut here.  
An exception there.  
A temporary workaround.  
A duplicated pattern.  
A legacy helper reused because it was available.  
A review skipped because the release was urgent.

This is how organizations accumulate security debt.

Not dramatically.

Gradually.

Then one day they discover that their security program is mostly a remediation engine.

## Technical Debt Is Security Debt

Technical debt and security debt are often treated as separate categories.

They are not.

Complex systems are harder to secure.  
Inconsistent architectures are harder to reason about.  
Duplicated patterns are harder to fix.  
Unclear ownership makes remediation slower.  
Legacy components become places where risk hides.  
Unmaintained abstractions become institutionalized vulnerabilities.

A vulnerability is often just the visible part of a deeper engineering quality problem.

This is why security findings should not only be classified by severity.

They should also be classified by cause.

Was this a coding mistake?  
A design flaw?  
A missing platform capability?  
A weak default?  
A documentation gap?  
A broken ownership model?  
A deadline-driven exception?  
A legacy dependency?  
A missing architectural standard?

Without this classification, the organization cannot learn.

It can only patch.

And patching without learning is how the hamster wheel keeps turning.

## What Directors Should Measure

If Secure by Design is an operating model, then leadership needs different questions.

Not only:

> How many critical vulnerabilities do we have?

But also:

> Which vulnerability classes keep recurring?

> How many findings are caused by design flaws rather than implementation mistakes?

> How many issues are fixed locally versus eliminated structurally?

> How long does it take to turn a recurring finding into a platform-level guardrail?

> Which secure patterns are still optional?

> Which unsafe patterns are still technically possible?

> How many security exceptions are accepted because of delivery timelines?

These questions are uncomfortable.

That is why they are useful.

They move the conversation away from individual blame and toward system design.

A Director does not need more vulnerability noise disguised as visibility.

A Director needs to understand whether the organization is becoming better at not producing the same risk again.

## Findings Should Create Guardrails

A finding should not die inside a ticket.

If a vulnerability is fixed only in the affected component, the organization has removed one instance of the problem.

Not the problem.

This is the key difference between remediation and improvement.

Remediation asks:

> How do we fix this vulnerability?

Improvement asks:

> How do we make this class of vulnerability less likely across the organization?

That second question is where Secure by Design becomes real.

A second-order SQL injection should not only trigger a code fix.

It should trigger questions like:

- Do we have approved database access patterns?
- Are raw queries allowed?
- Where are they allowed?
- Are query builders and ORMs configured safely by default?
- Can dangerous patterns be detected automatically?
- Do code review guidelines cover stored data reuse?
- Are data flows modeled across trust boundaries?
- Do teams understand where input becomes trusted by accident?
- Can the platform prevent this class of issue instead of asking every team to remember it?

The answer may be a library.

Or a framework change.

Or a secure-by-default template.

Or a policy-as-code rule.

Or an architecture review requirement.

Or a deprecation plan.

Or a migration away from unsafe legacy patterns.

The right answer depends on the organization.

But the principle is always the same:

Do not only fix the wound.

Remove the sharp edge.

## Threat Modeling Is Not a Workshop

Many organizations say they do threat modeling.

In practice, that often means an occasional workshop, a diagram, a list of risks, and a document that becomes outdated shortly after the meeting.

That is not enough.

Threat modeling should be part of how engineering thinks about design decisions.

Not as ceremony.

As a feedback mechanism.

When a team introduces a new trust boundary, changes authentication flows, exposes internal services, adds asynchronous processing, stores user-controlled data, or integrates with third-party systems, security assumptions should be explicit.

What can cross this boundary?  
Who can call this service?  
What data is trusted?  
What data is only stored but later executed, rendered, queried, or interpreted?  
What happens if this dependency is compromised?  
What is the abuse case?  
What is the failure mode?

A second-order SQL injection is a perfect example of why this matters.

The dangerous input is not always dangerous at the point of entry.

Sometimes it becomes dangerous later.

In another workflow.  
In another component.  
In another query.  
Under another assumption.

This is why secure design requires understanding data over time, not only validating input at the edge.

## Tools Help, But They Do Not Own the Problem

Modern security tooling helps. SAST, DAST, SCA, IAST, and LLM-based reviewers can improve detection, visibility, and analysis.

But tools do not own architecture.

Tools do not define incentives.

Tools do not decide whether raw SQL is allowed.

Tools do not standardize authorization.

Tools do not remove unsafe legacy abstractions.

Tools do not ensure that product teams understand risk.

Tools can detect symptoms.

They cannot, by themselves, redesign the system that creates them.

This is why organizations can buy more tools and still stay on the wheel.

Detection improves.

Dashboards improve.

Findings increase.

But the production of risk continues.

At some point, adding another scanner becomes easier than changing the engineering model.

That is the trap.

## Secure by Design Requires Operating Capabilities

For Secure by Design to become real, an organization needs at least four capabilities.

### 1. Engineering Guardrails

Teams need safe building blocks.

Secure defaults.  
Approved patterns.  
Reusable libraries.  
Standardized authentication and authorization.  
Safe database access.  
Secret management that is easy to use.  
Infrastructure templates that encode baseline controls.  
CI/CD checks that prevent known dangerous patterns.

The goal is not to slow teams down.

The goal is to make the secure path faster than the insecure one.

### 2. Architectural Accountability

Security-relevant design decisions need ownership.

Not every decision requires a board.

But important decisions should be visible, reviewed, and traceable.

Who owns this trust boundary?  
Who owns this authorization model?  
Who accepted this exception?  
Who is responsible for removing this legacy pattern?  
Who decides whether this risk is acceptable?

Without ownership, risk becomes ambient.

Everyone is aware of it.

No one owns it.

### 3. Product Risk Ownership

Security risk cannot live only inside the security team.

If a product decision creates risk, that risk must be visible in product planning.

If a deadline requires accepting a security exception, that exception should be understood as a business decision, not hidden as an engineering detail.

If a feature introduces sensitive data flows, abuse cases should be part of the design conversation.

Security should not be an external reviewer standing at the end of the process.

It should be part of how product and engineering make decisions.

### 4. Feedback Loops

Every recurring vulnerability class should create organizational learning.

Not only a ticket.

A lesson.  
A pattern.  
A guardrail.  
A platform improvement.  
A standard.  
A migration plan.  
A better default.

If the same issue appears again and again, the feedback loop is broken.

The organization is receiving information but not changing behavior.

That is one of the clearest signs that the security program is operating downstream.

## The Director-Level Question

The most useful question is not:

> Are we finding vulnerabilities?

Of course we are.

The better question is:

> Are we reducing the organization’s ability to create the same vulnerabilities again?

That is the difference between activity and progress.

A security program can be very active and still not change the system.

Many findings.  
Many reports.  
Many remediations.  
Many meetings.  
Many dashboards.

But if the same classes of vulnerabilities continue to appear, the organization is not learning fast enough.

Secure by Design is the discipline of turning that learning into engineering structure.

Not slogans.

Not awareness.

Not another checklist.

Structure.

## Final Thought

The second-order SQL injection we found was not interesting because SQL injection is new.

It was interesting because SQL injection should have been boring enough to be structurally prevented.

That is the real lesson.

Mature organizations should not only ask how a vulnerability passed through review.

They should ask why the design allowed that class of vulnerability to exist in the first place.

Because the hamster wheel does not stop when we get better at finding issues.

It stops when we get better at making entire classes of issues harder to create.

Secure by Design is not about asking everyone to care more.

It is about designing an engineering system where secure behavior is supported by defaults, guardrails, ownership, and feedback loops.

Otherwise, we are not building secure software.

We are just running faster inside the wheel.

---

### 📚 References
[ Tom Regan, *Putting the Dancing Pigs in Their Cyber-Pen*, 1999](https://www.csmonitor.com/1999/1007/p18s2.html)

[Jerome H. Saltzer, Michael D. Schroeder, *The Protection of Information in Computer Systems*, 1975](https://www.cs.virginia.edu/~evans/cs551/saltzer/)

[Andrew J. Stewart, *A Vulnerable System: The History of Information Security in the Computer Age*](https://www.jstor.org/stable/10.7591/j.ctv1bxh5t3)

[ENISA, *Secure by Design and Default Playbook*](https://www.enisa.europa.eu/sites/default/files/2026-03/ENISA_Secure_By_Design_and_Default_Playbook_v0.4_draft_for_consultation.pdf)

## 👋 Let’s Connect

If you found this post helpful, or if you want to chat more about this or anything at the intersection of development and security — I’d love to hear from you.

Feel free to reach out on <a href="https://www.linkedin.com/in/riccardosirigu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

Always happy to connect with fellow developers, researchers, and security-minded folks.

Stay curious. Stay secure. 🔒🚀