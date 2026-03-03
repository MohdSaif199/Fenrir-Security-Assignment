import { Check } from "lucide-react";

const features = [
  "Effortlessly spider and map targets to uncover hidden security flaws",
  "Deliver high-quality, validated findings in hours, not weeks.",
  "Generate professional, enterprise-grade security reports automatically.",
];

export default function FeatureList() {
  return (
    <div>
      <p className="text-white/70 text-sm font-medium mb-4">What's included</p>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0">
              <Check
                size={16}
                style={{ color: "var(--color-teal)" }}
                strokeWidth={2.5}
              />
            </span>
            <span className="text-white/75 text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
