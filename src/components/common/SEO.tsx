import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  robots?: string;
}

const SITE_NAME = "Esper Radiators & Products";
const BASE_URL = "https://esperradiators.com"; // Change after domain purchase
const DEFAULT_IMAGE = "/images/seo-banner.jpg";
const DEFAULT_DESCRIPTION =
  "Esper Radiators & Products manufactures premium radiators, heat exchangers and industrial cooling solutions for automotive, mining, construction and heavy equipment industries worldwide.";
const DEFAULT_KEYWORDS =
  "radiator, radiators, mining radiator, cat radiator, heavy duty radiator, oil cooler, heat exchanger, oem radiator, custom radiator, radiator repair, industrial radiator, heavy equipment radiator";

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  url = "/",
  type = "website",
  robots = "index, follow",
}: SEOProps) => {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    const updateMeta = (
      selector: string,
      attribute: "name" | "property",
      value: string,
      content: string
    ) => {
      let tag = document.head.querySelector(selector);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, value);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    const updateLink = (rel: string, href: string) => {
      let link = document.head.querySelector(
        `link[rel="${rel}"]`
      ) as HTMLLinkElement | null;

      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }

      link.href = href;
    };

    updateMeta('meta[name="description"]', "name", "description", description);
    updateMeta('meta[name="keywords"]', "name", "keywords", keywords);
    updateMeta('meta[name="robots"]', "name", "robots", robots);
    updateMeta('meta[name="theme-color"]', "name", "theme-color", "#002C6B");

    updateMeta('meta[property="og:locale"]', "property", "og:locale", "en_US");
    updateMeta('meta[property="og:title"]', "property", "og:title", title);
    updateMeta('meta[property="og:description"]', "property", "og:description", description);
    updateMeta('meta[property="og:image"]', "property", "og:image", `${BASE_URL}${image}`);
    updateMeta('meta[property="og:url"]', "property", "og:url", `${BASE_URL}${url}`);
    updateMeta('meta[property="og:type"]', "property", "og:type", type);
    updateMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);

    updateMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    updateMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    updateMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    updateMeta('meta[name="twitter:image"]', "name", "twitter:image", `${BASE_URL}${image}`);
    updateMeta('meta[name="twitter:site"]', "name", "twitter:site", "@esperradiators");
    updateMeta('meta[name="twitter:creator"]', "name", "twitter:creator", "@esperradiators");

    updateLink("canonical", `${BASE_URL}${url}`);

    let schema = document.getElementById(
      "organization-schema"
    ) as HTMLScriptElement | null;

    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.id = "organization-schema";
      document.head.appendChild(schema);
    }

    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      image: `${BASE_URL}${image}`,
      description,
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: "Maharashtra",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+91 8888177775",
        email: "info@esperradiators.com",
        areaServed: ["IN", "Global"],
        availableLanguage: ["English"],
      },
      sameAs: [
        "https://www.facebook.com/esperradiators",
        "https://www.linkedin.com/company/esperradiators",
        "https://twitter.com/esperradiator"
      ],
      manufacturer: {
        "@type": "Organization",
        name: "Daneen Heat Exchangers Pvt. Ltd.",
      },
    });
  }, [
    title,
    description,
    keywords,
    image,
    url,
    robots,
    type,
  ]);

  return null;
};

export default SEO;