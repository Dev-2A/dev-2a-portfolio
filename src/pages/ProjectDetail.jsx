import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useI18n } from "../contexts/I18nContext";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { t } = useI18n();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        <motion.button
          onClick={() => navigate("/")}
          className={`mb-8 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
            isDark
              ? "text-gray-400 hover:text-white hover:bg-navy-light"
              : "text-ink-muted hover:text-ink hover:bg-gray-100"
          }`}
          whileHover={{ x: -4 }}
        >
          {t("projectDetail.back")}
        </motion.button>

        <div
          className={`text-center py-24 rounded-2xl border-2 border-dashed ${
            isDark
              ? "border-gray-700 text-gray-500"
              : "border-gray-300 text-gray-400"
          }`}
        >
          <p className="text-4xl mb-4">🔍</p>
          <p className="text-xl font-medium mb-2">
            Project: <span className="text-gradient font-bold">{slug}</span>
          </p>
          <p>Step 14에서 상세 페이지 구현 예정</p>
        </div>
      </div>
    </div>
  );
}
