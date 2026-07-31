import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-2.5 text-base gap-2',
    lg: 'px-8 py-3.5 text-lg gap-2.5 font-bold',
  };

  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-soft-blue',
    accent: 'bg-accent hover:bg-accent-dark text-white shadow-soft-accent',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    'outline-light': 'border-2 border-white/70 text-white hover:bg-white hover:text-primary',
    white: 'bg-white hover:bg-neutral-light text-primary shadow-soft-blue font-bold',
    ghost: 'text-primary hover:bg-primary/5',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`group ${combinedClasses}`} {...props}>
      {content}
    </button>
  );
}
