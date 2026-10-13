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
  heading: string;
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
    heading: "Secure by Design: Fixing the Cause, Not Just the Finding",
    eyebrow: 'Secure by Design',
    title: 'Secure-by-Design Engineering for Product and Technology Leaders',
    description:
      'Secure-by-design guidance for engineering leaders: architecture, guardrails, accountability and product risk decisions informed by real-world attacks.',
    summary:
      "Finding the same vulnerability across several products is a good indication that fixing individual findings is not enough. Secure by Design means changing the architecture, defaults, or development practices that keep making those problems possible.",
    highlights: [
      {
        href: '/blog/ai-will-kill-us-all-security-by-design-and-cyber-resilience-act/',
        label: 'AI will kill us all',
        description: 'Why adaptive AI attacks make secure defaults and sound engineering decisions even more important.',
      },
      {
        href: '/blog/secure-by-design-hamster-wheel-of-pain/',
        label: 'Escaping the Hamster Wheel of Pain',
        description: "What recurring vulnerabilities tell us about the way we build software, and what needs to change.",
      },
      {
        href: '/blog/building-secure-software-with-a-card-game/',
        label: 'Building Secure Software with OWASP Cornucopia',
        description: 'A collaborative way to bring threat analysis into design conversations.',
      },
    ],
    sections: [
      {
        title: "Why timing matters",
        paragraphs: [
          "A security review late in development can still find serious problems. By then, however, some of the decisions behind them may be expensive to reverse. I prefer to work on authorization models, trust boundaries, data flows, and security assumptions while the system is still being designed.",
          "The goal is to give teams secure defaults, shared components, and tested development patterns, so they don't have to solve the same security problems from scratch every time. Adding more approval steps will not do that on its own.",
        ],
      },
      {
        title: "What needs to be in place",
        bullets: [
          'Threat modeling tied to real architecture decisions and meaningful system changes.',
          "Secure defaults and reusable components based on problems we have already seen in assessments and incidents.",
          'Clear ownership for product risk, security exceptions and legacy remediation.',
          "A way to turn recurring vulnerabilities into platform changes that benefit more than one team.",
          "Measurements that show whether the same problems keep coming back, not just how many tickets have been closed.",
        ],
      },
      {
        title: "What offensive security adds",
        paragraphs: [
          "An assessment shows how a system fails under realistic attack conditions. If several products rely on the same unsafe assumption, fixing one endpoint leaves the others exposed. Understanding that shared cause helps us decide what to change across products, teams, and future releases.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: '/expertise/offensive-security/',
        label: 'Offensive Security',
        description: "Understand how attacks work and which engineering decisions made them possible.",
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
    heading: "Cyber Resilience Act: What It Means for Product Engineering",
    eyebrow: 'Cyber Resilience Act',
    title: 'Cyber Resilience Act: Product Security and Engineering Readiness',
    description:
      'Technical guidance on Cyber Resilience Act readiness, secure-by-design product engineering, vulnerability handling and European cybersecurity standards.',
    summary:
      "For manufacturers, the Cyber Resilience Act affects how security risks are assessed, how requirements turn into product decisions, and how vulnerabilities are handled throughout the support period. Documentation needs to reflect security measures that actually work.",
    highlights: [
      {
        href: '/blog/cyber-resilience-act-ten-common-misconceptions-about-cra-compliance/',
        label: 'Ten CRA Compliance Misconceptions',
        description: "Common misunderstandings about CRA requirements and what they mean for product decisions.",
      },
      {
        href: '/blog/cyber-resilience-act-cybersecurity-risk-assessment/',
        label: 'CRA Cybersecurity Risk Assessment',
        description: 'Product scope, classification and risk evaluation, from design through maintenance.',
      },
      {
        href: '/blog/guide-to-understanding-eu-cybersecurity-standards-and-policy-essential-resources/',
        label: 'EU Cybersecurity Laws and Standards',
        description: 'A map of the institutions, regulations and standards shaping European cybersecurity.',
      },
    ],
    sections: [
      {
        title: "From requirements to engineering decisions",
        paragraphs: [
          "The CRA affects decisions made before a product with digital elements is released, as well as obligations that continue after it reaches the market. Risk assessment informs architecture and security controls. Vulnerability handling needs a process that can receive, analyze, and address reports. Technical documentation needs to reflect what was implemented, not just what was planned.",
          "There is a difference between what the Regulation requires and the technical methods we choose to meet those requirements. Keeping that distinction clear helps teams assign responsibilities and collect evidence of what they have done.",
        ],
      },
      {
        title: "What manufacturers need to address",
        bullets: [
          'Product cybersecurity risk assessment and secure-by-design requirements.',
          'Vulnerability handling, coordinated disclosure, remediation and reporting workflows.',
          "Software supply-chain security, dependency management and SBOM-related evidence.",
          'Security update mechanisms and support-period commitments.',
          'Technical documentation and traceability from risk to implemented control.',
          'Alignment with relevant European and international cybersecurity standards.',
        ],
      },
      {
        title: "Standards do not replace risk assessment",
        paragraphs: [
          "The EN 40000 series is part of the standardization work supporting the CRA. Standards can help teams apply requirements consistently and produce evidence, but they cannot make every security decision for a product. Two products may need different controls because of their architecture, intended use, attack surface, and risks. Each product still needs its own risk assessment and someone responsible for the decisions.",
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
    heading: "Offensive Security: Understanding How and Why Attacks Work",
    eyebrow: 'Offensive Security',
    title: 'Offensive Security as a Systemic Engineering Feedback Loop',
    description:
      'Offensive security leadership focused on systemic risk, attack-informed engineering and turning assessment evidence into durable product improvements.',
    summary:
      "A useful assessment tells us how an attacker could compromise a system, what made the attack possible, and which risks deserve attention first. The findings matter, but so do the assumptions and design decisions behind them.",
    highlights: [
      {
        href: '/blog/anthropic-ai-worms-slow-motion-air-fryers/',
        label: 'Anthropic AI Worms in Slow Motion and Air Fryers',
        description: 'What simulated replication and distributed LLM inference demonstrate, and where real IoT constraints complicate the picture.',
      },
      {
        href: '/blog/ai-will-kill-us-all-security-by-design-and-cyber-resilience-act/',
        label: 'AI will kill us all',
        description: 'How AI agents change attack strategies, and why insecure software and configurations still matter.',
      },
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
        title: "Why severity scores are not enough",
        paragraphs: [
          "A severity score helps prioritize, but it does not explain the whole risk. Exploitability, privileges, architecture, and what an attacker can reach all matter. Weak trust boundaries, inconsistent authorization, and platform choices can also explain why the same weakness appears in several places.",
          "Engineering and product leaders need those details to decide what deserves attention first, rather than treating each finding as an isolated ticket.",
        ],
      },
      {
        title: "What a useful assessment should tell us",
        bullets: [
          "Which attack paths are credible and what their impact on the product and business could be.",
          "Why a vulnerability exists and whether the same weakness could affect other parts of the system.",
          "What needs to change in code, architecture, shared components, or the way security decisions are made.",
          "How teams can test the fixes and prevent the weakness from returning in future releases.",
          "What we know, what remains uncertain, and which risks need a decision from leadership.",
        ],
      },
      {
        title: "Fix the system, not just the ticket",
        paragraphs: [
          "If the same vulnerability keeps turning up, telling developers to be more careful probably will not solve it. Maybe the framework makes the insecure option too easy, a shared component is missing, or a legacy capability needs to be retired. A safer abstraction, a tested pattern, or an enforceable platform control can change what keeps making the problem possible. Otherwise, we will probably end up closing the same ticket in a different repository.",
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
