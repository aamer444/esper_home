import { CheckCircle } from "lucide-react";
import Container from "../common/Container";
import ScrollReveal from "../common/ScrollReveal";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/PrimaryButton";
import { homeServices } from "../../data/services";

const ServicesPreview = () => {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <ScrollReveal>
          <SectionHeader
            label="Services"
            title="Expert Radiator Services"
            description="From repair and recoring to emergency support, our experienced engineers keep your equipment running."
          />
        </ScrollReveal>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {homeServices.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 80}>
              <article className="group h-full overflow-hidden rounded-xl border border-gray-100 bg-white">
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={960}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-2 sm:p-3">
                  <h3 className="text-[10px] font-bold uppercase leading-snug text-esper-navy sm:text-[11px]">
                    {service.title}
                  </h3>
                 <p className="mt-1 line-clamp-2 text-[10px] leading-5 text-gray-600 sm:text-[11px]">
                    {service.description}
                  </p>
                  <ul className="mt-2 hidden space-y-2 lg:block">
                    {service.benefits.slice(0, 2).map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-[10px] text-gray-600 lg:text-sm"
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

        <div className="mt-8 text-center">
          <Button to="/services">All Services</Button>
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
