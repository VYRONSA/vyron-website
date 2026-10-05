import Image from 'next/image';
import type { CSSProperties } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Building2,
  Cctv,
  ChartNoAxesColumnIncreasing,
  Clock,
  CloudUpload,
  Compass,
  CookingPot,
  Cpu,
  Croissant,
  Database,
  Factory,
  HardHat,
  HeartPulse,
  Lock,
  Mail,
  MapPin,
  Phone,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Soup,
  Sprout,
  TrendingUp,
  Truck,
  UtensilsCrossed,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SiteHeader from './_components/SiteHeader';
import RevealObserver from './_components/RevealObserver';
import Wordmark from './_components/Wordmark';
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  DEMO_MAILTO,
  platforms,
} from './_data/site';

const benefits = [
  { title: 'AI-Powered', text: 'Smarter automation for better decisions.', icon: Cpu, tone: 'blue' },
  { title: 'Real Results', text: 'Measurable growth across every metric.', icon: ChartNoAxesColumnIncreasing, tone: 'orange' },
  { title: 'Secure & Reliable', text: 'Enterprise-grade security you trust.', icon: ShieldCheck, tone: 'blue' },
  { title: 'Future Ready', text: 'Scalable solutions built for tomorrow.', icon: Settings, tone: 'orange' },
];

const industries = [
  { label: 'Construction', icon: HardHat },
  { label: 'Retail & Wholesale', icon: ShoppingCart },
  { label: 'Logistics & Transport', icon: Truck },
  { label: 'Property Management', icon: Building2 },
  { label: 'Agriculture', icon: Sprout },
  { label: 'Healthcare', icon: HeartPulse },
  { label: 'Professional Services', icon: Briefcase },
  { label: 'Manufacturing', icon: Factory },
];

// Wording is deliberately "aligned"/"target": these are design principles, not certifications.
const trustItems = [
  { title: 'ISO 27001', text: 'Aligned', icon: ShieldCheck },
  { title: 'POPIA', text: 'Aligned', icon: Lock },
  { title: 'Encrypted', text: 'Data', icon: Database },
  { title: 'Regular', text: 'Backups', icon: CloudUpload },
  { title: '99.9%', text: 'Uptime Target', icon: Clock },
];

const NEW_TAB = ' (opens in a new tab)';

type Client = {
  name: string;
  description: string;
  accent: string;
  href?: string;
  domain?: string;
  // Authentic logo from the client's own website, shown at its native proportions. `screen` drops the
  // black backing of JPEG logos so they sit on the dark stage without being recoloured.
  logo?: { src: string; width: number; height: number; blend?: 'screen'; plate?: boolean };
  // Photography published on the client's own website, used as a subtle background layer.
  photo?: { src: string; position?: string };
  products?: string[];
  // Decorative line motif for cards without company photography; never presented as a logo.
  motif?: LucideIcon;
};

