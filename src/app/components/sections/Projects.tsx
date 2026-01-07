// components/sections/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Globe, Image as ImageIcon, Clapperboard, Gamepad2, TrendingUp } from 'lucide-react';
import { Card } from '@/app/components/ui/Card';
import { Section } from '@/app/components/ui/Section';
import Button from '@/app/components/ui/Button';

// Animasi Masuk
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Projects() {
  return (
    <Section id="projects" className="relative z-10">
      {/* --- HEADER SECTION --- */}
      {/* Mobile: Stack ke bawah (flex-col), items-start. Desktop: Sejajar (flex-row), items-end. */}
      <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-0">
        <div className="space-y-3 md:space-y-2">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">Featured Projects</h2>
          <p className="text-slate-400 max-w-md text-base md:text-lg leading-relaxed">A showcase of my recent work, deployed and ready to use.</p>
        </div>
        {/* Tombol Github: Full width di mobile agar mudah ditekan */}
        <div className="w-full md:w-auto">
          <Button variant="outline" className="w-full md:w-auto justify-center" onClick={() => window.open('https://github.com/ikhwanaji', '_blank')}>
            View Github Profile <Github className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* --- BENTO GRID LAYOUT --- */}
      {/* STRATEGI RESPONSIVE:
         - Mobile (<768px): 1 Kolom
         - Tablet (768px - 1024px): 2 Kolom (Agar tidak gepeng)
         - Desktop (>1024px): 3 Kolom (Layout Bento Asli)
      */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }} // Margin dikurangi agar animasi jalan lebih cepat di HP
        variants={fadeInUp}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[350px]"
      >
        {/* 1. PROJECT UTAMA: DOKER (SeaSpark) */}
        {/* Tablet & Desktop: Ambil 2 Kolom lebar */}
        <Card className="md:col-span-2 row-span-1 relative overflow-hidden group flex flex-col justify-end p-0 border-white/10 min-h-100 md:min-h-0">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-indigo-900/40 via-slate-900 to-slate-950 z-0" />

          {/* Decorative Icon: Diperkecil di Mobile (size 180) agar tidak menutupi teks */}
          <div className="absolute -top-10 -right-10 text-white/5 group-hover:text-white/10 transition-colors duration-500">
            <Globe className="w-45 h-45 md:w-62.5 md:h-62.5" />
          </div>

          <div className="relative z-10 p-6 md:p-10 flex flex-col h-full justify-between bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent">
            <div className="space-y-4 pt-12 md:pt-0">
              {' '}
              <div className="flex flex-wrap gap-2">
                <Badge color="indigo">Kampus Merdeka</Badge>
                <Badge color="blue">React</Badge>
                <Badge color="blue">Vite</Badge>
                <Badge color="cyan">Tailwind</Badge>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white group-hover:text-indigo-300 transition-colors">Doker.com</h3>
              <p className="text-slate-300 max-w-xl leading-relaxed text-sm md:text-base">Platform ensiklopedia penyakit ikan kerapu & e-commerce terintegrasi. Proyek Studi Independen (Infinite Learning).</p>
            </div>

            <div className="pt-6 flex flex-wrap gap-3 md:gap-4">
              <ProjectLink href="https://doker-zeta.vercel.app/" label="Live Demo" icon={ArrowUpRight} primary />
              <ProjectLink href="https://github.com/ikhwanaji/SeaSpark-Massive-Project" label="Repo" icon={Github} />
            </div>
          </div>
        </Card>

        {/* 2. STOCK LENS AI */}
        <Card className="relative overflow-hidden group p-6 border-white/10 bg-slate-900/40 min-h-75 md:min-h-0">
          <div className="absolute top-4 right-4 text-emerald-500/20 group-hover:text-emerald-500 transition-colors duration-300">
            <TrendingUp size={40} className="md:w-12 md:h-12" />
          </div>

          <div className="flex flex-col h-full justify-end relative z-10">
            <div className="mb-auto mt-8 md:mt-0 ">
              <div className="mt-2  flex flex-wrap gap-2">
                <Badge color="emerald">AI Gen</Badge>
                <Badge color="emerald">Microstock</Badge>
              </div>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Stock Lens AI</h3>
            <p className="text-sm text-slate-400 mb-4 line-clamp-3">Asisten cerdas untuk kontributor Microstock: Generator prompt AI & fitur Image-to-Prompt.</p>
            <div className="flex gap-3 mt-2">
              <ProjectLink href="https://stock-lens-ai-gen.vercel.app/" label="Visit" icon={ArrowUpRight} />
              <ProjectLink href="https://github.com/ikhwanaji/StockLens-AI-Gen" label="Code" icon={Github} />
            </div>
          </div>
        </Card>

        {/* 3. MOVIE DECK */}
        <Card className="relative overflow-hidden group p-6 border-white/10 bg-slate-900/40 min-h-75 md:min-h-0">
          <div className="absolute top-4 right-4 text-red-500/20 group-hover:text-red-500 transition-colors duration-300">
            <Clapperboard size={40} className="md:w-12 md:h-12" />
          </div>
          <div className="flex flex-col h-full justify-end relative z-10">
            <div className="mb-auto mt-8 md:mt-0 flex flex-wrap gap-2">
              <Badge color="red">Next.js</Badge>
              <Badge color="red">TMDB API</Badge>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">Movie Deck</h3>
            <p className="text-sm text-slate-400 mb-4 line-clamp-3">Aplikasi pencarian film interaktif dengan database TMDB, rating, dan trailer.</p>
            <div className="flex gap-3">
              <ProjectLink href="https://movie-deck-eight.vercel.app/" label="Visit" icon={ArrowUpRight} />
              <ProjectLink href="https://github.com/ikhwanaji/movie-deck" label="Code" icon={Github} />
            </div>
          </div>
        </Card>

        {/* 4. GAME VAULT */}
        <Card className="relative overflow-hidden group p-6 border-white/10 bg-slate-900/40 min-h-75 md:min-h-0">
          <div className="absolute top-4 right-4 text-purple-500/20 group-hover:text-purple-500 transition-colors duration-300">
            <Gamepad2 size={40} className="md:w-12 md:h-12" />
          </div>
          <div className="flex flex-col h-full justify-end relative z-10">
            <div className="mb-auto mt-8 md:mt-0 flex flex-wrap gap-2">
              <Badge color="purple">Next.js</Badge>
              <Badge color="purple">RAWG API</Badge>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Game Vault</h3>
            <p className="text-sm text-slate-400 mb-4 line-clamp-3">Katalog video game lengkap dengan pencarian, filter genre, dan detail platform.</p>
            <div className="flex gap-3">
              <ProjectLink href="https://game-vault-azure.vercel.app/" label="Visit" icon={ArrowUpRight} />
              <ProjectLink href="https://github.com/ikhwanaji/game-vault" label="Code" icon={Github} />
            </div>
          </div>
        </Card>

        {/* 5. IMAGE CONVERTER PRO */}
        <Card className="relative overflow-hidden group p-6 border-white/10 bg-slate-900/40 min-h-75 md:min-h-0">
          <div className="absolute top-4 right-4 text-orange-500/20 group-hover:text-orange-500 transition-colors duration-300">
            <ImageIcon size={40} className="md:w-12 md:h-12" />
          </div>
          <div className="flex flex-col h-full justify-end relative z-10">
            <div className="mb-auto mt-8 md:mt-0">
              <Badge color="orange">Utility</Badge>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">Image Converter Pro</h3>
            <p className="text-sm text-slate-400 mb-4 line-clamp-3">Tool konversi gambar instan (JPG, PNG, WEBP) berbasis browser yang ringan.</p>
            <div className="flex gap-3">
              <ProjectLink href="https://image-converter-pro.vercel.app/" label="Visit" icon={ArrowUpRight} />
              <ProjectLink href="https://github.com/ikhwanaji/Image-Converter-Pro" label="Code" icon={Github} />
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}

function Badge({ children, color = 'indigo' }: { children: React.ReactNode; color?: string }) {
  const colors: Record<string, string> = {
    indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    blue: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    red: 'bg-red-500/10 text-red-300 border-red-500/20',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    orange: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
  };

  return <span className={`px-2 py-1 text-[10px] md:text-xs uppercase tracking-wider font-semibold rounded-md border ${colors[color] || colors.indigo}`}>{children}</span>;
}

function ProjectLink({ href, label, icon: Icon, primary = false }: { href: string; label: string; icon: any; primary?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-xs font-medium transition-all active:scale-95 ${primary ? 'text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20' : 'text-slate-400 hover:text-white py-1.5'}`}
    >
      {label} <Icon size={14} />
    </a>
  );
}
