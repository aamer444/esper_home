import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import OurClients from "../components/home/OurClients";
import Testimonials from "../components/home/Testimonials";
import Layout from "../components/layout/Layout";

const Clients = () => {
  return (
    <Layout>
      <SEO
        title="Clients & Partners | Esper Radiators"
        description="Esper Radiators & Products — trusted by fleet operators, OEM partners and industrial leaders across automotive and industrial sectors."
        url="/clients"
      />

      <PageHero
        label="Clients"
        title="Our Valued Partners"
        description="We are proud to serve leading companies across automotive, construction, mining and industrial sectors."
      />

      <OurClients />
      <Testimonials />
    </Layout>
  );
};

export default Clients;
