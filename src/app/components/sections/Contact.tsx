// components/sections/Contact.tsx
'use client';

import { Section } from '@/app/components/ui/Section';
import Button from '@/app/components/ui/Button';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <Section id="contact" className="py-32 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Ready to start a project?</h2>
        <p className="text-xl text-secondary">Saya saat ini terbuka untuk peluang kerja Full-time, Internship, atau Freelance. Mari berdiskusi tentang bagaimana saya bisa berkontribusi di tim Anda.</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
          <a href="mailto:ikhwanaji98@gmail.com">
            <Button variant="outline" size="lg" className="min-w-50">
              <Mail className="mr-2 h-5 w-5 out" />
              Email Me
            </Button>
          </a>

          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/ikhwan-aji-pratama-7a09001b4/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/ikhwanaji" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
