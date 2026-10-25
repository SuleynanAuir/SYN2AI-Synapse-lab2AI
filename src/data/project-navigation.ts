import { researchProjectLinks } from "@/lib/research-project-index";

type LocalizedLabel = { en: string; zh: string };

export const projectDomainHues = {
  media: 270,
  business: 38,
  documents: 205,
  safety: 340,
  healthcare: 100,
  research: 175,
  environment: 155,
} as const;

type NavigationDetails = {
  projectName: string;
  name: string;
  domain: LocalizedLabel;
  domainGroup: keyof typeof projectDomainHues;
  technologies: [LocalizedLabel, LocalizedLabel];
};

// The first seven entries are the requested featured projects. Tags are ordered
// application domain first, then two technologies; detail-page copy stays intact.
const entries: NavigationDetails[] = [
  {"projectName": "NEXUS", "name": "NEXUS", "domain": {"en": "Social Media", "zh": "社交媒体"}, "domainGroup": "media", "technologies": [{"en": "LLM Agents", "zh": "大模型智能体"}, {"en": "Simulation", "zh": "仿真"}]},
  {"projectName": "OMNI-Rec", "name": "OMNI-Rec", "domain": {"en": "Recommender Systems", "zh": "推荐系统"}, "domainGroup": "business", "technologies": [{"en": "Generative AI", "zh": "生成式 AI"}, {"en": "LLM4Rec", "zh": "LLM4Rec"}]},
  {"projectName": "PEANUT Video Restoration", "name": "PEANUT Video Reconstruction", "domain": {"en": "Media & Entertainment", "zh": "媒体与娱乐"}, "domainGroup": "media", "technologies": [{"en": "Computer Vision", "zh": "计算机视觉"}, {"en": "Optical Flow", "zh": "光流"}]},
  {"projectName": "P-ADONIS OCR", "name": "P-ADNOIS", "domain": {"en": "Document AI", "zh": "文档智能"}, "domainGroup": "documents", "technologies": [{"en": "OCR", "zh": "OCR"}, {"en": "Attention Mechanism", "zh": "注意力机制"}]},
  {"projectName": "Hateful Memes Detection", "name": "Hateful Detection (Meta)", "domain": {"en": "AI Safety", "zh": "AI 安全"}, "domainGroup": "safety", "technologies": [{"en": "Multimodal", "zh": "多模态"}, {"en": "CLIP", "zh": "CLIP"}]},
  {"projectName": "ScratchOML-NIDS", "name": "ScratchOML", "domain": {"en": "Cybersecurity", "zh": "网络安全"}, "domainGroup": "safety", "technologies": [{"en": "Machine Learning", "zh": "机器学习"}, {"en": "Malware Detection", "zh": "恶意软件检测"}]},
  {"projectName": "Clinical Brain Tumor Detection", "name": "Clinic Diagnosis", "domain": {"en": "Healthcare", "zh": "医疗健康"}, "domainGroup": "healthcare", "technologies": [{"en": "Machine Learning", "zh": "机器学习"}, {"en": "Predictive Modeling", "zh": "预测建模"}]},
  {"projectName": "Agent-You-MustKnows", "name": "Agent-You-MustKnows", "domain": {"en": "AI Assistants", "zh": "智能助手"}, "domainGroup": "research", "technologies": [{"en": "RAG", "zh": "RAG"}, {"en": "Tool Use", "zh": "工具调用"}]},
  {"projectName": "UPARIS-DS Agents", "name": "UPARIS-DS", "domain": {"en": "Research", "zh": "科研"}, "domainGroup": "research", "technologies": [{"en": "Reflection", "zh": "反思"}, {"en": "Deep Search", "zh": "深度搜索"}]},
  {"projectName": "CognitiveTemp DeepSearch Agents", "name": "CognitiveTemp", "domain": {"en": "Research", "zh": "科研"}, "domainGroup": "research", "technologies": [{"en": "Reasoning", "zh": "推理"}, {"en": "Temperature Control", "zh": "温度控制"}]},
  {"projectName": "LLaMA Factory Fine-tuning", "name": "LLaMA Factory", "domain": {"en": "Language Models", "zh": "语言模型"}, "domainGroup": "research", "technologies": [{"en": "LoRA", "zh": "LoRA"}, {"en": "SFT", "zh": "SFT"}]},
  {"projectName": "Qwen HotelService Master", "name": "Qwen Hotel", "domain": {"en": "Hospitality", "zh": "酒店服务"}, "domainGroup": "business", "technologies": [{"en": "QLoRA", "zh": "QLoRA"}, {"en": "DPO", "zh": "DPO"}]},
  {"projectName": "Weibo SentimentBot QA-Bot", "name": "Weibo SentimentBot", "domain": {"en": "Social Media", "zh": "社交媒体"}, "domainGroup": "media", "technologies": [{"en": "SFT", "zh": "SFT"}, {"en": "Sentiment Analysis", "zh": "情感分析"}]},
  {"projectName": "Chronos-2 Time-Series Foundation Model", "name": "Chronos-2", "domain": {"en": "Forecasting", "zh": "预测"}, "domainGroup": "research", "technologies": [{"en": "Chronos", "zh": "Chronos"}, {"en": "Time Series", "zh": "时间序列"}]},
  {"projectName": "VeFloodBN", "name": "VeFloodBN", "domain": {"en": "Environmental Risk", "zh": "环境风险"}, "domainGroup": "environment", "technologies": [{"en": "Bayesian Networks", "zh": "贝叶斯网络"}, {"en": "MCMC", "zh": "MCMC"}]},
  {"projectName": "Customer Analytics Platform", "name": "Customer Analytics", "domain": {"en": "Business Analytics", "zh": "商业分析"}, "domainGroup": "business", "technologies": [{"en": "Clustering", "zh": "聚类"}, {"en": "Data Mining", "zh": "数据挖掘"}]},
  {"projectName": "DRL Basis Projects", "name": "DRL Basis", "domain": {"en": "Decision Making", "zh": "决策"}, "domainGroup": "research", "technologies": [{"en": "PPO", "zh": "PPO"}, {"en": "Reinforcement Learning", "zh": "强化学习"}]},
];

