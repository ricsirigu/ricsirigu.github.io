---
category: 'blog'
cover: './cover.jpg'
title: 'Security Standards You Should Know'
description: 'A list of must-read essential resources for understanding key cybersecurity standards.'
date: '2025-04-12'
tags: ['cybersecurity', 'iso', 'en', 'standards']
published: true
---

<article class="prose lg:prose-lg xl:prose-lg">

— Security standards without the headache — just facts, links, and context.

Security standards provide the technical and organizational foundations for protecting systems, data, and infrastructure. While they are **not laws**, they’re often essential for demonstrating compliance with **legal and regulatory requirements** — including European mandates like the <a href="https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act" target="_blank" rel="noopener noreferrer"><strong>Cyber Resilience Act (CRA)</strong></a> and the <a href="https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red_en" target="_blank" rel="noopener noreferrer"><strong>Radio Equipment Directive (RED)</strong></a>.

Whether you're working in **enterprise IT**, **cloud services**, **automotive**, **healthcare**, or **industrial systems**, these standards — when applied correctly — help you build systems that are more secure, more resilient, and easier to prove compliant.

> ℹ️ **Note on ISO and IEC**  
> The **International Organization for Standardization (ISO)** and the **International Electrotechnical Commission (IEC)** are independent, international bodies that develop and publish widely adopted standards. In the cybersecurity space, they often collaborate to produce joint standards under the **ISO/IEC** label — such as ISO/IEC 27001 or ISO/IEC 27701. 

---

## 📑 Table of Contents

