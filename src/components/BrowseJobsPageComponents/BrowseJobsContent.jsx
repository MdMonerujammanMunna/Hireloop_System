"use client";

import { useMemo, useState } from "react";
import FilterSidebar from "./FiltersideBar/Filtersection";
import JobsHeader from "./HeaderJobPage/JobsHeader";
import JobCard from "./JobDetailsCard/JobCard";
import SearchBarForBrowseJobs from "./SearchBar/Searchbar";

export default function BrowseJobsContent({ jobs = [] }) {
    const [query, setQuery] = useState("");
    const [selectedTypes, setSelectedTypes] = useState([]);

    const filteredJobs = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        return jobs.filter((job) => {
            const searchableText = `${job.title || ""} ${job.company || ""} ${job.location || ""} ${job.category || ""}`.toLowerCase();
            const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);
            const matchesType = selectedTypes.length === 0 || selectedTypes.includes(job.type);
            return matchesQuery && matchesType;
        });
    }, [jobs, query, selectedTypes]);

    const toggleType = (type) => {
        setSelectedTypes((current) => current.includes(type)
            ? current.filter((item) => item !== type)
            : [...current, type]);
    };

    return (
        <div className="min-h-screen bg-[#111111] px-4 pb-12 text-white sm:px-6 lg:px-8">
            <SearchBarForBrowseJobs query={query} onQueryChange={setQuery} />
            <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-[220px_1fr]">
                <FilterSidebar selectedTypes={selectedTypes} onToggleType={toggleType} />
                <main>
                    <div className="rounded-xl border border-zinc-800/80 bg-[#141414] p-4 sm:p-6">
                        <JobsHeader Length={filteredJobs.length} />
                        <div className="space-y-3">
                            {filteredJobs.length > 0 ? filteredJobs.map((job, index) => (
                                <JobCard key={job._id || index} job={job} />
                            )) : (
                                <p className="py-16 text-center text-sm text-zinc-500">No jobs match your search.</p>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}