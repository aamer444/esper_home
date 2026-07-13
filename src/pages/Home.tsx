import SEO from "../components/common/SEO";
import AboutEsper from "../components/home/AboutEsper";
import ContactPreview from "../components/home/ContactPreview";
import FAQ from "../components/home/FAQ";
import Hero from "../components/home/Hero";
import IndustriesWeServe from "../components/home/IndustriesWeServe";
import OurClients from "../components/home/OurClients";
import ProductCategories from "../components/home/ProductCategories";
import QuickActions from "../components/home/QuickActions";
import ServicesPreview from "../components/home/ServicesPreview";
import Testimonials from "../components/home/Testimonials";
import WhyChooseEsper from "../components/home/WhyChooseEsper";
import Layout from "../components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <SEO
        title="Radiators & Heat Exchangers | Esper Radiators"
        description="Esper Radiators & Products — premium radiators, heat exchangers and industrial cooling solutions for automotive, mining and heavy equipment industries."
        url="/"
      />
      <Hero />
      <QuickActions />
      <AboutEsper />
      <ProductCategories />
      <ServicesPreview />
      <WhyChooseEsper />
      <IndustriesWeServe />
      <OurClients />
      <Testimonials />
      <FAQ />
      <ContactPreview />
    </Layout>
  );
};

export default Home;
