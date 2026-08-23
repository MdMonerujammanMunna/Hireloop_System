"use client";

import { Bookmark, Briefcase, MapPin, Star, TagDollar } from "@gravity-ui/icons";
import Image from "next/image";


export default function JobCard({ job }) {
    return (
        <article className="group flex items-start justify-between gap-4 rounded-xl border border-zinc-800 bg-[#1b1b1b] p-4 transition-all duration-300 hover:border-zinc-700 hover:bg-[#202020] sm:items-center sm:p-5">
            {/* Left */}

            <div className="flex min-w-0 items-start gap-4 sm:items-center">
                {/* Logo */}

                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md border border-zinc-700 bg-[#242424] sm:h-14 sm:w-14">
                    <Image
                        src={job?.profileImage || "/images/logo.png"}
                        alt={`${job?.company || "Company"} logo`}
                        width={56}
                        height={56}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Info */}

                <div>
                    <h3 className="truncate text-base font-medium text-zinc-100 sm:text-lg">{job.title}</h3>

                    <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-zinc-500 sm:text-sm">
                        <span>{job.company}</span>

                        <span>•</span>

                        <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {job.location || "Location not specified"}
                        </div>
                    </div>

                    {/* Badges */}

                    <div className="mt-4 flex flex-wrap gap-2">
                        <div className="flex items-center gap-1.5 rounded bg-zinc-700/40 px-2 py-1 text-[11px] text-zinc-300">
                            <TagDollar size={14} />
                            {
                                `${job.minSalary || "--"} - ${job.maxSalary || "--"} ${job.currency || "USD"}`
                            }
                        </div>

                        <div className="flex items-center gap-1.5 rounded bg-zinc-700/40 px-2 py-1 text-[11px] text-zinc-300">
                            <Briefcase size={14} />
                            {job.type}
                        </div>

                        {job.tag && (
                            <div
                                className={`rounded px-2 py-1 text-[11px] font-medium ${job.tagColor === "green"
                                    ? "bg-green-600/20 text-green-400"
                                    : "bg-yellow-500/20 text-yellow-400"
                                    }`}
                            >
                                {job.tagColor === "yellow" && (
                                    <Star size={14} className="mr-1 inline" />
                                )}
                                {job.tag}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bookmark */}

            <button aria-label={`Save ${job.title}`} className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-800 hover:text-white">
                <Bookmark size={22} />
            </button>
        </article>
    );
}