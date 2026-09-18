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

Which security standard should you read for the problem in front of you? That is the question this list is meant to help with.

Standards describe technical and organizational ways to protect systems, data and infrastructure. They are not laws, but they are often needed to demonstrate compliance with requirements such as the <a href="https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act" target="_blank" rel="noopener noreferrer">Cyber Resilience Act (CRA)</a> and the <a href="https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red_en" target="_blank" rel="noopener noreferrer">Radio Equipment Directive (RED)</a>.

The useful reference depends on what you are building. Enterprise IT, cloud services, vehicles, health software and industrial systems do not all need the same starting point. Applied correctly, the standards below help with security, resilience and demonstrating compliance.

---

<h2 id="what-you-ll-find-in-this-guide">What this guide covers</h2>

I have grouped the references by the work they support. The guide covers:

- How security policies and standards relate to the rules and decisions inside an organization
- A breakdown of both horizontal standards (applicable across industries) and vertical standards tailored to specific domains like automotive, healthcare, and industrial systems
- Coverage of specialized areas like secure software development, AI risk, incident response, and more
- Contextual notes to help you understand which standards apply where, and how they map to regulations like GDPR, CRA, RED, and others
- Direct links to authoritative sources

---

<h2 id="from-policies-to-standards">From Policies to Standards</h2>

What is the difference between a policy, a standard and a procedure? Think about the path from a requirement to something a person can actually do:

- Laws & Regulations — define the legal obligations (e.g., GDPR, HIPAA, RED, CRA)
- Policies — internal rules set by your organization to guide actions and align with legal and ethical requirements
- Standards — frameworks and best practices used to implement your policies
- Procedures — the instructions, tools and workflows used to put the standards into practice

> Note on Terminology\
> This post uses “security standards” in a broad, practical sense — including both formal standards (like <a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" rel="noopener noreferrer">ISO/IEC 27001</a>) and widely adopted frameworks (like the <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer">NIST Cybersecurity Framework</a> or <a href="https://www.cisecurity.org/controls/" target="_blank" rel="noopener noreferrer">CIS Controls</a>). Some are certifiable. Others provide guidelines or models for managing risk. I use the word broadly here, but those differences still matter when you choose a reference.

<h3 id="example-policy-standard-procedure">Example: Policy → Standard → Procedure</h3>

| Layer | Example |
|-------|---------|
| Policy | “All access to systems must be approved and reviewed regularly.” |
| Standard | <a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" rel="noopener noreferrer">ISO/IEC 27001 A.9.2</a> – *User access provisioning must be controlled* |
| Procedure | “Use Jira to submit an access request. IT Manager must review and approve. Quarterly audits via AccessReviewBot.” |

In this example, the policy states the rule, the standard gives the requirement, and the procedure tells someone how to request access. That makes the rule easier to apply and audit as the organization grows. It also connects the work to legal obligations and gives customers, partners and auditors something concrete to assess.

> ℹ Note on ISO and IEC\
> The International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC) collaborate to publish many cybersecurity standards under the ISO/IEC label.

> Note on EN and hEN Standards\
> EN standards (European Norms) are official European standards, and hENs are a subset recognized by the EU for legal compliance (e.g., RED, CRA).\
> The OJEU (Official Journal of the European Union) lists harmonised standards that provide *presumption of conformity* with EU laws.

---
<h2 id="core-cybersecurity-standards-isoiec">Core Cybersecurity Standards (ISO/IEC)</h2>


ISO/IEC 27001 is certifiable and widely used for compliance. The other references in this group help with implementation, cloud services, personal information and risk. Start with the part that matches the work you need to do.

- <a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27001</strong></a> – *Information Security Management Systems (ISMS)*\
  Requirements for establishing and maintaining an information security program.

- <a href="https://www.iso.org/standard/75652.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27002</strong></a> – *Information Security Controls*\
  Implementation guidance for ISO/IEC 27001 controls.

