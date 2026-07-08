import RadiatorIcon from "./RadiatorIcon";

interface AnimatedRadiatorAccentProps {
  className?: string;
  size?: number;
  variant?: "default" | "light" | "accent";
}

const AnimatedRadiatorAccent = ({
  className = "",
  size = 40,
  variant = "light",
}: AnimatedRadiatorAccentProps) => {
  return (
    <div
      className={`pointer-events-none select-none opacity-20 ${className}`}
      aria-hidden
    >
      <RadiatorIcon size={size} variant={variant} animated />
    </div>
  );
};

export default AnimatedRadiatorAccent;
