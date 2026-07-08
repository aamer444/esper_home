import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import ScrollReveal from "../components/common/ScrollReveal";
import ProductCard from "../components/products/ProductCard";
import Layout from "../components/layout/Layout";
import { products, productCategoryFilters } from "../data/products";

const ITEMS_PER_PAGE = 8;

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;
      const query = search.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.applications.some((a) => a.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <Layout>
      <SEO
        title="Products"
        description="Browse Esper's premium range of automotive radiators, industrial radiators, heat exchangers and cooling solutions."
      />

      <PageHero
        label="Products"
        title="Premium Cooling Products"
        description="Engineered radiators and heat exchangers for automotive, industrial and heavy equipment applications."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative max-w-md flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full rounded-lg border border-gray-200 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-esper-blue focus:ring-2 focus:ring-esper-blue/20"
              />
            </div>

            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
              {productCategoryFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => handleCategoryChange(filter)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                    category === filter
                      ? "bg-esper-blue text-white"
                      : "bg-esper-gray text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {paginated.length === 0 ? (
            <p className="mt-16 text-center text-gray-500">
              No products found. Try adjusting your search or filters.
            </p>
          ) : (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-4">
              {paginated.map((product, index) => (
                <ScrollReveal key={product.id} delay={index * 60}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setPage((p) => p - 1)}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold transition hover:border-esper-blue disabled:opacity-40"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPage(p)}
                  className={`h-10 w-10 rounded-lg text-sm font-semibold transition ${
                    currentPage === p
                      ? "bg-esper-blue text-white"
                      : "border border-gray-200 hover:border-esper-blue"
                  }`}
                >
                  {p}
                </button>
              ))}

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold transition hover:border-esper-blue disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export default Products;
