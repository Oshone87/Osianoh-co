import React from 'react';
import { Link } from 'react-router-dom';
import { Award, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Management Team', path: '/team' },
    { name: 'Services Spectrum', path: '/services' },
    { name: 'Get in Touch', path: '/contact' },
  ];

  const servicesLinks = [
    { name: 'Audit & Assurance', path: '/services' },
    { name: 'Tax Compliance & Advisory', path: '/services' },
    { name: 'Accounting & Payroll', path: '/services' },
    { name: 'Forensic Audit', path: '/services' },
    { name: 'Financial Advisory', path: '/services' },
    { name: 'Consultancy Services', path: '/services' },
  ];

  return (
    <footer className="bg-primary text-white border-t border-primary-dark mt-auto">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  Elijah Osianor & Co.
                </span>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  Chartered Accountants
                </span>
              </div>
            </div>
            <p className="text-neutral-light/80 text-sm leading-relaxed">
              Audit | Tax | Financial | Advisory | Consulting
            </p>
            <p className="text-neutral-light/70 text-xs leading-relaxed max-w-sm">
              Providing multi-disciplinary, client-oriented professional services to private and public enterprises meeting international standards.
            </p>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-neutral-light/80 hover:text-accent transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Practice Areas (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2">
              Practice Areas
            </h3>
            <ul className="space-y-2 text-sm">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-neutral-light/80 hover:text-accent transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-2">
              Head Office
            </h3>
            <ul className="space-y-3 text-sm text-neutral-light/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  Suite 32-33, 2nd Floor, Distinct Plaza, 19 Kudirat Abiola Way, Oregun, Ikeja, Lagos State
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:08089990866" className="hover:text-accent transition-colors">
                  0808 999 0866
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:osianor@yahoo.com" className="hover:text-accent transition-colors">
                  osianor@yahoo.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-dark py-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:flex sm:justify-between sm:text-left text-xs text-neutral-light/60">
          <p>© {currentYear} Elijah Osianor & Co. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Chartered Accountants & Financial Advisors</p>
        </div>
      </div>
    </footer>
  );
}
