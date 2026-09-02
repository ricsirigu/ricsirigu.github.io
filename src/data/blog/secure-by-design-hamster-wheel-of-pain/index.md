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

A few weeks ago, during an assessment, the team found a second-order SQL injection.

It was not a sophisticated zero-day, a complex exploit chain, or an obscure edge case hidden behind ten layers of business logic. It was a SQL injection, in 2026: a vulnerability class that is almost thirty years old.

In a world where secure coding guidelines have existed for decades, frameworks provide safer abstractions, and security tooling is everywhere, we are still finding vulnerabilities that should have been structurally impossible.

That is the interesting part. Not the vulnerability itself, but what the vulnerability says about the system that produced it.

Because a second-order SQL injection is rarely just a developer mistake. It is a symptom. It tells us that <strong>unsafe data flows were possible, that architectural guardrails were weak or missing</strong>, and that the organization was <strong>relying on people to remember the right thing instead of designing the wrong thing out of the system</strong>.

This is the <strong>"hamster wheel of pain"</strong> described by Andrew J. Stewart in A Vulnerable System: The History of Information Security in the Computer Age: the endless cycle of finding vulnerabilities, applying patches, and waiting for the next weakness to appear.

For many organizations, security becomes a remediation hamster wheel. They scan, find, ticket, patch, and repeat. The organization keeps moving, but the system does not really improve. Each vulnerability gets treated as an isolated issue, while the design choices that made it possible remain untouched.

That cycle only changes when <strong>security moves into the design of the system itself</strong>, so entire classes of vulnerabilities become harder to create before they turn into another finding to chase.


<img src="hamster-wheel-of-pain.jpg" alt="Hamster wheel of pain">

We build software fast, discover security issues late, patch them, create tickets, add another checklist, run another scan, remind developers to be careful, and then the same class of issue appears again somewhere else.

It may be a different endpoint or a different team, but the failure mode is the same.

At that point, the problem is no longer the individual vulnerability. <strong>The problem is the operating model.</strong>

## Security Later Is Risk Externalization

Many organizations still treat security as a downstream control.

Design happens first, implementation follows, delivery pressure increases, security reviews happen late, findings are raised, exceptions are discussed, deadlines win, and risk is accepted, deferred, or moved somewhere else.

This is often described as a security maturity issue. I think it is more precise to call it <strong>risk externalization</strong>.

When security is treated as something that happens after design and implementation, engineering teams unintentionally externalize risk to other parts of the organization:

- AppSec has to find what the system allowed.
- QA has to catch what the architecture did not prevent.
- Operations has to monitor what should not have shipped.
- Incident response has to absorb what delivery pressure ignored.
- Customers eventually experience what the organization failed to design out.

<strong>The cost does not disappear; it moves.</strong> And when it moves far enough downstream, it becomes harder to see, harder to measure, and harder to fix structurally.

This is why many security programs feel busy but not effective. They generate findings, reports, dashboards, meetings, and remediation plans, while the organization continues to produce the same categories of risk.

That is not mainly a tooling problem. It is a <strong>design problem, and more specifically an engineering leadership failure</strong>.

## Recurring Vulnerabilities Are Management Signals

A single vulnerability can be a mistake, but <strong>a recurring vulnerability class is a signal</strong>.

If the same type of issue appears repeatedly across teams, products, services, or releases, the useful question is not:

> Who made this mistake?

The useful question is:

> <strong>Why does our engineering system keep making this mistake possible?</strong>

That changes the conversation.

A SQL injection is not only about parameterized queries. It is also about whether teams are allowed to build raw query patterns without safe abstractions, whether persistence layers are standardized or reinvented, whether data flow assumptions are reviewed at design time, whether secure defaults exist, whether <strong>developers have to know every dangerous edge case manually</strong>, and whether the platform makes the secure path the easiest path.

The same applies to other classes of vulnerabilities.

An IDOR is not only a missing authorization check. It may indicate that authorization is implemented inconsistently across services.

