---
category: 'blog'
cover: './cover.jpg'
title: 'Secure Coding for Embedded Systems'
description: 'An introduction to the Secure Coding for Embedded Systems Udacity course and the practices engineers need to build trustworthy products.'
date: '2024-11-21'
updated: '2026-09-02'
tags: ['udacity', 'embedded', 'cybersecurity']
published: true
---

<article class="prose lg:prose-lg xl:prose-lg">

The Secure Coding for Embedded Systems course is now available on Udacity. I contributed as one of the authors, together with Dennis Kengo Oka.

My modules cover hardening, supply chain risk management, TLS and secure updates. What does the device actually need to run? Which dependencies are we shipping? How do we protect its communications and deliver an update we can trust?

These are practical engineering questions. They also connect to requirements being introduced through the EU Cyber Resilience Act (CRA) and updates to the Radio Equipment Directive (RED).

<h2 id="why-secure-coding-matters-now-more-than-ever">Why secure coding matters for connected devices</h2>

Embedded systems run in homes, hospitals, factories, vehicles and cities. Connecting them to more systems also exposes them to more attacks. Security-by-design requirements are increasingly part of the rules for developing their software.

For an embedded developer, two regulations are worth understanding:

<h2 id="1-the-eu-cyber-resilience-act-cra">The EU Cyber Resilience Act (CRA)</h2>

The Cyber Resilience Act, formally adopted by the EU in 2024, introduces mandatory cybersecurity requirements for all products with digital elements — including embedded systems and software.

What does that mean for the work?

- Products must be secure-by-design and secure-by-default.
- There must be a process for handling vulnerabilities and providing timely security updates.
- Risk assessments, technical documentation, and conformity declarations will be required.

Non-compliance may result in penalties up to €15 million or 2.5% of global annual turnover.

The CRA is expected to become enforceable by December 2027. That affects development and testing, but also the work needed to maintain a product after it ships.

<h2 id="2-radio-equipment-directive-red-article-3-3-d-e-f">Radio Equipment Directive (RED) – Article 3(3)(d)(e)(f)</h2>

Since 2022, the Radio Equipment Directive (2014/53/EU) has been extended with new cybersecurity requirements under Delegated Regulation (EU) 2022/30, specifically:

- Devices must not harm network functionality or misuse resources.
- They must protect user privacy and personal data.
- They must include fraud prevention mechanisms.

These rules apply to wirelessly connected devices (Wi-Fi, Bluetooth, LTE, etc.), including most IoT devices, wearables, smart appliances, and industrial controllers.

Enforcement begins in August 2025. Manufacturers and developers need to address compliance now, including secure communications and reliable update mechanisms.

<h2 id="what-this-course-delivers">What we cover in the course</h2>

The course works through these problems from the development side. Here is what I cover in the modules I authored.

**Hardening embedded systems**

Which components does the device need? Which can we remove? We look at reducing the attack surface, implementing secure boot and identifying vulnerabilities in third-party libraries.

**Managing supply chain risks**

What code are we getting from other people, and what risks come with it? You will build Software Bills of Materials (SBOMs), look at upstream threats and work through how to manage those risks over the product lifecycle.

**TLS and secure updates**

How do we protect communication with the device? How do we know that a firmware update is authentic and has not been modified? These modules cover TLS, secure over-the-air (OTA) updates, and firmware integrity and authenticity.

<h2 id="for-developers-engineers-and-product-teams">For Developers, Engineers, and Product Teams</h2>

The course is for embedded developers, systems engineers, security architects and product teams working through these decisions.

The questions are technical, but they affect what the team needs to build and maintain. Secure communication and updates need implementation work. Handling vulnerabilities and dependencies needs continued attention after release. The course connects that work to security and compliance requirements.

<h2 id="final-thoughts">Where to start</h2>

If you work on embedded products, I hope this gives you a practical way to think through the code, the dependencies and the update process together.

You can <a href="https://www.udacity.com/course/secure-coding-for-embedded-systems--cd13387" target="_blank" rel="noopener noreferrer">explore the course on Udacity</a>.

<h2 id="let-s-connect">Questions or feedback?</h2>

Tried the course? I would like to hear what helped and what could be clearer in a future revision. You can reach me on <a href="https://www.linkedin.com/in/riccardosirigu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.

</article>
