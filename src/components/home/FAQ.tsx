import Container from "../common/Container";
import ScrollReveal from "../common/ScrollReveal";
import SectionHeader from "../common/SectionHeader";
import Accordion from "../common/Accordion";
import { faqItems } from "../../data/faq";

const FAQ = () => {
  return (
    <section className="bg-esper-gray py-6 sm:py-10">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal>
            <SectionHeader
              label="FAQ"
              title="Frequently Asked Questions"
              description="Find answers to common questions about our products, services and manufacturing capabilities."
            />
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <Accordion items={faqItems} />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
