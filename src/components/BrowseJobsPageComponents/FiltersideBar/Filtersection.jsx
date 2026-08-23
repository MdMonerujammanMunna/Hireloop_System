"use client";

const jobTypes = [
    {
        id: 1,
        name: "Full-time",
        checked: true,
    },
    {
        id: 2,
        name: "Contract",
        checked: false,
    },
    {
        id: 3,
        name: "Freelance",
        checked: false,
    },
];

export default function FilterSidebar({ selectedTypes, onToggleType }) {
    return (
        <aside className="h-fit rounded-xl border border-zinc-800/80 bg-[#1a1a1a] p-4 sm:p-5">
            <h2 className="mb-6 text-sm font-semibold text-white">Filters</h2>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wide text-zinc-500">Job Type</h3>
            <div className="space-y-4">
                {jobTypes.map((job) => (
                    <label
                        key={job.id}
                        className="flex cursor-pointer items-center justify-between gap-3 text-sm"
                    >
                        <span className="flex items-center gap-3 text-zinc-300">
                            <input
                                type="checkbox"
                                checked={selectedTypes.includes(job.name)}
                                onChange={() => onToggleType(job.name)}
                                className="h-4 w-4 accent-[#5c53fe]"
                            />
                            {job.name}
                        </span>
                    </label>
                ))}
            </div>
        </aside>
    );
}