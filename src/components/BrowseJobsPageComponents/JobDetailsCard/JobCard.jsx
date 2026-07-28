"use client";

import { Bookmark, Briefcase, Bucket, MapPin, Star, TagDollar } from "@gravity-ui/icons";
import Image from "next/image";


export default function JobCard({ job }) {
    return (
        <div className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-[#181818] p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-[#1d1d1d]">
            {/* Left */}

            <div className="flex gap-5 items-center">
                {/* Logo */}

                <div className="h-16 w-16 overflow-hidden rounded-full bg-[#242424] border-3">
                    <Image
                        src={job.profileImage}
                        alt={job.companyName}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Info */}

                <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>

                    <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
                        <span>{job.company}</span>

                        <span>•</span>

                        <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {job.location}
                        </div>
                    </div>

                    {/* Badges */}

                    <div className="mt-5 flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 rounded-md bg-zinc-700/40 px-3 py-1 text-sm text-zinc-300">
                            <TagDollar size={14} />
                            {
                                `${job.minSalary} - ${job.maxSalary} ${job.currency}`
                            }
                        </div>

                        <div className="flex items-center gap-2 rounded-md bg-zinc-700/40 px-3 py-1 text-sm text-zinc-300">
                            <Briefcase size={14} />
                            {job.type}
                        </div>

                        {job.tag && (
                            <div
                                className={`rounded-md px-3 py-1 text-sm font-medium ${job.tagColor === "green"
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

            <button className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-800 hover:text-white">
                <Bookmark size={22} />
            </button>
        </div>
    );
}