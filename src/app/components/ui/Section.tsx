// components/ui/Section.tsx
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

export function Section({ id, className, fullWidth = false, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-20 md:py-32 relative', className)} // Jarak vertikal yang lega
      {...props}
    >
      <div
        className={cn(
          'mx-auto px-6 md:px-12',
          fullWidth ? 'w-full' : 'max-w-7xl' // Membatasi lebar konten
        )}
      >
        {children}
      </div>
    </section>
  );
}