- <a href="https://www.iso.org/standard/43757.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27017</strong></a> – *Cloud Security Guidelines*\
  Cloud-specific security recommendations for providers and customers.

- <a href="https://www.iso.org/standard/76559.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27018</strong></a> – *PII Protection in the Cloud*\
  Privacy-specific controls for cloud environments handling personal data.

- <a href="https://www.iso.org/standard/80585.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27005</strong></a> – *Risk Management*\
  Risk assessment and treatment aligned with ISO/IEC 27001.

---

<h2 id="risk-governance--security-frameworks">Risk, Governance & Security Frameworks</h2>

How do you decide which risks to address and which controls to use? These references connect those decisions to the organization’s goals and legal obligations.

- <a href="https://www.isaca.org/resources/cobit" target="_blank" rel="noopener noreferrer"><strong>COBIT</strong></a> – *IT Governance Framework*\
  Helps connect decisions about IT and its operation to what the organization needs to achieve.

- <a href="https://www.iso.org/iso-31000-risk-management.html" target="_blank" rel="noopener noreferrer"><strong>ISO 31000</strong></a> – *Enterprise Risk Management*\
  Gives principles and processes for managing risk across different industries.

- <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer"><strong>NIST Cybersecurity Framework (CSF)</strong></a> – *Risk-Based Cybersecurity Model*\
  Voluntary but widely used framework for managing cybersecurity risks.

- <a href="https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-53</strong></a> – *Security and Privacy Controls*\
  A catalog of detailed controls for information systems.

- <a href="https://csrc.nist.gov/pubs/sp/800/171/r3/final" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-171</strong></a> – *Protecting Controlled Unclassified Information (CUI)*\
  A reference for non-federal organizations that handle sensitive government data.

- <a href="https://www.cisecurity.org/controls/" target="_blank" rel="noopener noreferrer"><strong>CIS Controls</strong></a> – *Prioritized Cybersecurity Best Practices*\
  A practical set of defensive actions for all organization sizes.

- <a href="https://www.cencenelec.eu/news-events/news/2025/eninthespotlight/2025-04-16-en-18037-2025-on-sectoral-cybersecurity-assessment/" target="_blank" rel="noopener noreferrer"><strong>EN 18037:2025</strong></a> – *Guidelines on a sectoral cybersecurity assessment*\
  What role will the product play in its sector? This standard uses risk to identify cybersecurity, assurance and certification requirements for ICT products, processes and services within that system. Manufacturers can use it to derive requirements from the product's intended sector and role. It is not a checklist for every product, and it does not by itself provide presumption of conformity under the CRA.


---

<h2 id="secure-systems-software--supply-chain">Secure Systems, Software & Supply Chain</h2>

How do we build the system, and what do we bring into it from other suppliers? This group covers secure development, systems engineering and supply chain risk.

<h3 id="secure-engineering-development">Secure Engineering & Development</h3>

- <a href="https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-160 Vol. 1</strong></a> – *Engineering Secure Systems*\
  Uses systems engineering principles to address trustworthiness and resilience while building a system.

- <a href="https://www.iso.org/standard/44378.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27034</strong></a> – *Application Security*\
  Covers how to include application security in the software development lifecycle.

- <a href="https://csrc.nist.gov/publications/detail/sp/800-218/final" target="_blank" rel="noopener noreferrer"><strong>NIST SSDF (SP 800-218)</strong></a> – *Secure Software Development Framework*\
  Describes practices to use when designing and building secure software.

<h3 id="supply-chain-security">Supply Chain Security</h3>

- <a href="https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-161 Rev. 1</strong></a> – *Cybersecurity Supply Chain Risk Management*\
  Covers the cybersecurity risks that come with third parties and suppliers.

- <a href="https://www.iso.org/standard/82890.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27036</strong></a> – *Security for Supplier Relationships*\
  Addresses how supplier relationships are managed, what goes into contracts and how assurance continues over time.

