import { useI18n } from "../../contexts/I18nContext";
import { useTheme } from "../../contexts/ThemeContext";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

export default function VibeCoding() {
  const { t } = useI18n();
  const { isDark } = useTheme();

  return (
    <section id="vibe-coding" className="py-24">
      <div className="section-container">
        <SectionHeading
          title={t("vibeCoding.sectionTitle")}
          subtitle={t("vibeCoding.sectionSubtitle")}
        />
        <ScrollReveal>
          <div
            className={`text-center py-20 rounded-2xl border-2 border-dashed ${
              isDark
                ? "border-gray-700 text-gray-500"
                : "border-gray-300 text-gray-400"
            }`}
          >
            <p className="text-4xl mb-4">🤖 + 👨‍💻 = 💜</p>
            <p className="font-medium">
              Step 10에서 바이브 코딩 스토리 구현 예정
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
