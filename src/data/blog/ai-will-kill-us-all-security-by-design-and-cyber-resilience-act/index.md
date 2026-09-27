---
category: 'blog'
cover: './cover.webp'
title: 'AI will kill us all'
seoTitle: 'AI Agents, Botnets and Why Security by Design Matters'
description: 'AI agents can make cyberattacks more adaptive and scalable, but insecure software, weak credentials and poor configurations remain at the core of the problem.'
date: '2026-09-27'
tags: ['ai', 'cybersecurity', 'security-by-design', 'cra', 'botnet']
published: true
---

<article class="prose lg:prose-lg xl:prose-lg">

*With this article I want to emphasize the importance of **security by default** and **security by design**, principles also promoted by the Cyber Resilience Act. Despite the progress in AI and in the automation of attacks, the weak points still remain people, through phishing attacks and stolen passwords, together with insecure software systems.*

Extremely sophisticated zero-day exploits, autonomous agents capable of adapting their behavior to the system in front of them, and botnets of a size never seen before. These are scenarios that, until a few years ago, we would probably have associated more easily with a science fiction movie, but that today are starting to be taken seriously even by those developing the most advanced artificial intelligence models.

Dario Amodei, CEO of Anthropic, recently wrote:

> Given the accelerating pace at which AI capabilities are increasing, I fear that within 6 to 12 months such a swarm could be capable of taking over the entire Internet through a persistent botnet.

Amodei’s statement is certainly a strong one, especially because it comes from the CEO of one of the companies developing the most advanced models. At the same time, I find it curious that, when discussing the risks of AI, the example used is specifically a botnet, considering that Amodei does not have a specific background in cybersecurity and that botnets are a phenomenon that has been known and studied for decades.

Anthropic itself, among other things, has documented examples that I find in some ways even more concerning and, above all, much more concrete. In its September 2026 Threat Intelligence Report, it describes the case of a group using Claude Code during the development of software for weapons systems, including guidance, navigation and control systems for rockets and missiles. In the same report, Anthropic also describes several cases involving the use of its models in dual-use biological research which, although they cannot automatically be considered activities aimed at developing biological weapons, could produce knowledge that may also be used in that direction.

These examples, in my opinion, help put the problem into the right perspective. AI can certainly increase an attacker’s capabilities enormously, allowing activities that previously required different skills, time and people to be automated. But when we return to cybersecurity, and in particular to the botnet scenario described by Amodei, a much simpler question remains: **how does the attacker initially get inside millions of systems?**

Because a swarm of AI agents can be extremely intelligent, adaptive and capable of trying different strategies, but in order to obtain a **foothold** inside a system it still has to find something to exploit. A vulnerability, a misconfiguration, a weak or stolen password, an exposed service, or a person who is convinced to provide access.

And this is where, in my opinion, it is worth looking at what has already happened in the past.

One interesting example, precisely because it shows how a particularly sophisticated technique is not always necessary, is Mirai.

The attack that led to the creation of the Mirai botnet did not use particularly complex zero-day vulnerabilities. Mirai scanned for IoT devices reachable through Telnet and tried a predefined set of common or default credentials.

Once a valid combination was found, the device could be compromised and become part of the botnet, in turn starting to search for other vulnerable devices. The study published at USENIX Security in 2017 reconstructed growth to around 65,000 devices within the first twenty hours, a stable population in the range of 200,000–300,000 infections, and peaks reaching approximately 600,000.

From there, the compromise of a huge number of devices was made possible mainly by a problem much less fascinating than a sophisticated zero-day exploit: devices with exposed services and weak default credentials. The classic **admin/admin** is a perfect example of the kind of problem we are talking about.

Mirai, moreover, does not even represent the historical maximum if we simply look at the number of systems involved. Over the years, different malware and botnets have reached millions of hosts, although directly comparing these numbers is complicated because we are often comparing different quantities: devices simultaneously under control, computers compromised over time, observed IP addresses, accounts, or systems simply reached by the malware. The interesting point, however, remains the same: **the ability to propagate automatically on an enormous scale did not begin with artificial intelligence.**

