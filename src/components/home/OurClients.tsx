import Container from "../common/Container";
import ScrollReveal from "../common/ScrollReveal";
import SectionHeader from "../common/SectionHeader";
import { clientLogos } from "../../data/testimonials";

const OurClients = () => {
  // Showing only a few placeholder logos for now — update clientLogos
  // in data/testimonials.ts once the confirmed client list comes in.
  const visibleLogos = clientLogos.slice(0, 4);
  const doubled = [...visibleLogos, ...visibleLogos];

  return (
    <section id="clients" className="overflow-hidden bg-esper-gray">
      <div className="py-12 sm:py-16">
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

        <div className="relative mx-auto mt-8 w-full max-w-6xl px-4 sm:mt-10 sm:px-6">
          <div className="flex animate-marquee gap-5 sm:gap-6 lg:gap-10">
            {doubled.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex h-14 w-28 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 sm:h-16 sm:w-32 sm:px-4"
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
      </div>
    </section>
  );
};

export default OurClients;