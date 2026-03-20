import { motion } from "framer-motion";
import { useI18n } from "../../contexts/I18nContext";
import { useTheme } from "../../contexts/ThemeContext";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import TimelineIcon from "../ui/TimelineIcon";
import aboutData from "../../data/about.json";

const colors = ["violet", "coral", "mint", "pink"];

export default function About() {
  const { t, locale } = useI18n();
  const { isDark } = useTheme();
  const timeline = aboutData[locale];

  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <SectionHeading
          title={t("about.sectionTitle")}
          subtitle={t("about.sectionSubtitle")}
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <ScrollReveal>
            {/* Line */}
            <div className="relative">
              <div
                className={`absolute top-6 left-0 right-0 h-0.5 ${
                  isDark ? "bg-gray-700" : "bg-gray-200"
                }`}
              />

              <div className="grid grid-cols-4 gap-6 relative">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                  >
                    {/* Dot */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 z-10 ${
                        isDark
                          ? `bg-navy-light border-2 border-${colors[i]}`
                          : `bg-white border-2 border-${colors[i]} shadow-md`
                      }`}
                      style={{
                        borderColor: [
                          "#7C3AED",
                          "#FB923C",
                          "#2DD4BF",
                          "#EC4899",
                        ][i],
                        color: ["#7C3AED", "#FB923C", "#2DD4BF", "#EC4899"][i],
                      }}
                    >
                      <TimelineIcon name={item.icon} />
                    </div>

                    {/* Year badge */}
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full mb-3"
                      style={{
                        backgroundColor:
                          ["#7C3AED", "#FB923C", "#2DD4BF", "#EC4899"][i] +
                          "20",
                        color: ["#7C3AED", "#FB923C", "#2DD4BF", "#EC4899"][i],
                      }}
                    >
                      {item.year}
                    </span>

                    {/* Content */}
                    <h3 className="font-display font-bold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-gray-400" : "text-ink-muted"
                      }`}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden">
          <div className="relative pl-10">
            {/* Vertical line */}
            <div
              className={`absolute left-3 top-0 bottom-0 w-0.5 ${
                isDark ? "bg-gray-700" : "bg-gray-200"
              }`}
            />

            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative mb-10 last:mb-0">
                  {/* Dot */}
                  <div
                    className="absolute -left-6 w-10 h-10 rounded-full flex items-center justify-center z-10"
                    style={{
                      backgroundColor: isDark ? "#1E293B" : "#FFFFFF",
                      borderWidth: 2,
                      borderStyle: "solid",
                      borderColor: ["#7C3AED", "#FB923C", "#2DD4BF", "#EC4899"][
                        i
                      ],
                      color: ["#7C3AED", "#FB923C", "#2DD4BF", "#EC4899"][i],
                    }}
                  >
                    <TimelineIcon name={item.icon} />
                  </div>

                  {/* Content */}
                  <div className="ml-6">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-2"
                      style={{
                        backgroundColor:
                          ["#7C3AED", "#FB923C", "#2DD4BF", "#EC4899"][i] +
                          "20",
                        color: ["#7C3AED", "#FB923C", "#2DD4BF", "#EC4899"][i],
                      }}
                    >
                      {item.year}
                    </span>
                    <h3 className="font-display font-bold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-gray-400" : "text-ink-muted"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
