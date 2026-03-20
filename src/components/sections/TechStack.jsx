import { motion } from "framer-motion";
import { useI18n } from "../../contexts/I18nContext";
import { useTheme } from "../../contexts/ThemeContext";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import techStackData from "../../data/techStack.json";

const categoryColors = [
  { bg: "#7C3AED", light: "#7C3AED20" },
  { bg: "#FB923C", light: "#FB923C20" },
  { bg: "#2DD4BF", light: "#2DD4BF20" },
  { bg: "#EC4899", light: "#EC489920" },
  { bg: "#38BDF8", light: "#38BDF820" },
];

const levelDots = (level) => {
  return Array.from({ length: 3 }, (_, i) => (
    <span
      key={i}
      className={`inline-block w-1.5 h-1.5 rounded-full ${
        i < level ? "bg-current opacity-80" : "bg-current opacity-20"
      }`}
    />
  ));
};

export default function TechStack() {
  const { t, locale } = useI18n();
  const { isDark } = useTheme();
  const categories = techStackData[locale];

  return (
    <section
      id="tech-stack"
      className={`py-24 ${isDark ? "bg-navy-light/50" : "bg-violet/5"}`}
    >
      <div className="section-container">
        <SectionHeading
          title={t("techStack.sectionTitle")}
          subtitle={t("techStack.sectionSubtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, catIdx) => (
            <ScrollReveal key={category.category} delay={catIdx * 0.1}>
              <div
                className={`p-6 rounded-2xl border h-full ${
                  isDark
                    ? "bg-navy border-gray-700"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: categoryColors[catIdx]?.bg }}
                  />
                  <h3 className="font-display font-bold text-lg">
                    {category.category}
                  </h3>
                </div>

                {/* Items */}
                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <motion.div
                      key={item.name}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg ${
                        isDark ? "hover:bg-navy-lighter" : "hover:bg-gray-50"
                      } transition-colors`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.1 + itemIdx * 0.05 }}
                    >
                      <span
                        className={`font-medium text-sm ${
                          isDark ? "text-gray-300" : "text-ink"
                        }`}
                      >
                        {item.name}
                      </span>
                      <div
                        className="flex gap-1"
                        style={{ color: categoryColors[catIdx]?.bg }}
                      >
                        {levelDots(item.level)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Legend */}
        <div
          className={`flex justify-center gap-6 mt-8 text-xs ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className="flex gap-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-20" />
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-20" />
            </span>
            {locale === "ko" ? "입문" : "Beginner"}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="flex gap-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-20" />
            </span>
            {locale === "ko" ? "실전 경험" : "Practical"}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="flex gap-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
            </span>
            {locale === "ko" ? "자주 사용" : "Frequent"}
          </span>
        </div>
      </div>
    </section>
  );
}
