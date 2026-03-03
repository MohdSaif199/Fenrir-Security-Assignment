import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex items-center justify-center w-9 h-9 rounded-lg transition-colors cursor-pointer
        bg-gray-100 hover:bg-gray-200 text-gray-600
        dark:bg-[#1e2230] dark:hover:bg-[#252a3a] dark:text-gray-300
        ${className}`}
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
