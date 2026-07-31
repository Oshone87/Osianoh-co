import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageBanner({ title, subtitle, breadcrumb = 'Page' }) {
  return (
    <div className="bg-primary text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-primary-dark">
      {/* Decorative subtle turquoise gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-accent/20 opacity-80" />
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-light/70 mb-3">
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-accent" />
          <span className="text-accent font-semibold">{breadcrumb}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg text-neutral-light/90 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
