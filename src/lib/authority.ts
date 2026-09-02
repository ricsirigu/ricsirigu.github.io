export interface AuthorityLinkData {
  description: string;
  external?: boolean;
  href: string;
  label: string;
}

export interface AuthoritySectionData {
  bullets?: string[];
  paragraphs?: string[];
  title: string;
}

export interface ExpertisePageData {
  description: string;
  eyebrow: string;
  highlights: AuthorityLinkData[];
  relatedLinks: AuthorityLinkData[];
  sections: AuthoritySectionData[];
  slug: string;
  summary: string;
  title: string;
}

export const expertisePages: ExpertisePageData[] = [
  {
    slug: 'secure-by-design',
    eyebrow: 'Secure by Design',
    title: 'Secure-by-Design Engineering for Product and Technology Leaders',
    description:
      'Secure-by-design guidance for engineering leaders: architecture, guardrails, accountability and product risk decisions informed by real-world attacks.',
    summary:
      'Secure by Design is an engineering operating model: identify risk while systems are still being designed, turn recurring findings into reusable guardrails, and make the secure path the easiest path for product teams.',
    highlights: [
      {
        href: '/blog/secure-by-design-hamster-wheel-of-pain/',
        label: 'Escaping the Hamster Wheel of Pain',
        description: 'Why recurring vulnerabilities are management signals and how engineering systems should respond.',
      },
      {
        href: '/blog/building-secure-software-with-a-card-game/',
        label: 'Building Secure Software with OWASP Cornucopia',
        description: 'A collaborative way to bring threat analysis into design conversations.',
      },
    ],
    sections: [
      {
        title: 'The intervention point matters',
        paragraphs: [
          'Security reviews performed after architecture and implementation can identify defects, but they rarely remove the conditions that keep producing them. Secure-by-design work moves the intervention point upstream, where trust boundaries, authorization models, data flows and operational assumptions can still be changed at reasonable cost.',
          'The objective is not to add more gates. It is to create an engineering system in which approved patterns, secure defaults and platform capabilities reduce the number of unsafe decisions every team must make independently.',
        ],
      },
      {
        title: 'What an effective program needs',
        bullets: [
          'Threat modeling tied to real architecture decisions and meaningful system changes.',
          'Reusable guardrails and paved roads that encode lessons from assessments and incidents.',
          'Clear ownership for product risk, security exceptions and legacy remediation.',
          'Feedback loops that convert recurring vulnerability classes into platform improvements.',
          'Metrics that show whether risk production is declining, not only whether findings are being closed.',
        ],
      },
      {
        title: 'How offensive evidence improves design',
        paragraphs: [
          'Offensive security provides evidence about how a system fails under realistic pressure. The highest-value outcome is not the individual finding: it is the architectural lesson that can be applied across products, teams and future releases.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/expertise/offensive-security/',
        label: 'Offensive Security',
        description: 'Turn attack evidence into systemic engineering improvement.',
      },
      {
        href: '/expertise/cyber-resilience-act/',
        label: 'Cyber Resilience Act',
        description: 'Connect regulatory requirements with product engineering decisions.',
      },
    ],
  },
  {
    slug: 'cyber-resilience-act',
    eyebrow: 'Cyber Resilience Act',
    title: 'Cyber Resilience Act: Product Security and Engineering Readiness',
    description:
      'Technical guidance on Cyber Resilience Act readiness, secure-by-design product engineering, vulnerability handling and European cybersecurity standards.',
    summary:
      'The Cyber Resilience Act turns product cybersecurity into a lifecycle obligation. Effective readiness requires more than a compliance checklist: manufacturers need engineering controls, vulnerability-handling capabilities and evidence that remain effective throughout the support period.',
    highlights: [
      {
        href: '/blog/cyber-resilience-act-ten-common-misconceptions-about-cra-compliance/',
        label: 'Ten CRA Compliance Misconceptions',
        description: 'Common mistakes that distort readiness programs and product security decisions.',
      },
      {
        href: '/blog/guide-to-understanding-eu-cybersecurity-standards-and-policy-essential-resources/',
        label: 'EU Cybersecurity Laws and Standards',
        description: 'A map of the institutions, regulations and standards shaping European cybersecurity.',
      },
    ],
    sections: [
      {
        title: 'Readiness is an engineering capability',
        paragraphs: [
          'The CRA affects how products with digital elements are designed, developed, maintained and supported. Security requirements must be translated into architecture decisions, development practices, technical documentation, vulnerability handling and coordinated reporting processes.',
          'A credible program keeps regulatory facts separate from technical interpretation and connects each obligation to an accountable process and verifiable evidence.',
        ],
      },
      {
        title: 'Core capability areas',
        bullets: [
          'Product cybersecurity risk assessment and secure-by-design requirements.',
          'Vulnerability handling, coordinated disclosure, remediation and reporting workflows.',
          'Software supply-chain visibility, dependency governance and SBOM-related evidence.',
          'Security update mechanisms and support-period commitments.',
          'Technical documentation and traceability from risk to implemented control.',
          'Alignment with relevant European and international cybersecurity standards.',
        ],
      },
      {
        title: 'Standards and implementation',
        paragraphs: [
          'Standards can provide repeatable engineering methods and evidence, but they do not replace product-specific risk analysis. The implementation challenge is to create controls that work across a portfolio while preserving clear accountability for the risks of each product.',
          'This page provides technical and engineering context and is not legal advice.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: 'https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act',
        label: 'European Commission: Cyber Resilience Act',
        description: 'Primary European Commission information about the Regulation.',
        external: true,
      },
      {
        href: '/expertise/secure-by-design/',
        label: 'Secure by Design',
        description: 'Build security into architecture and engineering systems.',
      },
    ],
  },
  {
    slug: 'offensive-security',
    eyebrow: 'Offensive Security',
    title: 'Offensive Security as a Systemic Engineering Feedback Loop',
    description:
      'Offensive security leadership focused on systemic risk, attack-informed engineering and turning assessment evidence into durable product improvements.',
    summary:
      'An assessment is most valuable when it explains how the system fails, why the failure was possible and which engineering change can prevent the same class of weakness across the organization.',
    highlights: [
      {
        href: '/blog/exploring-cve-2025-29927-a-hands-on-look-at-authorization-bypass-in-nextjs-middleware/',
        label: 'Hands-on Analysis of CVE-2025-29927',
        description: 'A practical look at authorization bypass behavior in Next.js middleware.',
      },
      {
        href: '/blog/javascript-malware-by-a-beaufiful-girl/',
        label: 'JavaScript Malware Analysis',
        description: 'A technical walk-through of a real malicious JavaScript sample.',
      },
    ],
    sections: [
      {
        title: 'From findings to failure modes',
        paragraphs: [
          'Finding severity is only one dimension of risk. A useful offensive program also identifies repeated assumptions, weak trust boundaries, inconsistent authorization and platform choices that make whole classes of vulnerabilities inexpensive to introduce.',
          'The output should give engineering and product leaders a prioritized view of systemic exposure, not only a queue of isolated tickets.',
        ],
      },
      {
        title: 'What high-value assessment work produces',
        bullets: [
          'Attack paths explained in the context of business and product risk.',
          'Root-cause analysis that distinguishes local defects from systemic weaknesses.',
          'Remediation guidance at code, architecture, platform and governance levels.',
          'Reusable test scenarios and guardrails for future releases.',
          'Executive communication that preserves technical accuracy without hiding uncertainty.',
        ],
      },
      {
        title: 'Closing the feedback loop',
        paragraphs: [
          'The mature response to a recurring finding is not another reminder to developers. It is an engineering change: a safer abstraction, an approved pattern, a platform control, a measurable standard or the removal of a legacy capability that should no longer exist.',
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/expertise/secure-by-design/',
        label: 'Secure by Design',
        description: 'Use offensive evidence to improve architecture and engineering defaults.',
      },
      {
        href: '/contact/',
        label: 'Professional enquiries',
        description: 'Contact Riccardo Sirigu about technical, training or speaking enquiries.',
      },
    ],
  },
];
