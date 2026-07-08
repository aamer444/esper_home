import { CheckCircle } from "lucide-react";
import Container from "../common/Container";
import ScrollReveal from "../common/ScrollReveal";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/PrimaryButton";
import { homeServices } from "../../data/services";

const ServicesPreview = () => {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeader
            label="Services"
            title="Expert Radiator Services"
            description="From repair and recoring to emergency support, our experienced engineers keep your equipment running."
          />
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {homeServices.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 80}>
              <article className="group h-full overflow-hidden rounded-xl border border-gray-100 bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 lg:p-4">
                  <h3 className="text-xs font-bold uppercase leading-snug text-esper-navy sm:text-sm">
                    {service.title}
                  </h3>
                 <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-600 lg:text-sm">
                    {service.description}
                  </p>
                  <ul className="mt-3 hidden space-y-2 lg:block">
                    {service.benefits.slice(0, 2).map((benefit) => (
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
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button to="/services">All Services</Button>
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
