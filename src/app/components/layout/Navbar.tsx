'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Icon Hamburger & Close
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn('fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent', scrolled || isOpen ? 'bg-slate-950/80 backdrop-blur-xl border-white/5 shadow-lg' : 'bg-transparent')}>
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-white relative z-50">
            Ikhwan<span className="text-primary">.</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={cn('text-sm font-medium transition-colors hover:text-primary relative group', 'text-slate-400 hover:text-white')}>
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden relative z-50 p-2 text-slate-300 hover:text-white transition-colors" aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 bg-slate-950 pt-24 px-6 md:hidden flex flex-col gap-6">
            {navLinks.map((link, idx) => (
              <motion.div key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + idx * 0.1 }}>
                <Link href={link.href} onClick={() => setIsOpen(false)} className="block text-2xl font-bold text-slate-300 hover:text-white py-4 border-b border-white/5">
                  {link.name}
                </Link>
              </motion.div>
            ))}

            
            <div className="mt-auto pb-10 text-slate-500 text-sm">
              <p>Based in Indonesia</p>
              <p>© 2025 Ikhwan Aji Pratama</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
