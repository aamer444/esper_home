import Container from "../common/Container";
import ScrollReveal from "../common/ScrollReveal";
import SectionHeader from "../common/SectionHeader";
import { clientLogos } from "../../data/testimonials";

const OurClients = () => {
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="overflow-hidden bg-esper-gray min-h-[calc(100vh-82px)]">
      <div className="flex min-h-[calc(100vh-82px)] flex-col justify-center gap-6 py-6 sm:gap-8 sm:py-8">
        <Container>
          <div className="relative -top-16">
            <ScrollReveal>
              <SectionHeader
                label="Clients"
                title="Trusted By Industry Leaders"
                description="Partnering with leading fleet operators, OEM manufacturers and industrial enterprises."
                align="center"
              />
            </ScrollReveal>
          </div>
        </Container>

        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
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
