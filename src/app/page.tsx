import { Navigation } from "@/components/organisms/Navigation";
import { HeroSection } from "@/components/organisms/HeroSection";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import { CTASection } from "@/components/organisms/CTASection";
import { Footer } from "@/components/organisms/Footer";
import type { TechItem } from "@/components/organisms/HeroSection";
import type { BentoProjectCardProps } from "@/components/molecules/BentoProjectCard";
import type { ExperienceEntry } from "@/components/organisms/ExperienceSection";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const TECH_STACK: TechItem[] = [
  { icon: "layers", label: "React" },
  { icon: "bolt", label: "Next.js" },
  { icon: "code", label: "TypeScript" },
  { icon: "palette", label: "TailwindCSS" },
  { icon: "database", label: "GraphQL" },
  { icon: "monitoring", label: "Web Vitals" },
];

const PROJECTS: BentoProjectCardProps[] = [
  {
    title: "Omniscience Analytics",
    description:
      "Real-time data engine processing 50M+ events daily with zero-latency visualization.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcCEAPfFuhB1gEatd0iPmDQ1ckaBwVclm1awjIPcYyIYECLjZ-5DPvgo92MtWf7ex5cYUzQLfaQGxWuayAGQxUg4ErZzviGqTK6MBxpEGMnAteCxLuGWb6hBbpZQL9OVaQUlXlDdKGCJMY7nses6TMGBGI-u-USvuDT0hARXJfrKjHyT1Lxlx0YsDfhhbpig0vEAk75rO8xCGLSsRmrnR0q_UWmT9vKq8Q6cm3iBRyzY8hEieQMBJffZ-duKJpQ1p3-gGNU-mL571o",
    imageAlt:
      "A sophisticated data visualization dashboard with dark indigo and deep blue accents",
    tags: ["Next.js", "D3.js"],
    colSpan: 8,
    aspect: "landscape",
    overlayAlways: false,
  },
  {
    title: "DevLayer",
    description: "A custom IDE plugin for distributed team collaboration.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDahJE8qez08sYz-5IJFI2jYXzqVPSrKDcFmY5LxD1uSAfjUCslVQVVFbaRUK6unDail_CaPslv0uLZMa0Bav2X0Jivcz6K6JWU9sTb50KMI9BGOAhjSfxQfeYv536uKGSQtztCnnems29okO2hYjzUaaLKaxDRhwlIioowxqmFdusBPAxRqHw6vwRfPDrXSLNPv0rU7g8sUdOyBKsBAYi2cMVcbB7hdhqxrT7iH6txWkDReKFyAFKI_TnXKFaKyNMq_k9oqi-9ujF7",
    imageAlt:
      "A minimalist code editor interface with a high-contrast dark theme",
    colSpan: 4,
    aspect: "square",
    overlayAlways: true,
  },
  {
    title: "Core Protocol",
    description: "The backbone for decentralized identity management.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASHu2MphbCVMvnjpnYVFud63OYiAywNsjU_y3YrTWIWolM44LZCJwk4cjg1Ipa-4HgpB0_JMHGQyPfZ9YFbxJkcKkFaJvqE3Gw_dTWq61njj30e2t_OySESoRwSIchTgKLYwVCD2rLXCDnpNGrh3O_hpXvMw-oZNa3Z-l3CgLyESvrG2jgUZgk8GU5rPXCZwc0McAh5leR3PYOFmHc_vRvoMkb5EFFsCKYAi0qUzOfP6xD74ePv6nh2EQ5uY1sYy9OK82a93qfqYH9",
    imageAlt:
      "An abstract 3D geometric composition of crystalline structures in deep indigo",
    colSpan: 4,
    aspect: "square",
    overlayAlways: true,
  },
  {
    title: "Lux Marketplace",
    description:
      "E-commerce redefined with headless architecture and blazingly fast checkout.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIKXVr-7h6bwktqkn5H67PMk-WlRQ8Ebfwq3UTPUuzWMuQ-xWyxP15lIfYIYPyyUOeAG826meEwLbWUhBVZv-bHnSgzsbf0sA2iRh-c0PCsP8VsfPVlgiPT3VW3UlxicHxsvHpZZAhx3M9Ch0GQ-KS9yfbs7o9qlKfUOwCSCY728phEdJQzEuSjlOKutrwTs3XCUumoY_LAYnhhptn-G-mYFNWesIgjwwGLGGlLef50peXvBywBtjNsnU6paNP4YrNuJdu7En6grDI",
    imageAlt: "A futuristic e-commerce interface mockup for a luxury brand",
    colSpan: 8,
    aspect: "landscape",
    overlayAlways: false,
  },
];

const EXPERIENCE: ExperienceEntry[] = [
  {
    title: "Senior Frontend Engineer",
    company: "TechScale Inc.",
    period: "2021 \u2013 Present",
    active: true,
    bullets: [
      "Architected a micro-frontend ecosystem using Module Federation, reducing build times by 40%.",
      "Led the transition from legacy React to Next.js 14 with App Router, improving LCP by 1.2s.",
      "Mentored a team of 6 juniors and established a company-wide design system with Tailwind.",
    ],
  },
  {
    title: "Product Developer",
    company: "FutureNode Systems",
    period: "2018 \u2013 2021",
    active: false,
    bullets: [
      "Developed high-interaction React components for a proprietary design tool.",
      "Implemented complex state management solutions using Redux Toolkit and Sagas.",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "Initial Craft",
    period: "2016 \u2013 2018",
    active: false,
  },
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
        activeHref="#home"
        brandName="DevPortfolio"
        ctaLabel="Resume"
      />

      <main>
        {/* ── Hero Section ── */}
        <HeroSection
          id="home"
          badge="AVAILABLE FOR NEW PROJECTS"
          headline={
            <>
              Frontend Architect <span className="accent">&</span> Product
              Engineer
            </>
          }
          description="I specialize in building complex, high-performance web applications with a focus on scalable architecture and impeccable user experience."
          techStack={TECH_STACK}
          primaryCta="View Projects"
          secondaryCta="Let’s Talk"
        />

        {/* ── Featured Projects (Bento Grid) ── */}
        <ProjectsSection
          id="projects"
          sectionLabel="SELECTED WORKS"
          headline="Architectural Excellence"
          browseLabel="Browse Full Gallery"
          browseHref="/projects"
          projects={PROJECTS}
        />

        {/* ── Experience Timeline ── */}
        <ExperienceSection
          id="about"
          sectionLabel="EXPERIENCE"
          headline="Career Path"
          entries={EXPERIENCE}
        />

        {/* ── CTA Section ── */}
        <CTASection
          id="contact"
          headline="Let’s build the future of the web together."
          description="Currently open to senior-level roles, freelance architecture consultations, and speaking engagements."
          ctaLabel="Schedule a Consultation"
        />
      </main>

      <Footer
        brandName="DEV_ARCHITECT"
        copyright="\u00a9 2024 Senior Frontend Developer. Built with precision."
        links={FOOTER_LINKS}
      />
    </>
  );
}