const projectRepositories: Record<string, string[]> = {
  "NEXUS": [
    "NEXUS-Navigating-Emergent-X-agent-Universe-Simulator-with-Unprecedented-Insight"
  ],
  "ScratchOML-NIDS": [
    "ScratchOML-NIDS"
  ],
  "OMNI-Rec": [
    "OMNI-Multimodal-Intelligent-OneRec-Based-System"
  ],
  "Chronos-2 Time-Series Foundation Model": [
    "Amazon-TSChronos"
  ],
  "Agent-You-MustKnows": [
    "Agent-You-MustKnows"
  ],
  "VeFloodBN": [
    "VeFloodBN"
  ],
  "DRL Basis Projects": [
    "DRL-Basis-Project-v1",
    "DRL-Basis-Project-v2"
  ],
  "PEANUT Video Restoration": [
    "PEANUT--Prompt-Enhanced-Ablation-with-Optical-Flow-Based-Neural-Unit"
  ],
  "P-ADONIS OCR": [
    "P-ADONIS"
  ],
  "LLaMA Factory Fine-tuning": [
    "Enterprise-Enhanced-LLaMA-Factory-Pro-Advanced-FineTuning-Local-Deployment-Pipeline"
  ],
  "CognitiveTemp DeepSearch Agents": [
    "CognitiveTemp-DeepSearch-Agents"
  ],
  "Clinical Brain Tumor Detection": [
    "Clinical-Brain-Tumor-Detection-Optimized-ML-Frame4MRI-Diagnosis"
  ],
  "UPARIS-DS Agents": [
    "UPAIRS-Agents"
  ],
  "Hateful Memes Detection": [
    "Hateful-Image-Project"
  ],
  "Customer Analytics Platform": [
    "Customer-Analytics-Modeling-Churn-and-Value-in-E-Commerce"
  ],
  "Qwen HotelService Master": [
    "Distributed-Fine-Tuning-of-Qwen2.5-7B-as-HotelService-Master"
  ],
  "Weibo SentimentBot QA-Bot": [
    "WeiboPublics-SentimentBot-E2-FineTuning-Pipeline-of-Qwen3.5-0.6B-on-AutoDL-Cloud-Infrastrcture"
  ]
};

export const projectNavigationItems = entries.map((entry) => {
  const project = researchProjectLinks.find((item) => item.projectName === entry.projectName);
  if (!project) throw new Error(`Unknown navigation project: ${entry.projectName}`);
  const repositories = projectRepositories[entry.projectName];
  if (!repositories?.length) throw new Error(`Missing repository: ${entry.projectName}`);
  return { ...project, ...entry, repositories: repositories.map((slug) => ({
    href: `https://github.com/SuleynanAuir/${slug}`,
    version: repositories.length > 1 ? slug.split("-").at(-1) : null,
  })) };
});

export const projectsPerPage = 7;