- <a href="https://www.iso.org/standard/86450.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 18974:2023</strong></a> – *OpenChain Security Assurance Specification*\
  Defines what an open source software security assurance program needs to include. That gives organizations exchanging software with open source components a common basis for trust. The assurance concerns the program; it does not mean the software has no vulnerabilities.

- <a href="https://www.iso.org/standard/81870.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 5962:2021 (SPDX 2.2.1)</strong></a> – *Software Package Data Exchange*\
  Defines a format for sharing information about software packages, files, snippets and components, along with their metadata. Keep the editions separate: ISO/IEC 5962:2021 standardizes SPDX 2.2.1. The current SPDX specification is 3.0, not the version covered by that ISO edition.

- <a href="https://ecma-international.org/publications-and-standards/standards/ecma-424/" target="_blank" rel="noopener noreferrer"><strong>ECMA-424, 2nd edition (CycloneDX 1.7)</strong></a> – *CycloneDX Bill of Materials Specification*\
  Defines a machine-readable JSON format for sharing information about software and hardware components, services, dependencies, vulnerabilities and other supply-chain artefacts. Like SPDX, it helps you see what is in the software and analyze it. Having an SBOM does not prove that the product is secure.

The <a href="https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng" target="_blank" rel="noopener noreferrer">CRA, Annex I, Part II, point 1</a> requires manufacturers to identify and document vulnerabilities and components, including an SBOM in a commonly used, machine-readable format covering at least the product's top-level dependencies. The regulation does not name SPDX or CycloneDX as mandatory formats; Article 13(24) empowers the Commission to specify the format and elements through implementing acts. The SBOM helps with vulnerability handling. You still need to do the work of handling those vulnerabilities.

---

<h2 id="sector-specific--eu-aligned-standards">Sector-Specific & EU-Aligned Standards</h2>

Building an IoT device, a vehicle component or an industrial product? This group collects the sector-specific references, followed by standards connected to RED and CRA requirements.

<h3 id="iot-automotive-medical-and-industrial">IoT, Automotive, Medical, and Industrial</h3>

- <a href="https://www.iso.org/standard/70918.html" target="_blank" rel="noopener noreferrer"><strong>ISO/SAE 21434</strong></a> – *Automotive Cybersecurity Engineering*\
  Ensures cybersecurity across the vehicle lifecycle. Required for UNECE R155.

- <a href="https://www.iso.org/standard/77796.html" target="_blank" rel="noopener noreferrer"><strong>ISO 24089:2023</strong></a> – *Road vehicles — Software update engineering*\
  Specifies requirements and recommendations for software update engineering for road vehicles. Useful for UNECE R156.

- <a href="https://www.etsi.org/deliver/etsi_en/303600_303699/303645/03.01.03_60/en_303645v030103p.pdf" target="_blank" rel="noopener noreferrer"><strong>ETSI EN 303 645</strong></a> – *Baseline Security for Consumer IoT Devices*\
  Sets baseline security requirements like default passwords and updates.

- <a href="https://www.etsi.org/deliver/etsi_tr/103900_103999/103935/01.01.01_60/tr_103935v010101p.pdf" target="_blank" rel="noopener noreferrer"><strong>ETSI TR 103 935</strong></a> – *Assessment of cyber risk based on products' properties*  Provides guidance for evaluating the cyber risk of IoT products

- <a href="https://www.iso.org/standard/72026.html" target="_blank" rel="noopener noreferrer"><strong>IEC 81001-5-1</strong></a> – *Health software and health IT systems safety, effectiveness and security*  defines the life cycle requirements for development and maintenance of health software.

