import { useEffect } from "react";
import { absoluteUrl, site } from "../../config/site";

type JsonLd = Record<string, unknown>;

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  robots?: string;
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: JsonLd[];
}

const defaultKeywords =
  "radiator manufacturer Chandrapur, radiator manufacturer Maharashtra, radiator manufacturer India, car radiator manufacturer, truck radiator manufacturer, industrial radiator manufacturer, heat exchanger manufacturer, aluminium radiator manufacturer, copper radiator manufacturer, OEM radiator manufacturer";

const setMeta = (selector: string, attribute: "name" | "property", value: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.content = content;
};

const setLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
};

const baseSchemas = (): JsonLd[] => [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: absoluteUrl(site.logo),
    brand: { "@type": "Brand", name: site.name },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      email: site.email,
      contactType: "sales and customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "mr"],
    },
    address: { "@type": "PostalAddress", ...site.officeAddress },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: absoluteUrl(site.defaultImage),
    logo: absoluteUrl(site.logo),
    telephone: site.phone,
    email: site.email,
    priceRange: "₹₹",
    address: { "@type": "PostalAddress", ...site.officeAddress },
    hasMap: site.mapUrl,
    geo: { "@type": "GeoCoordinates", latitude: 19.9834379, longitude: 79.2712146 },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    }],
    parentOrganization: { "@id": `${site.url}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/products?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
];

const SEO = ({
  title,
  description = site.description,
  keywords = defaultKeywords,
  image = site.defaultImage,
  url = "/",
  type = "website",
  robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  breadcrumbs,
  structuredData = [],
}: SEOProps) => {
  useEffect(() => {
    const canonical = absoluteUrl(url);
    const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
    const imageUrl = absoluteUrl(image);

    document.title = fullTitle;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="keywords"]', "name", "keywords", keywords);
    setMeta('meta[name="robots"]', "name", "robots", robots);
    setMeta('meta[name="author"]', "name", "author", site.legalName);
    setMeta('meta[name="theme-color"]', "name", "theme-color", "#001b44");
    setMeta('meta[name="viewport"]', "name", "viewport", "width=device-width, initial-scale=1");
    setMeta('meta[property="og:locale"]', "property", "og:locale", "en_IN");
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:image"]', "property", "og:image", imageUrl);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", site.name);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", imageUrl);
    setLink("canonical", canonical);

    const breadcrumbSchema = breadcrumbs?.length
      ? [{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
          })),
        }]
      : [];
    const schemas = [...baseSchemas(), ...breadcrumbSchema, ...structuredData];
    document.querySelectorAll("script[data-seo-schema]").forEach((element) => element.remove());
    schemas.forEach((schema, index) => {
      const element = document.createElement("script");
      element.type = "application/ld+json";
      element.dataset.seoSchema = String(index);
      element.text = JSON.stringify(schema);
      document.head.appendChild(element);
    });
  }, [breadcrumbs, description, image, keywords, robots, structuredData, title, type, url]);

  return null;
};

export default SEO;
