import { Button } from "@/components/atoms/Button";
import { Navigation } from "@/components/organisms/Navigation";
import { Footer } from "@/components/organisms/Footer";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { PerformanceLogs } from "@/components/molecules/PerformanceLogs";
import styles from "./page.module.css";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const PROJECTS = [
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

const TIMELINE_ENTRIES = [
  {
    period: "2022 \u2014 PRESENT",
    title: "Senior Systems Architect",
    active: true,
  },
  {
    period: "2020 \u2014 2022",
    title: "Full-Stack Engineer",
    active: false,
  },
];

const PERFORMANCE_LOGS = [
  { label: "Main thread blocking time", value: "< 50ms" },
  { label: "Lighthouse Performance Score", value: "98/100" },
  { label: "Unit Test Coverage", value: "94.2%" },
  { label: "CI/CD Success Rate", value: "99.9%" },
];

const FOOTER_LINKS = [
  { href: "#", label: "GitHub" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Twitter" },
  { href: "#", label: "Email" },
];

export default function Home() {
  return (
    <>
      <Navigation
        links={NAV_LINKS}
        activeHref="#projects"
        brandName="DevPortfolio"
        ctaLabel="Resume"
      />

      <main className={styles.main}>
        {/* \u2500\u2500 Hero Header \u2500\u2500 */}
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

        {/* \u2500\u2500 Project Grid \u2500\u2500 */}
        <div className={styles.projectGrid}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* \u2500\u2500 Experience Preview (Asymmetric Layout) \u2500\u2500 */}
        <section className={styles.experienceSection}>
          <div className={styles.experienceLeft}>
            <h2 className={styles.experienceTitle}>Technical Progression</h2>
            <p className={styles.experienceDescription}>
              My approach to development is rooted in scalability and code
              maintainability. Each project is an opportunity to solve a specific
              architectural bottleneck.
            </p>
            <div className={styles.timelineEntries}>
              {TIMELINE_ENTRIES.map((entry) => (
                <div
                  key={entry.title}
                  className={`${styles.traceItem} ${
                    !entry.active ? styles.traceItemInactive : ""
                  }`}
                >
                  <p className={styles.tracePeriod}>{entry.period}</p>
                  <h4 className={styles.traceTitle}>{entry.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.experienceRight}>
            <PerformanceLogs entries={PERFORMANCE_LOGS} />
          </div>
        </section>
      </main>

      <Footer
        brandName="DEV.ARCHIVE"
        copyright="\u00a9 2024 Senior Frontend Developer. Built with precision."
        links={FOOTER_LINKS}
      />
    </>
  );
}