- <a href="https://webstore.iec.ch/en/publication/33615" target="_blank" rel="noopener noreferrer"><strong>IEC 62443-4-1:2018</strong></a> and <a href="https://webstore.iec.ch/en/publication/34421" target="_blank" rel="noopener noreferrer">IEC 62443-4-2:2019</a> – *Industrial Automation & Control Systems Security*\
  Part 4-1 covers the secure development lifecycle for products used in industrial automation and control systems. Part 4-2 covers technical security requirements for IACS components. One addresses how the product is developed; the other addresses controls in the component. Both belong to an industrial context. They are not standards for every digital product, nor are they automatically harmonised under the CRA.

<h3 id="eu-regulatory-alignment">EU Regulatory Alignment</h3>

The EN 40000-1 series is being developed to support cybersecurity requirements for products with digital elements. Its parts address different questions: what the terms mean, which cyber-resilience principles to use, how to handle vulnerabilities, and what generic security requirements a product needs to meet.

- <a href="https://www.dinmedia.de/en/draft-standard/din-en-40000-1-1/399664868" target="_blank" rel="noopener noreferrer"><strong>prEN 40000-1-1:2025</strong></a> – *Vocabulary*\
  Establishes the terminology used across the series.

- <a href="https://www.dinmedia.de/en/draft-standard/din-en-40000-1-2/399705978" target="_blank" rel="noopener noreferrer"><strong>prEN 40000-1-2:2025</strong></a> – *Principles for cyber resilience*\
  Addresses cyber-resilience principles in product risk management and throughout the product lifecycle.

- <a href="https://www.dinmedia.de/en/draft-standard/din-en-40000-1-3/404676965" target="_blank" rel="noopener noreferrer"><strong>prEN 40000-1-3:2025</strong></a> – *Vulnerability handling*\
  Covers the vulnerability-handling processes used by manufacturers of products with digital elements.

- <a href="https://www.cencenelec.eu/news-events/events/2026/2026-03-05-cra-standards-unlocked-deep-dive-session-security-controls-generic-security-requirements/" target="_blank" rel="noopener noreferrer"><strong>EN 40000-1-4 draft</strong></a> – *Cybersecurity requirements for products with digital elements — Generic security requirements*\
  The drafting group has finalized the working document and sent it to the European Commission. The standard itself remains in drafting. It connects CRA essential product requirements to common threats, derives security objectives and lists possible controls. The product risk assessment determines which controls to select. It will not confer presumption of conformity.

You can use these documents to prepare technically for the CRA, but a draft is still a draft. Adoption as an EN and citation in the Official Journal are separate steps. Presumption of conformity applies only to the CRA requirements covered by a cited harmonised standard.

- <a href="https://eur-lex.europa.eu/eli/dec_impl/2025/138/oj/eng" target="_blank" rel="noopener noreferrer"><strong>EN 18031 series</strong></a> – *Cybersecurity for Radio Equipment (RED)*
  Harmonised under the RED, with specific restrictions, for the cybersecurity requirements in Article 3(3)(d), (e), and (f). It does not by itself provide presumption of conformity under the CRA.

---

<h2 id="identity-authentication--cryptography">Identity, Authentication & Cryptography</h2>

Who is the user? How do they authenticate? What protects the communication? These references cover identity, credentials, access and cryptography.

- Helps you design secure authentication flows for users and systems
- Supports GDPR, CRA, and eIDAS compliance with structured identity assurance
- Essential for systems involving SSO, MFA, remote onboarding, or cross-border ID verification

> Note: <a href="https://digital-strategy.ec.europa.eu/en/policies/eidas-regulation" target="_blank" rel="noopener noreferrer">eIDAS</a> (Electronic Identification, Authentication and Trust Services) is an EU regulation that ensures secure and interoperable digital identity, signatures, and trust services across member states. It's especially relevant for organizations handling electronic transactions or user identification in the EU.

<h3 id="nist-digital-identity-guidelines-sp-800-63">NIST Digital Identity Guidelines (SP 800-63)</h3>

