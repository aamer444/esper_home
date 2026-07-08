import Container from "../common/Container";
import ScrollReveal from "../common/ScrollReveal";
import SectionHeader from "../common/SectionHeader";
import RadiatorIcon from "../icons/RadiatorIcon";
import { whyChooseItems } from "../../data/industries";

const WhyChooseEsper = () => {
  return (
    <section className="bg-esper-navy py-12 sm:py-16 lg:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeader
            label="Why Esper"
            title="Why Choose Esper"
            description="Trusted by mining operators, fleet managers and OEM partners across India."
            light
            align="center"
          />
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-4">
          {whyChooseItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 80}>
              <div className="h-full rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-esper-blue/50 hover:bg-white/10 lg:p-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-esper-red sm:text-xl lg:text-2xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <RadiatorIcon
                    size={24}
                    variant="light"
                    animated
                    className="sm:h-7 sm:w-7 lg:h-8 lg:w-8"
                  />
                </div>
                <h3 className="mt-3 text-xs font-bold uppercase leading-snug text-white sm:text-sm lg:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-400 lg:text-sm">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseEsper;
