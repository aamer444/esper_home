import { ChevronDown } from "lucide-react";
import Button from "../common/PrimaryButton";
import Container from "../common/Container";
import SmartImage from "../common/SmartImage";
import AnimatedRadiatorAccent from "../icons/AnimatedRadiatorAccent";
import RadiatorIcon from "../icons/RadiatorIcon";
import {
  getHeroFallback,
  getHeroImage,
} from "../../constants/images";

const Hero = () => {
  const heroSrc = getHeroImage();
  const heroFallback = getHeroFallback();

  return (
    <section className="relative overflow-hidden bg-esper-navy">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${heroFallback})` }}
        aria-hidden
      />

      {/* Glow */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-esper-blue/20 blur-[140px] lg:h-[440px] lg:w-[440px]" />

      {/* Decorative Icons */}
      <AnimatedRadiatorAccent
        className="absolute left-[6%] top-[24%] hidden xl:block"
        size={38}
      />

      <AnimatedRadiatorAccent
        className="absolute right-[8%] top-[15%] hidden xl:block"
        size={48}
      />

      <Container>
        <div
          className="
            relative
            grid
            min-h-[calc(100vh-82px)]
            items-center
            gap-10
            pt-28
            pb-6
            lg:grid-cols-2
            lg:gap-12
          "
        >
          {/* LEFT */}
          <div className="max-w-[560px]">
            <div className="flex items-center gap-3">
              <RadiatorIcon
                size={18}
                variant="light"
                animated
              />

              <span className="h-[2px] w-8 bg-esper-red" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
                Engineered To Perform
              </span>
            </div>

            <h1
              className="
                mt-4
                font-black
                uppercase
                leading-[0.86]
                tracking-tight
                text-white
                text-[46px]
                sm:text-[54px]
                lg:text-[60px]
                xl:text-[64px]
              "
            >
              High
              <br />
              Performance
              <br />
              Cooling
              <br />
              Solutions
            </h1>

            <p
              className="
                mt-5
                max-w-[520px]
                text-[16px]
                leading-7
                text-gray-300
              "
            >
              Esper manufactures premium radiators, heat exchangers and
              industrial cooling systems for mining haulers, CAT-style heavy
              equipment and nationwide fleets.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="dark"
                to="/products"
              >
                Explore Products
              </Button>

              <Button
                variant="secondary"
                to="/services"
              >
                Service Your Radiator
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[620px]">
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-[0_24px_55px_rgba(0,0,0,.40)]">
                <div className="aspect-[16/10]">
                  <SmartImage
                    src={heroSrc}
                    fallback={heroFallback}
                    alt="Esper Premium Cooling Systems"
                    loading="eager"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-xl bg-esper-navy/90 px-4 py-3 backdrop-blur-md">
                  <RadiatorIcon
                    size={18}
                    variant="light"
                    animated
                  />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                    OEM Grade Cooling
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <a
        href="#quick-actions"
        className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block"
        aria-label="Scroll down"
      >
        <ChevronDown
          size={30}
          className="text-white"
        />
      </a>
    </section>
  );
};

export default Hero;