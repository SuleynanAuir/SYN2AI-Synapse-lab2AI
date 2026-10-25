# AI Research Laboratory 🤖

AI Research Laboratory is a research portfolio, project knowledge base, and visual showcase for Suleynan Aiur's work across AI agents, foundation models, scientific AI, machine learning, reinforcement learning, recommendation systems, and multimodal intelligence.


## Page Preview Gallery 🧑‍🎨


![Home page preview](assets/page/home_page.png)

This image shows the first-screen experience of the portfolio. The left side introduces the research identity, author profile, GitHub entry, official technology icons, and research tags. The right side presents the floating research ecosystem map, where research, projects, agents, knowledge, science, and publications converge around the AI Lab core. The persistent project directory on the right provides fast jump navigation across project modules.


![Autonomous intelligence and foundation model modules](assets/page/page1.png)

This screenshot shows the first two major project modules. `Autonomous Intelligence` groups agentic systems such as Agent-You-MustKnows, NEXUS, UPARIS-DS, and CognitiveTemp DeepSearch Agents. `Foundation Models & Alignment` groups LLaMA Factory, Qwen hotel-service fine-tuning, and Weibo sentiment alignment work. The layout highlights module-level keywords, project counts, representative images, and expandable research evidence.


![Scientific AI and machine learning modules](assets/page/page2.png)

This image covers the middle layer of the research portfolio. `AI for Science & Probabilistic Reasoning` focuses on Chronos-2, Bayesian flood-risk modeling, and clinical brain tumor detection. `Machine Learning Foundations & Analytics` focuses on from-scratch optimization, Bayesian fusion, intrusion detection, customer segmentation, and interpretable analytics. The color accents separate project families while keeping the visual system consistent.


![Reinforcement learning and multimodal intelligence modules](assets/page/page3.png)

This screenshot shows the lower project modules. `Reinforcement Learning & Recommendation` connects DQN/DDQN/PPO foundations with OMNI-Rec style generative recommendation. `Multimodal Intelligence` groups PEANUT video restoration, P-ADONIS OCR, and hateful meme detection, emphasizing visual restoration, document understanding, image-text alignment, and multimodal safety.

## Expanded Project Previews


![NEXUS project detail](assets/page/proj0.png)

NEXUS is presented as a multi-agent framework for complex, evolving information environments. The screenshot shows project evidence images, GitHub access, README Notes and Logic Chain buttons, research question, technical approach, contribution summary, professional knowledge notes, and official learning paths. The project is positioned around multi-agent orchestration, deep search, digital twins, entity-relation extraction, and narrative reasoning.


![PEANUT project detail](assets/page/proj1.png)

PEANUT is shown as a multimodal video restoration project that combines prompt-guided mask generation, optical flow, SAM2-style segmentation, temporal consistency, and cross-modal reasoning. The left image column demonstrates restoration examples and pipeline visualization, while the right side explains the research question, core technical route, contribution, and official learning path for OpenCV, PyTorchVideo, and TorchVision.


![Clinical brain tumor detection project detail](assets/page/proj2.png)

This project detail page focuses on an MRI brain tumor detection framework built with lightweight classical machine learning methods. It highlights medical-image preprocessing, HOG feature extraction, small-sample learning, SVM/MLP/XGBoost/KNN/logistic-regression comparison, and transparent evaluation. The screenshot shows how the page translates a technical medical ML project into research question, implementation approach, contribution, and learning path sections.

![P-ADONIS OCR project detail](assets/page/proj3.png)

P-ADONIS is presented as a prior-enhanced attention document OCR network for converting degraded document images into structured text. The page emphasizes OCR, text-image super-resolution, document enhancement, text-to-structure conversion, and recognition reliability for noisy or low-resolution PDFs. The screenshot also shows how official learning materials are mapped to OpenCV, PyTorch super-resolution workflows, and Tesseract OCR.

![Customer analytics project detail](assets/page/proj4.png)

This project page explains the customer analytics system for e-commerce decision support. It combines exploratory data analysis, supervised prediction, unsupervised segmentation, churn/value modeling, customer behavior analysis, and marketing-response interpretation. The screenshot includes clustering visuals, PCA-based segmentation, README/logic controls, and learning paths for pandas and scikit-learn model inspection.


![ScratchOML-NIDS project detail](assets/page/proj5.png)

ScratchOML-NIDS demonstrates a from-scratch intrusion detection system on UNSW-NB15. The project manually implements optimization and classical ML components such as GD, SGD, Adam, logistic regression, Gaussian Naive Bayes, decision trees, and MLP, then combines them through a two-stage Bayesian fusion pipeline. The screenshot explains why this project is useful as a machine-learning foundation beneath modern agent and scientific AI workflows.


