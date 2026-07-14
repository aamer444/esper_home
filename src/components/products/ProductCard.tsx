import type { Product } from "../../types";
import SmartImage from "../common/SmartImage";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <SmartImage
          src={product.image}
          fallback={product.imageFallback}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-3 lg:p-4">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-esper-blue sm:text-xs">
          {product.category}
        </span>
        <h3 className="mt-1.5 text-xs font-bold uppercase leading-snug text-esper-navy sm:text-sm">
          {product.name}
        </h3>

        <div className="mt-3 hidden lg:block">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Applications
          </p>
          <ul className="mt-2 space-y-1">
            {product.applications.map((app) => (
              <li key={app} className="text-xs text-gray-600">
                {app}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 hidden xl:block">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Specifications
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {product.specifications.map((spec) => (
              <li
                key={spec}
                className="rounded-full bg-esper-gray px-2.5 py-1 text-xs text-gray-600"
              >
                {spec}
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="/ecommerce-coming-soon"
          className="mt-auto pt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-esper-blue transition hover:text-esper-navy sm:text-xs"
        >
          View Details →
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
