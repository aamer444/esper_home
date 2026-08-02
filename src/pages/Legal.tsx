import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import Layout from "../components/layout/Layout";

const LegalPage = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <Layout>
    <SEO title={title} url={title === "Privacy Policy" ? "/privacy" : "/terms"} />
    <PageHero label="Legal" title={title} />
    <section className="py-12 sm:py-16">
      <Container>
        <div className="prose max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
          <p>{content}</p>
        </div>
      </Container>
    </section>
  </Layout>
);

export const Privacy = () => (
  <LegalPage
    title="Privacy Policy"
    content="Esper Radiators & Products respects your privacy. Information submitted through our contact forms is used solely to respond to your inquiries and will not be shared with third parties without your consent. This policy will be updated as our digital services expand."
  />
);

export const Terms = () => (
  <LegalPage
    title="Terms of Service"
    content="By using the Esper Radiators & Products website, you agree to these terms. Product specifications, pricing and availability are subject to change. All content on this site is the property of Daneen Heat Exchangers Private Limited."
  />
);