- <a href="https://pages.nist.gov/800-63-3/sp800-63a.html" target="_blank" rel="noopener noreferrer"><strong>800-63A</strong></a> – *Enrollment & Identity Proofing*
- <a href="https://pages.nist.gov/800-63-3/sp800-63b.html" target="_blank" rel="noopener noreferrer"><strong>800-63B</strong></a> – *Authentication & Lifecycle Management*
- <a href="https://pages.nist.gov/800-63-3/sp800-63c.html" target="_blank" rel="noopener noreferrer"><strong>800-63C</strong></a> – *Federation & Assertions*

> Key Concepts:\
> - IAL: Identity Assurance Level\
> - AAL: Authenticator Assurance Level\
> - FAL: Federation Assurance Level

<h3 id="iso-iec-identity-standards">ISO/IEC Identity Standards</h3>

- <a href="https://www.iso.org/standard/87485.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 24760-1</strong></a> – *Framework for Identity Management*
- <a href="https://www.iso.org/standard/45138.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 29115</strong></a> – *Authentication Assurance Framework*
- <a href="https://www.iso.org/standard/62290.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 29003</strong></a> – *Identity Proofing*

<h3 id="cryptographic-standards">Cryptographic Standards</h3>

- <a href="https://csrc.nist.gov/publications/detail/fips/140/3/final" target="_blank" rel="noopener noreferrer"><strong>NIST FIPS 140-3</strong></a> – *Security Requirements for Cryptographic Modules*
- <a href="https://csrc.nist.gov/publications/detail/sp/800-131a/rev-2/final" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-131A Rev. 2</strong></a> – *Approved Algorithm Transitions*
- <a href="https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines" target="_blank" rel="noopener noreferrer"><strong>NIST</strong></a> – *Cryptographic Standards and Guidelines*
- <a href="https://www.iso.org/standard/82423.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 19790</strong></a> – *International Crypto Module Requirements*
- <a href="https://csrc.nist.gov/pubs/sp/800/52/r2/final" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-52 Rev. 2</strong></a>  - Guidelines for the Selection, Configuration, and Use of Transport Layer Security (TLS) Implementations
- <a href="https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards" target="_blank" rel="noopener noreferrer"><strong>NIST Post-Quantum Encryption Standards</strong></a>

---

<h2 id="incident--vulnerability-management">Incident & Vulnerability Management</h2>

What do we do when something goes wrong, or when someone reports a vulnerability? These references cover detection, response and disclosure.

<h3 id="incident-response">Incident Response</h3>

- <a href="https://csrc.nist.gov/Projects/incident-response" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-61 Rev. 3</strong></a>  Incident Response Recommendations and Considerations for Cybersecurity Risk Management
- <a href="https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final" target="_blank" rel="noopener noreferrer"><strong>NIST SP 800-34 Rev. 1</strong></a>  Contingency Planning Guide
- <a href="https://www.iso.org/standard/78973.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27035</strong></a> – *Incident Management Lifecycle*
- <a href="https://www.iso.org/standard/78973.html" target="_blank" rel="noopener noreferrer"><strong>ISO 22301:2019</strong></a> – *Security and resilience* - Business continuity management systems

<h3 id="vulnerability-management-disclosure">Vulnerability Management & Disclosure</h3>

- <a href="https://www.iso.org/standard/69725.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 30111</strong></a> – *Vulnerability Handling Processes*
- <a href="https://www.iso.org/standard/72311.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 29147</strong></a> – *Vulnerability Disclosure Guidelines*

- <a href="https://www.iso.org/standard/89986.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 20153:2025 (CSAF 2.0)</strong></a> – *Common Security Advisory Framework*\
  Defines a machine-readable format for security advisories: affected products, vulnerabilities, impact status and remediation information. Use it alongside the handling and disclosure processes in ISO/IEC 30111 and ISO/IEC 29147. CSAF is not an SBOM, and sending an advisory does not replace regulatory notification obligations.

---

<h2 id="data-privacy--payment-security">Data Privacy & Payment Security</h2>

