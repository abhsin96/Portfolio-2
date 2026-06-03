import { PageLayout } from "@/components/templates/PageLayout";
import { AboutHeroSection } from "@/components/organisms/AboutHeroSection";
import { TechArsenalSection } from "@/components/organisms/TechArsenalSection";
import { LeadershipSection } from "@/components/organisms/LeadershipSection";
import type { TechStackCardProps } from "@/components/molecules/TechStackCard";
import type { StackDetailProps } from "@/components/molecules/StackDetail";
import type { LeadershipCardProps } from "@/components/molecules/LeadershipCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Senior Frontend Developer Portfolio",
  description:
    "Learn about my journey architecting the next web generation — a decade of experience in scalable frontend ecosystems.",
};

const TECH_STACK: TechStackCardProps[] = [
  { icon: "deployed_code", label: "React", colorVariant: "primary" },
  { icon: "javascript", label: "Node.js", colorVariant: "secondary" },
  { icon: "cloud", label: "AWS", colorVariant: "tertiary" },
  { icon: "code", label: "TypeScript", colorVariant: "primary" },
  { icon: "box", label: "Docker", colorVariant: "secondary" },
  { icon: "hub", label: "GraphQL", colorVariant: "tertiary" },
];

const STACK_DETAILS: StackDetailProps[] = [
  {
    title: "Frontend",
    description:
      "Advanced React patterns, Next.js optimization, Tailwind CSS design systems, and Three.js for immersive 3D experiences.",
    colorVariant: "primary",
  },
  {
    title: "Backend",
    description:
      "Distributed systems with Node.js, Go microservices, PostgreSQL performance tuning, and Redis caching layers.",
    colorVariant: "secondary",
  },
  {
    title: "DevOps",
    description:
      "CI/CD automation with GitHub Actions, Terraform for IaC, and Kubernetes orchestration in AWS/GCP environments.",
    colorVariant: "tertiary",
  },
];

const LEADERSHIP_ITEMS: LeadershipCardProps[] = [
  {
    title: "Engineering Management",
    description:
      "Led a cross-functional team of 15 developers across 3 time zones. Implemented RFC processes and peer review standards that reduced production bugs by 40% over 18 months.",
    tags: ["STRATEGY", "AGILE"],
    colorVariant: "primary",
  },
  {
    title: "Mentorship Program Lead",
    description:
      "Founded the 'Dev-to-Senior' internal mentorship pipeline. Successfully guided 5 junior developers into mid-level and senior roles through structured technical workshops and pair programming.",
    tags: ["COACHING", "WORKSHOPS"],
    colorVariant: "secondary",
  },
  {
    title: "Open Source Advocacy",
    description:
      "Active contributor to major frontend libraries. Maintain several internal-to-external utility packages with a focus on accessibility and performance profiling.",
    tags: ["COMMUNITY", "CONTRIBUTING"],
    colorVariant: "tertiary",
  },
];

export default function AboutPage() {
  return (
    <PageLayout footerBrandName="DEVPORTFOLIO">
      <main style={{ paddingBottom: "var(--section-gap-desktop)" }}>
        {/* ── Professional Narrative ── */}
        <AboutHeroSection
          sectionLabel="EXECUTIVE SUMMARY"
          headline={
            <>
              Architecting the <br />
              <span className="accent">Next Web Generation</span>
            </>
          }
          headlineMobile={
            <>
              Architecting the <span className="accent">Next Web</span>
            </>
          }
          paragraphs={[
            "With over a decade of experience in the digital trenches, I have transitioned from writing simple scripts to engineering complex, scalable frontend ecosystems. My journey is defined by a relentless pursuit of performance and a deep-seated belief that code should be as elegant as the interfaces it creates.",
            "I specialize in Bridging the gap between ambitious design concepts and technical reality. As a Senior Developer, I don't just build components; I build systems that empower teams and delight millions of users.",
          ]}
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDYq5F4VqKsB58khr0JwpW3r2HEpaw7pjlUOB3F7GbZUky87Vpx0xC7uiMEq6oTUFmeiJErgVoCyyELWqIduNMTjie3cFA9HBKVimtRHZLT0jzvGHbL3O8-F9XAkZcMVXRHQ3MKrQ7HMK9LwyDR_xlD0xZusQwEYcUuL81bZh-wmX3BESCrGS-61kHSMMBtAik2eC02DU_jztHQC8emjSWCCgcjksy5yTwuqkKgOAJQCOMEH8yWC6EMV_Ao5pFHJSinwDo0DcTmhCh-"
          imageAlt="A professional studio portrait of a senior male software engineer with a confident expression, wearing a minimalist dark sweater."
        />

        {/* ── Technical Arsenal (Bento Style) ── */}
        <TechArsenalSection
          sectionLabel="TECH STACK"
          headline="Technical Arsenal"
          techStack={TECH_STACK}
          stackDetails={STACK_DETAILS}
        />

        {/* ── Leadership & Mentorship (Timeline/Git Graph Style) ── */}
        <LeadershipSection
          sectionLabel="IMPACT"
          headline="Leadership & Mentorship"
          description="Building great software is a team sport. Beyond the code, I focus on cultivating talent and establishing engineering cultures that thrive on curiosity and quality."
          items={LEADERSHIP_ITEMS}
        />
      </main>
    </PageLayout>
  );
}
