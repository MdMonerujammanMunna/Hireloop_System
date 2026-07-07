"use client";

import { ArrowUpRight, TriangleExclamation } from "@gravity-ui/icons";
import { Button } from "@heroui/react";

export default function JobLimitCard() {
    return (
        <div className="flex items-center justify-center">
            <div className="w-full  max-w-md rounded-2xl bg-[#1F1F1F]  p-6 shadow-xl">
                {/* Title */}
                <h2 className=" text-2xl font-bold text-white">
                    Free Limit Reached
                </h2>

                <p className="mt-2 text-sm text-zinc-400">
                    You have reached the free limit of 3 job postings. Upgrade your plan to
                    unlock unlimited job postings and premium features.
                </p>

                {/* Warning */}
                <div className="mt-5 flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3">
                    <TriangleExclamation
                        width={18}
                        height={18}
                        className="text-red-400"
                    />
                    <span className="text-sm text-red-300">
                        3 / 3 Free Jobs Used
                    </span>
                </div>

                {/* Progress */}
                <div className="mt-5">
                    <div className="flex justify-between text-xs text-zinc-400 mb-2">
                        <span>Usage</span>
                        <span>100%</span>
                    </div>

                    <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                        <div className="h-full w-full rounded-full bg-red-400"></div>
                    </div>
                </div>

                {/* Benefits */}
                <div className="mt-6 space-y-2 text-sm text-zinc-300">
                    <div>✅ Unlimited Job Posts</div>
                    <div>✅ Priority Approval</div>
                    <div>✅ Featured Listings</div>
                    <div>✅ Premium Recruiter Dashboard</div>
                </div>

                {/* CTA */}
                <Button
                    variant="outline"
                    radius="lg"
                    size="lg"
                    className="mt-7 w-full font-semibold bg-none border-2 border-emerald-700 hover:bg-emerald-600"
                >
                    Upgrade Plan <ArrowUpRight width={18} height={18} />
                </Button>
            </div></div>

    );
}