If you handle personal or payment data, these references address its protection, including GDPR alignment and industry requirements.

- <a href="https://www.pcisecuritystandards.org/" target="_blank" rel="noopener noreferrer"><strong>PCI DSS</strong></a> – *Payment Card Industry Data Security Standard*
- <a href="https://www.iso.org/standard/71670.html" target="_blank" rel="noopener noreferrer"><strong>ISO/IEC 27701</strong></a> – *Privacy Information Management System (PIMS)*

---

<h2 id="final-thoughts">Where to start</h2>

Start with the system and the problem you need to solve. Which reference addresses that problem? What would applying it change in the way you build, operate or maintain the system?

The same list serves people building connected cars, running cloud services and operating critical infrastructure, but the useful parts will differ. Use the relevant references to manage risk and demonstrate compliance. Be able to explain what you applied and why; that is more useful to a customer than a list of standard numbers.

---


<h2 id="glossary">Glossary</h2>

| Term | Definition |
|----------|----------------|
| AI RMF | *Artificial Intelligence Risk Management Framework* – A NIST-developed model for managing AI-specific risks like bias, security, and trustworthiness. |
| AIMS | *Artificial Intelligence Management System* – A certifiable ISO/IEC framework for governing AI across its lifecycle (e.g., ISO/IEC 42001). |
| CIS | *Center for Internet Security* – A nonprofit organization that publishes prioritized security best practices (like CIS Controls). |
| COBIT | *Control Objectives for Information and Related Technologies* – A governance and management framework for enterprise IT. |
| CRA | *Cyber Resilience Act* – A European regulation that introduces mandatory cybersecurity requirements for products with digital elements. |
| CSAF | *Common Security Advisory Framework* – A machine-readable format for structured security advisories. |
| CSF | *Cybersecurity Framework* – A voluntary NIST framework that helps organizations manage and reduce cybersecurity risk. |
| C-SCRM | *Cybersecurity Supply Chain Risk Management* – A structured approach to identifying and managing supply chain cybersecurity risks. |
| CUI | *Controlled Unclassified Information* – Sensitive U.S. federal data that requires protection but isn’t classified. |
| eIDAS | *Electronic Identification, Authentication and Trust Services* – An EU regulation that standardizes digital identity, signatures, and trust services across member states. |
| EN | *European Norm* – A standard adopted by recognized European standardization organizations (CEN, CENELEC, or ETSI). |
| ETSI | *European Telecommunications Standards Institute* – A major European standards body, especially for telecommunications and IoT. |
| GRC | *Governance, Risk, and Compliance* – An approach to aligning IT with business goals while managing risk and meeting compliance requirements. |
| hEN | *Harmonised European Standard* – A subset of EN standards published in the Official Journal of the EU that can be used to show compliance with EU legislation (e.g., RED, CRA). |
| IEC | *International Electrotechnical Commission* – An international standards organization for electrical, electronic, and related technologies. Often co-publishes ISO/IEC cybersecurity standards. |
| IACS | *Industrial Automation and Control Systems* – Systems and components used to monitor and control industrial processes. |
| PCI DSS | *Payment Card Industry Data Security Standard* – A global standard for securing credit card transactions and cardholder data. |
| PIMS | *Privacy Information Management System* – An extension to ISMS focused on managing personal data privacy (e.g., ISO/IEC 27701). |
| RED | *Radio Equipment Directive* – An EU directive that sets requirements for radio-enabled devices, including cybersecurity provisions as of 2025. |
| SBOM | *Software Bill of Materials* – A machine-readable inventory of software components and dependency information. |
| SSDF | *Secure Software Development Framework* – A NIST framework (SP 800-218) outlining best practices for secure software development. |

---

<h2 id="let-s-connect">Questions or feedback?</h2>

If you want to discuss how one of these references fits your work, you can reach me on <a href="https://www.linkedin.com/in/riccardosirigu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.

</article>
