import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const ThemeToggle = ({ isDark, toggle }: ThemeToggleProps) => (
  <button
    onClick={toggle}
    className="fixed top-6 right-6 z-50 p-3 rounded-2xl bg-card card-shadow hover:card-shadow-hover transition-all duration-300"
    aria-label="Toggle theme"
  >
    {isDark ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-primary" />}
  </button>
);

export default ThemeToggle;
