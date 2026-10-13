import { Braces, Calendar, Hash, ImageIcon, ToggleLeft, Type } from "lucide-react";
import type { CodeSample, Faq, FieldType, FooterColumn, NavLink, Step } from "../types/landing";

// Placeholder until the dashboard has a public URL.
export const SIGN_UP_HREF = "#get-started";

export const API_BASE = "https://api.scarfold.com";
export const SAMPLE_ENDPOINT = `${API_BASE}/v1/portfolio/entries`;

export const NAV_LINKS: NavLink[] = [
  { id: "how-it-works", label: "How it works" },
  { id: "features", label: "Features" },
  { id: "api", label: "API" },
  { id: "faq", label: "FAQ" },
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Sign in",
    description: "Create an account with your email. No card, no setup call.",
  },
  {
    number: "02",
    title: "Create a project",
    description: "One project for each site: your portfolio, a client page, a side project.",
  },
  {
    number: "03",
    title: "Add fields",
    description: "Describe your content with simple fields like text, images and lists.",
  },
  {
    number: "04",
    title: "Call the API",
    description: "Copy your endpoint and fetch clean JSON from any frontend.",
  },
];

export const FIELD_TYPES: FieldType[] = [
  { name: "title", type: "Text", icon: Type, tone: "violet" },
  { name: "cover", type: "Image", icon: ImageIcon, tone: "sky" },
  { name: "year", type: "Number", icon: Hash, tone: "peach" },
  { name: "featured", type: "Boolean", icon: ToggleLeft, tone: "mint" },
];

export const STAGE_FIELDS: FieldType[] = [
  ...FIELD_TYPES,
  { name: "published_at", type: "Date", icon: Calendar, tone: "violet" },
  { name: "tags", type: "List", icon: Braces, tone: "sky" },
];

export const CODE_SAMPLES: CodeSample[] = [
  {
    id: "fetch",
    label: "fetch",
    code: `const KEY = process.env.SCARFOLD_KEY;

const res = await fetch(
  "${SAMPLE_ENDPOINT}",
  { headers: { Authorization: \`Bearer \${KEY}\` } }
);

const { data } = await res.json();`,
  },
  {
    id: "axios",
    label: "axios",
    code: `import axios from "axios";

const KEY = process.env.SCARFOLD_KEY;
const { data } = await axios.get(
  "${SAMPLE_ENDPOINT}",
  { headers: { Authorization: \`Bearer \${KEY}\` } }
);`,
  },
  {
    id: "curl",
    label: "cURL",
    code: `curl ${SAMPLE_ENDPOINT} \\
  -H "Authorization: Bearer $SCARFOLD_KEY"`,
  },
];

export const SAMPLE_RESPONSE = `{
  "data": [
    {
      "title": "Harbour Lights",
      "cover": "/media/harbour.webp",
      "year": 2026,
      "featured": true
    }
  ]
}`;

export const FAQS: Faq[] = [
  {
    question: "What is Scarfold?",
    answer:
      "A small content platform. You define the shape of your content once, fill it in from a dashboard, and read it back as JSON from your own site.",
  },
  {
    question: "Who is it for?",
    answer:
      "Developers and designers shipping portfolios, landing pages and side projects who want editable content without building a backend.",
  },
  {
    question: "Does it work with my framework?",
    answer:
      "Yes. It is a plain HTTP API, so it works with Next.js, Astro, React, Vue, Svelte or a static HTML page with a script tag.",
  },
  {
    question: "Do I need to redeploy when content changes?",
    answer:
      "Not if you fetch at request time. Edit an entry in the dashboard and the API returns the new version on the next call.",
  },
  {
    question: "How do I keep my content private?",
    answer:
      "Each project has its own API key. Keep it in an environment variable and call the API from your server or build step.",
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "API", href: "#api" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Get started", href: SIGN_UP_HREF },
    ],
  },
];