An XSS is not only poor output encoding. It may indicate that the frontend stack allows unsafe rendering patterns by default.

An SSRF is not only a bad URL fetch. It may indicate that internal network boundaries, metadata services, and outbound access controls were not designed with abuse cases in mind.

A secret in source code is not only developer negligence. It may indicate that secret management is painful, unclear, or badly integrated into the delivery workflow.

<strong>Recurring vulnerabilities are not random; they are feedback.</strong>

The question is whether leadership treats that feedback as a ticket queue or as evidence that the engineering system needs to change.

## The Real Failure Is Not Detection

Most organizations are not blind. They have scanners, pentests, code reviews, security champions, ticketing systems, and dashboards.

The problem is not that vulnerabilities are impossible to find. The problem is that <strong>many vulnerabilities are still cheap to create and expensive to remove</strong>.

That asymmetry is what keeps the wheel spinning.

If a developer can introduce an unsafe pattern in five minutes, but the organization needs a pentest, a report, a triage meeting, a risk rating, a remediation ticket, a sprint negotiation, a retest, and an exception process to remove it, the system is economically broken.

The insecure path is too easy and the secure path is too dependent on memory, discipline, and manual review.

Any security model that depends on everyone always remembering everything is not a model. It is hope, and <strong>hope does not scale</strong>.

## Secure by Design Is Not a Slogan

Secure by Design is often reduced to a nice principle:

> Build security in from the beginning.

That is true, but it is too weak for engineering leadership. Secure by Design should mean something more concrete:

> The organization designs its products, platforms, workflows, and incentives so that common classes of vulnerabilities become difficult to introduce, easy to detect early, and structurally unlikely to recur.

This is not only about code; it is about how engineering is organized.

It is about which patterns are approved, which abstractions are provided, which risks are owned by product teams, which architectural decisions are reviewed, which security controls are embedded into the platform, which exceptions are tolerated, which trade-offs are visible to leadership, and which recurring findings trigger systemic remediation instead of local patches.

<strong>Secure by Design is not just a security initiative. It is an engineering operating model.</strong>

## The Developer Is Not the Control

A common anti-pattern is to make <strong>the developer the primary security control</strong>.

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

All of this matters, but if every team has to manually remember every rule, every time, in every codebase, under delivery pressure, the organization has already accepted a high failure rate.

Training, awareness, security champions, and documentation all help. They remain weak controls, though, if the platform still allows unsafe choices to be the fastest choices.

Leadership should not build a system that requires developers to be perfect. It should reduce the number of situations where perfection is required.

This is where secure defaults, paved roads, internal platforms, reusable libraries, golden paths, reference architectures, policy-as-code, and automated guardrails matter.

Not because developers do not care, but because <strong>caring is not a control</strong>.

## The Secure Path Must Be the Easy Path

If the insecure way is faster, someone will use it.

The reason is not carelessness; it is an incentive system that makes the insecure path attractive.

This is one of the most important leadership lessons in application security.

You can tell teams that security is important, publish standards, create policies, run training, ask for threat models, and require reviews.

But if the delivery system rewards speed, local autonomy, and short-term output while security requires extra work, extra approvals, unclear ownership, and manual interpretation, the outcome is predictable.

Security rarely loses through one explicit decision. It loses quietly through small compromises: a shortcut here, an exception there, a temporary workaround, a duplicated pattern, a legacy helper reused because it was available, a review skipped because the release was urgent.

This is how organizations accumulate security debt, not dramatically but gradually.

Then one day they discover that their security program is mostly a remediation engine.

## Technical Debt Is Security Debt

<strong>Technical debt and security debt are often treated as separate categories</strong>, even though they are tightly connected.

Complex systems are harder to secure. Inconsistent architectures are harder to reason about. Duplicated patterns are harder to fix. Unclear ownership makes remediation slower. Legacy components become places where risk hides. Unmaintained abstractions become institutionalized vulnerabilities.

