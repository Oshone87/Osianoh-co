import React from 'react';

export default function Card({
  children,
  className = '',
  topAccent = false,
  hoverable = true,
  padding = 'p-6 sm:p-8',
}) {
  return (
    <div
      className={`bg-white rounded-lg border border-neutral-border transition-all duration-300 ${
        topAccent ? 'border-t-4 border-t-accent' : ''
      } ${
        hoverable ? 'hover:shadow-card-hover hover:-translate-y-1 hover:border-accent/40' : ''
      } ${padding} ${className}`}
    >
      {children}
    </div>
  );
}
