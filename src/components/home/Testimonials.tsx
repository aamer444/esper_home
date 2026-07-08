import { Quote } from "lucide-react";
import Container from "../common/Container";
import ScrollReveal from "../common/ScrollReveal";
import SectionHeader from "../common/SectionHeader";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeader
            label="Testimonials"
            title="What Our Clients Say"
            description="Hear from fleet operators and industrial partners who trust Esper for their cooling needs."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 100}>
              <article className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-3 shadow-sm lg:p-4">
                <Quote
                  size={22}
                  className="text-esper-red/60"
                  strokeWidth={1.5}
                />
                <p className="mt-3 flex-1 text-xs leading-relaxed text-gray-600 italic lg:text-sm">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <p className="text-xs font-bold text-esper-navy sm:text-sm">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-gray-500 sm:text-xs">
                    {item.company}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-esper-gray px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-esper-blue sm:text-xs">
                    {item.industry}
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
