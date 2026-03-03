import { Fragment } from "react";
import { Search, LayoutGrid, FlaskConical, ClipboardCheck, FileText } from "lucide-react";

const STEPS = [
  { id: 1, label: "Spidering", icon: Search },
  { id: 2, label: "Mapping", icon: LayoutGrid },
  { id: 3, label: "Testing", icon: FlaskConical },
  { id: 4, label: "Validating", icon: ClipboardCheck },
  { id: 5, label: "Reporting", icon: FileText },
];

function Step({ icon: Icon, label, isActive }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
          isActive
            ? "bg-[#14e3c0] text-white shadow-[0_0_14px_rgba(20,227,192,0.35)]"
            : "border border-gray-200 text-gray-400 bg-white dark:border-[#1e2230] dark:text-gray-600 dark:bg-[#141720]"
        }`}
      >
        <Icon size={15} strokeWidth={1.8} />
      </div>
      <span
        className={`text-[11px] text-center leading-tight whitespace-nowrap ${
          isActive
            ? "text-gray-700 dark:text-gray-200 font-medium"
            : "text-gray-400 dark:text-gray-600"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function ScanSteps({ activeStepIndex = 0 }) {
  return (
    <div className="flex items-start w-full">
      {STEPS.map((step, index) => (
        <Fragment key={step.id}>
          <Step
            icon={step.icon}
            label={step.label}
            isActive={index === activeStepIndex}
          />
          {index < STEPS.length - 1 && (
            <div className="flex-1 h-px bg-gray-200 dark:bg-[#1e2230] mt-[18px] mx-1.5 sm:mx-2.5" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
