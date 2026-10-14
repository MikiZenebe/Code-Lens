"use client";

import { useState } from "react";
import {
  Activity,
  CheckCircle2,
  ChevronRight,
  FileCode,
  FolderTree,
  GitBranch,
  MessageSquare,
  Sparkles,
  Zap,
} from "lucide-react";

export default function CodePlane() {
  const [activeTab, setActiveTab] = useState<"score" | "chat" | "ast">("score");

  return (
    <div className="landing-code-plane landing-reveal landing-reveal-delay-2 relative w-full overflow-hidden rounded-2xl border border-cyan-400/25 bg-[#070b14]/90 p-0 shadow-[0_24px_70px_rgba(7,11,20,0.5),0_0_35px_rgba(0,242,254,0.12)] backdrop-blur-xl">
      {/* Top window bar */}
      <div className="flex items-center justify-between border-b border-cyan-400/15 bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="size-2.5 rounded-full bg-rose-500/80" />
          <div className="size-2.5 rounded-full bg-amber-500/80" />
          <div className="size-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 hidden font-mono text-xs text-slate-400 sm:inline">
            codelens-auditor
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center rounded-lg bg-black/40 p-0.5 border border-white/5">
          <button
            type="button"
            onClick={() => setActiveTab("score")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
              activeTab === "score"
                ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 shadow-[0_0_12px_rgba(0,242,254,0.2)] border border-cyan-400/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Activity className="size-3" />
            <span>Health Score</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("chat")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
              activeTab === "chat"
                ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 shadow-[0_0_12px_rgba(0,242,254,0.2)] border border-cyan-400/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <MessageSquare className="size-3" />
            <span>Grounded Chat</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("ast")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
              activeTab === "ast"
                ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 shadow-[0_0_12px_rgba(0,242,254,0.2)] border border-cyan-400/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <FolderTree className="size-3" />
            <span>AST Graph</span>
          </button>
        </div>

        {/* Branch chip */}
        <div className="hidden sm:flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 font-mono text-[11px] text-slate-300 border border-white/5">
          <GitBranch className="size-3 text-cyan-400" />
          <span>main</span>
        </div>
      </div>

      {/* Main card content */}
      <div className="p-5 sm:p-6 min-h-[360px] flex flex-col justify-between">
        {activeTab === "score" && (
          <div className="space-y-5 animate-in fade-in duration-300">
            {/* Top score banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-cyan-400/20 bg-gradient-to-r from-cyan-950/30 via-slate-900/40 to-indigo-950/30 p-4">
              <div className="flex items-center gap-4">
                <div className="relative flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 via-sky-500/20 to-indigo-500/30 border border-cyan-400/40 shadow-[0_0_20px_rgba(0,242,254,0.25)]">
                  <span className="font-heading text-2xl font-bold tracking-tight text-white">
                    94
                  </span>
                  <div className="absolute -top-1 -right-1 size-3 rounded-full bg-emerald-400 animate-pulse border-2 border-[#070b14]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-base font-bold text-white">
                      Repository Health Score
                    </span>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/30">
                      Grade A · Production Ready
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-400">
                    payment-api · Next.js 16 · 148 files scanned in 2.4s
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <div className="rounded-lg bg-black/40 px-2.5 py-1.5 border border-white/5 text-slate-300">
                  <span className="text-emerald-400 font-semibold">0</span>{" "}
                  Critical
                </div>
                <div className="rounded-lg bg-black/40 px-2.5 py-1.5 border border-white/5 text-slate-300">
                  <span className="text-amber-400 font-semibold">2</span>{" "}
                  Warnings
                </div>
                <div className="rounded-lg bg-black/40 px-2.5 py-1.5 border border-white/5 text-slate-300">
                  <span className="text-cyan-400 font-semibold">12</span> Checks
                  Passed
                </div>
              </div>
            </div>

            {/* 5-Pillar breakdown metrics */}
            <div className="space-y-3">
              {[
                {
                  label: "Architecture & Separation",
                  score: 96,
                  color: "from-cyan-400 to-sky-500",
                  note: "Clean module boundaries, zero circular imports",
                },
                {
                  label: "Security & Secret Sanitization",
                  score: 94,
                  color: "from-sky-400 to-blue-500",
                  note: "CSRF & bearer rotation verified, no leaked keys",
                },
                {
                  label: "Code Quality & Cyclomatic Risk",
                  score: 95,
                  color: "from-cyan-400 to-indigo-500",
                  note: "Low complexity in critical path (avg 3.2)",
                },
                {
                  label: "Performance & Bundle Size",
                  score: 91,
                  color: "from-blue-400 to-indigo-500",
                  note: "Dynamic imports on heavy chart dependencies",
                },
                {
                  label: "Test Coverage & Edge Validation",
                  score: 88,
                  color: "from-indigo-400 to-purple-500",
                  note: "94% coverage in core auth and billing routes",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group rounded-xl border border-white/5 bg-white/[0.02] p-2.5 transition-all hover:border-cyan-400/30 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-200">
                      {item.label}
                    </span>
                    <span className="font-mono font-semibold text-cyan-300">
                      {item.score}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.color} shadow-[0_0_8px_rgba(0,242,254,0.4)] transition-all duration-700`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                  <div className="mt-1 hidden text-[11px] text-slate-400 group-hover:block">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Live finding alert */}
            <div className="flex items-center justify-between rounded-xl border border-cyan-400/20 bg-cyan-950/20 px-3.5 py-2.5 text-xs text-cyan-200">
              <div className="flex items-center gap-2">
                <Sparkles className="size-3.5 text-cyan-400 shrink-0" />
                <span>
                  <strong>AST Recommendation:</strong> Add memoization to{" "}
                  <code className="rounded bg-black/40 px-1 py-0.5 text-cyan-300">
                    parseTokenPayload()
                  </code>{" "}
                  to shave ~14ms per request.
                </span>
              </div>
              <ChevronRight className="size-3.5 text-cyan-400 shrink-0" />
            </div>
          </div>
        )}

        {activeTab === "chat" && (
          <div className="space-y-4 animate-in fade-in duration-300">
            {/* User message */}
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Developer</span>
                <span className="text-[10px] text-slate-500">
                  Grounded Query
                </span>
              </div>
              <p className="mt-1.5 text-xs font-mono text-slate-100">
                Where is token renewal handled and how does the middleware guard
                expired sessions?
              </p>
            </div>

            {/* AI Response with groundings */}
            <div className="rounded-xl border border-cyan-500/25 bg-gradient-to-b from-cyan-950/20 to-slate-900/60 p-4 shadow-[0_0_20px_rgba(0,242,254,0.06)]">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="font-semibold text-cyan-300">
                    CodeLens Senior Engineer
                  </span>
                </div>
                <span className="rounded-full bg-cyan-400/10 px-2 py-0.5 text-[10px] font-medium text-cyan-300 border border-cyan-400/25">
                  100% Citing Real Code
                </span>
              </div>

              <p className="mt-2.5 text-xs leading-relaxed text-slate-200">
                Session verification begins in{" "}
                <code className="rounded bg-cyan-950/80 px-1.5 py-0.5 font-mono text-cyan-300 border border-cyan-500/30">
                  src/middleware.ts:24
                </code>
                . If the JWT timestamp is within 5 minutes of expiration, the
                request is delegated to:
              </p>

              {/* Code snippet citation box */}
              <div className="mt-3 rounded-lg border border-white/10 bg-[#05080f] p-3 font-mono text-[11px]">
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-white/10 pb-1.5 mb-2">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <FileCode className="size-3" />
                    src/lib/auth/session.ts (Lines 42–56)
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="size-2.5" /> AST Verified
                  </span>
                </div>
                <div className="space-y-1 text-slate-300">
                  <p>
                    <span className="text-purple-400">
                      export async function
                    </span>{" "}
                    <span className="text-cyan-300">renewSessionToken</span>
                    (req: NextRequest) &#123;
                  </p>
                  {/* <p className="text-slate-400 pl-4">
                    // Checks redis cache and rolls new refresh secret
                  </p> */}
                  <p className="pl-4">
                    <span className="text-purple-400">const</span> payload ={" "}
                    <span className="text-blue-400">await</span>{" "}
                    verifyPayload(req.cookies);
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">return</span>{" "}
                    issueBearerToken(payload.userId);
                  </p>
                  <p>&#125;</p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Verified Sources:</span>
                <span className="rounded bg-white/5 px-1.5 py-0.5 text-cyan-300">
                  src/middleware.ts:24-48
                </span>
                <span>·</span>
                <span className="rounded bg-white/5 px-1.5 py-0.5 text-cyan-300">
                  src/lib/auth/session.ts:42
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "ast" && (
          <div className="space-y-4 animate-in fade-in duration-300 font-mono text-xs">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center">
                <p className="text-[10px] text-slate-400">Parsed AST Nodes</p>
                <p className="mt-1 font-heading text-lg font-bold text-cyan-300">
                  14,820
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center">
                <p className="text-[10px] text-slate-400">Vector Embeddings</p>
                <p className="mt-1 font-heading text-lg font-bold text-sky-300">
                  148 chunks
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center">
                <p className="text-[10px] text-slate-400">Embedding Store</p>
                <p className="mt-1 font-heading text-lg font-bold text-indigo-300">
                  pgvector
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center">
                <p className="text-[10px] text-slate-400">Inference Latency</p>
                <p className="mt-1 font-heading text-lg font-bold text-emerald-400">
                  18ms / req
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/60 p-3.5 space-y-2 text-[11px] leading-relaxed">
              <div className="flex items-center gap-2 text-cyan-400">
                <Zap className="size-3" />
                <span>Tree-Sitter Syntax Slicing Pipeline:</span>
              </div>
              <p className="text-slate-300">
                → <span className="text-emerald-400">✓</span> Ingested{" "}
                <code className="text-cyan-300">
                  src/app/api/checkout/route.ts
                </code>{" "}
                (4 functions, 2 interfaces)
              </p>
              <p className="text-slate-300">
                → <span className="text-emerald-400">✓</span> Ingested{" "}
                <code className="text-cyan-300">src/lib/stripe.ts</code> (Stripe
                client singleton, webhook guard)
              </p>
              <p className="text-slate-300">
                → <span className="text-emerald-400">✓</span> Built AST symbol
                graph: 42 cross-module references linked
              </p>
              <p className="text-slate-400">
                → Vector search ready: Cosine distance indexed for
                zero-hallucination semantic search.
              </p>
            </div>
          </div>
        )}

        {/* Bottom status bar */}
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            <span>AST Semantic Tree Indexed</span>
          </div>
          <span className="text-cyan-400">Groq Llama-3.3 + pgvector</span>
        </div>
      </div>
    </div>
  );
}
