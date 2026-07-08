import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import ScrollReveal from "../common/ScrollReveal";
import SmartImage from "../common/SmartImage";
import { getAssetFallback, getAssetImage, images } from "../../constants/images";

const quickActions = [
  {
    title: "Explore Products",
    description: "Mining radiators, heat exchangers and fleet cooling systems.",
    to: "/products",
    image: getAssetImage(images.home.quickActions.products),
    fallback: getAssetFallback(images.home.quickActions.products),
  },
  {
    title: "Service Your Radiator",
    description: "Professional repair, recoring and emergency field support.",
    to: "/services",
    image: getAssetImage(images.home.quickActions.services),
    fallback: getAssetFallback(images.home.quickActions.services),
  },
];

const QuickActions = () => {
  return (
    <section id="quick-actions" className="bg-esper-gray py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {quickActions.map((action, index) => (
            <ScrollReveal key={action.title} delay={index * 100}>
              <Link
                to={action.to}
                className="group relative flex min-h-[145px] overflow-hidden rounded-xl bg-esper-navy sm:min-h-[170px]"
              >
                <SmartImage
                  src={action.image}
                  fallback={action.fallback}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-50"
                />
                <div className="relative flex flex-1 flex-col justify-between p-3 sm:p-5">
                  <div>
                    <h3 className="text-sm font-black uppercase leading-tight text-white sm:text-xl">
                      {action.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-xs leading-relaxed text-gray-300 sm:text-sm">
                      {action.description}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white sm:text-xs">
                    Learn More
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-2"
                    />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default QuickActions;
