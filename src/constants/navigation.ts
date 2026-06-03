import type { NavigationLink } from "@/components/organisms/Navigation";
import type { FooterLink } from "@/components/organisms/Footer";

/* ── Brand & Labels ── */
export const BRAND_NAME = "DevPortfolio";
export const CTA_LABEL = "Resume";
export const FOOTER_COPYRIGHT =
  "\u00a9 2024 Senior Frontend Developer. Built with precision.";

/* ── Footer Links (single source of truth) ── */
export const FOOTER_LINKS: FooterLink[] = [
  { href: "#", label: "GitHub" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Twitter" },
  { href: "#", label: "Email" },
];

/* ── Navigation Links ──
 *  The Home page uses anchor-based links (#home, #contact) while
 *  sub-pages use route-based links (/, /#about, /#contact).
 *  `getNavLinks` returns the correct set based on `currentPath`.
 */

const HOME_NAV_LINKS: NavigationLink[] = [
  { href: "#home", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const PROJECTS_NAV_LINKS: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const ABOUT_NAV_LINKS: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

/** Default links used for any route not explicitly mapped. */
const DEFAULT_NAV_LINKS: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

/**
 * Returns the appropriate navigation links for the given route.
 *
 * The Home page (`/`) uses anchor-based links for same-page sections,
 * while sub-pages use absolute route links that navigate back to
 * the home page sections.
 *
 * @param currentPath - The current route pathname (e.g. "/", "/projects", "/about")
 * @returns An array of `NavigationLink` objects for the Navigation component
 */
export function getNavLinks(currentPath: string): NavigationLink[] {
  switch (currentPath) {
    case "/":
      return HOME_NAV_LINKS;
    case "/projects":
      return PROJECTS_NAV_LINKS;
    case "/about":
      return ABOUT_NAV_LINKS;
    default:
      return DEFAULT_NAV_LINKS;
  }
}
