import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { useI18n } from "../../contexts/I18nContext";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import FilterTabs from "../ui/FilterTabs";
import ProjectCard from "../ui/ProjectCard";
import projects from "../../data/projects.json";

export default function ProjectGallery() {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    const sorted = [...projects].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

    if (activeFilter === "all") return sorted;
    return sorted.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <SectionHeading
          title={t("projects.sectionTitle")}
          subtitle={t("projects.sectionSubtitle")}
        />

        <ScrollReveal>
          <FilterTabs active={activeFilter} onChange={setActiveFilter} />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            {activeFilter} 카테고리에 프로젝트가 없습니다.
          </p>
        )}
      </div>
    </section>
  );
}
