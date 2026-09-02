---
category: 'blog'
cover: './cover.jpg'
title: 'Cyber Resilience Act Compliance: 10 Misconceptions Companies Should Avoid'
seoTitle: 'Cyber Resilience Act: 10 Compliance Misconceptions'
description: 'Ten common Cyber Resilience Act compliance misconceptions that manufacturers and software vendors should address before CRA deadlines.'
date: '2026-04-27'
tags: ['cybersecurity', 'cra', 'compliance']
published: true
---

<article class="prose lg:prose-lg xl:prose-lg">

The Cyber Resilience Act is already creating confusion among manufacturers, software vendors, and companies placing products with digital elements on the EU market.

In this post, I collect ten common misconceptions I often hear during consultancy work on CRA compliance, from the scope of application to risk assessment, incident reporting, third-party components, open-source software, and substantial modifications.

This article is based on my interpretation of the Regulation, the European Commission guidance, and the official FAQ. It is not legal advice.

### 🤔 Who this article is for:

This article is especially relevant for manufacturers, software vendors, embedded system developers, product security teams, compliance teams, and companies placing products with digital elements on the EU market.

### 🧭 What you’ll find in this post:

- When does the Cyber Resilience Act apply?
- Does the CRA apply to products without internet connectivity?
- Is Annex I enough to demonstrate CRA compliance?
- Does having a bootloader make a product Class I?
- Can you demonstrate conformity without harmonised standards?
- When do CRA incident reporting obligations apply?
- Are manufacturers responsible for third-party components?
- What counts as a substantial modification under the CRA?
- Why CRA compliance starts from risk assessment
- Who is responsible for open-source components under the CRA?
---

## CRA Misconception #1: The CRA does not apply to simple connected products
But my product is just a simple on/off switch, the CRA does not apply! 😡

That may not be true.

Let’s remember that the Cyber Resilience Act applies to any “Product with Digital Elements” (PDE), meaning hardware or software whose intended purpose or reasonably foreseeable use includes a **data connection**, whether logical or physical, direct or indirect, to a device or to a network.

If behind the on/off command there is a protocol that goes beyond simply sending a 0 for off or a 1 for on, meaning some form of encoding useful for communication between source and destination, then we are dealing with a data connection and your product may potentially fall under the CRA obligations.

And if we think about it, it makes sense. Software weaknesses that often turn into vulnerabilities are very often found in inputs and parsing functions.
You can find more details in the guidance published by the European Commission.

---

## CRA Misconception #2: Products without internet connectivity are out of scope
My product does not connect to the internet, so I do not care about the Cyber Resilience Act 🥱

Spoiler: probably not 🙅🏻‍♂️
Let’s remember that the CRA applies to any “Product with Digital Elements”, meaning hardware or software whose intended purpose or **reasonably foreseeable** use includes a **data connection**, whether logical or physical, direct or indirect, to a **device or to a network**.

Translation: you do not need “the internet” to fall within the scope.
If your product includes a data connection, as explained in yesterday’s post, and connects to another device, your product may very well fall within the scope of the CRA.

---

## CRA Misconception #3: Annex I controls alone are enough for CRA compliance
If I implement all the security controls listed in Annex I of the Regulation, my product is compliant ✅

For this post, let’s set aside one fundamental point: **everything MUST be based on a risk assessment**, which will become part of the technical documentation to be kept for at least 10 years.

The point is another one: Annex I does not only introduce technical requirements to be implemented in the product, but also **requirements that directly concern development processes.**
In fact, the Regulation states:
“Products with digital elements shall be designed, developed and produced in such a way that they ensure an appropriate level of cybersecurity based on the risks.”

To address this single requirement, an entire standard is currently being developed: EN 40000-1-2.
This is the real paradigm shift: acting on the root cause of many vulnerabilities, namely the poor quality of software in recent years.

To quote Bruce Schneier: *“No industry in the past 150 years has improved safety or security without being forced to by the government. Planes, cars, pharmaceuticals, food safety — all of them.”*

In other words, no industry has truly improved safety, security, and quality in a structural way without regulatory pressure. It is not a technical issue, but an economic one.

The CRA is exactly this: a regulatory lever to structurally reduce vulnerabilities in products with digital elements, starting from development processes.

