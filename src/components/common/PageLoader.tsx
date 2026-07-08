import RadiatorIcon from "../icons/RadiatorIcon";

const PageLoader = () => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-esper-gray px-6">
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <RadiatorIcon size={56} animated variant="accent" />
    </div>
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-esper-blue">
      Loading
    </p>
  </div>
);

export default PageLoader;
