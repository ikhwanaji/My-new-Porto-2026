// app/layout.tsx
import type { Metadata } from 'next';
// Import Space Grotesk (untuk Judul) dan Plus Jakarta Sans (untuk Body)
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

// Font untuk Body Text (Bersih, Mudah dibaca)
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Font untuk Headlines (Karakter Kuat, Editorial)
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display', // Kita namakan 'display'
  display: 'swap',
});

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
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground selection:bg-indigo-500/30 selection:text-indigo-200',
          jakarta.variable,
          spaceGrotesk.variable // Inject variable kedua
        )}
      >
        {children}
      </body>
    </html>
  );
}
