const updates = [
  {
    date: "Apr 2026",
    title: "Post-doc @ Vector Institute",
    description:
      "Start as a Distinguished Postdoctoral Fellow at the Vector Institute, with co-affiliation at the University of Toronto and Institute for Clinical Evaluative Sciences."
  },
  {
    date: "Apr 2026",
    title: "Area Chair @ MLHC 2026",
    description:
      "Appointed as an Area Chair for the Machine Learning for Health (MLHC) 2026 conference."
  },

  {
    date: "Mar 2026",
    title: "Best Thesis Award Runner-up",
    description:
      "Received the Best Thesis Award runner-up honor for the Ph.D. thesis at the CS UAlberta. Thanks to my supervisor Dr. Russell Greiner for his support and guidance throughout my Ph.D. journey!"
  },
  {
    date: "Jan 2026",
    title: "Intern @ Microsoft Research",
    description:
      "Worked as a Research Intern in Health Futures on causal transportability and cross-context generalization in single-cell perturbation prediction."
  },
  {
    date: "Nov 2025",
    title: "Graduated Ph.D. @ University of Alberta",
    description:
      "I officially graduated with a Ph.D. in Computer Science from the University of Alberta, where I completed my thesis, titled 'Survival Analysis AAA: Applications, Assessment, and Algorithms'."
  },
];

