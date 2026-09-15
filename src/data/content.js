export const profile = {
  name: "Jake Darren Olan",
  role: "full-stack web developer",
  brand: "jake_darren_olan",
  lede: "I build interfaces and the systems behind them — from Next.js frontends to FastAPI backends and retrieval pipelines that ground AI answers in real documents instead of guesses.",
  email: "olanjakedarren@gmail.com",
  phone: "+63 991 913 5247",
  phoneHref: "tel:+639919135247",
  linkedin: "https://www.linkedin.com/in/olanjakedarren/",
  linkedinLabel: "linkedin.com/in/olanjakedarren",
  location: "Lipa City, Batangas, PH",
};

export const heroMeta = [
  { label: "Based in", value: "Lipa City, Batangas, PH" },
  { label: "Focus", value: "Full-stack development + applied AI" },
  { label: "Education", value: "BS IT, Business Analytics — GWA 1.5/1.0" },
  { label: "Status", value: "Open to full-stack developer roles" },
];

export const about = [
  { text: "I'm an IT graduate from Batangas State University, majoring in Business Analytics, with hands-on frontend and backend experience from an internship at " },
  { text: "Bridge Consultancy FZE", strong: true },
  { text: " in Dubai. I've since completed the " },
  { text: "Associate AI Engineer for Developers", strong: true },
  { text: " track online to sharpen how I build with AI, and put it into practice with NicheDocs AI, a retrieval-augmented generation app that answers questions about PDFs using citations instead of hallucinations. I like projects where solid engineering meets genuinely useful automation." },
];

export const entries = [
  {
    id: "bridge",
    title: "Frontend & Internal Systems Intern",
    org: "Bridge Consultancy FZE — Dubai, United Arab Emirates",
    date: "Internship",
    summary:
      "Developed and enhanced responsive web interfaces for internal business systems used by the accounting department, building mobile-friendly layouts and reusable UI components with HTML, CSS, JavaScript, and Tailwind CSS. Implemented and tested forms, data tables, interactive elements, and business workflows across different user roles and permissions — working mainly on the invoice management and Statement of Account (SOA) modules, and resolving frontend issues across screen sizes.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    id: "nichedocs",
    title: "NicheDocs AI — Document Assistant",
    org: "Own project — RAG web app",
    date: "2026",
    summary:
      "A retrieval-augmented generation app that answers natural-language questions about an uploaded PDF, grounding every answer in the document's own content. Extracts, chunks, and embeds text with the OpenAI embeddings API, stores vectors in Supabase with pgvector for similarity search, and returns citation-backed answers referencing the exact page or section used — with a graceful “not found in this document” fallback instead of a hallucinated one. Deployed as a live public demo on Vercel with a chat-style interface and persistent session history.",
    tags: ["Next.js", "FastAPI", "Supabase / pgvector", "OpenAI API", "Tailwind CSS"],
    live: "https://nichedocsai-frontend.vercel.app/",
  },
  {
    id: "lobodent",
    title: "Lobodent Dental Clinic System",
    org: "College thesis project",
    date: "2025",
    summary:
      "Web platform modernizing clinic appointment scheduling, with separate staff and patient interfaces, booking, status monitoring, and reporting. Applies descriptive and prescriptive analytics to support staffing and resource decisions, replacing paper-based workflows with automated notifications and digital records.",
    tags: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
  },
  {
    id: "food-ordering",
    title: "Food Ordering Management System",
    org: "College school project",
    summary:
      "A web-based ordering and management system with menu management, order workflows, and database-driven records — frontend connected to a MySQL database through PHP, with a responsive Tailwind interface.",
    tags: ["PHP", "MySQL", "HTML", "Tailwind CSS"],
  },
  {
    id: "wordwander",
    title: "WordWander",
    org: "College school project",
    summary:
      "A Filipino–English flashcard app for learning vocabulary across categories like colors, days, greetings, numbers, animals, and verbs, with an interactive interface built for an engaging learning experience.",
    tags: ["PHP", "Python", "Tailwind CSS"],
  },
];

export const skillGroups = [
  {
    name: "Programming & Web",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "PHP", "Python", "Node.js", "Tailwind CSS"],
  },
  {
    name: "Backend & APIs",
    skills: ["FastAPI", "REST APIs", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    name: "AI & Automation",
    skills: ["OpenAI API", "Prompt Engineering", "Claude Code", "Codex", "Cursor"],
  },
  {
    name: "Dev & Deployment",
    skills: ["Git", "GitHub", "Docker", "Hostinger", "Vercel", "VS Code"],
  },
  {
    name: "Design & Collaboration",
    skills: ["Figma", "Canva", "Slack", "Discord", "Google Workspace", "Microsoft Office"],
  },
  {
    name: "Languages",
    skills: ["Filipino", "English"],
  },
];

export const education = [
  {
    degree: "BS in Information Technology, Major in Business Analytics",
    school: "Batangas State University TNEU Lipa Campus · 2025",
    gwa: "GWA: 1.5 / 1.0",
  },
  {
    degree: "Science, Technology, Engineering and Mathematics (STEM) Track",
    school: "The Mabini Academy, Lipa Campus · 2021",
  },
];

export const certificates = [
  { name: "Associate AI Engineer for Developers (track)", issuer: "DataCamp · 2026" },
  { name: "Introduction to Python for Developers", issuer: "DataCamp · 2026" },
  { name: "Working with the OpenAI API", issuer: "DataCamp · 2026" },
  { name: "Prompt Engineering with the OpenAI API", issuer: "DataCamp · 2026" },
  { name: "Working with Hugging Face", issuer: "DataCamp · 2026" },
  { name: "LLMOps Concepts", issuer: "DataCamp · 2026" },
  { name: "Working with the OpenAI Responses API", issuer: "DataCamp · 2026" },
  { name: "AWS Cloud Quest: Cloud Practitioner", issuer: "AWS · 2024" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];