But there is a “but”.

If a product implements all the applicable cybersecurity requirements listed in Annex I, Part I, point (2), and the cybersecurity risk assessment shows that there are no uncovered risks, then the security-by-design requirement may be considered fulfilled.

So the real question is not:

“Have we implemented Annex I controls?”

The real question is:

“Can we demonstrate, through our risk assessment and development processes, that those controls are appropriate and sufficient for this product?”

That is where CRA compliance really begins.

---
## CRA Misconception #4: Having a bootloader makes the product Class I.
My product has a bootloader, so it falls under important products Class I.

This is another solid no 🙅‍♂️

For classification purposes, what matters is the **core functionality**, meaning the main technical characteristics and capabilities without which the product would not be able to perform its intended purpose.

A bootloader is a component that many products integrate. But integrating a component classified as important **does not make the product with digital elements that contains it important.**

It is the difference between **BEING** a bootloader and **HAVING** one.
Only in the first case does Class I apply.

The European Commission says it clearly in the guidance: *“the mere integration of an important or critical product does not in itself render the product an important or critical product.”*

---
## CRA Misconception #5: You cannot demonstrate compliance without harmonised standards
Until the harmonised standards are published, I cannot demonstrate conformity.

You already know the answer 🙅‍♂️

And waiting around until the harmonised standards are published is not a wise choice.
Harmonised standards are indeed an extremely useful tool to demonstrate conformity with the Cyber Resilience Act, but **they are not the only way to do it**.

They are tools that **FACILITATE** the presumption of conformity. They are **not mandatory**.
Manufacturers remain free to use other means to demonstrate that their product meets the essential cybersecurity requirements set out in Annex I.

However, pay attention: for important products Class I, if a harmonised standard has not been applied, it becomes mandatory to use Module B+C, meaning a conformity assessment involving a notified body.

There will be more work to do on the technical documentation and stronger justifications will be needed. But it is an effort that pays off, because it is much better to do it now than to arrive at the last minute and have to rush to fix, or build from scratch, the documentation needed to use the harmonised standards.

---
## CRA Misconception #6: No awareness means no incident notification
If I am not aware of incidents or vulnerabilities, I do not have to notify anything!

I really wish I had not heard this one, but at least it gave me useful material for this series of posts 😅

This is deeply false.

Let’s start from the assumption that, under the Cyber Resilience Act, **you need to BE aware of incidents and vulnerabilities affecting your products** with digital elements.

If you close your eyes and ears, you cannot then hide behind the fact that you “did not know”, especially in light of Article 14, which regulates the notification obligations for incidents and actively exploited vulnerabilities that the manufacturer becomes aware of in its products with digital elements.

And just to add a bit more spice to the matter, remember that Article 14 is not even something far away in time, because the reporting obligations already start on 11 September 2026.

---
## CRA Misconception #7: Third party components are outside my responsibility
I am only responsible for my product, not for the third-party components I integrate.

As if a restaurant were not responsible for the ingredients it puts on the plate.

Third-party components do not magically disappear just because someone else developed them. If you integrate them into your product, they enter the product’s conformity perimeter. And the responsibility to assess their impact does not vanish.

The guidance, at point 154, clarifies that due diligence specifically concerns third-party hardware and software components that form part of the product.
This means that the **manufacturer must take appropriate measures to ensure that those components do not compromise the product’s conformity with the essential cybersecurity requirements**, verifying this in a way that is **proportionate to the risk**.

In other words: “it is not mine” is not an excuse.

---
## CRA Misconception #8: Only large changes matter under the CRA
It is the size of the change that makes the difference.

No. Under the Cyber Resilience Act, the assessment does not depend on the size or complexity of the change, but on its impact on the product’s risk profile.
Since the CRA is **based on risk** and on the intended purpose of each product with digital elements, this statement too is too extreme to be correct.
The deciding factor is the concept of **substantial modification**.

A substantial modification means any modification that affects conformity with the essential cybersecurity requirements listed in Part I of Annex I of the Regulation, or that results in a change to the intended purpose for which the product was assessed.

From the Commission guidelines, we can read that **if the change alters the level of cybersecurity risk** and that change or additional risk had **not been considered in the initial risk assessment** (§97), or if the product introduces **new functionalities that modify the intended purpose** of the product as a whole (§98), then the product must be considered substantially modified.

