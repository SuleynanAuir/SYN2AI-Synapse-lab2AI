import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/content/projects";

export const dynamic = "force-static";

const routes = ["", "/asrl_agent_ml_dl_cv_nlp", "/zh/asrl_agent_ml_dl_cv_nlp", "/projects", "/research-map", "/agent-hub", "/papers", "/roadmap", "/notes"];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = getAllProjects().map((project) => `/projects/${project.slug}`);

  return [...routes, ...projectRoutes].map((route) => ({
    url: `https://syn2ai-synapse-lab2ai.pages.dev${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/asrl_agent_ml_dl_cv_nlp" || route === "/zh/asrl_agent_ml_dl_cv_nlp" || route === "" ? "weekly" : "monthly",
    priority: route === "/asrl_agent_ml_dl_cv_nlp" || route === "/zh/asrl_agent_ml_dl_cv_nlp" ? 1 : route === "" ? 0.8 : 0.7,
  }));
}
