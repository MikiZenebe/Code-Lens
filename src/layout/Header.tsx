import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#why", label: "Why CodeLens" },
  { href: "#features", label: "Capabilities" },
  { href: "#how", label: "Architecture" },
  { href: "#demo", label: "Live Demo" },
];

export default function Header() {
  return (
    <header className="landing-header landing-reveal sticky top-4 z-50 flex items-center justify-between gap-3 rounded-2xl px-4 py-2.5 sm:px-5">
      {/* Brand lockup */}
      <Link href="/" className="group flex items-center gap-2.5 transition-opacity">
        <div className="relative flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 via-sky-500/10 to-indigo-500/20 p-1 border border-cyan-400/30 transition-all duration-300 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_16px_rgba(0,242,254,0.3)]">
          <Image
            src="/assets/logo.png"
            alt="CodeLens Logo"
            width={34}
            height={34}
            className="object-contain drop-shadow-[0_0_6px_rgba(0,242,254,0.4)]"
            priority
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-heading text-lg font-bold tracking-tight text-(--landing-ink)">
              Code<span className="brand-gradient-text">Lens</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-semibold text-cyan-600 dark:text-cyan-300">
              <Sparkles className="size-2.5 text-cyan-500 dark:text-cyan-400" />
              v2.0
            </span>
          </div>
        </div>
      </Link>

      {/* Nav links */}
      <nav
        aria-label="Landing navigation"
        className="hidden items-center gap-1 lg:flex"
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="landing-nav-link">
            {link.label}
          </a>
        ))}
      </nav>

      {/* Action cluster */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        {/* Live system pill */}
        <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>AST Ready</span>
        </div>

        <ThemeToggle className="border-(--landing-line) bg-transparent hover:bg-(--landing-fog)" />

        <Link
          href="/login"
          className="hidden md:inline-flex px-3 py-1.5 text-xs font-semibold text-(--landing-muted) transition-colors hover:text-(--landing-ink)"
        >
          Sign in
        </Link>

        <Link
          href="/register"
          className="landing-btn-primary inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold sm:px-4 sm:text-sm"
        >
          <span>Get Started</span>
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </header>
  );
}
