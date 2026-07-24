import { motion } from "framer-motion";
import { SectionHeader } from "./Products";

const groups = [
  {
    label: "Programming Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Dart",
      "C#",
      "PHP",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Angular",
      "Vue.js",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      ".NET",
      "ASP.NET",
      "ASP.NET Core",
      "Laravel",
      "REST APIs",
    ],
  },
  {
    label: "Mobile",
    items: [
      "Flutter",
      "Dart",
      "Android",
      "iOS",
      "React Native",
      "Firebase",
      "Push Notifications",
      "OTA Updates",
    ],
  },
  {
    label: "Databases",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Redis",
      "Firebase Firestore",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Docker Compose",
      "Nginx",
      "Cloudflare",
      "GitHub Actions",
    ],
  },
  {
    label: "CMS & eCommerce",
    items: [
      "WordPress",
      "WooCommerce",
      "Shopify",
      "Custom eCommerce",
      "Payment Gateway",
      "Inventory Management",
    ],
  },
  {
    label: "APIs & Integrations",
    items: [
      "REST API",
      "GraphQL",
      "JWT",
      "OAuth 2.0",
      "Webhooks",
      "Razorpay",
      "Stripe",
      "PayPal",
      "Google APIs",
      "WhatsApp API",
    ],
  },
  {
    label: "AI & Automation",
    items: [
      "OpenAI",
      "AI Chatbots",
      "AI Agents",
      "Prompt Engineering",
      "Workflow Automation",
      "OCR",
      "Document Processing",
    ],
  },
  {
    label: "Tools & Architecture",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Postman",
      "Figma",
      "Microservices",
      "MVC",
      "Clean Architecture",
      "CI/CD",
    ],
  },
];

export function TechStack() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Technology Stack"
          title="Built with modern technologies for scalable digital products."
          subtitle="From enterprise software and SaaS platforms to websites, eCommerce solutions, mobile applications, and AI-powered systems, we leverage proven technologies to deliver secure, scalable, and high-performance solutions."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {groups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              className="glass rounded-2xl p-5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
                {group.label}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/85 transition-colors hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
