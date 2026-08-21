import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { tema, alternar } = useTheme();

  return (
    <button
      className="icon-btn"
      type="button"
      onClick={alternar}
      aria-label={tema === "dark" ? "Mudar para o tema claro" : "Mudar para o tema escuro"}
    >
      {tema === "dark" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
