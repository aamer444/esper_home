import { getAssetFallback, getAssetImage, images } from "../constants/images";

export const productCategories = [
  {
    id: "radiators",
    title: "Radiators",
    description:
      "Premium automotive and industrial radiators engineered for maximum cooling efficiency and long-term reliability.",
    image: getAssetImage(images.categories.automotive),
    imageFallback: getAssetFallback(images.categories.automotive),
  },
  {
    id: "charge-air-coolers",
    title: "Charge Air Coolers",
    description:
      "High-performance charge air coolers designed to improve engine power, efficiency and durability.",
    image: getAssetImage(images.categories.chargeAirCoolers),
    imageFallback: getAssetFallback(images.categories.chargeAirCoolers),
  },
  {
    id: "oil-coolers",
    title: "Oil Coolers",
    description:
      "Advanced oil cooling solutions for engines, transmissions and hydraulic systems operating under demanding conditions.",
    image: getAssetImage(images.categories.oilCoolers),
    imageFallback: getAssetFallback(images.categories.oilCoolers),
  },
  {
    id: "heat-exchangers",
    title: "Heat Exchangers",
    description:
      "Custom-engineered heat exchangers for industrial, power generation and specialized thermal management applications.",
    image: getAssetImage(images.categories.heatExchangers),
    imageFallback: getAssetFallback(images.categories.heatExchangers),
  },
  {
    id: "custom-solutions",
    title: "Custom Cooling Solutions",
    description:
      "OEM and custom-built cooling systems engineered to meet unique customer specifications and industry requirements.",
    image: getAssetImage(images.categories.industrial),
    imageFallback: getAssetFallback(images.categories.industrial),
  },
];