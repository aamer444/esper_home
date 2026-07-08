import Container from "../common/Container";
import ScrollReveal from "../common/ScrollReveal";
import SectionHeader from "../common/SectionHeader";
import { clientLogos } from "../../data/testimonials";

const OurClients = () => {
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="overflow-hidden bg-esper-gray py-16 sm:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeader
            label="Clients"
            title="Trusted By Industry Leaders"
            description="Partnering with leading fleet operators, OEM manufacturers and industrial enterprises."
            align="center"
          />
        </ScrollReveal>
      </Container>

      <div className="relative mt-10 sm:mt-12">
        <div className="flex animate-marquee gap-4 sm:gap-6 lg:gap-8">
          {doubled.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex h-16 w-32 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 sm:h-20 sm:w-40 sm:px-5"
            >
              <div className="text-center">
                <span className="text-lg font-black text-esper-blue sm:text-xl">
                  {client.initials}
                </span>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-gray-500 sm:text-xs">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
