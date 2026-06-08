import React from "react";
import { Card, Button, Avatar } from "@heroui/react";

export default function RightSideOverview() {
    const companies = [
        {
            name: "Google Inc.",
            category: "Technology",
            location: "Mountain View",
            activeJobs: 24,
            logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=80&auto=format&fit=crop&q=60",
        },
        {
            name: "Meta Platforms",
            category: "Social Media",
            location: "Menlo Park",
            activeJobs: 18,
            logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&auto=format&fit=crop&q=60",
        },
        {
            name: "Stripe",
            category: "Fintech",
            location: "San Francisco",
            activeJobs: 12,
            isSvg: true,
            icon: (
                <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-10.5v10.5" />
                </svg>
            ),
        },
        {
            name: "Tesla",
            category: "Automotive",
            location: "Austin",
            activeJobs: 31,
            isSvg: true,
            icon: (
                <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            ),
        },
    ];

    return (
        <>
            <Card className="w-full bg-[#18181b] border border-zinc-800/50 rounded-2xl shadow-xl p-2">

                {/* Card Header (Card.Header) */}
                <Card.Header className="flex items-center justify-between px-3 pt-3 pb-1 bg-transparent">
                    <h2 className="text-xl font-semibold tracking-wide text-white">My Top Companies</h2>
                    <button className="text-xs text-zinc-400 hover:text-white transition-colors">
                        View all
                    </button>
                </Card.Header>

                {/* Card Body (Card.Body) */}
                <Card.Content className="flex flex-col gap-5 py-4">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between group cursor-pointer px-1"
                        >
                            {/* Left Side: Logo/Icon & Metadata */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-zinc-800/60 border border-zinc-700/40 flex items-center justify-center overflow-hidden transition-colors group-hover:border-zinc-500">
                                    {company.isSvg ? (
                                        company.icon
                                    ) : (
                                        <Avatar
                                            src={company.logo}
                                            className="w-full h-full rounded-xl object-cover scale-95"
                                            alt={company.name}
                                        />
                                    )}
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-zinc-100 group-hover:text-white transition-colors">
                                        {company.name}
                                    </span>
                                    <span className="text-xs text-zinc-400 mt-0.5">
                                        {company.category} • {company.location}
                                    </span>
                                </div>
                            </div>

                            {/* Right Side: Jobs Counter */}
                            <div className="text-right">
                                <div className="text-base font-semibold text-zinc-100">
                                    {company.activeJobs}
                                </div>
                                <div className="text-[10px] tracking-wider text-zinc-500 font-bold uppercase mt-0.5">
                                    Active Jobs
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* View All Button inside the Card Body */}
                    <Button
                        variant="bordered"
                        className="w-full mt-2 py-6 border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white rounded-xl bg-transparent transition-all font-medium text-sm"
                    >
                        View All Companies
                    </Button>
                </Card.Content>

            </Card>
        </>
    );
}