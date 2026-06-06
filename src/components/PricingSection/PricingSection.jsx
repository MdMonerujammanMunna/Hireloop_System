"use client";

import { Button, Chip } from "@heroui/react";
import {
  CrownDiamond,
  ChartColumn,
  ThunderboltFill,
  Plus,
  ArrowRightFromLine,
  PaperPlane,
  Flame,
  Star
} from "@gravity-ui/icons";
import { useState } from "react";

const monthlyPlans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    icon: CrownDiamond,
    featured: false,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Growth",
    price: "$17",
    period: "/month",
    icon: ChartColumn,
    featured: true,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Premium",
    price: "$99",
    period: "/month",
    icon: ThunderboltFill,
    featured: false,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
];

const yearlyPlans = [

  {
    name: "Launch",
    price: "$79",
    period: "/year",
    icon: PaperPlane,
    featured: false,
    features: [
      "50 AI-powered job matches monthly",
      "Professional resume templates",
      "Salary benchmarking reports",
      "Unlimited one-click applications",
      "Personal career dashboard",
    ],
  },
  {
    name: "Rise",
    price: "$249",
    period: "/year",
    icon: Flame,
    featured: true,
    features: [
      "Everything in Launch",
      "Unlimited AI job matches",
      "Interview preparation toolkit",
      "Priority application boosting",
      "Advanced market insights",
      "Private networking community",
    ],
  },
  {
    name: "Peak",
    price: "$699",
    period: "/year",
    icon: Star,
    featured: false,
    features: [
      "Everything in Rise",
      "1-on-1 career strategy sessions",
      "Executive resume review",
      "Recruiter direct access",
      "Premium talent marketplace",
      "Early access to new AI tools",
    ],
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  const plans = billing === "monthly" ? monthlyPlans : yearlyPlans;
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-violet-500" />
            <span className="text-xl font-medium uppercase tracking-[0.3em] text-white">
              Pricing
            </span>
            <span className="h-2 w-2 rounded-full bg-violet-500" />
          </div>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Pay for the leverage,
            <br />
            not the listings
          </h2>
        </div>

        {/* Billing Toggle */}
        <div className="mb-16 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900 p-2 relative">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${billing === "monthly"
                ? "bg-white text-black"
                : "text-white hover:bg-white/10"
                }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300  ${billing === "yearly"
                ? "bg-white text-black"
                : "text-white hover:bg-white/10"
                }`}
            >
              Yearly
            </button>

            <Chip
              size="sm"
              className="bg-fuchsia-600 text-white absolute top-0 right-2.5 "
            >
              25% OFF
            </Chip>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-10 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`rounded-3xl border p-6 transition-all duration-300 hover:scale-105 ${plan.featured
                  ? "border-white/20 bg-linear-to-b from-zinc-900 to-zinc-950 shadow-[0_0_60px_rgba(255,255,255,0.08)]"
                  : "border-white/10 bg-black"
                  }`}
              >
                {/* Top */}
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xs border border-white/10 bg-black">
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <h3 className="text-3xl text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <div>
                    <span className="text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-white">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <p className="mb-6 text-lg font-medium text-white">
                  Start building your insights hub:
                </p>

                <ul className="mb-10 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-white"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10">
                        <Plus className="h-3 w-3" />
                      </div>

                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`h-12 w-full rounded-xl px-5 justify-between ${plan.featured
                    ? "bg-white text-black"
                    : "bg-zinc-800 text-white"
                    }`}
                >
                  Choose This Plan <ArrowRightFromLine />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}