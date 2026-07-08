import type { ReactNode } from "react";
import Container from "../common/Container";

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

const PageHero = ({ label, title, description, children }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-esper-navy pt-20 pb-10 sm:pt-28 sm:pb-14">
      <div className="absolute right-0 top-0 h-[220px] w-[220px] rounded-full bg-esper-blue/20 blur-[90px] sm:h-[420px] sm:w-[420px] sm:blur-[110px]" />

      <Container>
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2.5 sm:gap-3">
            <span className="h-[2px] w-6 bg-esper-red sm:w-8" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-300 sm:text-xs sm:tracking-[0.32em]">
              {label}
            </span>
          </span>

          <h1 className="mt-3 text-2xl font-black uppercase leading-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {description && (
            <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:mt-4 sm:text-base">
              {description}
            </p>
          )}

          {children}
        </div>
      </Container>
    </section>
  );
};

export default PageHero;
