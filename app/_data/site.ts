export const CONTACT_EMAIL = 'info@vyronsoft.co.za';
export const CONTACT_PHONE_DISPLAY = '072 080 4844';
export const CONTACT_PHONE_HREF = 'tel:+27720804844';
export const DEMO_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('VYRONSOFT demo request')}`;
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

export type Platform = {
  slug: string;
  name: string;
  category: string;
  description: string;
  href: string;
  domain: string;
  image: string;
  accent: string;
};

// Card images are complete product banners (logo, category, description, CTA baked in).
// The six live VYRONSOFT ecosystem platforms. Do not add placeholder or future products here.
export const platforms: Platform[] = [
  {
    slug: 'volora',
    name: 'VOLORA',
    category: 'Cost Intelligence',
    description: 'AI-powered cost intelligence for food manufacturers and producers.',
    href: 'https://www.volora.co.za',
    domain: 'volora.co.za',
    image: '/images/volora-card.png',
    accent: '#ff8a2a',
  },
  {
    slug: 'umora',
    name: 'UMORA',
    category: 'Human & Workforce Intelligence',
    description: 'Workforce management, HR operations and payroll readiness.',
    href: 'https://www.umora.co.za',
    domain: 'umora.co.za',
    image: '/images/umora-card.png',
    accent: '#a98bff',
  },
  {
    slug: 'lavorare',
    name: 'LAVORARE',
    category: 'Workforce & Payroll Intelligence',
    description: 'Complete workforce and payroll control for your business.',
    href: 'https://www.lavorare.co.za',
    domain: 'lavorare.co.za',
    image: '/images/lavorare-card.png',
    accent: '#4f9dff',
  },
  {
    slug: 'safenza',
    name: 'SAFENZA',
    category: 'Safety Intelligence',
    description: 'Smarter safety management for a safer, compliant workplace.',
    href: 'https://www.safenza.co.za',
    domain: 'safenza.co.za',
    image: '/images/safenza-card.png',
    accent: '#2fd47a',
  },
  {
    slug: 'provena',
    name: 'PROVENA',
    category: 'Sustainability & Compliance Intelligence',
    description: 'Turn sustainability and compliance into real business value.',
    href: 'https://www.provena.co.za',
    domain: 'provena.co.za',
    image: '/images/provena-card.png',
    accent: '#8fd14f',
  },
  {
    slug: 'precisia',
    name: 'PRECISIA',
    category: 'Finance Intelligence',
    description: 'Financial intelligence for better business decisions.',
    href: 'https://www.precisia.co.za',
    domain: 'precisia.co.za',
    image: '/images/precisia-card.png',
    accent: '#f2bd45',
  },
];
