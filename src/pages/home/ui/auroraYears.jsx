import React from 'react';
import { cn } from './cn';

const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <main className="w-full min-h-[100lvh]">
      <div
        className={cn(
          'relative flex flex-col min-h-screen items-center justify-center dark:bg-zinc-900 text-slate-950 transition-bg',
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            [--golden-wave:linear-gradient(100deg, var(--yellow-200)_10%, var(--yellow-100)_90%)]
            [background-image:var(--golden-wave)]
            [background-size:200%_200%]
            [background-position:100%_100%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--golden-wave)]
            after:[background-size:200%_200%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute inset-0 opacity-50 will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--golden-wave)_100%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default AuroraBackground;
