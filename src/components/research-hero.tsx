"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Cpu,
  Database,
  FlaskConical,
  Github,
  Layers3,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";
import { OfficialBrandIcon } from "@/components/official-brand-icon";
import { OptimizedImage } from "@/components/optimized-image";
import { defaultLocale, heroCopy, type Locale } from "@/data/site-copy";
import { heroOfficialBrands } from "@/lib/learning-path-brands";
import { dispatchResearchProjectJump } from "@/lib/research-project-index";
import { projectDomainHues, projectNavigationItems, projectsPerPage } from "@/data/project-navigation";

const githubProfileStats = [
  { label: "Repositories", value: "25", icon: Layers3 },
  { label: "Stars", value: "150", icon: Star },
  { label: "Followers", value: "☝️", icon: UsersRound },
] as const;

const timelineIcons = [Cpu, Database, Layers3, Bot, UsersRound, FlaskConical] as const;

const evolutionStageTones = [
  { accent: "38 74% 44%", soft: "39 70% 88%", glow: "42 88% 60%" },
  { accent: "78 34% 38%", soft: "79 44% 87%", glow: "76 46% 56%" },
  { accent: "108 29% 36%", soft: "108 38% 88%", glow: "108 38% 55%" },
  { accent: "160 34% 34%", soft: "160 42% 88%", glow: "166 42% 52%" },
  { accent: "205 33% 40%", soft: "205 46% 90%", glow: "204 44% 57%" },
  { accent: "258 27% 45%", soft: "258 42% 91%", glow: "260 38% 62%" },
] as const;

const evolutionStages = [
  {
    title: "Machine Learning",
    description: "Statistical learning from data",
    keywords: ["Optimization", "Generalization"],
  },
  {
    title: "Deep Learning",
    description: "Neural represent learning",
    keywords: ["Architectures", "Perception"],
  },
  {
    title: "Foundation Models",
    description: "Pretrained models transfer",
    keywords: ["Pretraining", "Alignment"],
  },
  {
    title: "AI Agents",
    description: "Reasoning by tool、memory",
    keywords: ["Planning", "Tool use"],
  },
  {
    title: "Multi-Agent Systems",
    description: "Collaborative autonomous",
    keywords: ["Coordination", "Reflection"],
  },
  {
    title: "Scientific AI",
    description: "Evidence-driven discovery",
    keywords: ["Hypothesis", "Discovery"],
  },
] as const;

export function ResearchHero({ locale = defaultLocale }: { locale?: Locale }) {
  const copy = heroCopy[locale];

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-background/10">
      <div className="mx-auto grid max-w-7xl gap-5 px-6 pb-8 pt-8 lg:grid-cols-[minmax(0,0.58fr)_minmax(340px,0.42fr)] lg:items-stretch lg:px-8 lg:pb-8 lg:pt-8 xl:grid-cols-[minmax(0,0.6fr)_minmax(360px,0.4fr)]">
        <div className="hero-introduction relative z-10 flex min-w-0 flex-col lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
          >
            <Sparkles className="h-4 w-4" />
            {copy.labName}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.08, ease: "easeOut" }}
            className="mt-6 max-w-none text-[1.7rem] font-semibold leading-[1.04] tracking-normal text-foreground sm:text-[2.65rem] md:text-[3.2rem] lg:text-[2.75rem] xl:text-[3.25rem]"
          >
            <span className="block">
              {copy.h1Line1Prefix} <span className="gradient-text">{copy.h1Line1Highlight}</span>
            </span>
            <span className="block">
              {copy.h1Line2Prefix} <span className="text-accent">{copy.h1Line2Highlight}</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.16, ease: "easeOut" }}
            className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-[1.04rem]"
          >
            {copy.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.22, ease: "easeOut" }}
            className="mt-5 flex max-w-full flex-wrap gap-2"
          >
            {copy.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-2xl border border-white/10 bg-surface/25 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground shadow-sm backdrop-blur-xl"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={false}
            className="mt-4 flex max-w-2xl flex-col gap-3 rounded-3xl border border-white/10 bg-surface/25 p-3 shadow-sm backdrop-blur-xl sm:flex-row sm:items-center"
          >
            <OptimizedImage
              src="/assets/web_page/head_img.jpeg"
              alt="Suleynan Aiur avatar"
              className="h-14 w-14 shrink-0 rounded-2xl border border-white/20 object-cover shadow-sm"
            />
            <div className="min-w-0">
              <div className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-accent">{copy.author}</div>
              <Link
                href="https://github.com/SuleynanAuir"
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-1 inline-flex items-center gap-2 rounded-xl text-base font-semibold tracking-normal text-foreground transition hover:text-accent"
              >
                Suleynan Aiur
                <Github className="h-4 w-4" />
              </Link>
              <div className="mt-0.5 text-xs text-muted-foreground">github.com/SuleynanAuir</div>
            </div>
            <div className="flex flex-wrap gap-2 sm:ml-auto sm:justify-end">
              {githubProfileStats.map((stat, statIndex) => (
                <div
                  key={stat.label}
                  className="inline-flex min-w-[5rem] items-center gap-2 rounded-2xl border border-white/10 bg-surface/25 px-3 py-2 text-xs text-muted-foreground shadow-sm"
                >
                  <stat.icon className="h-3.5 w-3.5 text-accent" />
                  <span>
                    <span className="block font-semibold leading-none text-foreground">{stat.value}</span>
                    <span className="mt-0.5 block leading-none">{copy.profileStats[statIndex] ?? stat.label}</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.28, ease: "easeOut" }}
            className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#research-projects"
                className="material-button focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-6 text-sm font-medium text-white transition hover:-translate-y-0.5"
              >
                {copy.explore}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/SuleynanAuir"
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-surface/25 px-6 text-sm font-medium text-foreground shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-surface/40 hover:text-accent"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </div>

            <div
              className="hero-official-icons grid w-fit grid-flow-col grid-rows-2 gap-2"
              aria-label="Official technology icons"
            >
              {heroOfficialBrands.map((brand) => (
                <OfficialBrandIcon
                  key={brand.name}
                  brand={brand}
                  className="hero-official-brand-icon h-8 w-8"
                  imageClassName="p-1.5"
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.18, ease: "easeOut" }}
          className="hero-project-navigation relative z-10 min-w-0"
        >
          <ResearchNavigation locale={locale} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.66, delay: 0.36, ease: "easeOut" }}
          className="relative z-10 lg:col-span-2"
        >
          <EvolutionTimeline locale={locale} />
        </motion.div>
      </div>
    </section>
  );
}