A vulnerability is often just the visible part of a deeper engineering quality problem.

This is why <strong>security findings should not only be classified by severity. They should also be classified by cause.</strong>

Was this a coding mistake, a design flaw, a missing platform capability, a weak default, a documentation gap, a broken ownership model, a deadline-driven exception, a legacy dependency, or a missing architectural standard?

Without this classification, the organization cannot really learn; it can only patch.

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

These questions are useful precisely because they are uncomfortable.

They move the conversation away from individual blame and toward system design.

A Director does not need more vulnerability noise disguised as visibility. They need to understand <strong>whether the organization is becoming better at not producing the same risk again</strong>.

## Findings Should Create Guardrails

<strong>A finding should not die inside a ticket.</strong>

If a vulnerability is fixed only in the affected component, the organization has removed one instance of the problem, not the condition that allowed it to exist.

That is the difference between <strong>remediation and improvement</strong>.

Remediation asks:

> How do we fix this vulnerability?

Improvement asks:

> How do we make this class of vulnerability less likely across the organization?

The second question is where Secure by Design becomes real.

A second-order SQL injection should not only trigger a code fix. It should trigger questions like:

- Do we have approved database access patterns?
- Are raw queries allowed?
- Where are they allowed?
- Are query builders and ORMs configured safely by default?
- Can dangerous patterns be detected automatically?
- Do code review guidelines cover stored data reuse?
- Are data flows modeled across trust boundaries?
- Do teams understand where input becomes trusted by accident?
- Can the platform prevent this class of issue instead of asking every team to remember it?

The answer may be a library, a framework change, a secure-by-default template, a policy-as-code rule, an architecture review requirement, a deprecation plan, or a migration away from unsafe legacy patterns.

The right answer depends on the organization, but the principle is always the same. <strong>Do not only fix the wound; remove the sharp edge.</strong>

## Threat Modeling Is Not a Workshop

Many organizations say they do threat modeling.

In practice, that often means an occasional workshop, a diagram, a list of risks, and a document that becomes outdated shortly after the meeting. That is not enough.

<strong>Threat modeling should be part of how engineering thinks about design decisions.</strong> It should work less like a ceremony and more like a feedback mechanism.

When a team introduces a new trust boundary, changes authentication flows, exposes internal services, adds asynchronous processing, stores user-controlled data, or integrates with third-party systems, security assumptions should be explicit.

What can cross this boundary? Who can call this service? What data is trusted? What data is only stored but later executed, rendered, queried, or interpreted? What happens if this dependency is compromised? What is the abuse case? What is the failure mode?

A second-order SQL injection is a perfect example of why this matters.

The dangerous input is not always dangerous at the point of entry. Sometimes it becomes dangerous later, in another workflow, another component, another query, or under another assumption.

Secure design requires <strong>understanding data over time</strong>, not only validating input at the edge.

## Tools Help, But They Do Not Own the Problem

Modern security tooling helps. SAST, DAST, SCA, IAST, and LLM-based reviewers can improve detection, visibility, and analysis.

But tools do not own architecture, define incentives, decide whether raw SQL is allowed, standardize authorization, remove unsafe legacy abstractions, or ensure that product teams understand risk.

<strong>Tools can detect symptoms, but they cannot redesign the system that creates them.</strong>

This is why organizations can buy more tools and still stay on the wheel.

Detection improves, dashboards improve, and findings increase, while the production of risk continues.

<strong>At some point, adding another scanner becomes easier than changing the engineering model. That is the trap.</strong>

## Secure by Design Requires Operating Capabilities

For <strong>Secure by Design to become real</strong>, an organization needs at least four capabilities.

### 1. Engineering Guardrails

Teams need <strong>safe building blocks</strong>.

Secure defaults, approved patterns, reusable libraries, standardized authentication and authorization, safe database access, secret management that is easy to use, infrastructure templates that encode baseline controls, and CI/CD checks that prevent known dangerous patterns.

