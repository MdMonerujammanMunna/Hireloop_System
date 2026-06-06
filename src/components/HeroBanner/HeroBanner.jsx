
import { Magnifier, LocationArrow, Briefcase } from "@gravity-ui/icons";

const trending = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

export default function HeroSection() {
    return (
        <section className="relative min-h-62.5 flex flex-col items-center justify-center overflow-hidden py-20">
            {/* ── Pill badge ── */}
            <div className="relative z-10 mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-linear-to-b from-[#010102] to-[#31313190] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70">
                <div className="">
                    <span className="text-base">🏆</span>
                    <span>
                        <span className="text-white font-bold">50,000+</span> New Jobs This Month
                    </span>
                </div>
            </div>

            {/* ── Headline ── */}
            <h1 className="relative z-10 mb-4 text-center text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
                Find Your Dream Job Today
            </h1>

            {/* ── Subtext ── */}
            <p className="relative z-10 mb-10 max-w-md text-center text-sm text-white/45 leading-relaxed">
                HireLoop connects top talent with world-class companies. Browse thousands of
                curated opportunities and land your next role — faster.
            </p>

            {/* ── Search bar ── */}
            <div className="relative z-10 w-full max-w-xl mb-5">
                <div className="flex items-center rounded-xl bg-[#1a1a1e] border border-white/10 overflow-hidden shadow-lg">
                    {/* Job input */}
                    <div className="flex items-center gap-2 flex-1 px-4 py-3.5">
                        <Magnifier width={16} height={16} className="text-white/30 shrink-0" />
                        <input
                            type="text"
                            placeholder="Job title, skill or company"
                            className="w-full bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
                        />
                    </div>

                    {/* Divider */}
                    <div className="h-6 w-px bg-white/10 shrink-0" />

                    {/* Location input */}
                    <div className="flex items-center gap-2 flex-1 px-4 py-3.5">
                        <LocationArrow width={16} height={16} className="text-white/30 shrink-0" />
                        <input
                            type="text"
                            placeholder="Location or Remote"
                            className="w-full bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
                        />
                    </div>

                    {/* Search button */}
                    <button className="m-1.5 flex items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all p-3 shrink-0">
                        <Magnifier width={18} height={18} className="text-white" />
                    </button>
                </div>
            </div>

            {/* ── Trending tags ── */}
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs text-white/35 mr-1">Trending Position</span>
                {trending.map((tag) => (
                    <button
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60
                                          hover:border-indigo-500/50 hover:text-white transition-colors"
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* ── Decorative blue dots ── */}
            <div className="pointer-events-none absolute bottom-10 right-16 z-0 flex gap-1.5 opacity-40">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-1 w-1 rounded-full bg-indigo-400" />
                ))}
            </div>
            <div className="pointer-events-none absolute bottom-16 right-10 z-0 flex gap-1.5 opacity-20">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-1 w-1 rounded-full bg-indigo-400" />
                ))}
            </div>
        </section>
    );
}