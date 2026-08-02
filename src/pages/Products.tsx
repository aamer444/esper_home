import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import ScrollReveal from "../components/common/ScrollReveal";
import ProductCard from "../components/products/ProductCard";
import Layout from "../components/layout/Layout";
import { products } from "../data/products";

const Products = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query")?.trim().toLowerCase() ?? "";
  const productsToShow = useMemo(() => {
    const seen = new Set<string>();
    return products.filter((p) => {
      if (seen.has(p.slug)) return false;
      seen.add(p.slug);
      return !searchQuery || [p.name, p.category, ...p.applications, ...p.specifications]
        .join(" ")
        .toLowerCase()
        .includes(searchQuery);
    });
  }, [searchQuery]);

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
          {searchQuery && (
            <p className="text-sm text-gray-600">
              Showing products matching <strong className="text-esper-navy">{searchQuery}</strong>.
            </p>
          )}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-4">
            {productsToShow.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 60}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
          {productsToShow.length === 0 && (
            <p className="mt-8 text-sm text-gray-600">No products match this search. Please contact us for a custom cooling solution.</p>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export default Products;
