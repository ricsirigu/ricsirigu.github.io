---
category: 'blog'
cover: './cover.jpg'
title: 'Security Standards You Should Know'
description: 'A practical reference to essential cybersecurity standards, including ISO, IEC and European EN standards for secure products and compliance.'
date: '2025-04-12'
updated: '2026-09-05'
tags: ['cybersecurity', 'iso', 'en', 'standards']
published: true
---

<article class="prose lg:prose-lg xl:prose-lg">

— Security standards without the headache — just facts, links, and context.

Security standards provide the technical and organizational foundations for protecting systems, data, and infrastructure. While they are **not laws**, they’re often essential for demonstrating compliance with **legal and regulatory requirements**, including European mandates like the <a href="https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act" target="_blank" rel="noopener noreferrer"><strong>Cyber Resilience Act (CRA)</strong></a> and the <a href="https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red_en" target="_blank" rel="noopener noreferrer"><strong>Radio Equipment Directive (RED)</strong></a>.

Whether you're working in **enterprise IT**, **cloud services**, **automotive**, **healthcare**, or **industrial systems**, these standards, when applied correctly, help you build systems that are more secure, more resilient, and easier to prove compliant.

---

## 🧭 What You’ll Find in This Guide

This guide cuts through the noise and helps you make sense of security standards, fast. Here’s what to expect:

- A clear overview of how **security policies and standards fit into your organization’s governance**  
- A breakdown of both **horizontal standards** (applicable across industries) and **vertical standards** tailored to specific domains like automotive, healthcare, and industrial systems  
- Coverage of **specialized areas** like secure software development, AI risk, incident response, and more  
- Contextual notes to help you understand **which standards apply where**, and how they map to regulations like GDPR, CRA, RED, and others  
- Direct links to authoritative sources 

---

<h2 id="from-policies-to-standards">🧭 From Policies to Standards</h2>

Security standards don’t exist in a vacuum — they flow from your company’s broader governance structure.

In most organizations, the structure looks like this:

- **Laws & Regulations** — define the legal obligations (e.g., GDPR, HIPAA, RED, CRA)  
- **Policies** — internal rules set by your organization to guide actions and align with legal and ethical requirements  
- **Standards** — frameworks and best practices used to implement your policies  
- **Procedures** — specific instructions, tools, or workflows that operationalize the standards

