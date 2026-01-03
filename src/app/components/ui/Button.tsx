// components/ui/Button.tsx
'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
  // Konfigurasi Styles berdasarkan variant
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 border border-transparent shadow-lg shadow-primary/20',
    outline: 'bg-transparent border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white',
    ghost: 'bg-transparent text-slate-400 hover:text-white hover:bg-slate-800/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }} // Efek hover halus
      whileTap={{ scale: 0.98 }} // Efek klik tactile
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
});
Button.displayName = 'Button';

export default Button;