function ResearchNavigation({ locale }: { locale: Locale }) {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(projectNavigationItems.length / projectsPerPage);
  const visibleProjects = projectNavigationItems.slice(page * projectsPerPage, (page + 1) * projectsPerPage);

  return (
    <div className="project-navigation-panel">
      <div className="flex shrink-0 items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-foreground">{locale === "zh" ? "项目导航" : "Project navigation"}</h2>
        <span className="text-xs font-medium tabular-nums text-accent/70">{projectNavigationItems.length}</span>
      </div>
      <nav id="hero-project-list" className="project-entry-list" aria-label={locale === "zh" ? "项目导航" : "Project navigation"}>
        {visibleProjects.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            title={`${item.name} — ${item.projectName}`}
            aria-label={item.projectName}
            onClick={() => dispatchResearchProjectJump(item.id)}
            className="project-entry-link focus-ring"
          >
            <span className="project-entry-heading">
              <span className="project-entry-number" aria-hidden="true">{String(page * projectsPerPage + index + 1).padStart(2, "0")}</span>
              <span className="project-entry-name">{item.name}</span>
              <span className="project-entry-tag project-domain-tag" data-domain-group={item.domainGroup} style={{ "--tag-hue": projectDomainHues[item.domainGroup] } as CSSProperties} title={`${locale === "zh" ? "应用领域" : "Application domain"}: ${item.domain[locale]}`}>
                {item.domain[locale]}
              </span>
            </span>
            <span className="project-entry-tags">
              {item.technologies.map((technology) => (
                <span key={technology.en} className="project-entry-tag project-technology-tag" title={`${locale === "zh" ? "核心技术" : "Core technology"}: ${technology[locale]}`}>
                  {technology[locale]}
                </span>
              ))}
            </span>
          </a>
        ))}
      </nav>
      <div className="project-pagination">
        <button type="button" className="project-page-button focus-ring" aria-controls="hero-project-list" disabled={page === 0} onClick={() => setPage((current) => current - 1)}>
          {locale === "zh" ? "← 上一页" : "← Previous"}
        </button>
        <span className="text-xs font-medium text-muted-foreground" aria-live="polite" aria-atomic="true">{page + 1} / {pageCount}</span>
        <button type="button" className="project-page-button focus-ring" aria-controls="hero-project-list" disabled={page === pageCount - 1} onClick={() => setPage((current) => current + 1)}>
          {locale === "zh" ? "下一页 →" : "Next →"}
        </button>
      </div>
    </div>
  );
}

function EvolutionTimeline({ locale }: { locale: Locale }) {
  const copy = heroCopy[locale];

  return (
    <div className="p-1.5 md:p-2">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="inline-flex w-fit rounded-2xl border border-white/10 bg-surface/25 px-3 py-1.5 text-xs font-medium text-accent shadow-sm backdrop-blur-xl">
          {copy.currentFocus}
        </div>
      </div>

      <div className="relative mt-3">
        <div className="absolute left-[7%] right-[7%] top-[25px] hidden h-px overflow-hidden rounded-full bg-white/20 md:block">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="evolution-stage-line h-full rounded-full"
          />
          <div className="analysis-line absolute inset-0" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {evolutionStages.map((stage, index) => {
            const Icon = timelineIcons[index] ?? Sparkles;
            const stageCopy = copy.stages[index] ?? stage;
            const tone = evolutionStageTones[index] ?? evolutionStageTones[0];
            const stageStyle = {
              "--stage-accent": tone.accent,
              "--stage-soft": tone.soft,
              "--stage-glow": tone.glow,
            } as CSSProperties;

            return (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52 + index * 0.07, duration: 0.42, ease: "easeOut" }}
                className="relative"
              >
                <div
                  className="evolution-stage-card group flex h-full min-h-[140px] flex-col rounded-[18px] border p-3 text-left shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1"
                  style={stageStyle}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="evolution-stage-icon grid h-8 w-8 shrink-0 place-items-center rounded-2xl border shadow-sm">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="evolution-stage-index rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="mt-2.5 flex min-h-7 items-end text-sm font-semibold leading-5 tracking-normal text-foreground">
                    {stageCopy.title}
                  </div>
                  <p className="mt-1 min-h-7 text-xs leading-5 text-muted-foreground">
                    {stageCopy.description}
                  </p>
                  <div className="mt-auto grid gap-1.5 pt-1.5">
                    {stageCopy.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="evolution-stage-keyword inline-flex min-h-6 items-center rounded-full border px-3 text-[0.62rem] font-semibold uppercase tracking-[0.10em]"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
