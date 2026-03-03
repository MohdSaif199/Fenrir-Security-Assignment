import { Star } from "lucide-react";

export default function TrustpilotBadge() {
  return (
    <div className="mt-auto pt-12">
      <div className="flex items-center gap-2 mb-1">
        <Star size={16} fill="#00b67a" color="#00b67a" />
        <span className="text-white/80 text-sm font-medium">Trustpilot</span>
      </div>
      <p className="text-white font-bold text-base">
        Rated 4.5/5.0{" "}
        <span className="text-white/50 font-normal text-sm">(100k+ reviews)</span>
      </p>
    </div>
  );
}
