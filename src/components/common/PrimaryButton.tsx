import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "dark";
  onClick?: () => void;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  showArrow?: boolean;
}

const variantStyles = {
  primary:
    "bg-esper-blue text-white hover:bg-esper-navy shadow-lg hover:shadow-xl",

  secondary:
    "border border-white/70 text-white hover:bg-white hover:text-esper-navy",

  outline:
    "border border-esper-blue text-esper-blue hover:bg-esper-blue hover:text-white",

  dark:
    "bg-white text-esper-navy hover:bg-esper-blue hover:text-white shadow-lg hover:shadow-xl",
};

const Button = ({
  children,
  variant = "primary",
  onClick,
  to,
  href,
  type = "button",
  disabled = false,
  className = "",
  showArrow = true,
}: ButtonProps) => {
  const base = `
    group
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-lg
    px-5
    py-3
    text-[11px]
    font-semibold
    uppercase
    tracking-[0.14em]
    transition-all
    duration-300
    hover:-translate-y-0.5
    sm:w-auto
    sm:px-6
    sm:py-3.5
    sm:text-[13px]
    lg:px-7
    lg:py-3.5
    whitespace-nowrap
  `;

  const content = (
    <>
      {children}

      {showArrow && (
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  const classes = `${base} ${variantStyles[variant]} ${disabled ? "cursor-not-allowed opacity-45 hover:translate-y-0 hover:shadow-lg" : ""} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
};

export default Button;
