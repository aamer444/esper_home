import { useMemo } from "react";

import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import ScrollReveal from "../components/common/ScrollReveal";
import ProductCard from "../components/products/ProductCard";
import Layout from "../components/layout/Layout";
import { products } from "../data/products";

const Products = () => {
  const productsToShow = useMemo(() => {
    const seen = new Set<string>();
    return products.filter((p) => {
      if (seen.has(p.slug)) return false;
      seen.add(p.slug);
      return true;
    });
  }, []);

  return (
    <Layout>
      <SEO
        title="Radiators & Heat Exchangers | Esper Products"
        description="Browse Esper's premium range of automotive radiators, industrial radiators, heat exchangers and cooling solutions."
        url="/products"
      />

      <PageHero
        label="Products"
        title="Premium Cooling Products"
        description="Engineered radiators and heat exchangers for automotive, industrial and heavy equipment applications."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-4">
            {productsToShow.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 60}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Products;
