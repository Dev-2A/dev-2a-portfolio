import { motion } from "framer-motion";
import { useI18n } from "../../contexts/I18nContext";
import { useTheme } from "../../contexts/ThemeContext";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const workflowSteps = [
  { icon: "💬", colorFrom: "#7C3AED", colorTo: "#A78BFA", key: "step1" },
  { icon: "🔨", colorFrom: "#FB923C", colorTo: "#FDBA74", key: "step2" },
  { icon: "✅", colorFrom: "#2DD4BF", colorTo: "#5EEAD4", key: "step3" },
  { icon: "🚀", colorFrom: "#EC4899", colorTo: "#F472B6", key: "step4" },
];

export default function VibeCoding() {
  const { t, locale } = useI18n();
  const { isDark } = useTheme();

  return (
    <section
      id="vibe-coding"
      className={`py-24 ${isDark ? "bg-navy-light/50" : "bg-violet/5"}`}
    >
      <div className="section-container">
        <SectionHeading
          title={t("vibeCoding.sectionTitle")}
          subtitle={t("vibeCoding.sectionSubtitle")}
        />

        {/* Confession card */}
        <ScrollReveal>
          <div
            className={`max-w-2xl mx-auto mb-16 p-8 rounded-2xl border text-center ${
              isDark
                ? "bg-navy border-gray-700"
                : "bg-white border-gray-200 shadow-sm"
            }`}
          >
            {/* Claude icon */}
            <div className="flex justify-center mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                }}
              >
                🤖
              </div>
            </div>

            {/* Quote */}
            <blockquote className="mb-6">
              <p
                className={`text-xl md:text-2xl font-display font-bold leading-snug ${
                  isDark ? "text-white" : "text-ink"
                }`}
              >
                "{t("vibeCoding.confession")}"
              </p>
            </blockquote>

            <p
              className={`leading-relaxed ${isDark ? "text-gray-400" : "text-ink-muted"}`}
            >
              {t("vibeCoding.description")}
            </p>
          </div>
        </ScrollReveal>

        {/* Workflow steps */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h3
              className={`text-center font-display font-bold text-lg mb-8 ${
                isDark ? "text-gray-300" : "text-ink-light"
              }`}
            >
              {locale === "ko"
                ? "매 프로젝트의 여정"
                : "Every project follows this journey"}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {workflowSteps.map((step, i) => (
                <motion.div
                  key={step.key}
                  className={`relative p-6 rounded-xl text-center ${
                    isDark
                      ? "bg-navy border border-gray-700"
                      : "bg-white border border-gray-200 shadow-sm"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  {/* Step number */}
                  <span
                    className="absolute -top-3 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: step.colorFrom }}
                  >
                    {i + 1}
                  </span>

                  {/* Icon */}
                  <div className="text-3xl mb-3">{step.icon}</div>

                  {/* Label */}
                  <p
                    className={`text-sm font-medium ${
                      isDark ? "text-gray-300" : "text-ink"
                    }`}
                  >
                    {t(`vibeCoding.workflow.${step.key}`)}
                  </p>

                  {/* Arrow (between steps, desktop only) */}
                  {i < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6h8M7 3l3 3-3 3"
                          stroke={isDark ? "#64748B" : "#9CA3AF"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Tools badge */}
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center mt-12">
            <div
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm ${
                isDark
                  ? "bg-navy border border-gray-700 text-gray-400"
                  : "bg-white border border-gray-200 text-ink-muted shadow-sm"
              }`}
            >
              <span className="font-medium">Powered by</span>
              <span
                className={`font-bold ${isDark ? "text-violet-light" : "text-violet"}`}
              >
                Claude
              </span>
              <span>×</span>
              <span
                className={`font-bold ${isDark ? "text-coral-light" : "text-coral"}`}
              >
                VS Code
              </span>
              <span>×</span>
              <span
                className={`font-bold ${isDark ? "text-mint-light" : "text-mint"}`}
              >
                {locale === "ko" ? "음악" : "Music"}
              </span>
              <span>🎧</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