The goal is not to slow teams down, but to make <strong>the secure path faster than the insecure one</strong>.

### 2. Architectural Accountability

<strong>Security-relevant design decisions need ownership.</strong>

Not every decision requires a board. Important decisions should still be visible, reviewed, and traceable.

Who owns this trust boundary? Who owns this authorization model? Who accepted this exception? Who is responsible for removing this legacy pattern? Who decides whether this risk is acceptable?

Without ownership, risk becomes ambient: everyone is aware of it, but no one owns it.

### 3. Product Risk Ownership

<strong>Security risk cannot live only inside the security team.</strong>

If a product decision creates risk, that risk must be visible in product planning.

If a deadline requires accepting a security exception, that exception should be understood as a business decision, not hidden as an engineering detail.

If a feature introduces sensitive data flows, abuse cases should be part of the design conversation.

Security should not be an external reviewer standing at the end of the process; it should be part of how product and engineering make decisions.

### 4. Feedback Loops

<strong>Every recurring vulnerability class should create organizational learning.</strong>

That learning should not stop at a ticket. It should become a lesson, a pattern, a guardrail, a platform improvement, a standard, a migration plan, or a better default.

If the same issue appears again and again, the feedback loop is broken.

The organization is receiving information without changing behavior.

That is one of the clearest signs that the security program is operating downstream.

## The Director-Level Question

The most useful question is not:

> Are we finding vulnerabilities?

Of course we are.

The better question is:

> <strong>Are we reducing the organization’s ability to create the same vulnerabilities again?</strong>

That is the difference between activity and progress.

A security program can be very active and still leave the system unchanged, producing findings, reports, remediations, meetings, and dashboards without reducing the underlying pattern.

But if the same classes of vulnerabilities continue to appear, the organization is not learning fast enough.

Secure by Design is the discipline of <strong>turning that learning into engineering structure</strong>, not slogans, awareness campaigns, or another checklist.

## Final Thought

The second-order SQL injection we found was not interesting because SQL injection is new.

It was interesting because <strong>SQL injection should have been boring enough to be structurally prevented</strong>.

That, for me, is the real lesson.

Mature organizations should not only ask how a vulnerability passed through review. They should ask <strong>why the design allowed that class of vulnerability to exist in the first place</strong>.

The hamster wheel does not stop when we get better at finding issues. It stops when we get better at <strong>making entire classes of issues harder to create</strong>.

Secure by Design is not about asking everyone to care more. It is about <strong>designing an engineering system where secure behavior is supported by defaults, guardrails, ownership, and feedback loops</strong>.

Otherwise, we are not building secure software; we are just running faster inside the wheel.

---

### 📚 References
<a href="https://www.csmonitor.com/1999/1007/p18s2.html" target="_blank">Tom Regan, <em>Putting the Dancing Pigs in Their Cyber-Pen</em>, 1999</a>

<a href="https://www.cs.virginia.edu/~evans/cs551/saltzer/" target="_blank">Jerome H. Saltzer, Michael D. Schroeder, <em>The Protection of Information in Computer Systems</em>, 1975</a>

<a href="https://www.jstor.org/stable/10.7591/j.ctv1bxh5t3" target="_blank">Andrew J. Stewart, <em>A Vulnerable System: The History of Information Security in the Computer Age</em></a>

<a href="https://www.enisa.europa.eu/sites/default/files/2026-03/ENISA_Secure_By_Design_and_Default_Playbook_v0.4_draft_for_consultation.pdf" target="_blank">ENISA, <em>Secure by Design and Default Playbook</em></a>

## 👋 Let’s Connect

If you found this post helpful, or if you want to chat more about this or anything at the intersection of development and security — I’d love to hear from you.

Feel free to reach out on <a href="https://www.linkedin.com/in/riccardosirigu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.

Always happy to connect with fellow developers, researchers, and security-minded folks.

Stay curious, stay secure. 🔒🚀

</article>
