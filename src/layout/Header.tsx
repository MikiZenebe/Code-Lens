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
    <header className="landing-header flex items-center justify-between gap-4 rounded-2xl px-5 py-3.5">
      <Link
        href="/"
        className="landing-brand flex items-center gap-2 text-base"
      >
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
      </Link>

      <nav className="hidden items-center gap-1 md:flex">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="landing-nav-link">
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>AST Ready</span>
        </div>

        <ThemeToggle className="border-(--landing-line) bg-transparent hover:bg-(--landing-fog)" />
        <Link href="/login" className="landing-nav-link hidden sm:inline-flex">
          Sign in
        </Link>
        <Link
          href="/register"
          className="landing-btn-primary rounded-xl px-4 py-2 text-sm font-semibold"
        >
          Get started
        </Link>
      </div>
    </header>
  );
}
