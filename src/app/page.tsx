// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';

// Import Icons
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFlutter } from 'react-icons/si';

// Import Components
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';
import { Section } from '@/app/components/ui/Section';
import Button from '@/app/components/ui/Button';
import { Background } from '@/app/components/ui/Background'; // Komponen Background Baru
import { cn } from '@/lib/utils';

// Import Sections
import { Projects } from '@/app/components/sections/Projects';
import { About } from '@/app/components/sections/About';
import { Contact } from '@/app/components/sections/Contact';

// --- Tipe Data ---
type TechItem = {
  name: string;
  icon?: React.ElementType;
  imageSrc?: string;
  color?: string;
};

// --- Data Tech Stack ---
const techStack: TechItem[] = [
  { name: 'Next.js ', icon: SiNextdotjs, color: 'text-white' },
  { name: 'React', icon: SiReact, color: 'text-blue-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Vite', imageSrc: '/vite.svg' },
  // { name: 'Flutter', icon: SiFlutter, color: 'text-blue-300' },
];

// --- Animasi Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden selection:bg-indigo-500/30 text-slate-200">
      {/* 1. BACKGROUND DINAMIS (Aurora Effect) */}
      <Background />

      {/* 2. TEXTURE OVERLAY (Noise) */}
      {/* Pastikan class .bg-noise sudah ada di globals.css */}
      <div className="bg-noise" />

      <Navbar />

      {/* --- HERO SECTION --- */}
      <Section id="home" className="pt-32 md:pt-48 pb-20 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Badge Status */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-indigo-500/20 text-xs font-medium text-indigo-300 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for work
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="font-display text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white drop-shadow-sm">
            Building digital experiences with <br className="hidden md:block" />
            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">code & creativity.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed">
            Hi, I&apos;m <strong className="text-white">Ikhwan</strong>. A Fresh Graduate Information Technology student & Frontend Developer based in Indonesia, specializing in the <span className="text-white">React & Next.js</span>{' '}
            ecosystem.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" className="bg-white text-slate-950 hover:bg-indigo-50 border-none font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-shadow" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <a href="/cv-ikhwan.pdf" download>
              <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:border-white hover:text-white bg-slate-950/30 backdrop-blur-sm">
                Download CV <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </Section>

      {/* --- TECH STACK SECTION --- */}
      <Section className="py-10 border-y border-white/5 bg-slate-950/30 backdrop-blur-sm relative z-10">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Powering my projects with</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-90">
          {techStack.map((tech, index) => (
            <div key={index} className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/5 transition-all hover:border-white/20 hover:bg-white/10 hover:scale-105 shadow-lg shadow-black/20 backdrop-blur-md">
              {tech.icon && <tech.icon className={cn('w-5 h-5 transition-colors', tech.color)} />}
              {tech.imageSrc && <Image src={tech.imageSrc} alt={tech.name} width={16} height={16} className="w-4 h-4 object-contain" />}
              <span className="font-medium text-slate-300 group-hover:text-white transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* --- MAIN SECTIONS (Imported) --- */}
      <div className="relative z-10 space-y-24 md:space-y-32 pb-24">
        <Projects />
        <About />
        <Contact />
      </div>

      {/* --- FOOTER --- */}
      <Footer />
    </main>
  );
}