What changes, then, with AI agents?

What changes above all is the ability to adapt the approach based on the asset they encounter, and to do so automatically on a potentially enormous scale.

A traditional worm normally follows a fairly rigid strategy. It carries an exploit, or in any case a set of predefined techniques, identifies a system that meets certain conditions, attempts the compromise and, if it works, replicates itself. If those conditions are not present, it moves on. This rigidity is both its limitation and one of its main advantages, because once the exploit is available there is no need to reason about every individual target: the code can execute it continuously and at extremely high speed.

An AI agent works differently because it can observe the system in front of it, interpret outputs, recognize that a particular strategy is not working and modify it. Potentially, it can encounter a Linux system and behave in one way, encounter a Windows system and behave differently, or encounter a web application and look for a completely different path.

This is exactly the direction analyzed in the recent paper <a href="https://arxiv.org/abs/2606.03811" target="_blank" rel="noopener noreferrer"><strong><em>AI Agents Enable Adaptive Computer Worms</em></strong></a>, which experimentally demonstrates a worm based on AI agents capable of generating different strategies depending on the targets encountered, instead of relying exclusively on a vulnerability and an exploit defined in advance.

This changes the problem considerably, because a traditional worm can be extremely effective within a specific population of vulnerable systems but become almost completely useless outside that population. If my worm exploits a specific vulnerability present in a particular version of some software, I can scan the Internet at extremely high speed, but once the vulnerable systems are exhausted, the pool of possible new compromises inevitably begins to shrink.

An adaptive agent could instead, at least theoretically, find new paths and therefore move from one population of systems to another. This does not mean that it can magically compromise anything it encounters, because some weakness still has to exist, but it does mean that it is no longer necessarily tied to a single technique defined before the attack.

This capability, however, comes at a cost.

At the moment, a traditional worm still has an enormous advantage in terms of speed. If it carries a ready-made exploit for a specific vulnerability, it can continuously send it against thousands of targets without having to analyze the system every time, interpret the result and decide what to do next.

An AI agent, on the other hand, has to observe, reason, use tools, interpret the output and decide how to proceed. All of this introduces latency and computational cost that traditional code does not have. It is therefore **more adaptable, but not necessarily faster**.

For this reason, I find it more interesting to think not so much about a future in which AI completely replaces traditional worms, but about a scenario in which the two are combined.

The AI agent could take care of the slow and complex part, analyzing different systems and finding new paths to compromise, while traditional software could take care of the part in which it is much more efficient: quickly repeating an already identified technique against all systems that present the same weakness.

In this case, **AI does not replace the worm, but progressively changes its propagation possibilities**. A traditional worm tends to consume its pool of vulnerable systems because, as those systems are compromised, patched or isolated, fewer and fewer reachable targets remain. An adaptive system could instead manage to identify a new class of vulnerable systems and open up a new pool of possible compromises.

It is probably this adaptability, more than simple speed, that makes the use of AI agents particularly interesting in this context.

But at this point the problem shifts.

We can build an enormously more intelligent attacker, capable of observing what is in front of it and modifying its behavior, but that attacker still has to find something to exploit.

And this is where, in my opinion, we return to **security by design**.

We can imagine a computer system as a building and a traditional worm as a thief who knows a particular type of lock extremely well. He goes around the city trying that technique on thousands of doors and, when he finds the lock he knows, he gets in. If the door uses a different lock, he moves on to the next building.

An AI agent would be a much more adaptable thief, capable of arriving in front of the building, observing the door, realizing that it does not know that particular lock, checking the windows, looking for a secondary entrance and changing its strategy based on what it finds.

It is clearly a much harder adversary to deal with, but the building still has to have some weak point. A door left open, a weak lock, a window that does not close properly, or someone inside willing to open the door because they have been deceived.

