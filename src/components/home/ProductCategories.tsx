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
    <section className="bg-esper-gray py-10 sm:py-14">
      <Container>
        <ScrollReveal>
          <SectionHeader
            label="Products"
            title="Premium Cooling Solutions"
            description="Radiators and heat exchangers for mining haulers, CAT-style machinery and nationwide fleets."
          />
        </ScrollReveal>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {productCategories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 80}>
              <article className="group h-full overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-lg">
                <div className="aspect-[5/4] overflow-hidden">
                  <SmartImage
                    src={category.image}
                    fallback={category.imageFallback}
                    alt={category.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-2 sm:p-3">
                  <h3 className="text-[10px] font-bold uppercase leading-snug text-esper-navy sm:text-[11px]">
                    {category.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[10px] leading-5 text-gray-600 sm:text-[11px]">
                    {category.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => redirectToEcommerce(category.id)}
                    className="mt-2 inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-esper-blue transition hover:gap-2 sm:text-[10px]"
                  >
                    Explore
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Button to="/products" variant="outline" className="w-full sm:w-auto">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ProductCategories;
