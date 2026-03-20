import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useI18n } from "../contexts/I18nContext";

export default function NotFound() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { locale } = useI18n();

  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-8xl font-display font-extrabold text-gradient mb-4">
            404
          </p>
          <p
            className={`text-xl mb-2 font-medium ${
              isDark ? "text-gray-300" : "text-ink-light"
            }`}
          >
            {locale === "ko" ? "페이지를 찾을 수 없습니다" : "Page not found"}
          </p>
          <p className={`mb-8 ${isDark ? "text-gray-500" : "text-ink-muted"}`}>
            {locale === "ko"
              ? "요청하신 페이지가 존재하지 않거나 이동되었습니다."
              : "The page you requested does not exist or has been moved."}
          </p>
          <motion.button
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-xl font-semibold text-white cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #EC4899)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {locale === "ko" ? "홈으로 돌아가기" : "Back to Home"}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
