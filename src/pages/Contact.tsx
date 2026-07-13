import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import ScrollReveal from "../components/common/ScrollReveal";
import ContactForm from "../components/contact/ContactForm";
import Layout from "../components/layout/Layout";
import { env } from "../config/env";

const whatsappLink = env.whatsappNumber
  ? `https://wa.me/${env.whatsappNumber.replace(/\D/g, "")}`
  : "#";

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact Esper Radiators"
        description="Contact Esper Radiators & Products for product inquiries, service requests and custom manufacturing."
        url="/contact"
      />

      <PageHero
        label="Contact"
        title="Let's Connect"
        description="Our team is ready to assist with product inquiries, service scheduling and engineering consultations."
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
            <ScrollReveal className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-1">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 shrink-0 text-esper-red" size={18} />
                  <div>
                    <h3 className="text-xs font-bold uppercase text-esper-navy sm:text-sm">Address</h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                      Daneen Heat Exchangers Private Limited
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 shrink-0 text-esper-red" size={18} />
                  <div>
                    <h3 className="text-xs font-bold uppercase text-esper-navy sm:text-sm">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="mt-1 block text-xs text-gray-600 transition hover:text-esper-blue sm:text-sm"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 shrink-0 text-esper-red" size={18} />
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold uppercase text-esper-navy sm:text-sm">Email</h3>
                    <a
                      href={`mailto:${env.email}`}
                      className="mt-1 block break-words text-xs text-gray-600 transition hover:text-esper-blue sm:text-sm"
                    >
                      {env.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle
                    className="mt-0.5 shrink-0 text-esper-red"
                    size={18}
                  />
                  <div>
                    <h3 className="text-xs font-bold uppercase text-esper-navy sm:text-sm">
                      WhatsApp
                    </h3>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-xs text-gray-600 transition hover:text-esper-blue sm:text-sm"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 shrink-0 text-esper-red" size={18} />
                  <div>
                    <h3 className="text-xs font-bold uppercase text-esper-navy sm:text-sm">
                      Business Hours
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                      Mon – Sat: 9:00 AM – 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 aspect-[4/3] overflow-hidden rounded-xl border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.597132359825!2d79.2712146!3d19.9834379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d74d750534cb%3A0xca8c1a67526eb8bc!2sDANEEN%20HEAT%20EXCHANGERS%20PVT.LTD.!5e0!3m2!1sen!2sin!4v1782028083216!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} className="lg:col-span-3">
              <div className="rounded-xl border border-gray-100 bg-esper-gray p-4 sm:p-6">
                <h2 className="text-xl font-black uppercase text-esper-navy sm:text-2xl">
                  Send an Inquiry
                </h2>
                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                  Fill out the form below and our team will respond promptly.
                </p>
                <div className="mt-5 sm:mt-6">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
