import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import ScrollReveal from "../common/ScrollReveal";
import SectionHeader from "../common/SectionHeader";
import SmartImage from "../common/SmartImage";
import Button from "../common/PrimaryButton";
import { productCategories } from "../../data/categories";
import { redirectToEcommerce } from "../../utils/ecommerce";

const ProductCategories = () => {
  return (
    <section className="bg-esper-gray py-14 sm:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeader
            label="Products"
            title="Premium Cooling Solutions"
            description="Radiators and heat exchangers for mining haulers, CAT-style machinery and nationwide fleets."
          />
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-4">
          {productCategories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 80}>
              <article className="group h-full overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <SmartImage
                    src={category.image}
                    fallback={category.imageFallback}
                    alt={category.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 lg:p-4">
                  <h3 className="text-xs font-bold uppercase leading-snug text-esper-navy sm:text-sm">
                    {category.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-600 lg:text-sm">
                    {category.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => redirectToEcommerce(category.id)}
                    className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-esper-blue transition hover:gap-2 sm:text-xs"
                  >
                    Explore
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <Button to="/products" variant="outline" className="w-full sm:w-auto">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ProductCategories;
