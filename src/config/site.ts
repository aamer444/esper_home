export const site = {
  url: "https://esperradiator.com",
  name: "Esper",
  legalName: "Daneen Heat Exchangers Private Limited",
  description:
    "Esper manufactures automotive radiators, industrial radiators, heat exchangers and engineered cooling systems in Chandrapur, Maharashtra, India.",
  email: "Daneenheatexchangerspvtltd@gmail.com",
  phone: "+91 8888177775",
  telephoneUrl: "tel:+918888177775",
  logo: "/images/icon2.png",
  defaultImage: "/images/Industrial_radiators.png",
  officeAddress: {
    streetAddress: "Shop No. 3, Anupriya Apartment, Wadgaon",
    addressLocality: "Chandrapur",
    addressRegion: "Maharashtra",
    postalCode: "442401",
    addressCountry: "IN",
  },
  factoryAddress: "Y-32, Behind Jain Tyre, Yashwantnagar Padoli MIDC, Chandrapur, Maharashtra, India",
  mapUrl:
    "https://www.google.com/maps?q=Daneen+Heat+Exchangers+Pvt.+Ltd.,Chandrapur",
} as const;

export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
