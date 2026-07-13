import { ArrowRight, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import RadiatorIcon from "../icons/RadiatorIcon";
import ScrollReveal from "../common/ScrollReveal";

// const quickActions = [
//   {
//     title: "Explore Products",
//     eyebrow: "Premium Radiator Engineering",
//     description:
//       "Discover Esper’s complete radiator portfolio. If you cannot find the right radiator, we can design and manufacture fully customized solutions by requirement, dimension or application.",
//     highlights: [
//       "Complete radiator range with custom design support",
//       "Rapid product discovery for mining, fleet and industrial cooling",
//     ],
//     to: "/products",
//   },
//   {
//     title: "Radiator Services",
//     eyebrow: "Full-Service Radiator Care",
//     description:
//       "Complete repair and servicing for every radiator type, from automotive units to heavy industrial, mining, railway and commercial equipment.",
//     highlights: [
//       "Leak testing, pressure testing, core replacement",
//       "Cleaning, repair and reconditioning with on-site support",
//     ],
//     to: "/services",
//   },
// ];

const quickActions = [
  {
    title: "Buy New Radiators",
    eyebrow: "OEM Manufacturing",
    description:
      "Explore our complete range of premium radiators, heat exchangers and cooling solutions. Need a radiator that's not available? We design and manufacture custom radiators for any vehicle, machine or industrial application.",

    highlights: [
      "Standard & fully customized radiator manufacturing",
      "Automotive, commercial, industrial, mining & railway applications",
    ],
    buttonText: "Explore Products",
    to: "/products",
    icon: "radiator",
  },

  {
    title: "Repair & Service Radiators",
    eyebrow: "Expert Radiator Services",
    description:
      "Restore the performance of your existing radiator with our complete repair and servicing solutions. We handle everything from small automotive radiators to heavy industrial cooling systems.",

    highlights: [
      "Leak testing, pressure testing, core replacement & repairs",
      "Cleaning, flushing, reconditioning & performance restoration",
    ],
    buttonText: "Book a Service",
    to: "/services",
    icon: "service",
  },
];

const QuickActions = () => {
  return (
    <section id="quick-actions" className="bg-esper-navy text-white">
      <Container>
        <div className="pt-2 pb-6 sm:pt-3 sm:pb-8">
          <div className="mx-auto max-w-6xl px-2 md:px-4">
            <div className="mb-4 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-esper-red">
                What Are You Looking For?
              </p>

              <h2 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">
                Purchase a New Radiator or Service an Existing One.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-300">
                Whether you need a brand-new radiator or want to restore your existing one, Esper provides complete cooling solutions under one roof.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-5">
              {quickActions.map((action, index) => (
                <ScrollReveal key={action.title} delay={index * 100}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-[0_20px_48px_-20px_rgba(0,0,0,0.35)] transition duration-500">
                    <div className="flex flex-1 flex-col gap-2.5 px-4 py-4 sm:px-5 sm:py-5 min-h-[320px]">
                      <div className="space-y-1 min-h-[8rem] sm:min-h-[8.5rem]">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-esper-red">
                          {action.eyebrow}
                        </p>
                        <h3 className="text-lg font-black leading-snug text-white sm:text-xl">
                          {action.title}
                        </h3>
                        <p className="text-sm leading-6 text-gray-300">
                          {action.description}
                        </p>
                      </div>

                      <ul className="mt-[5px] grid gap-3 text-sm text-white">
                        {action.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2">
                            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-esper-red" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-1">
                        <Link
                          to={action.to}
                          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-esper-red px-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-esper-red"
                        >
                          {action.icon === "radiator" ? (
                            <RadiatorIcon size={18} animated={false} variant="light" className="text-white" />
                          ) : (
                            <Wrench size={18} className="text-white" />
                          )}
                          {action.buttonText}
                          <ArrowRight size={16} className="ml-3 transition-transform duration-300 group-hover:translate-x-2" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QuickActions;
