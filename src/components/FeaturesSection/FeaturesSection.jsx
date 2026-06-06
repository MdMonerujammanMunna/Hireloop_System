"use client";

import {
  MagnifierPlus,
  ChartLineArrowUp,
  SquareChartColumn,
  // ChartBarStacked,
  BookmarkFill,
  SparklesFill,
  File,
  DiamondFill,
  LocationArrowFill,
} from "@gravity-ui/icons";

const features = [
  {
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: MagnifierPlus,
  },
  {
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: ChartLineArrowUp,
  },
  {
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: SquareChartColumn,
  },
  {
    title: "Saved Jobs",
    description: "Manage applications & favourites in one place.",
    icon: BookmarkFill,
  },
  {
    title: "One-Click Apply",
    description: "Simplify your applications for a faster process.",
    icon: SparklesFill,
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: File,
  },
  {
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: DiamondFill,
  },
  {
    title: "Career Growth Resources",
    description: "Boost your career with interview preparation tips.",
    icon: LocationArrowFill,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#151516] py-24">
      <div className="container mx-auto px-10">
        {/* Heading */}
        <div className="mb-16 flex justify-center">
          <div className="px-8 py-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-violet-500"></span>
              <p className=" text-xl font-medium uppercase tracking-[0.25em] text-neutral-400">
                Features Job
              </p>
              <span className="h-2 w-2 rounded-full bg-violet-500"></span>
            </div>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Everything you need
              <br />
              to succeed
            </h2>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 border border-dashed md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex gap-4 border border-dashed  p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-linear-to-b from-[#010102] to-[#31313190] hover:scale-110 transition-transform duration-300">
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}