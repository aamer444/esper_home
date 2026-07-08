import { Link } from "react-router-dom";

interface LogoProps {
  dark?: boolean;
}

const Logo = ({ dark = false }: LogoProps) => {
  return (
    <Link
      to="/"
      className="flex flex-col shrink-0"
    >
      <h1
        className={`
          font-black
          tracking-tight
          leading-none

          text-[3rem]
          lg:text-[3.2rem]

          ${dark ? "text-esper-blue" : "text-white"}
        `}
      >
        esper
        <span className="align-top text-[11px] ml-0.5">™</span>
      </h1>

      <p
        className={`
          mt-1
          text-[12px]
          leading-none

          ${dark ? "text-gray-500" : "text-gray-300"}
        `}
      >
        Daneen Heat Exchangers Pvt. Ltd.
      </p>
    </Link>
  );
};

export default Logo;