// Descriptions and domains come from each client's own website or the details the client supplied.
// Clients without a verified live website show "Website available on request" instead of a guessed URL.
const clients: Client[] = [
  {
    name: 'Cutting Edge Cuisine',
    description: 'Food manufacturer based in Montague Gardens, Cape Town, specialising in sushi and prepared food production.',
    accent: '#e5484d',
    motif: CookingPot,
  },
  {
    name: 'Mama Yama',
    description: 'Food manufacturer and distributor based in Ferndale, Randburg.',
    accent: '#f0a63a',
    motif: UtensilsCrossed,
  },
  {
    name: 'Food Socks South Africa',
    description: 'Affordable, nutritious soya-based meals made from locally sourced dehydrated ingredients.',
    accent: '#8fb339',
    href: 'https://foodsock.co.za',
    domain: 'foodsock.co.za',
    logo: { src: '/images/clients/foodsock-logo.png', width: 900, height: 449, plate: true },
    motif: Soup,
  },
  {
    name: 'Kingdom Foods',
    description: 'Purpose-driven food manufacturer of scalable, nutritious feeding solutions such as VitaKidz and Maxi Blend.',
    accent: '#e0b040',
    href: 'https://kingdomfoods.co.za',
    domain: 'kingdomfoods.co.za',
    logo: { src: '/images/clients/kingdom-foods-logo.png', width: 265, height: 149 },
    products: ['/images/clients/kingdom-foods-vitakidz.png', '/images/clients/kingdom-foods-maxi-blend.png'],
  },
  {
    name: 'Handcrafted Foods',
    description: 'Handcrafted food products, including gourmet pies, artisan croissants, preserves and frozen fresh products.',
    accent: '#b5d334',
    motif: Croissant,
  },
  {
    name: 'Advanced 4x4',
    description: 'South African manufacturer of 4x4 and overlanding accessories, engineered for demanding conditions.',
    accent: '#4f9bff',
    href: 'https://advanced4x4.co.za',
    domain: 'advanced4x4.co.za',
    logo: { src: '/images/clients/advanced-4x4-logo.jpg', width: 600, height: 600, blend: 'screen' },
    photo: { src: '/images/clients/advanced-4x4-terrain.jpg', position: '50% 60%' },
  },
  {
    name: 'NYOT',
    description: 'Technology and security solutions, including CCTV, access control, biometrics, time and attendance, and VoIP.',
    accent: '#38bdf8',
    href: 'https://nyot.co.za',
    domain: 'nyot.co.za',
    logo: { src: '/images/clients/nyot-logo.jpg', width: 700, height: 700, blend: 'screen' },
    motif: Cctv,
  },
  {
    name: 'Bridgewater Logistics',
    description: 'Full-service logistics: warehousing, distribution, full truck loads, project cargo and container transport.',
    accent: '#3b6fe0',
    href: 'https://bridgewaterlogistics.co.za',
    domain: 'bridgewaterlogistics.co.za',
    logo: { src: '/images/clients/bridgewater-logo-white.png', width: 270, height: 120 },
    photo: { src: '/images/clients/bridgewater-fleet.jpg', position: '78% 50%' },
  },
];

// JJETT is a business-services collaborator, not a VYRONSOFT platform: keep it out of `platforms`.
const JJETT_URL = 'https://www.jjett.co.za';

const capabilities = [
  { title: 'Strategic Thinking', icon: Compass },
  { title: 'Practical Execution', icon: Wrench },
  { title: 'Industry Experience', icon: Award },
  { title: 'Measurable Results', icon: TrendingUp },
];

// The JJETT logo is JJETT's own white mark from jjett.co.za, used unaltered.
const togetherPillars: { name: string; tone: string; logo?: string; items: string[] }[] = [
  {
    name: 'JJETT',
    tone: 'gold',
    logo: '/images/jjett/jjett-mark-white.png',
    items: ['Strategy & Planning', 'Operational Expertise', 'Change & Implementation'],
  },
  { name: 'VYRONSOFT', tone: 'blue', items: ['Intelligent Software', 'Industry Solutions', 'Ongoing Support'] },
];

