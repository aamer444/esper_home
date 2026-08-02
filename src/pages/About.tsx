import { Award, Eye, Factory, Shield } from "lucide-react";

import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import ScrollReveal from "../components/common/ScrollReveal";
import SectionHeader from "../components/common/SectionHeader";
import Layout from "../components/layout/Layout";
import { images } from "../constants/images";

const values = [
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

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Esper Radiators"
        description="Learn about Esper Radiators & Products and Daneen Heat Exchangers — engineering excellence in radiators and cooling solutions."
        url="/about"
      />

      <PageHero
        label="About Us"
        title="Engineering Cooling Excellence"
        description="Esper Radiators & Products is manufactured by Daneen Heat Exchangers Private Limited — a name synonymous with quality, performance and reliability."
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <ScrollReveal>
              <SectionHeader
                label="Our Story"
                title="Built on Engineering Precision"
                description="For over two decades, Esper has been at the forefront of radiator and heat exchanger manufacturing in India."
              />
              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                From our advanced manufacturing facility, we produce cooling
                solutions that power fleets, construction equipment, mining
                operations, agricultural machinery and industrial plants across
                the nation. Our commitment to OEM-quality standards, skilled
                engineering and customer support has made us a trusted partner
                for businesses that cannot afford downtime.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                Every Esper product reflects our dedication to thermal
                performance, durability and precision manufacturing — values
                that define global industrial brands and guide everything we
                build.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={images.about.manufacturing}
                  alt="Esper manufacturing"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {values.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <div className="h-full rounded-xl border border-gray-100 bg-esper-gray p-3 lg:p-4">
                  <item.icon
                    size={20}
                    className="text-esper-blue"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-3 text-xs font-bold uppercase text-esper-navy sm:text-sm">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600 lg:text-sm">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default About;