![LLaMA Factory fine-tuning project detail](assets/page/proj6.png)

This project detail page shows an end-to-end LLM fine-tuning and deployment pipeline around LLaMA Factory. It covers data engineering, SFT, LoRA, AutoDL cloud training, Ollama/local deployment, evaluation, and reproducible model iteration. The page links the project to foundation-model adaptation and gives official learning references for LLaMA Factory, Hugging Face Transformers, and PEFT/LoRA.


![Chronos-2 project detail](assets/page/proj7.png)

Chronos-2 is documented as a time-series foundation model study built around Chronos and Chronos-Bolt. The screenshot highlights univariate forecasting, cross-item learning, multivariate target prediction, covariate-aware forecasting, context windows, probabilistic outputs, and operational/scientific forecasting scenarios. It also shows the official learning path cards for AutoGluon Chronos, Hugging Face time-series transformers, and PyTorch Forecasting.

## Content Model

The portfolio content is organized through code and markdown-style project data:

- Project detail content: `content/projects/*.md`
- Project module data and copy: `src/data/portfolio.ts`
- English/Chinese site copy: `src/data/site-copy.ts`
- Project jump sidebar links: `src/lib/research-project-index.ts`
- Preview images for this README: `assets/page/*.png`
- Website project images used by the UI: `public/assets/web_page/*`

## Design Direction

The site uses a soft research-lab visual system: translucent surfaces, warm green/gold accents, static background image, floating project navigation, bilingual content, official technology icons, and expandable project evidence sections. The goal is to make each project readable as a research contribution rather than a flat portfolio card.

## Deployment

The complete website is hosted on **GitHub Pages**:

**https://suleynanauir.github.io/SYN2AI-Synapse-lab2AI/**

The `.github/workflows/pages.yml` workflow builds and publishes the static `out/` directory whenever `main` is pushed. It can also be run manually from **Actions → Deploy GitHub Pages → Run workflow**. No Cloudflare account or server is required.

For a new repository or fork:

1. In **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source.
2. Push to `main` or run the deployment workflow.
3. Open the address reported by the workflow's `github-pages` environment.

The workflow reads the actual Pages URL and repository prefix from GitHub. Navigation, responsive images, icons, and the sitemap use that prefix. Static routes are exported as directories with `index.html`, so opening or refreshing a project detail URL works directly.

### Local development and production builds

```bash
npm ci
npm run dev
```

Development runs at `http://localhost:3000/`. `npm run build` defaults to the production `/SYN2AI-Synapse-lab2AI` prefix. Serve `out/` mounted at that path to preview the production build; `next start` is not used for static exports. To build for another host, set `NEXT_PUBLIC_BASE_PATH` (empty for a root domain) and `NEXT_PUBLIC_SITE_URL` to the full public site URL before building.

### Cloudflare Pages mirror

The same `main` branch also deploys to `https://syn2ai-synapse-lab2ai.pages.dev/` using `npm run build` and the `out` output directory. Cloudflare's automatic `CF_PAGES=1` build variable selects an empty resource prefix and the mirror's own site URL. GitHub Actions continues to supply its repository prefix explicitly. Do not copy the GitHub-specific `out/` build to Cloudflare: rebuild for each host so scripts, styles, images, navigation and metadata use the correct paths. To preview the Cloudflare build locally, run `CF_PAGES=1 npm run build` and serve `out/` directly at `/`.

### Image loading

`npm run build` and `npm run dev` automatically run `npm run optimize:images`. The script keeps the originals in `public/assets`, generates responsive WebP files in `public/assets/optimized`, and updates `src/data/image-manifest.json`. Do not skip the image step when running Next directly.

The small avatar and header logo are embedded in the initial HTML. Project previews load eagerly, with tiny embedded previews visible while the full images arrive; screenshots in project details start loading when the section is opened. Image dimensions reserve space during loading. The optimized filenames include a content hash so updated images receive new URLs. GitHub Pages manages HTTP caching for the exported files.

## Live Routes

These paths are relative to the Pages project URL above.

- English homepage: `/asrl_agent_ml_dl_cv_nlp/`
- Chinese homepage: `/zh/asrl_agent_ml_dl_cv_nlp/`
- Project directory sidebar: persistent shortcut navigation for the project modules
- Language switch: toggles between English and Chinese page content

## Technology Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Markdown/project-content driven portfolio data
