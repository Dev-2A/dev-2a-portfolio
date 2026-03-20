import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { useI18n } from "../../contexts/I18nContext";

const categoryEmojis = {
  web: "🌐",
  cli: "⌨️",
  "ai-ml": "🤖",
  bot: "🤖",
  game: "🎮",
  tool: "🔧",
};

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { locale, t } = useI18n();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={() => navigate(`/projects/${project.slug}`)}
      className={`group cursor-pointer rounded-2xl overflow-hidden border transition-shadow ${
        isDark
          ? "bg-navy-light border-gray-700 hover:shadow-lg hover:shadow-violet/10"
          : "bg-white border-gray-200 hover:shadow-xl"
      }`}
    >
      {/* Color header */}
      <div
        className="h-32 relative overflow-hidden"
        style={{ backgroundColor: project.thumbnailColor + "20" }}
      >
        {/* Large emoji */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300">
            {categoryEmojis[project.category] || "📦"}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: project.thumbnailColor }}
          >
            ⭐ Featured
          </div>
        )}

        {/* Live badge */}
        {project.liveUrl && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-green-500 text-white">
            🔴 Live
          </div>
        )}

        {/* Color accent bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: project.thumbnailColor }}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-display font-bold text-lg mb-1 group-hover:text-violet transition-colors">
          {project.title[locale]}
        </h3>

        {/* Subtitle */}
        <p
          className={`text-sm mb-4 line-clamp-2 ${
            isDark ? "text-gray-400" : "text-ink-muted"
          }`}
        >
          {project.subtitle[locale]}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className={`px-2 py-0.5 text-xs rounded-md font-medium ${
                isDark
                  ? "bg-navy-lighter text-gray-300"
                  : "bg-gray-100 text-ink-muted"
              }`}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span
              className={`px-2 py-0.5 text-xs rounded-md ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span
            className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}
          >
            {project.createdAt}
          </span>
          <span
            className={`text-sm font-medium group-hover:translate-x-1 transition-transform ${
              isDark ? "text-violet-light" : "text-violet"
            }`}
          >
            {t("projects.viewDetail")} →
          </span>
        </div>
      </div>
    </motion.article>
  );
}
