import { useTheme } from "../../contexts/ThemeContext";

const SIZE = 120;
const STROKE_WIDTH = 8;
const RADIUS = SIZE / 2 - STROKE_WIDTH;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const CENTER = SIZE / 2;

export default function CircularProgress({ progress = 0, status = "In Progress" }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const dashOffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;
  const circleFill = isDark ? "#141e20" : "#0d1c1c";

  return (
    <div className="relative shrink-0" style={{ width: SIZE, height: SIZE }}>
      {/* SVG — rotated so arc starts from top */}
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ transform: "rotate(-90deg)" }}
      >
        {/* Solid dark background disc */}
        <circle cx={CENTER} cy={CENTER} r={RADIUS} fill={circleFill} />

        {/* Subtle track ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke={isDark ? "#1e2a2a" : "#132a2a"}
          strokeWidth={STROKE_WIDTH}
        />

        {/* Teal progress arc */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="#14e3c0"
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Centered text (not rotated) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span
          className="text-2xl font-bold leading-none"
          style={{ color: isDark ? "#14e3c0" : "#ffffff" }}
        >
          {progress}%
        </span>
        <span
          className="text-[10px] mt-1 tracking-wide"
          style={{ color: isDark ? "#6b7280" : "#9ca3af" }}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
