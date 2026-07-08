import { env } from "../config/env";

const FALLBACK_URL = "https://www.google.com";

export const getEcommerceUrl = (productSlug?: string): string => {
  const base = env.ecommerceUrl.trim();

  if (!base) {
    return FALLBACK_URL;
  }

  if (productSlug) {
    return `${base.replace(/\/$/, "")}/products/${productSlug}`;
  }

  return base;
};

export const redirectToEcommerce = (productSlug?: string): void => {
  window.open(getEcommerceUrl(productSlug), "_blank", "noopener,noreferrer");
};
