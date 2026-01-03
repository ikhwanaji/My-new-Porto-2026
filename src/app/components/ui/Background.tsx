// components/ui/Background.tsx
'use client';

export function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-950">
      {/* 1. Ambient Glow (Aurora) */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* 2. Grid Pattern yang lebih halus & Pudar */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      {/* 3. Radial Gradient Mask (Agar Grid hilang di pinggir) */}
      <div className="absolute inset-0 bg-slate-950 mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_70%,black)]"></div>
    </div>
  );
}
