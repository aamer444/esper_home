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
    <section id="about" className="py-14 sm:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <ScrollReveal>
            <SectionHeader
              label="About Esper"
              title="Engineering Cooling Excellence Since Day One"
              description="Esper Radiators & Products, manufactured by Daneen Heat Exchangers Private Limited, delivers premium cooling solutions for automotive and industrial applications across India."
            />

            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              With decades of manufacturing experience, we combine advanced
              engineering, premium materials and skilled craftsmanship to produce
              radiators that perform under the most demanding conditions. From
              fleet operators to mining giants, Esper is the cooling partner of
              choice.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
              {highlights.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 80}>
                  <div className="h-full rounded-xl border border-gray-100 bg-esper-gray p-3 lg:p-4">
                    <item.icon
                      size={20}
                      className="text-esper-blue"
                      strokeWidth={1.5}
                    />
                    <h3 className="mt-3 text-xs font-bold uppercase tracking-wide text-esper-navy sm:text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600 lg:text-sm">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl lg:aspect-[4/5]">
                <img
                  src={getAssetImage(images.home.about.factory)}
                  alt="Esper manufacturing facility"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-esper-blue p-5 text-white shadow-xl lg:block">
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
