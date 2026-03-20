import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { useI18n } from "../../contexts/I18nContext";

const floatingIcons = [
  { emoji: "🐍", x: "10%", y: "20%", delay: 0, size: 28 },
  { emoji: "⚛️", x: "85%", y: "15%", delay: 0.5, size: 24 },
  { emoji: "🎮", x: "75%", y: "70%", delay: 1, size: 26 },
  { emoji: "📚", x: "15%", y: "75%", delay: 1.5, size: 22 },
  { emoji: "🤖", x: "90%", y: "45%", delay: 0.8, size: 30 },
  { emoji: "✨", x: "5%", y: "50%", delay: 1.2, size: 20 },
  { emoji: "🎯", x: "65%", y: "85%", delay: 0.3, size: 22 },
  { emoji: "💜", x: "50%", y: "10%", delay: 0.7, size: 18 },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const { isDark } = useTheme();
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Floating emojis */}
      {floatingIcons.slice(0, typeof window !== 'undefined' && window.innerWidth < 768 ? 4 : 8).map((icon, i) => (
        <motion.span
          key={i}
          className="absolute select-none pointer-events-none opacity-15"
          style={{ left: icon.x, top: icon.y, fontSize: icon.size }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + icon.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: icon.delay,
          }}
        >
          {icon.emoji}
        </motion.span>
      ))}

      {/* Gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full blur-3xl opacity-20 bg-violet" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full blur-3xl opacity-20 bg-coral" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 bg-mint" />

      {/* Content */}
      <motion.div
        className="section-container text-center relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={item} className="mb-6">
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              isDark
                ? "bg-violet/20 text-violet-light"
                : "bg-violet/10 text-violet"
            }`}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            ONTHEIT R&D · AI/ML Engineer
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={item}
          className={`text-lg md:text-xl mb-2 ${isDark ? "text-gray-400" : "text-ink-muted"}`}
        >
          {t("hero.greeting")}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display text-5xl md:text-7xl font-extrabold mb-4"
        >
          <span className="text-gradient">{t("hero.name")}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={item}
          className={`font-display text-xl md:text-2xl font-medium mb-3 ${
            isDark ? "text-gray-300" : "text-ink-light"
          }`}
        >
          {t("hero.title")}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className={`text-lg mb-10 ${isDark ? "text-gray-400" : "text-ink-muted"}`}
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex justify-center gap-4 flex-wrap"
        >
          <motion.button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 rounded-xl font-semibold text-white cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #EC4899)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            {t("hero.cta")} →
          </motion.button>
          <motion.a
            href="https://github.com/Dev-2A"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-3.5 rounded-xl font-semibold border-2 transition-colors ${
              isDark
                ? "border-gray-600 text-gray-300 hover:border-violet-light hover:text-violet-light"
                : "border-gray-300 text-ink hover:border-violet hover:text-violet"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {t("hero.github")}
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isDark ? "#64748B" : "#9CA3AF"}
            strokeWidth="2"
            strokeLinecap="round"
            className="mx-auto"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
