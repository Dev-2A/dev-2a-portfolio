import { useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useI18n } from "../contexts/I18nContext";
import ScrollReveal from "../components/ui/ScrollReveal";
import projects from "../data/projects.json";

const categoryLabels = {
  ko: {
    web: "웹 앱",
    cli: "CLI",
    "ai-ml": "AI·ML",
    bot: "봇",
    game: "게임",
    tool: "유틸",
  },
  en: {
    web: "Web App",
    cli: "CLI",
    "ai-ml": "AI·ML",
    bot: "Bot",
    game: "Game",
    tool: "Utility",
  },
};

const categoryEmojis = {
  web: "🌐",
  cli: "⌨️",
  "ai-ml": "🤖",
  bot: "🤖",
  game: "🎮",
  tool: "🔧",
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { locale, t } = useI18n();

  const { project, prevProject, nextProject } = useMemo(() => {
    const index = projects.findIndex((p) => p.slug === slug);
    return {
      project: projects[index] || null,
      prevProject: index > 0 ? projects[index - 1] : null,
      nextProject: index < projects.length - 1 ? projects[index + 1] : null,
    };
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="section-container text-center py-24">
          <p className="text-4xl mb-4">😵</p>
          <p className="text-xl font-medium mb-4">
            {locale === "ko"
              ? "프로젝트를 찾을 수 없습니다"
              : "Project not found"}
          </p>
          <button
            onClick={() => navigate("/")}
            className="text-violet hover:underline cursor-pointer"
          >
            {t("projectDetail.back")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container max-w-3xl">
        {/* Back button */}
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

        {/* Header */}
        <ScrollReveal>
          {/* Color banner */}
          <div
            className="h-40 rounded-2xl mb-8 relative overflow-hidden"
            style={{ backgroundColor: project.thumbnailColor + "20" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl opacity-30">
                {categoryEmojis[project.category] || "📦"}
              </span>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-1.5"
              style={{ backgroundColor: project.thumbnailColor }}
            />
          </div>

          {/* Category badge + date */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: project.thumbnailColor }}
            >
              {categoryEmojis[project.category]}{" "}
              {categoryLabels[locale]?.[project.category] || project.category}
            </span>
            <span
              className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}
            >
              {project.createdAt}
            </span>
            {project.featured && (
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-violet text-white">
                ⭐ Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
            {project.title[locale]}
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg mb-6 ${isDark ? "text-gray-400" : "text-ink-muted"}`}
          >
            {project.subtitle[locale]}
          </p>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={0.1}>
          <div
            className={`p-6 rounded-xl mb-8 ${
              isDark
                ? "bg-navy-light border border-gray-700"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            <p className="leading-relaxed">{project.description[locale]}</p>
          </div>
        </ScrollReveal>

        {/* Tech Stack */}
        <ScrollReveal delay={0.15}>
          <h2 className="font-display font-bold text-xl mb-4">
            {t("projectDetail.techStack")}
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                  isDark
                    ? "bg-navy-lighter text-gray-300"
                    : "bg-gray-100 text-ink-muted"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Highlights */}
        <ScrollReveal delay={0.2}>
          <h2 className="font-display font-bold text-xl mb-4">
            {t("projectDetail.highlights")}
          </h2>
          <ul
            className={`mb-8 space-y-2 ${isDark ? "text-gray-300" : "text-ink-light"}`}
          >
            {project.highlights[locale].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: project.thumbnailColor }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Lessons Learned */}
        <ScrollReveal delay={0.25}>
          <h2 className="font-display font-bold text-xl mb-4">
            {t("projectDetail.lessons")}
          </h2>
          <p
            className={`mb-8 leading-relaxed ${isDark ? "text-gray-400" : "text-ink-muted"}`}
          >
            {project.lessonsLearned[locale]}
          </p>
        </ScrollReveal>

        {/* Links */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap gap-4 mb-16">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${
                isDark
                  ? "bg-navy-lighter text-gray-200 hover:bg-gray-600"
                  : "bg-gray-900 text-white hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              {t("projectDetail.github")}
            </motion.a>

            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white"
                style={{
                  background: `linear-gradient(135deg, ${project.thumbnailColor}, #7C3AED)`,
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {t("projectDetail.live")}
              </motion.a>
            )}
          </div>
        </ScrollReveal>

        {/* Prev / Next navigation */}
        <div
          className={`flex justify-between items-center pt-8 border-t ${
            isDark ? "border-gray-700" : "border-gray-200"
          }`}
        >
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className={`group flex flex-col ${
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              <span className="text-sm">{t("projectDetail.prev")}</span>
              <span className="font-medium group-hover:-translate-x-1 transition-transform">
                {prevProject.title[locale]}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className={`group flex flex-col text-right ${
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              <span className="text-sm">{t("projectDetail.next")}</span>
              <span className="font-medium group-hover:translate-x-1 transition-transform">
                {nextProject.title[locale]}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
