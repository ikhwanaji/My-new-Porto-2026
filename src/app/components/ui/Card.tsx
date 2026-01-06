// components/ui/Card.tsx
'use client';
import { cn } from '@/lib/utils';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { MouseEvent } from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics untuk rotasi yang smooth
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Logic Spotlight
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    // Logic 3D Tilt
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;

    // Mengubah nilai rotasi (maksimal 10 derajat)
    x.set(yPct * 10);
    y.set(xPct * -10);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX: x,
        rotateY: y,
        transformStyle: 'preserve-3d',
      }}
      className={cn('group relative rounded-3xl border border-white/10 bg-slate-900/50 px-6 py-6 shadow-2xl overflow-hidden transform-gpu', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...(props as any)} // Type casting untuk framer-motion props
    >
      {/* Efek Spotlight (Tetap dipertahankan) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.10),
              transparent 80%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full">{children}</div>
    </motion.div>
  );
}
