import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 ${alignment[align]} ${className}`}>
      {eyebrow && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 rounded-full border border-accent/20">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${light ? 'text-white' : 'text-primary'}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-neutral-light/90' : 'text-neutral-mid'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-16 bg-accent rounded mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
