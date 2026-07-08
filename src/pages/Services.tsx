import { CheckCircle } from "lucide-react";

import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import ScrollReveal from "../components/common/ScrollReveal";
import Button from "../components/common/PrimaryButton";
import Layout from "../components/layout/Layout";
import { services } from "../data/services";

const Services = () => {
  return (
    <Layout>
      <SEO
        title="Services"
        description="Professional radiator repair, recoring, maintenance, leak testing and emergency support from Esper."
      />

      <PageHero
        label="Services"
        title="Radiator & Cooling Services"
        description="Comprehensive service solutions to keep your equipment running at peak performance."
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-3 lg:p-4">
                    <h2 className="text-xs font-bold uppercase leading-snug text-esper-navy sm:text-sm">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600 lg:text-sm">
                      {service.description}
                    </p>

                    <ul className="mt-3 hidden space-y-2 lg:block">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2 text-xs text-gray-600 lg:text-sm"
                        >
                          <CheckCircle
                            size={14}
                            className="mt-0.5 shrink-0 text-esper-blue"
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <Button
                      to="/contact"
                      showArrow={false}
                      className="mt-auto px-2 py-2 text-[10px] tracking-[0.08em] sm:px-3 sm:py-2.5 sm:text-xs"
                    >
                      Request Service
                    </Button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Services;
