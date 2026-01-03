// components/layout/Footer.tsx
export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-background text-center">
      <p className="text-sm text-slate-500">© {new Date().getFullYear()} Ikhwan Aji Pratama. Built with Next.js, Tailwind & Framer Motion.</p>
    </footer>
  );
}
