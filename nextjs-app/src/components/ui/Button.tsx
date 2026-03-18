import React from 'react';

type ButtonVariant = 'primary' | 'ghost' | 'ghost-light' | 'icon';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: 'default' | 'sm';
  href?: string;
  target?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Button({ variant = 'primary', size = 'default', href, target, onClick, children, className = '', style }: ButtonProps) {
  const classes = [
    'btn-base',
    `btn-${variant}`,
    size === 'sm' ? 'btn-sm' : '',
    className,
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} target={target} className={classes} onClick={onClick} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