> 💡 **Note on Terminology**  
> This post uses “security standards” in a broad, practical sense — including both **formal standards** (like <a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27001</strong></a>) and widely adopted **frameworks** (like the <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer"><strong>NIST Cybersecurity Framework</strong></a> or <a href="https://www.cisecurity.org/controls/" target="_blank" rel="noopener noreferrer"><strong>CIS Controls</strong></a>). Some are **certifiable**, some are **guidelines**, and some are **strategic models** for risk management. Wherever you see “standard,” think: *“trusted reference for doing security right.”*

### 📋 Example: Policy → Standard → Procedure

| Layer | Example |
|-------|---------|
| **Policy** | “All access to systems must be approved and reviewed regularly.” |
| **Standard** | <a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27001 A.9.2</strong></a> – *User access provisioning must be controlled* |
| **Procedure** | “Use Jira to submit an access request. IT Manager must review and approve. Quarterly audits via AccessReviewBot.” |

This layered structure ensures your security program:

- ✅ Aligns with laws and regulations  
- 🔎 Is clear, enforceable, and auditable  
- 🧱 Scales as your company grows  
- 🤝 Builds trust with customers, partners, and auditors

> ℹ️ **Note on ISO and IEC**  
> The **International Organization for Standardization (ISO)** and the **International Electrotechnical Commission (IEC)** collaborate to publish many cybersecurity standards under the **ISO/IEC** label.

> 📘 **Note on EN and hEN Standards**  
> **EN standards** (European Norms) are official European standards, and **hENs** are a subset recognized by the EU for legal compliance (e.g., RED, CRA).  
> The **OJEU** (Official Journal of the European Union) lists harmonised standards that provide *presumption of conformity* with EU laws.

---
<h2 id="core-cybersecurity-standards-isoiec">📑 Core Cybersecurity Standards (ISO/IEC)</h2>


These ISO/IEC standards form the foundation of most modern cybersecurity programs. ISO/IEC 27001 is certifiable and widely used for compliance, while others offer detailed guidance for implementation and sector-specific needs.

- <a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27001</strong></a> – *Information Security Management Systems (ISMS)*  
  Requirements for establishing and maintaining an information security program.

- <a href="https://www.iso.org/standard/75652.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27002</strong></a> – *Information Security Controls*  
  Implementation guidance for ISO/IEC 27001 controls.

- <a href="https://www.iso.org/standard/43757.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27017</strong></a> – *Cloud Security Guidelines*  
  Cloud-specific security recommendations for providers and customers.

- <a href="https://www.iso.org/standard/76559.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27018</strong></a> – *PII Protection in the Cloud*  
  Privacy-specific controls for cloud environments handling personal data.

- <a href="https://www.iso.org/standard/80585.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27005</strong></a> – *Risk Management*  
  Risk assessment and treatment aligned with ISO/IEC 27001.

---

<h2 id="risk-governance--security-frameworks">🏛 Risk, Governance & Security Frameworks</h2>

These frameworks help align cybersecurity with business goals, legal obligations, and risk management practices.

- <a href="https://www.isaca.org/resources/cobit" target="_blank" rel="noopener noreferrer"><strong>COBIT</strong></a> – *IT Governance Framework*  
  Used for aligning IT strategy and operations with enterprise goals.

- <a href="https://www.iso.org/iso-31000-risk-management.html" target="_blank" rel="noopener noreferrer"><strong>ISO 31000</strong></a> – *Enterprise Risk Management*  
  High-level risk principles and processes applicable across industries.

- <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer"><strong>NIST Cybersecurity Framework (CSF)</strong></a> – *Risk-Based Cybersecurity Model*  
  Voluntary but widely used framework for managing cybersecurity risks.

- <a href="https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-53</strong></a> – *Security and Privacy Controls*  
  A catalog of detailed controls for information systems.

- <a href="https://csrc.nist.gov/pubs/sp/800/171/r3/final" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-171</strong></a> – *Protecting Controlled Unclassified Information (CUI)*  
  For non-federal organizations handling sensitive government data.

- <a href="https://www.cisecurity.org/controls/" target="_blank" rel="noopener noreferrer"><strong>CIS Controls</strong></a> – *Prioritized Cybersecurity Best Practices*  
  A practical set of defensive actions for all organization sizes.


---

<h2 id="secure-systems-software--supply-chain">🔧 Secure Systems, Software & Supply Chain</h2>

These standards support building secure systems from the ground up, covering secure software development, engineering practices, and managing supply chain risks.

### Secure Engineering & Development

- <a href="https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-160 Vol. 1</strong></a> – *Engineering Secure Systems*  
  Applies systems engineering principles to build trustworthy and resilient systems.

- <a href="https://www.iso.org/standard/44378.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27034</strong></a> – *Application Security*  
  Integrates security into the software development lifecycle.

- <a href="https://csrc.nist.gov/publications/detail/sp/800-218/final" target="_blank" rel="noopener noreferrer"><strong>NIST SSDF (SP 800-218)</strong></a> – *Secure Software Development Framework*  
  Outlines best practices for designing and building secure software.

### Supply Chain Security

- <a href="https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-161 Rev. 1</strong></a> – *Cybersecurity Supply Chain Risk Management*  
  Helps organizations manage cyber risks in third-party and supplier ecosystems.

- <a href="https://www.iso.org/standard/82890.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27036</strong></a> – *Security for Supplier Relationships*  
  Addresses governance, contract clauses, and ongoing assurance for suppliers.

---

<h2 id="sector-specific--eu-aligned-standards">🚗 Sector-Specific & EU-Aligned Standards</h2>

This group includes standards tailored for IoT, automotive, industrial systems, and those aligned with key EU regulations like RED and CRA.

### IoT, Automotive, Medical, and Industrial

- <a href="https://www.iso.org/standard/70918.html" target="_blank" rel="noopener noreferrer"><strong>ISO/SAE 21434</strong></a> – *Automotive Cybersecurity Engineering*  
  Ensures cybersecurity across the vehicle lifecycle. Required for UNECE R155.

- <a href="https://www.iso.org/standard/77796.html" target="_blank" rel="noopener noreferrer"><strong>ISO 24089:2023</strong></a> – *Road vehicles — Software update engineering*  
  Specifies requirements and recommendations for software update engineering for road vehicles. Useful for UNECE R156.

- <a href="https://www.etsi.org/deliver/etsi_en/303600_303699/303645/03.01.03_60/en_303645v030103p.pdf" target="_blank" rel="noopener noreferrer"><strong>ETSI EN 303 645</strong></a> – *Baseline Security for Consumer IoT Devices*  
  Sets baseline security requirements like default passwords and updates.

- <a href="https://www.etsi.org/deliver/etsi_tr/103900_103999/103935/01.01.01_60/tr_103935v010101p.pdf" target="_blank" rel="noopener noreferrer"><strong>ETSI TR 103 935</strong></a> – *Assessment of cyber risk based on products' properties*  Provides guidance for evaluating the cyber risk of IoT products

- <a href="https://www.iso.org/standard/72026.html" target="_blank" rel="noopener noreferrer"><strong>IEC 81001-5-1</strong></a> – *Health software and health IT systems safety, effectiveness and security*  defines the life cycle requirements for development and maintenance of health software.

- <a href="https://isagca.org/isa-iec-62443-standards" target="_blank" rel="noopener noreferrer"><strong>IEC 62443</strong></a> – *Industrial Automation & Control Systems Security*  
  The go-to standard for OT environments like SCADA and manufacturing.

### EU Regulatory Alignment

- <a href="https://eur-lex.europa.eu/eli/dec_impl/2025/138/oj/eng" target="_blank" rel="noopener noreferrer"><strong>EN 18031 series</strong></a> – *Cybersecurity for Radio Equipment (RED)*
  Harmonised under the RED, with specific restrictions, for the cybersecurity requirements in Article 3(3)(d), (e), and (f). It does not by itself provide presumption of conformity under the CRA.

---

<h2 id="identity-authentication--cryptography">🔐 Identity, Authentication & Cryptography</h2>

Identity, authentication, and cryptography form the backbone of digital trust. These standards help secure access, manage credentials, and protect sensitive communications.

- Helps you **design secure authentication flows** for users and systems  
- Supports **GDPR, CRA, and eIDAS** compliance with structured identity assurance  
- Essential for systems involving **SSO, MFA, remote onboarding, or cross-border ID** verification

> 📝 **Note:** <a href="https://digital-strategy.ec.europa.eu/en/policies/eidas-regulation" target="_blank" rel="noopener noreferrer">eIDAS</a> (Electronic Identification, Authentication and Trust Services) is an EU regulation that ensures secure and interoperable digital identity, signatures, and trust services across member states. It's especially relevant for organizations handling electronic transactions or user identification in the EU.

### NIST Digital Identity Guidelines (SP 800-63)

- <a href="https://pages.nist.gov/800-63-3/sp800-63a.html" target="_blank" rel="noopener noreferrer">**800-63A**</a> – *Enrollment & Identity Proofing*  
- <a href="https://pages.nist.gov/800-63-3/sp800-63b.html" target="_blank" rel="noopener noreferrer">**800-63B**</a> – *Authentication & Lifecycle Management*  
- <a href="https://pages.nist.gov/800-63-3/sp800-63c.html" target="_blank" rel="noopener noreferrer">**800-63C**</a> – *Federation & Assertions*  

> 🔐 Key Concepts:  
> - **IAL**: Identity Assurance Level  
> - **AAL**: Authenticator Assurance Level  
> - **FAL**: Federation Assurance Level

### ISO/IEC Identity Standards

- <a href="https://www.iso.org/standard/87485.html" target="_blank" rel="noopener noreferrer">**ISO/IEC 24760-1**</a> – *Framework for Identity Management*  
- <a href="https://www.iso.org/standard/45138.html" target="_blank" rel="noopener noreferrer">**ISO/IEC 29115**</a> – *Authentication Assurance Framework*  
- <a href="https://www.iso.org/standard/62290.html" target="_blank" rel="noopener noreferrer">**ISO/IEC 29003**</a> – *Identity Proofing*

### Cryptographic Standards

- <a href="https://csrc.nist.gov/publications/detail/fips/140/3/final" target="_blank" rel="noopener noreferrer">**NIST FIPS 140-3**</a> – *Security Requirements for Cryptographic Modules*  
- <a href="https://csrc.nist.gov/publications/detail/sp/800-131a/rev-2/final" target="_blank" rel="noopener noreferrer">**NIST SP 800-131A Rev. 2**</a> – *Approved Algorithm Transitions*  
- <a href="https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines" target="_blank" rel="noopener noreferrer">**NIST**</a> – *Cryptographic Standards and Guidelines*  
- <a href="https://www.iso.org/standard/82423.html" target="_blank" rel="noopener noreferrer">**ISO/IEC 19790**</a> – *International Crypto Module Requirements*
- <a href="https://csrc.nist.gov/pubs/sp/800/52/r2/final" target="_blank" rel="noopener noreferrer">**NIST SP 800-52 Rev. 2**</a>  - Guidelines for the Selection, Configuration, and Use of Transport Layer Security (TLS) Implementations
- <a href="https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards" target="_blank" rel="noopener noreferrer">**NIST Post-Quantum Encryption Standards**</a> 

---

<h2 id="incident--vulnerability-management">🧯 Incident & Vulnerability Management</h2>

These standards provide guidance for detecting, responding to, and disclosing cybersecurity incidents and vulnerabilities.

### Incident Response

- <a href="https://csrc.nist.gov/Projects/incident-response" target="_blank" rel="noopener noreferrer">**NIST SP 800-61 Rev. 3**</a>  Incident Response Recommendations and Considerations for Cybersecurity Risk Management
- <a href="https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final" target="_blank" rel="noopener noreferrer">**NIST SP 800-34 Rev. 1**</a>  Contingency Planning Guide
- <a href="https://www.iso.org/standard/78973.html" target="_blank" rel="noopener noreferrer">**ISO/IEC 27035**</a> – *Incident Management Lifecycle*
- <a href="https://www.iso.org/standard/78973.html" target="_blank" rel="noopener noreferrer">**ISO 22301:2019**</a> – *Security and resilience* - Business continuity management systems

### Vulnerability Management & Disclosure

- <a href="https://www.iso.org/standard/69725.html" target="_blank" rel="noopener noreferrer">**ISO/IEC 30111**</a> – *Vulnerability Handling Processes*  
- <a href="https://www.iso.org/standard/72311.html" target="_blank" rel="noopener noreferrer">**ISO/IEC 29147**</a> – *Vulnerability Disclosure Guidelines*

---

<h2 id="data-privacy--payment-security">💳 Data Privacy & Payment Security</h2>

These standards are focused on securing sensitive personal and financial data, including GDPR alignment and industry regulations.

- <a href="https://www.pcisecuritystandards.org/" target="_blank" rel="noopener noreferrer">**PCI DSS**</a> – *Payment Card Industry Data Security Standard*  
- <a href="https://www.iso.org/standard/71670.html" target="_blank" rel="noopener noreferrer">**ISO/IEC 27701**</a> – *Privacy Information Management System (PIMS)*

---

## 🎯 Final Thoughts

Security standards are more than checklists, they’re **strategic tools** for protecting digital assets, demonstrating compliance, and earning customer trust. Whether you’re building a connected car, running a cloud platform, or operating critical infrastructure, these standards help you manage risk and prove that you're doing things right.

---


<h2 id="glossary">📘 Glossary</h2>

| **Term** | **Definition** |
|----------|----------------|
| **AI RMF** | *Artificial Intelligence Risk Management Framework* – A NIST-developed model for managing AI-specific risks like bias, security, and trustworthiness. |
| **AIMS** | *Artificial Intelligence Management System* – A certifiable ISO/IEC framework for governing AI across its lifecycle (e.g., ISO/IEC 42001). |
| **CIS** | *Center for Internet Security* – A nonprofit organization that publishes prioritized security best practices (like CIS Controls). |
| **COBIT** | *Control Objectives for Information and Related Technologies* – A governance and management framework for enterprise IT. |
| **CRA** | *Cyber Resilience Act* – A European regulation that introduces mandatory cybersecurity requirements for products with digital elements. |
| **CSF** | *Cybersecurity Framework* – A voluntary NIST framework that helps organizations manage and reduce cybersecurity risk. |
| **C-SCRM** | *Cybersecurity Supply Chain Risk Management* – A structured approach to identifying and managing supply chain cybersecurity risks. |
| **CUI** | *Controlled Unclassified Information* – Sensitive U.S. federal data that requires protection but isn’t classified. |
| **eIDAS** | *Electronic Identification, Authentication and Trust Services* – An EU regulation that standardizes digital identity, signatures, and trust services across member states. |
| **EN** | *European Norm* – A standard adopted by recognized European standardization organizations (CEN, CENELEC, or ETSI). |
| **ETSI** | *European Telecommunications Standards Institute* – A major European standards body, especially for telecommunications and IoT. |
| **GRC** | *Governance, Risk, and Compliance* – An approach to aligning IT with business goals while managing risk and meeting compliance requirements. |
| **hEN** | *Harmonised European Standard* – A subset of EN standards published in the Official Journal of the EU that can be used to show compliance with EU legislation (e.g., RED, CRA). |
| **IEC** | *International Electrotechnical Commission* – An international standards organization for electrical, electronic, and related technologies. Often co-publishes ISO/IEC cybersecurity standards. |
| **PCI DSS** | *Payment Card Industry Data Security Standard* – A global standard for securing credit card transactions and cardholder data. |
| **PIMS** | *Privacy Information Management System* – An extension to ISMS focused on managing personal data privacy (e.g., ISO/IEC 27701). |
| **RED** | *Radio Equipment Directive* – An EU directive that sets requirements for radio-enabled devices, including cybersecurity provisions as of 2025. |
| **SSDF** | *Secure Software Development Framework* – A NIST framework (SP 800-218) outlining best practices for secure software development. |

---

## 💬 Let’s Connect

If you found this post helpful, or if you want to chat more about this or anything at the intersection of development and security — I’d love to hear from you.

Feel free to reach out on <a href="https://www.linkedin.com/in/riccardosirigu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

Always happy to connect with fellow developers, researchers, and security-minded folks.

Stay curious. Stay secure. 🔒🚀

</article>
