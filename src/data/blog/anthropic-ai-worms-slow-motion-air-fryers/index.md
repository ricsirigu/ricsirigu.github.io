---
category: "blog"
cover: './cover.webp'
title: "Anthropic AI Worms in Slow Motion and Air Fryers"
seoTitle: "Anthropic AI Worms: Slow-Motion LLMs and IoT Devices"
description: "Anthropic's AI worm research combines simulated replication with distributed LLM inference on 15 TV boxes. But how realistic is an autonomous IoT worm?"
date: "2026-10-13"
tags: ["ai", "cybersecurity", "embedded", "malware"]
published: true
---

<article class="prose lg:prose-lg xl:prose-lg">

When all you have is a hammer, everything looks like a nail.

Anthropic's latest research makes me think they got carried away by the latest Lidl Italia Parkside DIY deals, cleared the shelves of demolition hammers, and are now desperately trying to justify the purchase.

I'll try to summarize <a href="https://www.anthropic.com/research/self-replicating-ai" target="_blank" rel="noopener noreferrer">the research</a>, which I've read at least four times because I genuinely find it hard to follow given how it's structured. Let me know if it's just me.

Essentially, they imagine a scenario in which a worm coordinated by a large LLM could infect a large number of IoT devices, install a smaller LLM on them, and potentially distribute that model across several devices.

## Now, About Those IoT Devices

Never mind that many of the IoT devices we have at home, including the smart ovens they mention, **don't have enough memory or bandwidth** to run even the smallest LLM capable of doing what the near future apparently has in store for us.

According to the research, a large model, which "coincidentally" happens to be a Chinese model, GLM-5.2, **running on remote infrastructure**, tries to install and run a smaller LLM on already-compromised victim devices inside their simulated environment.

The smaller model used for this PoC is Llama3.1-8B. That's 8 billion parameters, and it still needs several gigabytes of RAM, roughly 4 GB even with very aggressive 2-bit quantization, to run rather poorly on a CPU alone.

And my oven doesn't have an AI accelerator. Not sure about yours.

And since IoT devices don't exactly have a lot of RAM (my ESP32-based air fryer certainly has less than 5 MB, for example), the researchers considered splitting the model across N other devices.

So I'd need at least four TV boxes to run a 9B-parameter model, or at least ten to run the 26B one. TV boxes with 4 GB of RAM, mind you, because air fryers and ovens don't seem to have that kind of memory yet.

Otherwise, we'd have replaced our Mac mini clusters with clusters of air fryers by now.

But for distributed inference, they switched to Gemma4-26B-A4B, running it across **15 physical TV boxes** and tossing Llama into the bin.

All of this at the astonishing speed of **0.39 tokens per second**.

Basically worse than that friend who sends you painfully slow WhatsApp voice notes that you immediately want to play at 2x.

And while inference is already keeping the device's processor rather busy, let's not forget that our TV box still needs to do its actual job without raising suspicion.

So we'd end up with **a mighty worm operating in slow motion**. And here I was thinking worms were supposed to compromise as many devices as possible in as little time as possible.

## Two Experiments, Two Different Things

So GLM tries to set up Llama in one simulated experiment, then they switch to Gemma4-26B-A4B for a different experiment on distributed inference.

Headache.

The point is, we're talking about **different experiments, with different models, under different conditions**.

One shows that a sufficiently capable model can orchestrate propagation in **a simplified simulated environment**. Another shows that you can distribute LLM inference across a bunch of cheap TV boxes.

Taken separately, they're actually interesting experiments.

**The logical leap**, to me, comes when those results are combined to suggest an autonomous worm capable of spreading across real, heterogeneous IoT devices, with all the constraints and problems that a distributed system like this would face in the real world.

Their conclusion is that, if you extrapolate the current rate of improvement in model capabilities, by the end of 2026 we might have a model that's small enough and capable enough to do all of this on its own: get onto an IoT device, attack others from there, and keep spreading.

Which is still **a prediction, not something they've actually demonstrated** in these experiments.

Better hurry up and update our IoT gadgets. The end of 2026 is just around the corner.

</article>
