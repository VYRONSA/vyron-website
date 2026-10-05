'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { DEMO_MAILTO } from '../_data/site';
import Wordmark from './Wordmark';

type NavItem = { label: string; id: string; href?: string };

// JJETT links out to its own site in a new tab; it is not an in-page section.
const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Ecosystem', id: 'ecosystem' },
  { label: 'JJETT', id: 'jjett', href: 'https://www.jjett.co.za' },
  { label: 'About Us', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

const NEW_TAB = ' (opens in a new tab)';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = navItems
      .filter((item) => !item.href)
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled || open ? ' is-solid' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="VYRONSOFT (Pty) Ltd — back to top">
          <Wordmark />
        </a>

        <nav className="primary-nav" aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="nav-external">
                    {item.label}
                    <span className="sr-only">{NEW_TAB}</span>
                  </a>
                ) : (
                  <a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a href={DEMO_MAILTO} className="btn btn-primary btn-sm header-cta">
          Book a Demo <ArrowRight aria-hidden="true" size={16} />
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile" hidden={!open}>
        <ul className="container">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-external"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  <span className="sr-only">{NEW_TAB}</span>
                </a>
              ) : (
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <a href={DEMO_MAILTO} className="btn btn-primary mobile-cta" onClick={() => setOpen(false)}>
              Book a Demo <ArrowRight aria-hidden="true" size={18} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
