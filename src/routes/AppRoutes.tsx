import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PageLoader from "../components/common/PageLoader";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const Services = lazy(() => import("../pages/Services"));
const About = lazy(() => import("../pages/About"));
const Clients = lazy(() => import("../pages/Clients"));
const Contact = lazy(() => import("../pages/Contact"));
const Privacy = lazy(() =>
  import("../pages/Legal").then((m) => ({ default: m.Privacy })),
);
const Terms = lazy(() =>
  import("../pages/Legal").then((m) => ({ default: m.Terms })),
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
