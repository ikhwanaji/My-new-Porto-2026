// components/sections/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Globe, Smartphone, Image as ImageIcon, Clapperboard, Gamepad2, TrendingUp } from 'lucide-react';
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
      {/* Header Section */}
      <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-white">Featured Projects</h2>
          <p className="text-slate-400 max-w-md text-lg">A showcase of my recent work, deployed and ready to use.</p>
        </div>
        <Button variant="outline" onClick={() => window.open('https://github.com/ikhwanaji', '_blank')}>
          View Github Profile <Github className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* --- BENTO GRID LAYOUT (5 PROJECTS) --- */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
        {/* 1. PROJECT UTAMA: DOKER (SeaSpark) - [Col-span-2] */}
        <Card className="md:col-span-2 row-span-1 relative overflow-hidden group flex flex-col justify-end p-0 border-white/10">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-indigo-900/40 via-slate-900 to-slate-950 z-0" />

          {/* Decorative Icon Background */}
          <div className="absolute -top-10 -right-10 text-white/5 group-hover:text-white/10 transition-colors duration-500">
            <Globe size={250} />
          </div>

          <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge color="indigo">Kampus Merdeka</Badge>
                <Badge color="blue">React</Badge>
                <Badge color="blue">Vite</Badge>
                <Badge color="cyan">Tailwind</Badge>
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-bold text-white group-hover:text-indigo-300 transition-colors">Doker.com (SeaSpark)</h3>

              <p className="text-slate-300 max-w-xl leading-relaxed text-sm md:text-base">
                Platform ensiklopedia penyakit ikan kerapu & e-commerce terintegrasi. Proyek Studi Independen (Infinite Learning) untuk membantu pembudidaya mendiagnosa penyakit secara dini.
              </p>
            </div>

            <div className="pt-6 flex gap-4">
              <ProjectLink href="https://doker-zeta.vercel.app/" label="Live Demo" icon={ArrowUpRight} primary />
              <ProjectLink href="https://github.com/ikhwanaji/SeaSpark-Massive-Project" label="Repo" icon={Github} />
            </div>
          </div>
        </Card>

        {/* 2. STOCK LENS AI - [Col-span-1] */}
        <Card className="relative overflow-hidden group p-6 border-white/10 bg-slate-900/40">
          <div className="absolute top-4 right-4 text-emerald-500/20 group-hover:text-emerald-500 transition-colors duration-300">
            <TrendingUp size={48} />
          </div>

          <div className="flex flex-col h-full justify-end relative z-10">
            <div className="mb-auto">
              <Badge color="emerald">AI Gen</Badge>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Stock Lens AI</h3>
            <p className="text-sm text-slate-400 mb-4 line-clamp-3">Analisis pasar saham cerdas menggunakan teknologi Generative AI untuk memberikan wawasan visual dan prediksi tren.</p>
            <div className="flex gap-3 mt-2">
              <ProjectLink href="https://stock-lens-ai-gen.vercel.app/" label="Visit" icon={ArrowUpRight} />
              <ProjectLink href="https://github.com/ikhwanaji/StockLens-AI-Gen" label="Code" icon={Github} />
            </div>
          </div>
        </Card>

        {/* 3. MOVIE DECK - [Col-span-1] */}
        <Card className="relative overflow-hidden group p-6 border-white/10 bg-slate-900/40">
          <div className="absolute top-4 right-4 text-red-500/20 group-hover:text-red-500 transition-colors duration-300">
            <Clapperboard size={48} />
          </div>
          <div className="flex flex-col h-full justify-end relative z-10">
            <div className="mb-auto">
              <Badge color="red">React</Badge>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">Movie Deck</h3>
            <p className="text-sm text-slate-400 mb-4">Aplikasi pencarian film interaktif dengan database TMDB, menampilkan rating dan trailer.</p>
            <div className="flex gap-3">
              <ProjectLink href="https://movie-deck-eight.vercel.app/" label="Visit" icon={ArrowUpRight} />
              <ProjectLink href="https://github.com/ikhwanaji/movie-deck" label="Code" icon={Github} />
            </div>
          </div>
        </Card>

        {/* 4. GAME VAULT - [Col-span-1] */}
        <Card className="relative overflow-hidden group p-6 border-white/10 bg-slate-900/40">
          <div className="absolute top-4 right-4 text-purple-500/20 group-hover:text-purple-500 transition-colors duration-300">
            <Gamepad2 size={48} />
          </div>
          <div className="flex flex-col h-full justify-end relative z-10">
            <div className="mb-auto">
              <Badge color="purple">API</Badge>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Game Vault</h3>
            <p className="text-sm text-slate-400 mb-4">Katalog video game lengkap dengan fitur pencarian, filter genre, dan detail platform.</p>
            <div className="flex gap-3">
              <ProjectLink href="https://game-vault-azure.vercel.app/" label="Visit" icon={ArrowUpRight} />
              <ProjectLink href="https://github.com/ikhwanaji/game-vault" label="Code" icon={Github} />
            </div>
          </div>
        </Card>

        {/* 5. IMAGE CONVERTER PRO - [Col-span-1] */}
        <Card className="relative overflow-hidden group p-6 border-white/10 bg-slate-900/40">
          <div className="absolute top-4 right-4 text-orange-500/20 group-hover:text-orange-500 transition-colors duration-300">
            <ImageIcon size={48} />
          </div>
          <div className="flex flex-col h-full justify-end relative z-10">
            <div className="mb-auto">
              <Badge color="orange">Utility</Badge>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">Image Converter Pro</h3>
            <p className="text-sm text-slate-400 mb-4">Tool konversi format gambar instan (JPG, PNG, WEBP) berbasis browser yang cepat dan ringan.</p>
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

  return <span className={`px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-md border ${colors[color] || colors.indigo}`}>{children}</span>;
}

function ProjectLink({ href, label, icon: Icon, primary = false }: { href: string; label: string; icon: any; primary?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${primary ? 'text-white bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20' : 'text-slate-400 hover:text-white py-1.5'}`}
    >
      {label} <Icon size={12} />
    </a>
  );
}
