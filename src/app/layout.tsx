// src/app/layout.tsx
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SmoothScroll } from '@/app/components/SmoothScroll'; // Import komponen client yang baru dibuat

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

// Metadata tetap aman disini karena file ini adalah Server Component
export const metadata: Metadata = {
  title: 'Ikhwan Aji Pratama | Frontend Developer',
  description: 'Portfolio of Ikhwan Aji Pratama, a Frontend Developer specializing in React & Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('min-h-screen bg-background font-sans text-foreground', jakarta.variable)}>
        {/* Bungkus konten dengan SmoothScroll */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
