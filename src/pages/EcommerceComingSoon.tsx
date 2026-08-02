import { ShoppingCart, Zap, Cpu, Users } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Container from "../components/common/Container";
import ScrollReveal from "../components/common/ScrollReveal";
import SEO from "../components/common/SEO";

const Feature = ({ icon, title, text }: { icon: ReactNode; title: string; text: string }) => (
  <div className="rounded-lg border border-gray-100 bg-white p-4">
    <div className="flex items-start gap-3">
      <div className="rounded-md bg-esper-blue/10 p-2 text-esper-blue">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-esper-navy">{title}</h4>
        <p className="mt-1 text-xs text-gray-600">{text}</p>
      </div>
    </div>
  </div>
);

const EcommerceComingSoon = () => {
  return (
    <Layout>
      <SEO title="Online Store Coming Soon" url="/ecommerce-coming-soon" robots="noindex,follow" />
      <section className="pt-[96px] pb-10">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <div className="inline-flex items-center justify-center rounded-full bg-esper-blue/10 p-4">
                <ShoppingCart className="text-esper-blue" size={28} />
              </div>
              <h1 className="mt-6 text-2xl font-black text-esper-navy sm:text-3xl">Our Online Store is Coming Soon</h1>
              <p className="mt-3 text-sm text-gray-600">
                Online purchases are not available yet. Our sales team can help with enquiries, quotations, orders, custom manufacturing, repairs and services — contact us directly and we will complete your purchase manually.
              </p>

              <div className="mt-6 flex justify-center gap-3">
                <Link to="/contact" className="rounded-lg bg-esper-blue px-5 py-3 text-sm font-semibold text-white">Contact Our Team</Link>
                <Link to="/products" className="rounded-lg border border-esper-blue px-5 py-3 text-sm font-semibold text-esper-blue">Back to Products</Link>
              </div>
            </ScrollReveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <ScrollReveal>
                <Feature icon={<Zap size={18} />} title="Fast Response" text="Quick replies for quotes and technical questions." />
              </ScrollReveal>
              <ScrollReveal>
                <Feature icon={<Cpu size={18} />} title="OEM Products" text="Genuine OEM-grade radiators and core assemblies." />
              </ScrollReveal>
              <ScrollReveal>
                <Feature icon={<Users size={18} />} title="Custom Solutions" text="Tailored manufacturing and recoring services." />
              </ScrollReveal>
              <ScrollReveal>
                <Feature icon={<ShoppingCart size={18} />} title="Expert Support" text="Technical guidance from our experienced engineers." />
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default EcommerceComingSoon;
