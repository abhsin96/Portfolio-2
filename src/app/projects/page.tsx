import { PageLayout } from "@/components/templates/PageLayout";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { PerformanceLogs } from "@/components/molecules/PerformanceLogs";
import type { ProjectCardProps } from "@/components/molecules/ProjectCard";
import type { LogEntry } from "@/components/molecules/PerformanceLogs";
import type { Metadata } from "next";
import { cn } from "@/utils/cn";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projects Archive | DevPortfolio",
  description:
    "A selection of architectural challenges and full-stack implementations showcasing technical depth and performance optimization.",
};

const PROJECTS: ProjectCardProps[] = [
  {
    title: "NeuralCore Engine",
    description:
      "Architected a high-throughput data processing engine capable of handling 50k+ transactions per second using distributed worker nodes and GraphQL subscriptions for real-time monitoring.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2n6r5xE7rer2yxie6IWAQyHFo32gXm78psV3OWEabFuXkXHIduspx1ui70in7Z3fOy33dtJhqc55TUGGR_OX5ed76j2H55hZlymHzEzY-VWsIc2Fj6o2GEGxadhohBRadFxhOapyoVh2jNi8QB3GYYgKswW5KOfr-G02FRTmiqo1yUVywtow6WxnxXZAKaSL5KyxtleEfRsotGk5DdcEbJLtvXKxM17TKYlAZjX9-L1f6VdXn43votfPE5GG8F_f39_05w2M8lqPe",
    imageAlt: "Code editor interface",
    techStack: ["Tailwind", "GraphQL", "Rust"],
  },
  {
    title: "Prism Analytics",
    description:
      "Developed a custom D3.js visualization library to render multidimensional datasets. Optimized rendering performance by 40% through intelligent DOM diffing and Web Workers.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1W7kZb38fwmk3iYRzz3lhxjpScoWlVhLSNxr40nEv6mGOX-vhMy-aQ0g3UHwa6yyArG3YunrdU_SDkRbdnKnuYHHxorWo4iY4bqn6CTiH9l11OJa0Nn99OVx1-amvwYfSyfnY_VzGHqaISF5lO_L_r5crXr_QvEpfVJeQSZCXK2JIcN_0o8_M3MW_745-f_B4W2WZZ9quxdn2QG2R4tkgEKNsy3n22F5yS_OeGIB7Tw-mI6UCGqmF_ewGlYTR0c3YM7TXm5xQ4wzq",
    imageAlt: "Data visualization dashboard",
    techStack: ["D3.js", "TypeScript", "Next.js"],
  },
  {
    title: "Vault Protocol",
    description:
      "Built a secure mobile-first payment gateway with end-to-end encryption. Implemented complex biometric authentication flows and offline synchronization patterns.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqHO6qOr9a7RzYH0WA41EEHyLj8g6A0Q-L60wbFrU8ypJMRZ4fytTZQaBFJr_3L5gPjjOZhsvrpRAS2PcSnfZQJl7qX9ntP_PlEBv65iA_8w9o26xV0fkSg4uy-4ypUl1lcTpH1RmIGpn9UBjSWISvEWccnBCbKKKXjnGvbfg-Jv2CXmz6nkhjTryPrioWXB9Tg02-DzriJRzuX_XOHafgBPXxNh99j688BkNkbfj_3NoQ4OUHPmxo5dzI_VWtf3HVk-D8qA6fCtSz",
    imageAlt: "Mobile application mockup",
    techStack: ["React Native", "Node.js", "Postgres"],
  },
  {
    title: "Mesh Grid v2",
    description:
      "Designed and implemented a serverless deployment pipeline using GitHub Actions and AWS CDK, reducing deployment time from 15 minutes to under 3 minutes.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLgPI1BRTGXoBdC5hT211rA_2N4HYmTahFoF1riahNhSybfJrFeJXegFg6jVq6VNmprDl6g8l57eW4WxOeZXnAFhpC3j85mhLHaDOtXiv2X49CFQ0ghX2h4SyHalTp1iMqerZ1xk8U9wMTfGUIvvWYRW-Ulf_0kI6v6G0QzELm9qD2fSgBG7zwwB3rFKUHRPQpE0wIcP5_YWpko9zV_giE6fyXiEaYzsRYOiot1d68Y-3w5hiTrxT-bpm599RwvhCv0CuK1QxVyYNJ",
    imageAlt: "Server racks and networking",
    techStack: ["AWS", "Docker", "Terraform"],
  },
];

const EXPERIENCE_TIMELINE = [
  {
    period: "2022 — PRESENT",
    title: "Senior Systems Architect",
    active: true,
  },
  {
    period: "2020 — 2022",
    title: "Full-Stack Engineer",
    active: false,
  },
];

const PERFORMANCE_LOGS: LogEntry[] = [
  { label: "Main thread blocking time", value: "< 50ms" },
  { label: "Lighthouse Performance Score", value: "98/100" },
  { label: "Unit Test Coverage", value: "94.2%" },
  { label: "CI/CD Success Rate", value: "99.9%" },
];

export default function ProjectsPage() {
  return (
    <PageLayout footerBrandName="DEV.ARCHIVE">
      <main className={styles.main}>
        {/* ── Hero Header ── */}
        <header className={styles.heroHeader}>
          <h1 className={styles.heroTitle}>
            Project <span className={styles.accent}>Archive</span>
          </h1>
          <p className={styles.heroDescription}>
            A selection of architectural challenges and full-stack
            implementations showcasing technical depth and performance
            optimization.
          </p>
        </header>

        {/* ── Project Grid ── */}
        <section className={styles.projectGrid} aria-label="Projects">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>

        {/* ── Experience Preview (Asymmetric Layout) ── */}
        <section
          className={styles.experienceSection}
          aria-label="Technical Progression"
        >
          <div className={styles.experienceLeft}>
            <h2 className={styles.experienceHeadline}>Technical Progression</h2>
            <p className={styles.experienceDescription}>
              My approach to development is rooted in scalability and code
              maintainability. Each project is an opportunity to solve a
              specific architectural bottleneck.
            </p>
            <div className={styles.timeline}>
              {EXPERIENCE_TIMELINE.map((item) => (
                <div
                  key={item.period}
                  className={cn(
                    styles.timelineEntry,
                    !item.active && styles.timelineEntryInactive,
                  )}
                >
                  <p className={styles.timelinePeriod}>{item.period}</p>
                  <h4 className={styles.timelineTitle}>{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.experienceRight}>
            <PerformanceLogs entries={PERFORMANCE_LOGS} />
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
