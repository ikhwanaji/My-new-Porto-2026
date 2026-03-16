// components/sections/About.tsx
'use client';

import { Section } from '@/app/components/ui/Section';
import { GraduationCap, Code, Rocket } from 'lucide-react';

export function About() {
  return (
    <Section id="about" className="bg-background relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri: Headline & Intro */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            More than just <br />
            <span className="text-primary">writing code.</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed">
            For me, web development isn't just about making things look good on a screen. It's about building applications that are actually fast, easy to use, and reliable.
          </p>
          <p className="text-secondary text-lg leading-relaxed">
            As a recent Information Technology graduate from Universitas Bina Sarana Informatika, I enjoy bridging the gap between design and engineering, constantly learning to build scalable and accessible digital products.
          </p>
        </div>

        {/* Kolom Kanan: Detail Cards */}
        <div className="space-y-4">
          {/* Card 1: Education */}
          <div className="p-6 rounded-2xl bg-surface border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Information Technology (B.Sc.)</h3>
                <p className="text-sm text-secondary">Universitas Bina Sarana Informatika (2021 - 2025)</p>
                <p className="text-xs text-slate-500 mt-1">Graduated in Aug 2025 with a GPA of 3.47. Focused on Web Development and Software Engineering.</p>
              </div>
            </div>
          </div>

          {/* Card 2: Studi Independen */}
          <div className="p-6 rounded-2xl bg-surface border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                <Rocket size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Studi Independen (Kampus Merdeka)</h3>
                <p className="text-sm text-secondary">Infinite Learning - Web Development & UI/UX</p>
                <p className="text-xs text-slate-500 mt-1">Intensive training in Web Development & UI/UX Design. Collaborated as a Developer to build Doker.com.</p>
              </div>
            </div>
          </div>

          {/* Card 3: Passion */}
          <div className="p-6 rounded-2xl bg-surface border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-green-500/10 text-green-400">
                <Code size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Technical Focus</h3>
                <p className="text-sm text-secondary">Specializing in the React ecosystem (Next.js) and modern UI frameworks, with a strong emphasis on clean code and pixel-perfect design.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