1. [Policies & Standards: How Security Gets Done](#from-policies-to-standards)  
2. [Core Cybersecurity Standards (ISO, NIST)](#core-information-security-standards)  
3. [Cybersecurity Risk & Governance Frameworks](#risk--governance-standards)  
4. [Security Frameworks for Organizations (NIST, CIS)](#organizational-security-frameworks)  
5. [Secure Software & Systems Engineering Standards](#secure-by-design--engineering-standards)  
6. [Cybersecurity Supply Chain Standards](#supply-chain-security)  
7. [Industrial/OT Cybersecurity Standards](#industrial--ot-security)  
8. [IoT, Automotive & EU Regulation-Aligned Security Standards (CRA, RED)](#application-specific--iot-security-standards)  
9. [AI & Emerging Technology Security Standards](#ai-security-standards)
10. [Incident Response & Security Event Standards](#incident-management)  
11. [Vulnerability Disclosure & Management Standards](#vulnerability-management--disclosure)  
12. [Data Privacy & Payment Security Standards](#data--payment-security)

---

<h2 id="from-policies-to-standards">🧭 Policies, Standards & the Chain of Accountability</h2>

Security standards don’t exist in a vacuum, they flow from your company’s broader governance.

In most organizations, the structure looks like this:

- **Laws & Regulations** — define the legal obligations (e.g. GDPR, HIPAA, RED, CRA)  
- **Policies** — internal rules set by your organization to guide actions and align with legal and ethical requirements  
- **Standards** — frameworks and best practices used to implement your policies  
- **Procedures** — specific instructions, tools, or workflows that operationalize the standards


> 💡 **Note on Terminology**:  
> This post uses “security standards” in a broad, practical sense — and includes both **formal standards** (like <a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27001</strong></a>) and widely adopted **frameworks** (like the <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer"><strong>NIST Cybersecurity Framework</strong></a> or <a href="https://www.cisecurity.org/controls/" target="_blank" rel="noopener noreferrer"><strong>CIS Controls</strong></a>). Some are **certifiable**, some are **guidelines**, and some are **strategic models** for risk management. Wherever you see “standard,” think: *“trusted reference for doing security right.”*

---

### 📋 Example: Policy → Standard → Procedure

| Layer | Example |
|-------|---------|
| **Policy** | “All access to systems must be approved and reviewed regularly.” |
| **Standard** | <a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27001 A.9.2</strong></a> – *User access provisioning must be controlled* |
| **Procedure** | “Use Jira to submit an access request. IT Manager must review and approve. Quarterly audits via AccessReviewBot.” |

---

This layered structure ensures your security program:

- ✅ Aligns with laws and regulations  
- 🔎 Is clear, enforceable, and auditable  
- 🧱 Scales as your company grows  
- 🤝 Builds trust with customers, partners, and auditors


---

<h2 id="core-information-security-standards">📑 Core Cybersecurity Standards (ISO, NIST)</h2>

These foundational standards are widely adopted across sectors and often form the base of any security program.

- <a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27001</strong></a> – *Information Security Management Systems (ISMS)*  
  Defines requirements for setting up, implementing, maintaining, and continually improving an organization's information security program.

- <a href="https://www.iso.org/standard/75652.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27002</strong></a> – *Information Security Controls*  
  Provides guidelines and best practices for implementing the control objectives defined in ISO/IEC 27001.

- <a href="https://www.iso.org/standard/43757.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27017</strong></a> – *Cloud Security Guidelines*  
  Offers guidance on cloud-specific security controls for both service providers and customers.

- <a href="https://www.iso.org/standard/76559.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27018</strong></a> – *Protection of Personal Data in the Cloud*  
  Focuses on the protection of personally identifiable information (PII) in cloud computing environments.

- <a href="https://www.iso.org/standard/80585.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27005</strong></a> – *Information Security Risk Management*  
  Provides detailed guidance on establishing a systematic risk management process aligned with ISO/IEC 27001.
---

<h2 id="risk--governance-standards">🏛 Cybersecurity Risk & Governance Standards</h2>

These focus on aligning cybersecurity with business strategy, legal compliance, and enterprise risk appetite.

- <a href="https://www.isaca.org/resources/cobit" target="_blank" rel="noopener noreferrer"><strong>COBIT</strong></a> – *IT Governance and Management Framework*  
  Offers a comprehensive framework for developing, implementing, monitoring, and improving IT governance and management practices, often used by auditors and enterprise GRC programs.

- <a href="https://www.iso.org/iso-31000-risk-management.html" target="_blank" rel="noopener noreferrer"><strong>ISO 31000</strong></a> – *Enterprise Risk Management Framework*  
  A global standard for risk management principles and guidelines, applicable to any industry or size of organization. It helps integrate risk management into overall corporate governance.

---

<h2 id="organizational-security-frameworks">🧱 Security Frameworks for Organizations (NIST, CIS)</h2>

These frameworks provide structure for developing, assessing, and improving an organization’s security posture.

- <a href="https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-53</strong></a> – *Security and Privacy Controls*  
  A comprehensive catalog of technical and organizational controls used by U.S. federal systems and widely adopted in industry. It helps organizations meet a variety of compliance needs.

- <a href="https://csrc.nist.gov/pubs/sp/800/171/r3/final" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-171</strong></a> – *Protecting Controlled Unclassified Information (CUI)*  
  Provides baseline security requirements for non-federal organizations that handle federal data. Commonly used by defense and government contractors.

- <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer"><strong>NIST Cybersecurity Framework (CSF)</strong></a> – *Risk-Based Cybersecurity Model*  
  A voluntary framework of standards, guidelines, and practices to manage cybersecurity risk. Used broadly across sectors to guide strategy and improve maturity.

- <a href="https://www.cisecurity.org/controls/" target="_blank" rel="noopener noreferrer"><strong>CIS Controls</strong></a> – *Prioritized Cybersecurity Best Practices*  
  A curated set of actions to reduce risk. Prioritized and easy to understand, it's useful for small teams, CISOs, and enterprises alike.


---


<h2 id="secure-by-design--engineering-standards">🔧 Secure by Design & Engineering Standards</h2>

These standards support building systems that are secure from the ground up — incorporating security into architecture, software development, and engineering processes.

- <a href="https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-160 Vol. 1</strong></a> – *Engineering Trustworthy Secure Systems*  
  Focuses on applying systems engineering principles to develop secure, resilient systems — useful in complex, critical environments like defense, OT, or healthcare.

- <a href="https://www.iso.org/standard/44378.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27034</strong></a> – *Application Security*  
  Provides guidance on integrating security into the software development lifecycle and application design. Especially useful for dev teams and security architects.

- <a href="https://csrc.nist.gov/publications/detail/sp/800-218/final" target="_blank" rel="noopener noreferrer"><strong>NIST SSDF (SP 800-218)</strong></a> – *Secure Software Development Framework*  
  Helps organizations define a methodology for designing, crafting and maintaining software that is secure.


---

<h2 id="supply-chain-security">🔗 Cybersecurity Supply Chain Standards</h2>

Supply chain security has become a critical focus area — especially with increasing reliance on third-party vendors and components. These standards help organizations identify, assess, and reduce risks related to suppliers, hardware, and software dependencies.

- <a href="https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-161 Rev. 1</strong></a> – *Cybersecurity Supply Chain Risk Management (C-SCRM)*  
  Provides a comprehensive framework for integrating supply chain risk management into organizational cybersecurity strategy. Covers policies, processes, and controls for assessing and mitigating supplier risks throughout the system lifecycle.

- <a href="https://www.iso.org/standard/82890.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27036</strong></a> – *Information Security for Supplier Relationships*  
  A multi-part standard offering guidance on managing information security risks associated with supplier and partner relationships — including requirements for governance, contract clauses, and ongoing assurance.


---

<h2 id="industrial--ot-security">⚙️ Industrial/OT Security Standards</h2>

These standards are designed to protect industrial environments — including manufacturing systems, energy grids, and critical infrastructure — from cyber threats.

- <a href="https://www.isa.org/standards-and-publications/isa-standards/isa99" target="_blank" rel="noopener noreferrer"><strong>IEC 62443</strong></a> – *Industrial Automation & Control Systems (IACS)*  
  A comprehensive set of standards for securing Operational Technology (OT) environments. Defines security levels, zones, conduits, and requirements for vendors, integrators, and asset owners. Often used in SCADA, manufacturing, and utilities.


---


<h2 id="application-specific--iot-security-standards">🚗 IoT, Automotive & EU Regulation-Aligned Security Standards (CRA, RED)</h2>

These standards apply to specific sectors like automotive, healthcare, and IoT — and align with new EU regulations like the Cyber Resilience Act (CRA) and Radio Equipment Directive (RED).

- <a href="https://www.iso.org/standard/70918.html" target="_blank" rel="noopener noreferrer"><strong>ISO/SAE 21434</strong></a> – *Automotive Cybersecurity Engineering*  
  Provides a comprehensive framework for securing electrical and electronic systems in vehicles — from concept through decommissioning. Required for UNECE R155 compliance.

- <a href="https://www.etsi.org/deliver/etsi_en/303600_303699/303645/03.01.03_60/en_303645v030103p.pdf" target="_blank" rel="noopener noreferrer"><strong>ETSI EN 303 645</strong></a> – *Baseline Security for Consumer IoT Devices*  
  Defines baseline security requirements for internet-connected consumer devices — such as default password policies, update mechanisms, and data protection.

- <a href="https://www.etsi.org/deliver/etsi_tr/103900_103999/103935/01.01.01_60/tr_103935v010101p.pdf" target="_blank" rel="noopener noreferrer"><strong>ETSI TR 103 935</strong></a> – *Conformance Assessment for Consumer IoT Security*  
  Offers guidance on evaluating whether consumer IoT products meet the baseline requirements set in EN 303 645.

- <a href="https://www.etsi.org/deliver/etsi_tr/103500_103599/103582/01.01.01_60/tr_103582v010101p.pdf" target="_blank" rel="noopener noreferrer"><strong>ETSI TR 103 582</strong></a> – *Vulnerability Disclosure in Consumer IoT*  
  Recommends best practices for coordinated vulnerability disclosure in consumer IoT — aligned with global norms and CRA expectations.

- <a href="https://www.iso.org/standard/72026.html" target="_blank" rel="noopener noreferrer"><strong>IEC 80001</strong></a> – *Risk Management in Medical IT Networks*  
  Focuses on ensuring safety and effectiveness when medical devices are connected to IT networks — addressing security, data integrity, and clinical safety.

- <a href="https://standards.iteh.ai/catalog/standards/cen/4f1e2768-e1a6-4541-a2b6-465e1c682627/en-18031-1-2024" target="_blank" rel="noopener noreferrer"><strong>EN 18031</strong></a> – *Cybersecurity for Radio Equipment (RED)*  
  A harmonized European standard under the RED Delegated Act. It sets security requirements (authentication, update integrity, etc.) for wireless and radio-enabled devices.
  
---

<h2 id="ai-security-standards">🤖 AI & Emerging Technology Security Standards</h2>

As AI systems become more widespread, new standards are emerging to manage associated risks — including security, trustworthiness, and lifecycle governance.

- <a href="https://www.iso.org/standard/77608.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 23894</strong></a> – *Artificial Intelligence Risk Management*  
  Provides a risk-based approach to identifying, assessing, and treating the unique security and ethical risks of AI systems — including robustness, fairness, and explainability.

- <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer"><strong>NIST AI Risk Management Framework (AI RMF 1.0)</strong></a>  
  A voluntary but widely respected framework for ensuring AI systems are secure, reliable, and aligned with organizational values. Focuses on trustworthiness, transparency, and risk mitigation.

- <a href="https://www.iso.org/standard/81228.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 42001</strong></a> – *Artificial Intelligence Management System (AIMS)*  
  The world’s first certifiable management system for governing AI. Helps organizations establish policies, controls, and oversight across the full AI lifecycle.


---

<h2 id="incident-management">🧯 Incident Response & Security Event Standards</h2>

These standards help organizations prepare for, detect, respond to, and recover from security incidents in a structured and effective way.

- <a href="https://csrc.nist.gov/Projects/incident-response" target="_blank" rel="noopener noreferrer"><strong>NIST Computer Security Incident Handling Guide</strong></a>  
  NIST’s foundational guide for establishing incident response policies, team structures, and technical playbooks. Widely used across the public and private sectors.

- <a href="https://www.iso.org/standard/78973.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27035</strong></a> – *Information Security Incident Management*  
  A multi-part international standard that provides a full lifecycle approach to handling incidents — from preparation and detection to response and lessons learned.

---

<h2 id="vulnerability-management--disclosure">📢 Vulnerability Disclosure & Management Standards</h2>

These standards guide how organizations handle, coordinate, and communicate about vulnerabilities — both internally and with external stakeholders.

- <a href="https://www.iso.org/standard/69725.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 30111</strong></a> – *Vulnerability Handling Processes*  
  Defines structured processes for analyzing, resolving, and communicating vulnerabilities — ideal for product vendors, software teams, and CERTs.

- <a href="https://www.iso.org/standard/72311.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 29147</strong></a> – *Vulnerability Disclosure*  
  Provides guidelines for disclosing vulnerabilities to stakeholders, partners, and the public — including coordinated disclosure workflows.

---

<h2 id="data--payment-security">💳 Data Privacy & Payment Security Standards</h2>

These standards focus on protecting sensitive financial and personal data — critical for compliance with privacy laws and industry regulations like GDPR and PCI.

- <a href="https://www.pcisecuritystandards.org/" target="_blank" rel="noopener noreferrer"><strong>PCI DSS</strong></a> – *Payment Card Industry Data Security Standard*  
  A global standard for securing credit card data. Required by major payment processors and card brands. Covers encryption, access controls, and monitoring.

- <a href="https://www.iso.org/standard/71670.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27701</strong></a> – *Privacy Information Management System (PIMS)*  
  An extension of ISO/IEC 27001 and 27002 that adds controls and structure for managing personally identifiable information (PII). Supports GDPR alignment and certification.

---


## 🎯 Final Thoughts

Security standards are more than checklists — they’re **strategic tools** for protecting digital assets, demonstrating compliance, and earning customer trust. Whether you’re building a connected car, running a cloud platform, or operating critical infrastructure, these standards help you manage risk and prove that you're doing things right.

---

## 💬 Let’s Connect

If you found this post helpful, or if you want to chat more about this or anything at the intersection of development and security — I’d love to hear from you.

Feel free to reach out on <a href="https://www.linkedin.com/in/riccardosirigu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

Always happy to connect with fellow developers, researchers, and security-minded folks.

Stay curious. Stay secure. 🔒🚀

</article>
