import {
  Anchor,
  Cog,
  HardHat,
  Pickaxe,
  Truck,
  Wheat,
  Zap,
} from "lucide-react";
import Container from "../common/Container";
import ScrollReveal from "../common/ScrollReveal";
import SectionHeader from "../common/SectionHeader";
import { industries } from "../../data/industries";

const industryIcons = {
  Truck,
  HardHat,
  Pickaxe,
  Wheat,
  Zap,
  Anchor,
  Cog,
} as const;

const IndustriesWeServe = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeader
            label="Industries"
            title="Industries We Serve"
            description="Cooling solutions for mining haulers, CAT-style machinery, fleets and industrial plants."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.id} delay={index * 60}>
              <div className="group flex h-full flex-col items-center rounded-xl border border-gray-100 bg-esper-gray p-3 text-center transition hover:border-esper-blue hover:bg-white hover:shadow-md lg:p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-esper-blue/10 transition group-hover:bg-esper-blue sm:h-12 sm:w-12">
                  {(() => {
                    const Icon = industryIcons[industry.icon];
                    return (
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                        className="text-esper-blue transition group-hover:text-white sm:h-6 sm:w-6"
                      />
                    );
                  })()}
                </div>
                <h3 className="mt-2 text-[11px] font-bold uppercase tracking-wide text-esper-navy sm:mt-3 sm:text-sm">
                  {industry.title}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IndustriesWeServe;
