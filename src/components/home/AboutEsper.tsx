import { Award, Eye, Factory, Shield } from "lucide-react";
import Container from "../common/Container";
import ScrollReveal from "../common/ScrollReveal";
import SectionHeader from "../common/SectionHeader";
import { getAssetImage, images } from "../../constants/images";

const highlights = [
  {
    icon: Eye,
    title: "Vision",
    text: "To be India's most trusted name in high-performance cooling solutions for global industries.",
  },
  {
    icon: Shield,
    title: "Mission",
    text: "Deliver OEM-quality radiators and heat exchangers with engineering excellence and nationwide support.",
  },
  {
    icon: Factory,
    title: "Manufacturing Excellence",
    text: "State-of-the-art fabrication with precision brazing, CNC machining and rigorous quality control.",
  },
  {
    icon: Award,
    title: "OEM Quality",
    text: "Every product meets stringent performance standards trusted by fleet operators and OEM partners.",
  },
];

const AboutEsper = () => {
  return (
    <section id="about" className="py-8 sm:py-10 lg:py-12">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <ScrollReveal>
            <SectionHeader
              label="About Esper"
              title="Engineering Cooling Excellence Since Day One"
              description="Esper Radiators & Products, manufactured by Daneen Heat Exchangers Private Limited, delivers premium cooling solutions for automotive and industrial applications across India."
            />

            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-sm">
              With decades of manufacturing experience, we combine advanced
              engineering, premium materials and skilled craftsmanship to produce
              radiators that perform under the most demanding conditions. From
              fleet operators to mining giants, Esper is the cooling partner of
              choice.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
              {highlights.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 80}>
                  <div className="h-full rounded-xl border border-gray-100 bg-esper-gray p-3">
                    <item.icon
                      size={18}
                      className="text-esper-blue"
                      strokeWidth={1.5}
                    />
                    <h3 className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-esper-navy sm:text-[12px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-tight text-gray-600 lg:text-xs">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative">
              <div className="aspect-[5/4] overflow-hidden rounded-xl lg:aspect-[4/3] lg:max-h-[500px]">
                <img
                  src={getAssetImage(images.home.about.factory)}
                  alt="Esper manufacturing facility"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden rounded-xl bg-esper-blue p-4 text-white shadow-xl lg:block">
                <p className="text-3xl font-black">25+</p>
                <p className="mt-1 text-xs uppercase tracking-widest">
                  Years Experience
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default AboutEsper;