At this point, we could focus exclusively on making the thief less intelligent, limiting the capabilities of AI agents or trying to prevent them from being used for these activities. That is certainly part of the problem, but we cannot ignore the other half: **we need to build better buildings.**

And this is exactly why **security by design** and **security by default** become even more important.

Security should not be something that is added to a product afterwards, and above all it should not be the user’s responsibility to turn something that is insecure by default into something secure. A device sold with a trivial default password, a network service that is active and reachable even though it is not actually necessary, or software that does not receive security updates is creating an attack surface that sooner or later someone will try to exploit.

Whether that someone is a human being, a traditional worm or a swarm of AI agents changes the speed, the ability to adapt and the scale of the attack enormously, but it does not necessarily change the problem that allowed the initial access.

And it is interesting, once again, to return to Mirai. It did not require a science-fiction superintelligence capable of autonomously discovering unknown vulnerabilities. Hundreds of thousands of IoT devices exposed to the Internet with insecure configurations and credentials were enough to build a botnet capable of generating enormous DDoS attacks.

The European <a href="https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act" target="_blank" rel="noopener noreferrer"><strong>Cyber Resilience Act (CRA)</strong></a> goes precisely in the direction of shifting a greater share of responsibility toward those who design and manufacture products with digital elements. Among the essential requirements of the CRA is the need to design, develop and produce these products while ensuring a level of cybersecurity appropriate to the risk, as well as, where applicable, making them available with a secure configuration by default and enabling vulnerabilities to be managed through security updates.

**Security by default** may sound like an obvious principle, but in reality it changes the way we approach the problem considerably. A feature that is not necessary should not be exposed by default, a device should not reach the user with easily predictable credentials, and a connected product should be designed from the beginning with the assumption that vulnerabilities will probably be discovered during its lifecycle and will therefore need to be fixed.

This obviously does not mean that a product designed according to these principles becomes invulnerable, because a system completely free of vulnerabilities is hardly a realistic objective. It does mean reducing the number of opportunities available and, above all, ensuring that a single vulnerability or a single compromise does not automatically make it possible to reach everything else.

The same reasoning applies to people.

We very often hear that human beings are the weak link in cybersecurity, and this is partly true because phishing, social engineering and credential theft continue to be extremely effective. But stopping at this statement risks becoming too easy an excuse, because people make mistakes and will continue to make mistakes.

We can do awareness training, teach people how to recognize a phishing email and explain why they should not reuse the same password across ten different services, but we cannot design the security of an infrastructure on the assumption that thousands of users will never make a mistake.

In the end, **this too is security by design**.

If a password is stolen, we need to ask how much an attacker can actually do with that single credential. If an IoT device is compromised, we need to ask why that device could potentially communicate with systems it should not have access to. If an account is compromised, we need to ask why that account has more privileges than it strictly needs.

**Security is not only about preventing someone from getting in, but also about limiting what can happen after someone gets in.**

And perhaps this is exactly where the arrival of AI agents makes the problem even more obvious. If the attacker’s ability to analyze systems, try different strategies and automate operations increases enormously, continuing to put poorly configured products, unnecessarily exposed services, unpatched software and infrastructures in which a single credential provides access to everything else online becomes increasingly unsustainable.

We can therefore rightly worry about automatically discovered zero-day exploits, swarms of autonomous agents and botnets capable of adapting to the systems they encounter, but in the meantime an enormous number of compromises continue to begin with much more ordinary problems: a stolen password, a phishing email, an unpatched system, or a configuration that should never have been left that way.

AI can enormously change the capabilities of an attacker and, above all, the scale at which certain activities can be automated, but this makes it even more important to work on the other side of the equation, designing systems in which finding a vulnerability is more difficult and in which exploiting one does not automatically mean compromising everything.

If tomorrow whoever is looking for that open door is able to do it continuously, across millions of different buildings and changing every time the way they try to get in, then the answer cannot simply be to try to stop the thief. **We also need to start building better buildings.**

</article>
