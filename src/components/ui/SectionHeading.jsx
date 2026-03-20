import { useTheme } from "../../contexts/ThemeContext";
import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({ title, subtitle }) {
  const { isDark } = useTheme();

  return (
    <ScrollReveal className="text-center mb-12">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
        {title}
      </h2>
      <p
        className={isDark ? "text-gray-400 text-lg" : "text-ink-muted text-lg"}
      >
        {subtitle}
      </p>
    </ScrollReveal>
  );
}
