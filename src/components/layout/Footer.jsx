import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { useI18n } from "../../contexts/I18nContext";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/Dev-2A",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Solved.ac",
    href: "https://solved.ac/profile/tangi826",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:yehee826@gmail.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { isDark } = useTheme();
  const { t } = useI18n();

  return (
    <footer
      id="contact"
      className={`py-16 border-t ${isDark ? "border-gray-800" : "border-gray-200"}`}
    >
      <div className="section-container text-center">
        {/* Social links */}
        <div className="flex justify-center gap-4 mb-8">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-xl transition-colors ${
                isDark
                  ? "bg-navy-light text-gray-400 hover:text-violet-light hover:bg-navy-lighter"
                  : "bg-gray-100 text-ink-muted hover:text-violet hover:bg-violet/10"
              }`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Built with */}
        <p
          className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-ink-muted"}`}
        >
          {t("footer.builtWith")}
        </p>
        <p className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
