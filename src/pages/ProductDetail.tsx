import { Link, Navigate, useParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Container from "../components/common/Container";
import PageHero from "../components/common/PageHero";
import SEO from "../components/common/SEO";
import SmartImage from "../components/common/SmartImage";
import Layout from "../components/layout/Layout";
import ProductCard from "../components/products/ProductCard";
import { absoluteUrl, site } from "../config/site";
import { products } from "../data/products";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  if (!product) return <Navigate to="/products" replace />;

  const productPath = `/products/${product.slug}`;
  const description = `${product.name} by Esper, engineered for ${product.applications.join(", ").toLowerCase()}. Request an OEM-quality cooling solution from our Chandrapur, Maharashtra facility.`;
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);

  return <Layout>
    <SEO title={`${product.name} Manufacturer India`} description={description} keywords={`${product.name}, ${product.category}, radiator manufacturer India, OEM radiator manufacturer, Esper`} image={product.image} url={productPath} breadcrumbs={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: product.name, path: productPath }]} structuredData={[{
      "@context": "https://schema.org", "@type": "Product", name: product.name, description, image: [absoluteUrl(product.image)], brand: { "@type": "Brand", name: site.name }, manufacturer: { "@id": `${site.url}/#organization` }, category: product.category, sku: `ESPER-${product.id}`, url: absoluteUrl(productPath), additionalProperty: [...product.specifications.map((value) => ({ "@type": "PropertyValue", name: "Specification", value })), ...product.applications.map((value) => ({ "@type": "PropertyValue", name: "Application", value }))],
    }]} />
    <PageHero label={product.category} title={product.name} description={description} />
    <section className="py-14 sm:py-20"><Container><div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="aspect-[4/3] overflow-hidden rounded-xl border border-gray-100 bg-esper-gray"><SmartImage src={product.image} fallback={product.imageFallback} alt={`${product.name} manufactured by Esper`} width={1200} height={900} className="h-full w-full object-cover" /></div>
      <div><p className="text-sm leading-relaxed text-gray-600 sm:text-base">{description}</p><div className="mt-7 grid gap-6 sm:grid-cols-2">
        <div><h2 className="text-lg font-black uppercase text-esper-navy">Specifications</h2><ul className="mt-3 space-y-2">{product.specifications.map((specification) => <li key={specification} className="flex gap-2 text-sm text-gray-600"><CheckCircle size={16} className="mt-0.5 shrink-0 text-esper-blue" />{specification}</li>)}</ul></div>
        <div><h2 className="text-lg font-black uppercase text-esper-navy">Applications</h2><ul className="mt-3 space-y-2">{product.applications.map((application) => <li key={application} className="flex gap-2 text-sm text-gray-600"><CheckCircle size={16} className="mt-0.5 shrink-0 text-esper-blue" />{application}</li>)}</ul></div>
      </div><Link to="/contact" className="mt-8 inline-flex rounded-full bg-esper-blue px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-esper-navy">Request a Quote</Link></div>
    </div></Container></section>
    <section className="bg-esper-gray py-14 sm:py-20"><Container><h2 className="text-2xl font-black uppercase text-esper-navy">Related Products</h2><div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">{relatedProducts.map((item) => <ProductCard key={item.id} product={item} />)}</div></Container></section>
  </Layout>;
};

export default ProductDetail;
