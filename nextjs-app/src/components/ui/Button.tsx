import React from 'react';
import Link from 'next/link';

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
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className={classes}
          onClick={onClick}
          style={style}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