const publications = [
  {
    year: "2025",
    title: "MENSA: A Multi-Event Network for Survival Analysis with Trajectory-based Likelihood Estimation",
    venue: "Machine Learning for Health 2025",
    authors: "Christian Marius Lillelund, Ali Hossein Gharari Foomani, Weijie Sun, Shi-ang Qi, Russell Greiner",
    tags: ["Conference", "Survival Analysis", "Healthcare AI"],
    links: [
      { label: "PDF", href: "https://openreview.net/pdf?id=BpGq6T9c1J" },
      { label: "Code", href: "https://github.com/thecml/mensa" },
      { label: "BibTeX", href: "papers/lillelund2025mensa.bib" }
    ]
  },
  {
    year: "2024",
    title: "Toward Conditional Distribution Calibration in Survival Prediction",
    venue: "NeurIPS 2024",
    authors: "Shi-ang Qi, Yakun Yu, Russell Greiner",
    tags: ["Featured", "Conference", "Survival Analysis", "Healthcare AI"],
    links: [
      {
        label: "PDF",
        href: "https://proceedings.neurips.cc/paper_files/paper/2024/hash/9c8df8de46c1a1b39b30b9f74be69c02-Abstract-Conference.html"
      },
      { label: "Code", href: "https://github.com/shi-ang/MakeSurvivalCalibratedAgain" },
      { label: "BibTeX", href: "papers/qi2024toward.bib" },
      {
        label: "Poster",
        href: "https://github.com/shi-ang/MakeSurvivalCalibratedAgain/blob/main/posters/CSDiPOT_poster.pdf"
      }
    ]
  },
  {
    year: "2024",
    title: "PepRec: Progressive Enhancement of Prompting for Recommendation",
    venue: "EMNLP 2024",
    authors: "Yakun Yu, Shi-ang Qi, Baochun Li, Di Niu",
    tags: ["Conference", "Others"],
    links: [
      { label: "PDF", href: "https://aclanthology.org/2024.emnlp-main.995/" },
      { label: "BibTeX", href: "papers/yu2024peprec.bib" }
    ]
  },
  {
    year: "2024",
    title: "Conformalized Survival Distributions: A Generic Post-Process to Increase Calibration",
    venue: "ICML 2024",
    authors: "Shi-ang Qi, Yakun Yu, Russell Greiner",
    tags: ["Featured", "Conference", "Survival Analysis", "Healthcare AI"],
    links: [
      { label: "PDF", href: "https://proceedings.mlr.press/v235/qi24a.html" },
      { label: "Code", href: "https://github.com/shi-ang/MakeSurvivalCalibratedAgain" },
      { label: "BibTeX", href: "papers/qi2024survivaleval.bib" },
      {
        label: "Poster",
        href: "https://github.com/shi-ang/MakeSurvivalCalibratedAgain/blob/main/posters/CSD_poster.pdf"
      }
    ]
  },
  {
    year: "2023",
    title: "Supervised ECG Features Outperform Knowledge-based and Unsupervised Features in Individualized Survival Prediction",
    venue: "ML4H 2023",
    authors: "Yousef Nademi, Sunil V. Kalmady, Weijie Sun, Shi-ang Qi, Abram Hindle, Padma Kaul, Russell Greiner",
    tags: ["Conference", "Survival Analysis", "Healthcare AI", "Multimodal analysis"],
    links: [
      { label: "PDF", href: "https://proceedings.mlr.press/v225/nademi23a.html" },
      { label: "BibTeX", href: "papers/nademi2023supervised.bib" }
    ]
  },
  {
    year: "2023",
    title: "SurvivalEVAL: A Comprehensive Open-Source Python Package for Evaluating Individual Survival Distributions",
    venue: "AAAI Symposium Series 2023",
    authors: "Shi-ang Qi, Weijie Sun, Russell Greiner",
    tags: ["Conference", "Survival Analysis", "Healthcare AI"],
    links: [
      { label: "PDF", href: "https://ojs.aaai.org/index.php/AAAI-SS/article/view/27713" },
      { label: "Code", href: "https://github.com/shi-ang/SurvivalEVAL" },
      { label: "BibTeX", href: "papers/qi2024survivaleval.bib" }
    ]
  },
  {
    year: "2023",
    title: "Predicting Individual Survival Distributions Using ECG: A Deep Learning Approach Utilizing Features Extracted by a Learned Diagnostic Model",
    venue: "AAAI Symposium Series 2023",
    authors: "Weijie Sun, Sunil V. Kalmady, Shi-ang Qi, Nariman Sepehrvand, Abram Hindle, Russell Greiner, Padma Kaul",
    tags: ["Conference", "Survival Analysis", "Healthcare AI", "Multimodal analysis"],
    links: [
      { label: "PDF", href: "https://ojs.aaai.org/index.php/AAAI-SS/article/view/27716" },
      { label: "BibTeX", href: "papers/sun2024predicting.bib" }
    ]
  },
  {
    year: "2023",
    title: "iHAS: Instance-wise Hierarchical Architecture Search for Deep Learning Recommendation Models",
    venue: "CIKM 2023",
    authors: "Yakun Yu, Shi-ang Qi, Jiuding Yang, Liyao Jiang, Di Niu",
    tags: ["Conference", "Others"],
    links: [
      { label: "PDF", href: "https://dl.acm.org/doi/10.1145/3583780.3614925" },
      { label: "BibTeX", href: "papers/yu2023iHAS.bib" }
    ]
  },
  {
    year: "2023",
    title: "An Effective Meaningful Way to Evaluate Survival Models",
    venue: "ICML 2023",
    authors: "Shi-ang Qi, Neeraj Kumar, Mahtab Farrokh, Weijie Sun, Li-Hao Kuan, Rajesh Ranganath, Ricardo Henao, Russell Greiner",
    tags: ["Featured", "Conference", "Survival Analysis", "Healthcare AI"],
    links: [
      { label: "PDF", href: "https://proceedings.mlr.press/v202/qi23b.html" },
      { label: "Code", href: "https://github.com/shi-ang/CensoredMAE" },
      { label: "BibTeX", href: "papers/qi2023an.bib" },
      { label: "Poster", href: "https://icml.cc/virtual/2023/poster/24533" }
    ]
  },
  {
    year: "2023",
    title: "ConKI: Contrastive Knowledge Injection for Multimodal Sentiment Analysis",
    venue: "ACL Findings 2023",
    authors: "Yakun Yu, Mingjun Zhao, Shi-ang Qi, Feiran Sun, Baoxun Wang, Weidong Guo, Xiaoli Wang, Lei Yang, Di Niu",
    tags: ["Conference", "Multimodal analysis"],
    links: [
      { label: "PDF", href: "https://aclanthology.org/2023.findings-acl.860.pdf" },
      { label: "Code", href: "https://github.com/PipiZong/KI_MSA" },
      { label: "BibTeX", href: "papers/yu2023conki.bib" }
    ]
  },
  {
    year: "2023",
    title: "Exploring Language-Agnostic Speech Representations Using Domain Knowledge for Detecting Alzheimer's Dementia",
    venue: "ICASSP 2023",
    authors: "Zehra Shah, Shi-ang Qi, Fei Wang, Mahtab Farrokh, Mashrura Tasnim, Eleni Stroulia, Russell Greiner, Manos Plitsis, Athanasios Katsamanis",
    tags: ["Conference", "Multimodal analysis", "Healthcare AI"],
    links: [
      { label: "PDF", href: "https://ieeexplore.ieee.org/document/10095593" },
      { label: "BibTeX", href: "papers/shah2023exploring.bib" },
      {
        label: "News",
        href: "https://www.ualberta.ca/folio/2023/05/ml-model-able-to-detect-signs-of-alzheimers-across-languages.html"
      }
    ]
  },
  {
    year: "2023",
    title: "Using Bayesian Neural Networks to Select Features and Compute Credible Intervals for Personalized Survival Prediction",
    venue: "IEEE TBME 2023",
    authors: "Shi-ang Qi, Neeraj Kumar, Ruchika Verma, Jian-Yi Xu, Grace Shen-Tu, Russell Greiner",
    tags: ["Journal", "Survival Analysis", "Healthcare AI"],
    links: [
      { label: "PDF", href: "https://ieeexplore.ieee.org/document/10158019" },
      { label: "Code", href: "https://github.com/shi-ang/BNN-ISD" },
      { label: "BibTeX", href: "papers/qi2023using.bib" }
    ]
  },
  {
    year: "2022",
    title: "Personalized breast cancer onset prediction from lifestyle and health history information",
    venue: "PLOS ONE 2022",
    authors: "Shi-ang Qi, Neeraj Kumar, Jian-Yi Xu, Jaykumar Patel, Sambasivarao Damaraju, Grace Shen-Tu, Russell Greiner",
    tags: ["Journal", "Healthcare AI"],
    links: [
      {
        label: "PDF",
        href: "https://journals.plos.org/plosone/article/authors?id=10.1371/journal.pone.0279174"
      },
      { label: "BibTeX", href: "papers/qi2022personalized.bib" }
    ]
  },
  {
    year: "2022",
    title: "Learning accurate personalized survival models for predicting hospital discharge and mortality of COVID-19 patients",
    venue: "Scientific Reports 2022",
    authors: "Neeraj Kumar*, Shi-ang Qi*, Li-Hao Kuan, Weijie Sun, Jianfei Zhang, Russell Greiner",
    authorNote: "* Co-first authors",
    tags: ["Journal", "Survival Analysis", "Healthcare AI"],
    links: [
      { label: "PDF", href: "https://www.nature.com/articles/s41598-022-08601-6" },
      { label: "Code", href: "https://github.com/kuan0911/ISDEvaluation-covid" },
      { label: "BibTeX", href: "papers/kumar2022learning.bib" }
    ]
  },
  {
    year: "2021",
    title: "High-resolution metabolomic biomarkers for lung cancer diagnosis and prognosis",
    venue: "Scientific Reports 2021",
    authors: "Shi-ang Qi*, Qian Wu*, Zhenpu Chen, Wei Zhang, Yongchun Zhou, Kaining Mao, Jia Li, Yuanyuan Li, Jie Chen, Youguang Huang, Yunchao Huang",
    authorNote: "* Co-first authors",
    tags: ["Journal", "Healthcare AI"],
    links: [
      { label: "PDF", href: "https://www.nature.com/articles/s41598-021-91276-2" },
      { label: "BibTeX", href: "papers/qi2021high.bib" }
    ]
  },
  {
    year: "2021",
    title: "Learning language and acoustic models for identifying Alzheimer's dementia from speech",
    venue: "Frontiers in Computer Science 2021",
    authors: "Zehra Shah, Jeffrey Sawalha, Mashrura Tasnim, Shi-ang Qi, Eleni Stroulia, Russell Greiner",
    tags: ["Journal", "Multimodal analysis", "Healthcare AI"],
    links: [
      { label: "PDF", href: "https://www.frontiersin.org/articles/10.3389/fcomp.2021.624659/full" },
      { label: "BibTeX", href: "papers/shah2021learning.bib" }
    ]
  },
  {
    year: "2020",
    title: "Safety Assessment of a Wearable Low-Intensity Pulsed Ultrasound Device for Relieving Mental Illness Symptoms",
    venue: "EMBC 2020",
    authors: "Shi-ang Qi, Jie Chen",
    tags: ["Conference", "Others"],
    links: [
      { label: "PDF", href: "https://ieeexplore.ieee.org/abstract/document/9175580" },
      { label: "BibTeX", href: "papers/qi2020safety.bib" }
    ]
  },
  {
    year: "2018",
    title: "A review of low-intensity pulsed ultrasound for therapeutic applications",
    venue: "IEEE TBME 2018",
    authors: "Xiaoxue Jiang, Oleksandra Savchenko, Yufeng Li, Shi-ang Qi, Tianlin Yang, Wei Zhang, Jie Chen",
    tags: ["Journal", "Others"],
    links: [
      { label: "PDF", href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8588366" },
      { label: "BibTeX", href: "papers/jiang2018review.bib" }
    ]
  },
  {
    year: "2018",
    title: "Design of a novel wearable LIPUS treatment device for mental health treatment",
    venue: "EMBC 2018",
    authors: "Shi-ang Qi, Yufeng Li, Wei Zhang, Jie Chen",
    tags: ["Conference", "Others"],
    links: [
      { label: "PDF", href: "https://ieeexplore.ieee.org/abstract/document/9714800" },
      { label: "BibTeX", href: "papers/qi2018design.bib" }
    ]
  }
];

const talks = [
  {
    title: "Explicitly Modeling Censoring Yields Sharper Estimates for Survival Analysis",
    meta: "AI Seminar (Amii) · 2025",
    links: [{ label: "Recording", href: "https://www.youtube.com/watch?v=j6NssQ391oY" }]
  },
  {
    title: "Survival Prediction Tutorial",
    meta: "Upper Bound AI Conference · 2025",
    detail: "Co-presented with Dr. Russell Greiner.",
    links: [{ label: "Recording", href: "https://www.youtube.com/watch?v=fHYmf-7lK8g&ab_channel=Amii" }]
  },
  {
    title: "Improving Calibration w/o Compromising Discrimination for Survival Analysis",
    meta: "AI Seminar (Amii) · 2025",
    links: [{ label: "Recording", href: "https://www.youtube.com/watch?v=Sl4LM2GnrTA&ab_channel=Amii" }]
  },
  {
    title: "An Effective Meaningful Way to Evaluate Survival Models",
    meta: "Laboratory of Data Science Seminar Series, Purdue University Fort Wayne · 2024",
    links: [{ label: "Recording", href: "https://youtu.be/Wh3MIBluWfU?si=lYxK0czido3DRzq9" }]
  },
  {
    title: "An Effective Meaningful Way to Evaluate Survival Models (short)",
    meta: "One Minute Research (Amii) · 2023",
    links: [{ label: "Recording", href: "https://youtu.be/RFadSIpcIwY?si=jn-e8nvb7MPqKebE" }]
  }
];

const filters = [
  "All",
  "Featured",
  "Survival Analysis",
  "Healthcare AI",
  "Multimodal analysis",
  "Others"
];

let activeFilter = "All";

function highlightOwnName(text) {
  return text
    .replaceAll("Shi-ang Qi", "<strong>Shi-ang Qi</strong>")
    .replaceAll("Shiang Qi", "<strong>Shi-ang Qi</strong>");
}

function createLinkList(links) {
  return links
    .map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`)
    .join("");
}

function renderUpdates() {
  const container = document.getElementById("updates-grid");

  updates.forEach((item, index) => {
    const article = document.createElement("article");
    article.style.setProperty("--stagger", `${120 + index * 80}ms`);
    article.innerHTML = `
      <p class="update-date">${item.date}</p>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    container.appendChild(article);
  });
}

