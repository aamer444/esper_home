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

const Home = () => (
  <Layout>
    <SEO
      title="Radiator Manufacturer in Chandrapur, Maharashtra, India"
      description="Esper is a radiator manufacturer in Chandrapur, Maharashtra, supplying OEM-quality automotive radiators, industrial radiators and heat exchangers across India."
      url="/"
      structuredData={[{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What types of radiators does Esper manufacture?", acceptedAnswer: { "@type": "Answer", text: "Esper manufactures automotive radiators, industrial radiators, heat exchangers, oil coolers, charge air coolers, copper-brass radiators and aluminium radiators." } },
          { "@type": "Question", name: "Do you offer OEM-quality radiators?", acceptedAnswer: { "@type": "Answer", text: "Yes. Esper products are manufactured to OEM-quality standards by Daneen Heat Exchangers Private Limited." } },
          { "@type": "Question", name: "Do you provide custom radiator manufacturing?", acceptedAnswer: { "@type": "Answer", text: "Yes. Esper engineers and manufactures custom radiators and heat exchangers for specific equipment and performance requirements." } },
        ],
      }]}
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

export default Home;
