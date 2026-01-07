
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mouse } from 'lucide-react';
import Image from 'next/image';

// Import Icons
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFlutter } from 'react-icons/si';

// UI Components
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';
import { Section } from '@/app/components/ui/Section';
import Button from '@/app/components/ui/Button';
import { cn } from '@/lib/utils';
import { Projects } from '@/app/components/sections/Projects';
import { About } from '@/app/components/sections/About';
import { Contact } from '@/app/components/sections/Contact';

import Hero3D from '@/app/components/ui/Hero3D';
import MagneticWrapper from '@/app/components/ui/MagneticWrapper';

// --- TYPE DEFINITIONS ---
type TechItem = {
  name: string;
  icon?: any;
  imageSrc?: string;
  color?: string;
};

// --- DATA TECH STACK ---
const techStack: TechItem[] = [
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'React', icon: SiReact, color: 'text-blue-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Vite', imageSrc: '/vite.svg', color: undefined },
  { name: 'Flutter', icon: SiFlutter, color: 'text-blue-300' },
];

// Animasi Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden selection:bg-primary/20 bg-background">
      <Navbar />
      <section id="home" className="relative z-10 min-h-screen flex flex-col justify-center items-center pt-24 pb-20 px-6 overflow-hidden">

        {/* 1. Grid Pattern */}
        <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-20" />

        {/* 2. Gradient Mask */}
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background -z-10" />

        {/* 3. MASSIVE SPOT LIGHT */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[200vw] h-[80vh] rounded-[100%] bg-indigo-600/20 blur-[120px] -z-15 pointer-events-none mix-blend-screen" />

        {/* 4. THREE.JS ELEMENT */}
        <div className="absolute inset-0 w-full h-full opacity-60 pointer-events-none -z-10 mix-blend-screen">
          <Hero3D />
        </div>

        {/* ========================================================= */}
        {/* CONTENT */}
        {/* ========================================================= */}

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8 relative z-20">
          {/* Badge Status */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-medium text-primary backdrop-blur-md shadow-lg shadow-indigo-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for work
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight bg-linear-to-b from-white via-white to-white/60 bg-clip-text text-transparent drop-shadow-sm">
            Building digital experiences  <br className="hidden md:block" />
            <span className="text-white">with code & creativity.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed drop-shadow-md px-4">
            Hi, I&apos;m <strong className="text-white">Ikhwan Aji Pratama</strong>. A Fresh Graduate Information Technology student & Frontend Developer based in Indonesia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 pt-6">
            <MagneticWrapper>
              <Button
                size="lg"
                className="h-12 px-8 text-base md:text-lg bg-white text-slate-950 hover:bg-slate-200 border-none font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView()}
              >
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </MagneticWrapper>

            <MagneticWrapper>
              <a href="/cv-ikhwan.pdf" download>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base md:text-lg border-slate-600 text-slate-200 hover:border-white hover:text-white bg-slate-950/40 backdrop-blur-md">
                  Download CV <Download className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </MagneticWrapper>
          </motion.div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2 cursor-pointer hover:text-white transition-colors z-30"
          onClick={() => document.getElementById('projects')?.scrollIntoView()}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-70">Scroll</span>
          <div className="w-px h-10 bg-linear-to-b from-slate-400 to-transparent"></div>
        </motion.div>
      </section>

      {/* --- TECH STACK SECTION --- */}
      {/* Added z-index relative to ensure it sits 'above' any potential overflow from hero if glitch happens */}
      {/* --- TECH STACK SECTION (INFINITE MARQUEE) --- */}
      <Section className="py-24 border-y border-white/5 bg-black relative z-20 overflow-hidden">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">Powering my projects with</p>
        </div>

        {/* Container Masking (Agar fade out di kiri kanan) */}
        <div className="relative flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          {/* Inner Track (Bergerak) */}
          <motion.div
            className="flex gap-12 pr-12"
            animate={{ x: '-50%' }}
            transition={{
              duration: 20, // Kecepatan (semakin besar semakin lambat)
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {/* Kita duplikasi array techStack 2x agar looping mulus (Seamless Loop) */}
            {[...techStack, ...techStack].map((tech, index) => (
              <div key={index} className="flex items-center gap-2 min-w-max text-slate-400">
                {tech.icon && <tech.icon className={cn('w-8 h-8', tech.color)} />}
                {tech.imageSrc && <Image src={tech.imageSrc} alt={tech.name} width={32} height={32} className="w-8 h-8 object-contain" />}
                <span className="font-semibold text-xl">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* --- MAIN SECTIONS --- */}
      <div className="relative z-10 bg-background/80 backdrop-blur-3xl">
        <Projects />
        <About />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
