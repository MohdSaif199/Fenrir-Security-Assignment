import { activityLogs } from "../../data/mockData";

function Segment({ seg }) {
  switch (seg.type) {
    case "link":
      return (
        <span className="text-[#0bbfac] hover:underline cursor-pointer">
          {seg.text}
        </span>
      );
    case "quoted":
      return (
        <span className="text-[#0bbfac] dark:text-[#0bbfac]">{seg.text}</span>
      );
    case "code":
      return (
        <code className="px-1.5 py-0.5 mx-0.5 rounded text-xs bg-gray-100 dark:bg-[#0a0c0b] text-gray-700 dark:text-gray-300 font-mono">
          {seg.text}
        </code>
      );
    case "highlight":
      return (
        <code className="px-1.5 py-0.5 mx-0.5 rounded text-xs bg-[#14e3c0]/15 text-[#0bbfac] font-mono dark:bg-[#14e3c0]/10">
          {seg.text}
        </code>
      );
    case "bold-danger":
      return (
        <strong className="text-red-500 dark:text-red-400 font-semibold">
          {seg.text.replace(/\*\*/g, "")}
        </strong>
      );
    default:
      return (
        <span className="text-gray-700 dark:text-gray-300">{seg.text}</span>
      );
  }
}

function ContentLine({ line, isFirst, timestamp }) {
  if (line.type === "codeline") {
    return (
      <div className="flex items-start gap-2 my-1 pl-1">
        <span className="text-gray-400 dark:text-gray-600 select-none font-mono text-xs mt-0.5">
          │
        </span>
        <span className="font-mono text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
          {line.text}
        </span>
      </div>
    );
  }

  return (
    <p className="text-sm leading-relaxed">
      {isFirst && (
        <span className="font-mono text-gray-400 dark:text-gray-600 text-xs mr-1.5">
          [{timestamp}]
        </span>
      )}
      {line.segments.map((seg, i) => (
        <Segment key={i} seg={seg} />
      ))}
    </p>
  );
}

function LogEntry({ entry }) {
  return (
    <div className="mb-4 last:mb-0">
      {entry.content.map((line, lineIndex) => (
        <ContentLine
          key={lineIndex}
          line={line}
          isFirst={lineIndex === 0}
          timestamp={entry.timestamp}
        />
      ))}
    </div>
  );
}

export default function ActivityLog() {
  return (
    <div className="h-full overflow-y-auto space-y-0.5 pr-1">
      {activityLogs.map((entry) => (
        <LogEntry key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
