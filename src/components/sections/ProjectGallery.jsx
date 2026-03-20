import { useI18n } from "../../contexts/I18nContext";
import { useTheme } from "../../contexts/ThemeContext";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

export default function ProjectGallery() {
  const { t } = useI18n();
  const { isDark } = useTheme();

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <SectionHeading
          title={t("projects.sectionTitle")}
          subtitle={t("projects.sectionSubtitle")}
        />
        <ScrollReveal>
          <div
            className={`text-center py-20 rounded-2xl border-2 border-dashed ${
              isDark
                ? "border-gray-700 text-gray-500"
                : "border-gray-300 text-gray-400"
            }`}
          >
            <p className="text-4xl mb-4">🧩 × 21</p>
            <p className="font-medium">
              Step 11~13에서 프로젝트 갤러리 구현 예정
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
