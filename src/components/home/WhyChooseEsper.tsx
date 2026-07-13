import Container from "../common/Container";
import ScrollReveal from "../common/ScrollReveal";
import SectionHeader from "../common/SectionHeader";
import RadiatorIcon from "../icons/RadiatorIcon";
import { whyChooseItems } from "../../data/industries";

const WhyChooseEsper = () => {
  return (
    <section className="bg-esper-navy py-6 sm:py-8 lg:py-10">
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

        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3 md:grid-cols-3">
          {whyChooseItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 80}>
              <div className="h-full rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-esper-blue/50 hover:bg-white/10">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-base font-black text-esper-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <RadiatorIcon
                    size={20}
                    variant="light"
                    animated
                    className="h-6 w-6"
                  />
                </div>
                <h3 className="mt-3 text-sm font-bold uppercase leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-[11px] leading-5 text-gray-400">
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
