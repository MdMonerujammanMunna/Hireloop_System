"use client";

import { Checkbox } from "@heroui/react";

const jobTypes = [
    {
        id: 1,
        name: "Full-time",
        count: "1.2k",
        checked: true,
    },
    {
        id: 2,
        name: "Contract",
        count: "432",
        checked: false,
    },
    {
        id: 3,
        name: "Freelance",
        count: "156",
        checked: false,
    },
];

export default function FilterSidebar() {
    return (
        <div className="w-full rounded-2xl border border-zinc-800 bg-[#1A1A1A] p-4 sm:p-5 md:p-6">
            <h3 className="mb-6 text-lg font-semibold text-white">Job Type</h3>

            <div className=" grid grid-cols-3 md:grid-cols-none gap-10">
                {jobTypes.map((job) => (
                    <div
                        key={job.id}
                        className="flex items-center justify-between gap-4"
                    >
                        <div className="flex items-center gap-3 ">
                            <Checkbox>
                                <Checkbox.Content>
                                    <Checkbox.Control className="rounded-full bg-white p-3">
                                        <Checkbox.Indicator />
                                    </Checkbox.Control>
                                </Checkbox.Content>
                            </Checkbox>

                            <span className="text-sm text-zinc-300 sm:text-base text-nowrap">
                                {job.name}
                            </span>
                        </div>

                        <span className="text-sm text-zinc-500 ">{job.count}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}