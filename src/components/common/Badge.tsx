import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'teal' | 'outline' | 'error';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'secondary',
  className = '',
}) => {
  const variantStyles = {
    primary: 'bg-primary text-on-primary',
    secondary: 'bg-surface-container text-secondary',
    teal: 'bg-surface-container text-on-tertiary-container',
    outline: 'bg-surface-container text-outline',
    error: 'bg-error-container text-on-error-container',
  };

  return (
    <span
      className={`px-space-xs py-0.5 rounded font-badge-caps text-badge-caps uppercase tracking-wider ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
