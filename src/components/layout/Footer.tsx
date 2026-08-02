import { Link } from "react-router-dom";
import { Link2, Mail, MapPin, Phone, Share2 } from "lucide-react";

import Container from "../common/Container";
import Logo from "../common/Logo";
import { env } from "../../config/env";
import { navigation } from "../../constants/navigation";
import { productCategories } from "../../data/categories";
import { homeServices } from "../../data/services";

const Footer = () => {
  return (
    <footer className="bg-esper-navy text-white">
      <Container>
        <div className="grid grid-cols-2 gap-6 py-7 sm:gap-7 sm:py-9 md:grid-cols-[1.1fr_1.5fr_0.8fr_1fr_0.9fr] md:gap-6 lg:gap-8">
          <div className="col-span-2 sm:col-span-1">
            <Logo />
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-gray-400">
              Premium radiators, heat exchangers and industrial cooling
              solutions manufactured by Daneen Heat Exchangers Private Limited.
            </p>

            <div className="mt-3 flex gap-2.5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-full border border-white/20 p-1.5 transition hover:border-esper-blue hover:bg-esper-blue"
              >
                <Link2 size={16} />
              </a>
              <a
                href="#"
                aria-label="Social media"
                className="rounded-full border border-white/20 p-1.5 transition hover:border-esper-blue hover:bg-esper-blue"
              >
                <Share2 size={16} />
              </a>
              <a
                href={`mailto:${env.email}`}
                aria-label="Email"
                className="rounded-full border border-white/20 p-1.5 transition hover:border-esper-blue hover:bg-esper-blue"
              >
                <Mail size={16} />
              </a>
            </div>

          <div
            className="
              mt-5
              w-28 h-12
              sm:w-32 sm:h-14
              md:w-36 md:h-16
              lg:w-40 lg:h-[4.5rem]
              overflow-hidden
            "
          >
            <img
              src="/images/made_in_india.png"
              alt="Made in India"
              loading="lazy"
              decoding="async"
              width={600}
              height={400}
              className="
                w-full
                h-auto
                object-cover
                object-top
                select-none
              "
            />
          </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em]">
              Contact
            </h3>
            <ul className="mt-3 space-y-4 text-xs leading-relaxed text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-esper-red" />
                <span>+91 8888177775</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-esper-red" />
                <a
                  href={`mailto:${env.email}`}
                  className="break-all transition hover:text-white"
                >
                  {env.email}
                </a>
              </li>
               <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-esper-red" />
                <span>
                  <span className="mb-0.5 block text-[11px] font-semibold uppercase tracking-wide text-gray-200">
                    Office Address
                  </span>
                  Shop No. 3, Anupriya Apartment, Wadgaon, Chandrapur - 442401
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-esper-red" />
                <span>
                  <span className="mb-0.5 block text-[11px] font-semibold uppercase tracking-wide text-gray-200">
                    Factory Address
                  </span>
                  Y-32, Behind Jain Tyre, Yashwantnagar Padoli MIDC, Chandrapur
                </span>
              </li>
             
            </ul>
          </div>

          <div className="hidden sm:block">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em]">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-1.5">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-xs text-gray-400 transition hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden sm:block">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em]">
              Products
            </h3>
            <ul className="mt-3 space-y-1.5">
              {productCategories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to="/products"
                    className="text-xs text-gray-400 transition hover:text-white"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em]">
              Services
            </h3>
            <ul className="mt-3 space-y-1.5">
              {homeServices.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-xs leading-snug text-gray-400 transition hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-3 text-center text-[11px] text-gray-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Esper Radiators & Products. All Rights
            Reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link to="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
