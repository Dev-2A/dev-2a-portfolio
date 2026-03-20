import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { useI18n } from "../../contexts/I18nContext";
import { useScrolSpy } from "../../hooks/useScrollSpy";

const NAV_SECTIONS = [
  "about",
  "vibe-coding",
  "projects",
  "tech-stack",
  "contact",
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { locale, toggleLocale, t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = useScrolSpy(NAV_SECTIONS);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === "/" || location.pathname === "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navItems = [
    { id: "about", label: t("nav.about") },
    { id: "vibe-coding", label: t("nav.vibeCoding") },
    { id: "projects", label: t("nav.projects") },
    { id: "tech-stack", label: t("nav.techStack") },
    { id: "contact", label: t("nav.contact") },
  ];

  const handleNavClick = (sectionId) => {
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-navy/90 backdrop-blur-md shadow-lg"
            : "bg-cream/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <motion.button
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-xl font-bold tracking-tight cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-gradient">Dev-2A</span>
        </motion.button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeSection === item.id && isHome
                  ? isDark
                    ? "text-violet-light"
                    : "text-violet"
                  : isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-ink-muted hover:text-ink"
              }`}
            >
              {item.label}
              {activeSection === item.id && isHome && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-violet"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}

          <div
            className={`w-px h-6 mx-2 ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
          />

          {/* Language toggle */}
          <button
            onClick={toggleLocale}
            className={`px-2.5 py-1.5 text-xs font-bold rounded-full border transition-colors cursor-pointer ${
              isDark
                ? "border-gray-600 text-gray-300 hover:border-violet-light hover:text-violet-light"
                : "border-gray-300 text-ink-muted hover:horder-violet hover:text-violet"
            }`}
          >
            {locale === "ko" ? "EN" : "한"}
          </button>

          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle dark mode"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.svg
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FACC15"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLocale}
            className={`px-2 py-1 text-xs font-bold rounded-full border cursor-pointer ${
              isDark
                ? "border-gray-600 text-gray-300"
                : "border-gray-300 text-ink-muted"
            }`}
          >
            {locale === "ko" ? "EN" : "한"}
          </button>

          <motion.button
            onClick={toggleTheme}
            className="p-2 cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FACC15"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7C3AED"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </motion.button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <motion.div
              className="flex flex-col gap-1.5 w-5"
              animate={mobileOpen ? "open" : "closed"}
            >
              <motion.span
                className={`block h-0.5 rounded-full ${isDark ? "bg-gray-200" : "bg-ink"}`}
                variants={{
                  open: { rotate: 45, y: 8 },
                  closed: { rotate: 0, y: 0 },
                }}
              />
              <motion.span
                className={`block h-0.5 rounded-full ${isDark ? "bg-gray-200" : "bg-ink"}`}
                variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
              />
              <motion.span
                className={`block h-0.5 rounded-full ${isDark ? "bg-gray-200" : "bg-ink"}`}
                variants={{
                  open: { rotate: -45, y: -8 },
                  closed: { rotate: 0, y: 0 },
                }}
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden overflow-hidden border-t ${
              isDark ? "bg-navy border-gray-800" : "bg-cream border-gray-200"
            }`}
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-colors cursor-pointer ${
                    activeSection === item.id && isHome
                      ? isDark
                        ? "bg-navy-light text-violet-light"
                        : "bg-violet/10 text-violet"
                      : isDark
                        ? "text-gray-400 hover:text-white hover:bg-navy-light"
                        : "text-ink-muted hover:text-ink hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
