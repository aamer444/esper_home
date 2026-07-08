import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Container from "../common/Container";
import Logo from "../common/Logo";
import { navigation } from "../../constants/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const showLight = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          showLight
            ? "bg-white/95 backdrop-blur-xl shadow-md"
            : "bg-transparent"
        }`}
      >
        <Container>

          <div className="flex h-[82px] items-center justify-between">

            <div className="flex h-full items-center">
              <Logo dark={showLight} />
            </div>

            <nav className="hidden h-full items-center gap-10 lg:flex">

              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) => `
                    relative
                    flex
                    h-full
                    items-center
                    text-[13px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    transition-colors
                    duration-300
                    ${
                      showLight
                        ? "text-gray-800"
                        : "text-white"
                    }
                    ${isActive ? "text-esper-blue" : ""}
                    after:absolute
                    after:bottom-[20px]
                    after:left-0
                    after:h-[2px]
                    after:w-0
                    after:bg-esper-blue
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                    ${isActive ? "after:w-full" : ""}
                  `}
                >
                  {item.title}
                </NavLink>
              ))}

            </nav>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className={`lg:hidden ${
                showLight
                  ? "text-black"
                  : "text-white"
              }`}
            >
              <Menu size={28} />
            </button>

          </div>

        </Container>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-[100] bg-esper-navy transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Container>

          <div className="flex h-20 items-center justify-between">

            <Logo />

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              <X size={30} />
            </button>

          </div>

          <nav className="mt-12 flex flex-col gap-7">

            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-2xl font-semibold transition ${
                    isActive
                      ? "text-esper-red"
                      : "text-white"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

          </nav>

        </Container>
      </div>
    </>
  );
};

export default Navbar;