import CircularProgress from "./CircularProgress";
import ScanSteps from "./ScanSteps";
import { scanProgress } from "../../data/mockData";

function MetaItem({ label, value, isTeal = false }) {
  return (
    <div className="min-w-0">
      <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-0.5 tracking-wide">
        {label}
      </p>
      <p
        className={`text-sm font-semibold truncate ${
          isTeal
            ? "text-[#0bbfac]"
            : "text-gray-800 dark:text-gray-100"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export default function ScanProgressCard() {
  const {
    progress,
    status,
    type,
    targets,
    startedAt,
    credentials,
    files,
    checklists,
    activeStep,
  } = scanProgress;

  return (
    <div className="rounded-xl border bg-white dark:bg-[#141720] border-gray-200 dark:border-[#1e2230] p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-center sm:items-start">
        {/* Left — circular gauge */}
        <CircularProgress progress={progress} status={status} />

        {/* Right — steps + meta */}
        <div className="flex-1 flex flex-col gap-4 min-w-0 w-full">
          {/* Step pipeline */}
          <ScanSteps activeStepIndex={activeStep} />

          {/* Divider */}
          <div className="h-px bg-gray-100 dark:bg-[#1e2230]" />

          {/* Meta row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <MetaItem label="Scan Type" value={type} />
            <MetaItem label="Targets" value={targets} />
            <MetaItem label="Started At" value={startedAt} />
            <MetaItem label="Credentials" value={credentials} />
            <MetaItem label="Files" value={files} />
            <MetaItem label="Checklists" value={checklists} isTeal />
          </div>
        </div>
      </div>
    </div>
  );
}