export default function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <RevealObserver />

      <main id="main">
        {/* HERO */}
        <section id="home" className="hero" aria-labelledby="hero-title">
          {/* On desktop the supplied hero artwork carries the logo, headline and lead visually,
              so the HTML copy is screen-reader only there; on mobile the artwork is cropped to
              the Cape Town scene and the HTML copy is shown instead. */}
          <div className="hero-stage">
            <div className="hero-media" aria-hidden="true">
              <Image
                src="/images/vyronsoft-hero-background.png"
                alt=""
                fill
                priority
                sizes="100vw"
                quality={82}
                className="hero-image"
              />
            </div>

            <div className="hero-content">
              <div className="hero-copy">
                <h1 id="hero-title" className="hero-title">
                  <span className="hero-line">Intelligent Software.</span>
                  <span className="hero-line hero-line-accent">
                    Powerful Results<span className="dot">.</span>
                  </span>
                </h1>
                <p className="hero-lead">
                  VYRON builds next-generation software solutions that automate, optimize and accelerate your business
                  growth.
                </p>
              </div>
              <div className="hero-actions">
                <a href="#ecosystem" className="btn btn-primary btn-lg">
                  Explore Our Ecosystem <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a href="#contact" className="btn btn-ghost btn-lg">
                  Contact Us <ArrowRight aria-hidden="true" size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-band">
            <ul className="benefits" aria-label="Why VYRONSOFT">
              {benefits.map(({ title, text, icon: Icon, tone }) => (
                <li key={title} className={`benefit benefit-${tone}`}>
                  <Icon aria-hidden="true" size={30} strokeWidth={1.6} className="benefit-icon" />
                  <div>
                    <p className="benefit-title">{title}</p>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ECOSYSTEM */}
        <section id="ecosystem" className="section ecosystem" aria-labelledby="ecosystem-title">
          <div className="container">
            <header className="section-head" data-reveal>
              <p className="eyebrow">Our Ecosystem</p>
              <h2 id="ecosystem-title" className="section-title">
                A Complete Suite of Intelligent Business Platforms
              </h2>
              <p className="section-lead">
                From operations and workforce management to safety, sustainability and financial intelligence, our
                software solutions help businesses work smarter, stay compliant and grow with confidence.
              </p>
            </header>

            <ul className="platform-grid">
              {platforms.map((platform, index) => (
                <li
                  key={platform.slug}
                  className="platform-card"
                  style={{ '--accent': platform.accent, '--delay': `${(index % 3) * 90}ms` } as CSSProperties}
                  data-reveal
                >
                  {/* The banner artwork already shows the logo, category, description and CTA. */}
                  <h3 className="sr-only">{platform.name}™</h3>
                  <a href={platform.href} target="_blank" rel="noopener noreferrer" className="platform-link">
                    <span className="platform-media">
                      <Image
                        src={platform.image}
                        alt={`${platform.name}™ — ${platform.category}. ${platform.description} Visit ${platform.name}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 440px"
                        className="platform-image"
                      />
                    </span>
                    <span className="platform-meta">
                      <span className="platform-category" aria-hidden="true">
                        {platform.category}
                      </span>
                      <span className="platform-domain">
                        {platform.domain}
                        <span className="sr-only">{NEW_TAB}</span>
                        <ArrowUpRight aria-hidden="true" size={16} />
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* STRATEGIC BUSINESS SERVICES (JJETT) */}
        <section id="strategy" className="section strategy" aria-labelledby="strategy-title">
          <div className="container">
            <div className="strategy-grid">
              <div className="strategy-copy" data-reveal>
                <p className="eyebrow">Strategic Business Services</p>
                <h2 id="strategy-title" className="section-title">
                  <span className="strategy-line">Technology is powerful.</span>{' '}
                  <span className="strategy-line strategy-line-accent">The right strategy makes it work.</span>
                </h2>
                <p className="section-lead">
                  VYRONSOFT works alongside JJETT to combine intelligent technology with practical business
                  expertise — helping organisations identify opportunities, solve operational challenges and implement
                  solutions that deliver measurable results.
                </p>

                <ul className="capability-grid" aria-label="What the collaboration brings">
                  {capabilities.map(({ title, icon: Icon }) => (
                    <li key={title}>
                      <span className="capability-icon">
                        <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
                      </span>
                      <span>{title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <article className="jjett-card" data-reveal style={{ '--delay': '120ms' } as CSSProperties} aria-labelledby="jjett-title">
                {/* JJETT's own hero artwork (from jjett.co.za), shown uncropped: it already carries the real
                    JJETT logo and tagline, so no second logo is layered over it. */}
                <div className="jjett-media">
                  <Image
                    src="/images/jjett/jjett-hero.png"
                    alt="The JJETT logo and the words Strategic Thinking. Practical Execution. beside a black-and-white topographic map of the Cape Peninsula."
                    fill
                    sizes="(max-width: 900px) 100vw, 560px"
                    className="jjett-image"
                  />
                </div>
                <div className="jjett-body">
                  <h3 id="jjett-title" className="jjett-name">
                    JJETT<span className="jjett-tm">™</span>
                  </h3>
                  <p className="jjett-tagline">Outcome Based Solutions.</p>
                  <p className="jjett-text">
                    We start with the real business problem, design a bespoke solution around it, bring the people,
                    resources and technology to deliver it — and stay accountable until the results are measurable.
                  </p>
                  <a href={JJETT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg jjett-cta">
                    Explore JJETT
                    <span className="sr-only">{NEW_TAB}</span>
                    <ArrowRight aria-hidden="true" size={18} />
                  </a>
                  <p className="jjett-domain" aria-hidden="true">
                    www.jjett.co.za
                  </p>
                </div>
              </article>
            </div>

            <div className="together" data-reveal aria-labelledby="together-title" role="region">
              <header className="together-head">
                <p className="eyebrow together-eyebrow">Together</p>
                <h3 id="together-title" className="together-title">
                  Business Expertise <span className="together-plus">+</span> Intelligent Technology
                </h3>
                <p className="together-lead">A stronger, smarter future for your business.</p>
              </header>

              <div className="together-pillars">
                {togetherPillars.map((pillar, index) => (
                  <div key={pillar.name} className="together-pillar-wrap">
                    {index > 0 && (
                      <span className="together-join" aria-hidden="true">
                        +
                      </span>
                    )}
                    <div className={`together-pillar together-pillar-${pillar.tone}`}>
                      {pillar.logo ? (
                        <p className="together-pillar-name together-pillar-logo">
                          <Image src={pillar.logo} alt={pillar.name} width={1248} height={258} sizes="160px" />
                        </p>
                      ) : (
                        <p className="together-pillar-name">{pillar.name}</p>
                      )}
                      <ul>
                        {pillar.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT: INDUSTRIES + TRUST */}
        <section id="about" className="section about" aria-labelledby="about-title">
          <div className="container">
            <header className="section-head section-head-left" data-reveal>
              <p className="eyebrow">About VYRONSOFT</p>
              <h2 id="about-title" className="section-title">
                Technology for a smarter tomorrow, built in South Africa.
              </h2>
              <p className="section-lead">
                VYRONSOFT (Pty) Ltd is the technology company behind a suite of intelligent business platforms built to
                solve real-world challenges across multiple industries.
              </p>
            </header>

            <div className="about-grid">
              <div className="about-panel" data-reveal aria-labelledby="industries-title" role="region">
                <h3 id="industries-title" className="panel-title">
                  Industries We Serve
                </h3>
                <p className="panel-lead">
                  VYRONSOFT supports a wide range of industries with specialised software solutions.
                </p>
                <ul className="industry-grid">
                  {industries.map(({ label, icon: Icon }) => (
                    <li key={label}>
                      <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="about-panel" data-reveal aria-labelledby="trust-title" role="region">
                <h3 id="trust-title" className="panel-title">
                  Trusted, Secure &amp; Compliant
                </h3>
                <p className="panel-lead">Enterprise-grade security and compliance built into every solution.</p>
                <ul className="trust-row">
                  {trustItems.map(({ title, text, icon: Icon }) => (
                    <li key={title}>
                      <Icon aria-hidden="true" size={28} strokeWidth={1.6} />
                      <strong>{title}</strong>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / CONTACT */}
        <section id="contact" className="section contact" aria-labelledby="contact-title">
          <div className="container">
            <div className="cta-panel" data-reveal>
              <div className="cta-copy">
                <h2 id="contact-title" className="cta-title">
                  Ready to Transform Your Business?
                </h2>
                <p>Let&rsquo;s build the right solution for your unique challenges.</p>
              </div>
              <div className="cta-actions">
                <a href={DEMO_MAILTO} className="btn btn-primary btn-lg">
                  Book a Demo <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a href={CONTACT_MAILTO} className="btn btn-ghost btn-lg">
                  Contact Us <ArrowRight aria-hidden="true" size={18} />
                </a>
              </div>
              <ul className="contact-methods" aria-label="Contact details">
                <li>
                  <Mail aria-hidden="true" size={18} />
                  <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
                </li>
                <li>
                  <Phone aria-hidden="true" size={18} />
                  <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE_DISPLAY}</a>
                </li>
                <li>
                  <MapPin aria-hidden="true" size={18} />
                  <span>South Africa</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* OUR CLIENTS */}
        <section id="clients" className="section clients" aria-labelledby="clients-title">
          <div className="container">
            <header className="section-head" data-reveal>
              <p className="eyebrow">Our Clients</p>
              <h2 id="clients-title" className="section-title">
                Businesses powered by VYRONSOFT technology
              </h2>
              <p className="section-lead">
                A growing community of businesses using VYRONSOFT technology to improve operations, manage people,
                control costs and make better business decisions.
              </p>
            </header>

            <ul className="client-grid">
              {clients.map((client, index) => {
                const Motif = client.motif;
                return (
                  <li
                    key={client.name}
                    className={`client-card${client.href ? ' has-link' : ''}`}
                    style={{ '--accent': client.accent, '--delay': `${(index % 4) * 80}ms` } as CSSProperties}
                    data-reveal
                  >
                    <div className="client-stage" aria-hidden="true">
                      {client.photo && (
                        <Image
                          src={client.photo.src}
                          alt=""
                          fill
                          sizes="(max-width: 900px) 50vw, 320px"
                          className="client-photo"
                          style={{ objectPosition: client.photo.position }}
                        />
                      )}
                      {client.products && (
                        <span className="client-products">
                          {client.products.map((src) => (
                            <Image key={src} src={src} alt="" width={326} height={272} className="client-product" />
                          ))}
                        </span>
                      )}
                      {Motif && <Motif className="client-motif" strokeWidth={0.9} />}
                      <span className="client-mark">
                        {client.logo?.plate ? (
                          <span className="client-plate">
                            <Image
                              src={client.logo.src}
                              alt=""
                              width={client.logo.width}
                              height={client.logo.height}
                              sizes="220px"
                              className="client-logo"
                            />
                          </span>
                        ) : client.logo ? (
                          <Image
                            src={client.logo.src}
                            alt=""
                            width={client.logo.width}
                            height={client.logo.height}
                            sizes="220px"
                            className={`client-logo${client.logo.blend === 'screen' ? ' is-screen' : ''}${
                              client.logo.width === client.logo.height ? ' is-square' : ''
                            }`}
                          />
                        ) : (
                          <span className="client-wordmark">{client.name}</span>
                        )}
                      </span>
                    </div>

                    <div className="client-body">
                      <h3 className="client-name">{client.name}</h3>
                      <p className="client-description">{client.description}</p>
                      <p className="client-website">
                        <span className="client-website-label">Website</span>
                        {client.href ? (
                          <a href={client.href} target="_blank" rel="noopener noreferrer" className="client-link">
                            {/* Long domains may wrap before the TLD on narrow cards; the arrow stays with it. */}
                            {client.domain?.slice(0, client.domain.indexOf('.'))}
                            <wbr />
                            <span className="client-tld">
                              {client.domain?.slice(client.domain.indexOf('.'))}
                              <span className="sr-only">{NEW_TAB}</span>
                              <ArrowUpRight aria-hidden="true" size={14} />
                            </span>
                          </a>
                        ) : (
                          <span className="client-website-none">Website available on request</span>
                        )}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Wordmark large />
            <p className="footer-tagline">Business Intelligence for a Stronger Tomorrow.</p>
            <p className="footer-desc">
              A suite of intelligent business platforms built to solve real-world challenges across multiple
              industries.
            </p>
          </div>

          <nav className="footer-col" aria-labelledby="footer-ecosystem">
            <h2 id="footer-ecosystem" className="footer-heading">
              Ecosystem
            </h2>
            <ul>
              {platforms.map((platform) => (
                <li key={platform.slug}>
                  <a href={platform.href} target="_blank" rel="noopener noreferrer">
                    {platform.name}™<span className="sr-only">{NEW_TAB}</span>
                    <ArrowUpRight aria-hidden="true" size={14} className="footer-ext" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-labelledby="footer-company">
            <h2 id="footer-company" className="footer-heading">
              Company
            </h2>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href={DEMO_MAILTO}>Book a Demo</a>
              </li>
            </ul>
          </nav>

          <div className="footer-col">
            <h2 className="footer-heading">Contact</h2>
            <ul className="footer-contact">
              <li>
                <Mail aria-hidden="true" size={16} />
                <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                <Phone aria-hidden="true" size={16} />
                <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE_DISPLAY}</a>
              </li>
              <li>
                <MapPin aria-hidden="true" size={16} />
                <span>South Africa</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; 2026 VYRONSOFT (Pty) Ltd. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
