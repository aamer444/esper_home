import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Container from "../common/Container";
import ScrollReveal from "../common/ScrollReveal";
import Button from "../common/PrimaryButton";
import { env } from "../../config/env";

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.597132359825!2d79.2712146!3d19.9834379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d74d750534cb%3A0xca8c1a67526eb8bc!2sDANEEN%20HEAT%20EXCHANGERS%20PVT.LTD.!5e0!3m2!1sen!2sin!4v1782028083216!5m2!1sen!2sin";

const ContactPreview = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-12">
      <Container>
        <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <ScrollReveal>
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2.5 sm:gap-3">
                <span className="h-[2px] w-6 bg-esper-red sm:w-8" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-esper-blue sm:text-xs sm:tracking-[0.32em]">
                  Contact
                </span>
              </span>

              <h2 className="mt-3 text-xl font-black uppercase leading-tight text-esper-navy sm:mt-4 sm:text-2xl lg:text-3xl">
                Get In Touch
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-600 sm:mt-4 sm:text-sm">
                Reach out to our team for product inquiries,
                <br className="hidden sm:block" />
                service requests or custom manufacturing.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 shrink-0 text-esper-red" size={16} />
                  <div>
                    <h3 className="text-xs font-bold uppercase text-esper-navy sm:text-sm">
                      Office  Address
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                      Shop No. 3, Anupriya Apartment, Wadgaon,
                      <br />
                      Chandrapur India - 442401
                    </p>
                    <div className="mt-3 ">
                      <h3 className="text-xs mt-0.5 font-bold uppercase text-esper-navy sm:text-sm">
                        Factory Address
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                        Y-32, Behind Jain Tyre, Yashwantnagar Padoli MIDC,
                        <br />
                        Chandrapur India
                      </p>
                    </div>

                  </div>

                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 shrink-0 text-esper-red" size={16} />
                  <div>
                    <h3 className="text-xs font-bold uppercase text-esper-navy sm:text-sm">
                      Phone
                    </h3>
                    <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                      +91 8888177775
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 shrink-0 text-esper-red" size={16} />
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold uppercase text-esper-navy sm:text-sm">
                      Email
                    </h3>
                    <a
                      href={`mailto:${env.email}`}
                      className="mt-1 block break-words text-xs text-gray-600 transition hover:text-esper-blue sm:text-sm"
                    >
                      {env.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 shrink-0 text-esper-red" size={16} />
                  <div>
                    <h3 className="text-xs font-bold uppercase text-esper-navy sm:text-sm">
                      Working Hours
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                      Mon - Sat: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <Button
                  to="/contact"
                  className="col-span-2 mt-1 px-4 py-2.5 text-xs sm:w-fit"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="h-[200px] overflow-hidden rounded-xl border border-gray-200 sm:h-[240px] lg:h-[280px]">
              <iframe
                src={mapSrc}
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default ContactPreview;
