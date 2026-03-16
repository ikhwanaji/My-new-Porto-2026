import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SmoothScroll } from '@/app/components/SmoothScroll'; 

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Ikhwan Aji Pratama | Web Developer',
  description: 'Web Developer portfolio of Ikhwan Aji Pratama. I build fast, responsive, and practical web applications using modern technologies like Next.js and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('min-h-screen bg-background font-sans text-foreground', jakarta.variable)}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
