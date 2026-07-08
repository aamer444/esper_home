interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}

const SectionHeader = ({
  label,
  title,
  description,
  light = false,
  align = "left",
}: SectionHeaderProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const textColor = light ? "text-white" : "text-esper-navy";
  const descColor = light ? "text-gray-300" : "text-gray-600";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <span className="inline-flex items-center gap-2.5 sm:gap-3">
        <span className="h-[2px] w-6 bg-esper-red sm:w-8" />
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.25em] sm:text-xs sm:tracking-[0.32em] ${light ? "text-gray-300" : "text-esper-blue"}`}
        >
          {label}
        </span>
      </span>

      <h2
        className={`mt-3 text-xl font-black uppercase leading-tight sm:mt-4 sm:text-3xl lg:text-4xl ${textColor}`}
      >
        {title}
      </h2>

      {description && (
        <p className={`mt-3 text-sm leading-relaxed sm:mt-4 sm:text-base ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
