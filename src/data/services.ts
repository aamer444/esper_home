import type { Service } from "../types";
import { getAssetImage, images } from "../constants/images";

export const services: Service[] = [
  {
    id: "repair",
    title: "Radiator Repair",
    image: getAssetImage(images.services.radiatorRepair),
    description:
      "Professional radiator repair services restoring cooling performance and extending equipment life.",
    benefits: [
      "Expert leak detection and sealing",
      "OEM-quality replacement parts",
      "Fast turnaround for fleet downtime",
    ],
  },
  {
    id: "recoring",
    title: "Radiator Recoring",
    image: getAssetImage(images.services.radiatorRecoring),
    description:
      "Complete recoring services using premium copper-brass and aluminium cores for like-new performance.",
    benefits: [
      "Precision core fabrication",
      "Cost-effective alternative to replacement",
      "Compatible with legacy equipment",
    ],
  },
  {
    id: "maintenance",
    title: "Industrial Cooling Maintenance",
    image: getAssetImage(images.services.coolingMaintenance),
    description:
      "Scheduled maintenance programs for industrial cooling systems to prevent costly breakdowns.",
    benefits: [
      "Preventive inspection protocols",
      "Performance benchmarking",
      "Extended equipment lifespan",
    ],
  },
  {
    id: "cleaning",
    title: "Radiator Cleaning",
    image: getAssetImage(images.services.radiatorCleaning),
    description:
      "Deep cleaning and flushing services to remove blockages and restore optimal heat transfer.",
    benefits: [
      "Chemical and mechanical cleaning",
      "Flow rate testing",
      "Improved cooling efficiency",
    ],
  },
  {
    id: "leak-testing",
    title: "Leak Testing",
    image: getAssetImage(images.services.leakTesting),
    description:
      "Comprehensive pressure and vacuum testing to identify leaks before they cause engine damage.",
    benefits: [
      "Advanced testing equipment",
      "Detailed diagnostic reports",
      "Pre-delivery quality assurance",
    ],
  },
  {
    id: "industrial",
    title: "Industrial Service",
    image: getAssetImage(images.services.industrialService),
    description:
      "On-site and in-factory service for heavy equipment, generators, and industrial cooling systems.",
    benefits: [
      "Nationwide service network",
      "Experienced field engineers",
      "Custom service agreements",
    ],
  },
  {
    id: "custom",
    title: "Custom Manufacturing",
    image: getAssetImage(images.services.customManufacturing),
    description:
      "Bespoke radiator and heat exchanger manufacturing tailored to your exact specifications.",
    benefits: [
      "Engineering consultation",
      "Prototype to production",
      "Quality-certified output",
    ],
  },
];

export const homeServices = services.slice(0, 5);
