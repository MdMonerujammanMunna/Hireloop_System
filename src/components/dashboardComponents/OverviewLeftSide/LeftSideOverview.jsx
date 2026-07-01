"use client";

import React from "react";
import { Circle } from "@gravity-ui/icons";
import { Avatar } from "@heroui/react";

const applications = [
    {
        name: "Julianne Moore",
        role: "Senior Product Designer",
        date: "Oct 24, 2023",
        experience: "6 years",
        status: "Interviewing",
    },
    {
        name: "Robert Downey",
        role: "Backend Engineer",
        date: "Oct 23, 2023",
        experience: "4 years",
        status: "New",
    },
    {
        name: "Emma Stone",
        role: "Marketing Lead",
        date: "Oct 22, 2023",
        experience: "8 years",
        status: "Reviewing",
    },
    {
        name: "Chris Pratt",
        role: "Product Manager",
        date: "Oct 21, 2023",
        experience: "5 years",
        status: "Rejected",
    },
];

const statusStyles = {
    Interviewing:
        "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
    New: "bg-zinc-700/50 text-zinc-200 border border-zinc-600",
    Reviewing:
        "bg-amber-500/15 text-amber-400 border border-amber-500/20",
    Rejected: "bg-red-500/15 text-red-400 border border-red-500/20",
};


const LeftSideOverview = () => {
    return (
        <>
            <div className="">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-semibold text-white">
                        Recent Applications
                    </h2>

                    <button className="text-xs text-zinc-400 hover:text-white transition">
                        View all
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto w-75 md:w-full rounded-2xl border border-white/10 bg-[#121214] ">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500">
                                    Candidate Name
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500">
                                    Role
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500">
                                    Date Applied
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500">
                                    Experience
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500">
                                    Status
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {applications.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-white/5 hover:bg-white/2 transition"
                                >
                                    <td className="px-3 py-2">
                                        <div className="flex items-center gap-2">
                                            <Avatar>
                                                <Avatar.Image
                                                    src="https://i.pravatar.cc/150?img=8"
                                                    alt="John Doe"
                                                />
                                            </Avatar>
                                            <span className="font-medium text-sm text-white whitespace-nowrap">
                                                {item.name}
                                            </span>
                                        </div>
                                    </td>

                                    <td className="px-3 py-4 text-xs font-medium text-zinc-400 whitespace-nowrap">
                                        {item.role}
                                    </td>

                                    <td className="px-3 py-4 text-xs text-zinc-400 whitespace-nowrap">
                                        {item.date}
                                    </td>

                                    <td className="px-3 py-4 text-xs text-zinc-400 whitespace-nowrap">
                                        {item.experience}
                                    </td>

                                    <td className="px-3 py-4">
                                        <span
                                            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${statusStyles[item.status]}`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default LeftSideOverview;