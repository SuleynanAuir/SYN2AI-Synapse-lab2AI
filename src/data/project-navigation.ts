import { researchProjectLinks } from "@/lib/research-project-index";

type NavigationDetails = {
  projectName: string;
  name: string;
  domain: { en: string; zh: string };
  technology: { en: string; zh: string };
};

// The first seven entries are the requested featured projects. Tags are ordered
// application domain first, core technology second; detail-page copy stays intact.
const entries: NavigationDetails[] = [
  { projectName: "NEXUS", name: "NEXUS", domain: { en: "Sim", zh: "仿真" }, technology: { en: "Agents", zh: "多智能体" } },
  { projectName: "OMNI-Rec", name: "OMNI-Rec", domain: { en: "RecSys", zh: "推荐" }, technology: { en: "GenAI", zh: "生成式" } },
  { projectName: "PEANUT Video Restoration", name: "PEANUT Video Restruction", domain: { en: "Video", zh: "视频修复" }, technology: { en: "Flow", zh: "光流" } },
  { projectName: "P-ADONIS OCR", name: "P-ADNOIS", domain: { en: "Docs", zh: "文档" }, technology: { en: "OCR", zh: "OCR" } },
  { projectName: "Hateful Memes Detection", name: "Hateful Detech (Meta)", domain: { en: "Safety", zh: "内容安全" }, technology: { en: "CLIP", zh: "CLIP" } },
  { projectName: "ScratchOML-NIDS", name: "ScratchOML", domain: { en: "Security", zh: "网络安全" }, technology: { en: "Bayes", zh: "贝叶斯" } },
  { projectName: "Clinical Brain Tumor Detection", name: "Clinic diagnosis", domain: { en: "Health", zh: "医疗" }, technology: { en: "SVM", zh: "SVM" } },
  { projectName: "Agent-You-MustKnows", name: "Agent-You-MustKnows", domain: { en: "Assist", zh: "助手" }, technology: { en: "RAG", zh: "RAG" } },
  { projectName: "UPARIS-DS Agents", name: "UPARIS-DS", domain: { en: "Research", zh: "深度研究" }, technology: { en: "Reflect", zh: "反思" } },
  { projectName: "CognitiveTemp DeepSearch Agents", name: "CognitiveTemp", domain: { en: "Search", zh: "智能搜索" }, technology: { en: "Reason", zh: "推理" } },
  { projectName: "LLaMA Factory Fine-tuning", name: "LLaMA Factory", domain: { en: "LLM", zh: "模型适配" }, technology: { en: "LoRA", zh: "LoRA" } },
  { projectName: "Qwen HotelService Master", name: "Qwen Hotel", domain: { en: "Hotel", zh: "酒店服务" }, technology: { en: "QLoRA", zh: "QLoRA" } },
  { projectName: "Weibo SentimentBot QA-Bot", name: "Weibo SentimentBot", domain: { en: "Social", zh: "舆情" }, technology: { en: "SFT", zh: "SFT" } },
  { projectName: "Chronos-2 Time-Series Foundation Model", name: "Chronos-2", domain: { en: "Forecast", zh: "时序预测" }, technology: { en: "Chronos", zh: "Chronos" } },
  { projectName: "VeFloodBN", name: "VeFloodBN", domain: { en: "Flood", zh: "洪水预警" }, technology: { en: "BN", zh: "BN" } },
  { projectName: "Customer Analytics Platform", name: "Customer Analytics", domain: { en: "CRM", zh: "客户分析" }, technology: { en: "Cluster", zh: "聚类" } },
  { projectName: "DRL Basis Projects", name: "DRL Basis", domain: { en: "Control", zh: "决策" }, technology: { en: "PPO", zh: "PPO" } },
];

export const projectNavigationItems = entries.map((entry) => {
  const project = researchProjectLinks.find((item) => item.projectName === entry.projectName);
  if (!project) throw new Error(`Unknown navigation project: ${entry.projectName}`);
  return { ...project, ...entry };
});

export const projectsPerPage = 7;
