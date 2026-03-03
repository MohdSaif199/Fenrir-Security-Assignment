import FeatureList from "./FeatureList";
import TrustpilotBadge from "./TrustpilotBadge";

export default function HeroContent() {
  return (
    <div className="flex flex-col h-full justify-center py-20">
      {/* Main Headline */}
      <h1 className="text-white font-bold text-4xl xl:text-5xl leading-tight mb-10 max-w-md">
        Expert level Cybersecurity{" "}
        <br />
        in{" "}
        <span style={{ color: "var(--color-teal)" }}>hours</span>{" "}
        not weeks.
      </h1>

      {/* Feature List */}
      <FeatureList />

      {/* Trustpilot */}
      <TrustpilotBadge />
    </div>
  );
}