In that case, a new assessment is mandatory.

It is worth highlighting one particularly counterintuitive point (§100): the assessment is not **based on** the complexity or size of the modification, but on **its impact on the product’s risk profile**.

Every case is different, but if in your risk assessment you had not considered the risk arising from the introduction of an `/admin` API, new attack vectors, unauthorised access to administrative functions, or privilege escalation, that apparently minor change could already qualify as a substantial modification.

Not because of its complexity, but because of the risk it introduces.

---
## CRA Misconception #9: A Component can be declared secure without context
I secure the component and I am good to go.

This is one I hear very often.

Sometimes I am asked whether a component “is secure” for CRA purposes, when in reality the foundations are missing. 

**How can I understand whether a component is secure, or even secure enough?**

What should I do, recommend that you spend an infinite budget to make it as secure as possible?

Unfortunately, it does not work like that.

You **cannot secure a component if you do not know which threats you want to defend against** and which assets you need to protect.

Before the technical choice, the security measures, or the applicable requirements, the questions I always ask are these:
- What product are we talking about?
- Who is it intended for?
- In which environment is it supposed to operate?
- What is its intended purpose?
And above all: **which threats are we defending it against?**

Because the **same component, placed in different products**, or even in the same product but in different contexts of use, can have a **completely different risk profile**.
One thing is a component embedded in a smart toothbrush. Another thing is the same component embedded in a system connected to critical infrastructure.
And if you have not clarified the context, the assets to protect, and the threats you want to defend against, you cannot yet talk about security or CRA compliance.

And that is exactly why the risk assessment is step ZERO.

The risk assessment is what makes the question meaningful, because every decision must be **PROPORTIONATE** to the risk.

---
## CRA Misconception #10: Open source components shifts responsibility to the maintainer
If I integrate an open-source component, the responsibility lies with the steward, not with me!

This is one of those mental shortcuts that crashes into common sense at 127 km/h.

The answer is still no.

If you integrate an open-source component into your commercial product, responsibility for the security of the final product **does not magically shift to the steward or maintainer** of the project.
As already seen in CRA Misconception #7, the **legal responsibility for the security of a product lies with the person placing it in the market**, regardless of the nature of the components used.
Responsibility is **not transferable**.
So, if you are a manufacturer that has integrated an open-source component into your product, you should:
- exercise proper **due diligence** on third-party components, to make sure they do not compromise the cybersecurity of the final product
- verify the security status of the component, for example by checking whether it receives **regular updates**, whether it **has known vulnerabilities** in public databases, or by carrying out additional security testing
- preferably identify and document the dependencies within the component
**Open source does not mean out of scope**, and above all it does not mean out of responsibility.

And what if the vulnerability in an open-source project is not fixed by the maintainer because support has ended?
We will cover this point in a future episode ⏭️
 
---

## Practical CRA Compliance takeaways

- Start from a documented cybersecurity risk assessment.
- Identify whether your product qualifies as a product with digital elements.
- Map Annex I requirements to product features and development processes.
- Document third-party and open-source components.
- Define a vulnerability handling and incident reporting process.
- Assess whether product changes affect the risk profile or intended purpose.
- Prepare technical documentation before harmonised standards become available.

---

### 📚 References
<a href="https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ:L_202402847" target="_blank">Cyber Resilience Act - Regulation (EU) 2024/2847 - Legal Text</a>

<a href="https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/16959-Draft-Commission-guidance-on-the-Cyber-Resilience-Act_en" target="_blank">Cyber Resilience Act - Regulation (EU) 2024/2847 - Guidance</a>

<a href="https://digital-strategy.ec.europa.eu/it/library/cyber-resilience-act-implementation-frequently-asked-questions" target="_blank">Cyber Resilience Act - Regulation (EU) 2024/2847 - FAQ</a>

## 👋 Let’s Connect

If you found this post helpful, or if you want to chat more about this or anything at the intersection of development and security — I’d love to hear from you.

Feel free to reach out on <a href="https://www.linkedin.com/in/riccardosirigu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

Always happy to connect with fellow developers, researchers, and security-minded folks.

Stay curious. Stay secure. 🔒🚀

</article>
