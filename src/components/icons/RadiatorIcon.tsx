interface RadiatorIconProps {
  size?: number;
  className?: string;
  animated?: boolean;
  variant?: "default" | "light" | "accent";
}

const colors = {
  default: {
    tank: "#003B8F",
    fin: "#001B44",
    finAlt: "#003B8F",
    pipe: "#E53935",
    heat: "#E53935",
  },
  light: {
    tank: "#ffffff",
    fin: "rgba(255,255,255,0.7)",
    finAlt: "rgba(255,255,255,0.45)",
    pipe: "#E53935",
    heat: "#E53935",
  },
  accent: {
    tank: "#003B8F",
    fin: "#003B8F",
    finAlt: "#001B44",
    pipe: "#E53935",
    heat: "#E53935",
  },
};

const RadiatorIcon = ({
  size = 48,
  className = "",
  animated = true,
  variant = "default",
}: RadiatorIconProps) => {
  const c = colors[variant];
  const anim = animated ? "radiator-animated" : "";

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={`${anim} ${className}`}
      aria-hidden
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left tank */}
      <rect x="4" y="18" width="8" height="28" rx="2" fill={c.tank} />

      {/* Fin core */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect
          key={i}
          x={14 + i * 4.5}
          y="16"
          width="2.5"
          height="32"
          rx="0.5"
          fill={i % 2 === 0 ? c.fin : c.finAlt}
          className={animated ? "radiator-fin" : ""}
          style={animated ? { animationDelay: `${i * 0.12}s` } : undefined}
        />
      ))}

      {/* Right tank */}
      <rect x="52" y="18" width="8" height="28" rx="2" fill={c.tank} />

      {/* Top pipe */}
      <path
        d="M8 18 C8 10, 20 10, 24 14 L40 14 C44 10, 56 10, 56 18"
        stroke={c.pipe}
        strokeWidth="2.5"
        strokeLinecap="round"
        className={animated ? "radiator-flow-top" : ""}
      />

      {/* Bottom pipe */}
      <path
        d="M8 46 C8 54, 20 54, 24 50 L40 50 C44 54, 56 54, 56 46"
        stroke={c.pipe}
        strokeWidth="2.5"
        strokeLinecap="round"
        className={animated ? "radiator-flow-bottom" : ""}
      />

      {/* Heat waves */}
      {animated && (
        <>
          <path
            d="M30 8 Q32 4, 34 8 Q36 12, 38 8"
            stroke={c.heat}
            strokeWidth="1.5"
            strokeLinecap="round"
            className="radiator-heat radiator-heat-1"
          />
          <path
            d="M26 6 Q29 1, 32 6 Q35 11, 38 6 Q41 1, 44 6"
            stroke={c.heat}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
            className="radiator-heat radiator-heat-2"
          />
        </>
      )}
    </svg>
  );
};

export default RadiatorIcon;
