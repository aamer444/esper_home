import type { ReactNode } from "react";
import { Toaster } from "sonner";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Toaster position="top-right" richColors closeButton />
    </>
  );
};

export default Layout;
