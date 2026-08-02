import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PageLoader from "../components/common/PageLoader";
import ScrollToTop from "../components/common/ScrollToTop";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Services = lazy(() => import("../pages/Services"));
const About = lazy(() => import("../pages/About"));
const Clients = lazy(() => import("../pages/Clients"));
const Contact = lazy(() => import("../pages/Contact"));
const EcommerceComingSoon = lazy(() => import("../pages/EcommerceComingSoon"));
const Privacy = lazy(() =>
  import("../pages/Legal").then((m) => ({ default: m.Privacy })),
);
const Terms = lazy(() =>
  import("../pages/Legal").then((m) => ({ default: m.Terms })),
);
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ecommerce-coming-soon" element={<EcommerceComingSoon />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