function renderFilters() {
  const filterBar = document.getElementById("filter-bar");

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${filter === activeFilter ? " is-active" : ""}`;
    button.setAttribute("aria-pressed", String(filter === activeFilter));
    button.textContent = filter;
    button.addEventListener("click", () => {
      activeFilter = filter;
      renderPublications();
    });
    filterBar.appendChild(button);
  });
}

function renderPublications() {
  const filterBar = document.getElementById("filter-bar");
  const container = document.getElementById("publication-list");
  const count = document.getElementById("publication-count");

  filterBar.innerHTML = "";
  container.innerHTML = "";
  renderFilters();

  const visiblePublications =
    activeFilter === "All"
      ? publications
      : publications.filter((publication) => publication.tags.includes(activeFilter));

  count.textContent = `Showing ${visiblePublications.length} publication${visiblePublications.length === 1 ? "" : "s"}.`;

  visiblePublications.forEach((publication, index) => {
    const card = document.createElement("article");
    card.className = "publication-card";
    card.style.setProperty("--stagger", `${160 + index * 34}ms`);
    card.innerHTML = `
      <div class="publication-kicker">
        <span class="publication-year">${publication.year}</span>
        <p class="publication-meta">${publication.venue}</p>
      </div>
      <h3>${publication.title}</h3>
      <p class="publication-authors">${highlightOwnName(publication.authors)}</p>
      ${publication.authorNote ? `<p class="publication-author-note">${publication.authorNote}</p>` : ""}
      ${
        publication.links && publication.links.length
          ? `<div class="publication-links">${createLinkList(publication.links)}</div>`
          : ""
      }
      <div class="publication-tags">
        ${publication.tags.map((tag) => `<span class="publication-tag">${tag}</span>`).join("")}
      </div>
    `;
    container.appendChild(card);
  });
}

function renderStackItems(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "stack-item";
    article.innerHTML = `
      ${item.kicker ? `<p class="stack-kicker">${item.kicker}</p>` : ""}
      <strong>${item.title}</strong>
      ${item.meta ? `<span class="stack-meta">${item.meta}</span>` : ""}
      ${item.detail ? `<span>${item.detail}</span>` : ""}
      ${
        item.links && item.links.length
          ? `<div class="publication-links">${createLinkList(item.links)}</div>`
          : ""
      }
    `;
    container.appendChild(article);
  });
}

function renderTalks() {
  const container = document.getElementById("talks-list");
  if (!container) return;

  talks.forEach((talk) => {
    const article = document.createElement("article");
    article.className = "stack-item talk-item";
    article.innerHTML = `
      <strong>${talk.title}</strong>
      <div class="talk-meta-row">
        ${talk.meta ? `<span class="stack-meta">${talk.meta}</span>` : ""}
        ${
          talk.links && talk.links.length
            ? `<div class="talk-links">${createLinkList(talk.links)}</div>`
            : ""
        }
      </div>
      ${talk.detail ? `<span>${talk.detail}</span>` : ""}
    `;
    container.appendChild(article);
  });
}

renderUpdates();
renderPublications();
renderTalks();
