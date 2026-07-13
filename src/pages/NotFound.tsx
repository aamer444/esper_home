import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/common/SEO";
import Container from "../components/common/Container";
import Layout from "../components/layout/Layout";
import RadiatorIcon from "../components/icons/RadiatorIcon";

const NotFound = () => {
  return (
    <Layout>
      <SEO
        title="Page Not Found"
        description="The page you are looking for was not found. Contact Esper for custom radiators, heat exchangers and radiator services."
        url="/404"
      />

      <section className="relative overflow-hidden border-b border-gray-300 bg-[#F6F8FB]">

        {/* Soft Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,59,143,.07),transparent_60%)]" />

        {/* Blueprint Grid */}
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(0,59,143,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,59,143,.12)_1px,transparent_1px)] [background-size:72px_72px]" />

        {/* Huge 404 */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <h2 className="select-none text-[190px] font-black leading-none text-[#003B8F]/10 md:text-[260px] xl:text-[320px]">
            404
          </h2>
        </div>

        <Container>
          <div className="relative flex min-h-[64vh] flex-col items-center justify-center pt-28 pb-16 text-center lg:pt-32">

            {/* Loader/Icon */}
            <div className="mb-8 rounded-full border border-gray-300 bg-[#FCFCFD] p-5 shadow-[0_12px_30px_rgba(0,0,0,.08)]">
              <RadiatorIcon
                size={80}
                variant="default"
                animated
              />
            </div>

            <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-esper-red">
              ERROR 404
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[1.05] text-esper-navy lg:text-6xl">
              Oops! That page doesn't exist.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-700">
              The page you're looking for couldn't be found. Whether you need a
              new radiator, a custom-built cooling solution or professional
              radiator repair services, our team is ready to help.
            </p>

            {/* Feature Pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <span className="rounded-full border border-gray-300 bg-[#FCFCFD] px-5 py-2 text-sm font-medium text-gray-700 shadow-sm">
                ✓ Custom Radiators
              </span>

              <span className="rounded-full border border-gray-300 bg-[#FCFCFD] px-5 py-2 text-sm font-medium text-gray-700 shadow-sm">
                ✓ Heat Exchangers
              </span>

              <span className="rounded-full border border-gray-300 bg-[#FCFCFD] px-5 py-2 text-sm font-medium text-gray-700 shadow-sm">
                ✓ Radiator Services
              </span>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-esper-blue px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-esper-navy"
              >
                Explore Products
                <ArrowRight size={18} className="ml-3" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-esper-blue bg-[#FCFCFD] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-esper-blue transition duration-300 hover:bg-esper-blue hover:text-white"
              >
                Contact Our Team
                <ArrowRight size={18} className="ml-3" />
              </Link>

            </div>

          </div>
        </Container>

      </section>
    </Layout>
  );
};

export default NotFound;