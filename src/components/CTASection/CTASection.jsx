import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black min-h-120 flex items-center justify-center px-6 py-50">

      {/* ── cta-bg.png ── */}
      {/* parent must be relative + have explicit size for next/image fill to work */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Purple glow on top of image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(75,62,232,0.6) 0%, rgba(10,6,40,0.3) 55%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          Your next role is
          <br />
          already looking for you
        </h2>

        <p className="mb-9 text-base text-white/50">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Primary button */}
          <Link href="/SignUpForm"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black
                       transition-opacity hover:opacity-85 active:scale-95 cursor-pointer"
          >
            Create a free account
          </Link>

          {/* Secondary button */}
          <button
            className="rounded-lg border border-white/25 bg-transparent px-6 py-3
                       text-sm font-medium text-white transition-colors
                       hover:border-white/50 active:scale-95 cursor-pointer"
          >
            View pricing
          </button>
        </div>
      </div>
    </section>
  );
}