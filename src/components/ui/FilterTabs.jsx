import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { useI18n } from "../../contexts/I18nContext";

const filters = [
  { key: "all", labelKey: "projects.filterAll" },
  { key: "web", labelKey: "projects.filterWeb" },
  { key: "cli", labelKey: "projects.filterCli" },
  { key: "ai-ml", labelKey: "projects.filterAiMl" },
  { key: "bot", labelKey: "projects.filterBot" },
  { key: "game", labelKey: "projects.filterGame" },
  { key: "tool", labelKey: "projects.filterTool" },
];

export default function FilterTabs({ active, onChange }) {
  const { isDark } = useTheme();
  const { t } = useI18n();

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onChange(filter.key)}
          className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
            active === filter.key
              ? "text-white"
              : isDark
                ? "text-gray-400 hover:text-white bg-navy-light hover:bg-navy-lighter"
                : "text-ink-muted hover:text-ink bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {active === filter.key && (
            <motion.div
              layoutId="filter-pill"
              className="absolute inset-0 rounded-full bg-violet"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{t(filter.labelKey)}</span>
        </button>
      ))}
    </div>
  );
}
