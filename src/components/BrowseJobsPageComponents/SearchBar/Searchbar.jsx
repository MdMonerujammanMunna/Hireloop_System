"use client";

import { Magnifier } from "@gravity-ui/icons";

export default function SearchBar({ query, onQueryChange }) {
    return (
        <div className="mx-auto my-5 max-w-6xl rounded-xl border border-zinc-800/80 bg-[#1a1a1a] p-3">
            <div className="flex items-center gap-3">
                <Magnifier className="ml-2 h-5 w-5 text-zinc-500" />
                <input
                    value={query}
                    onChange={(event) => onQueryChange(event.target.value)}
                    placeholder="Search by job title, keywords..."
                    className="h-10 w-full bg-transparent px-2 text-sm text-white outline-none placeholder:text-zinc-600"
                    aria-label="Search jobs"
                />
                <button
                    type="button"
                    className="hidden h-10 shrink-0 rounded-md bg-white px-6 text-xs font-medium text-zinc-900 transition hover:bg-zinc-200 sm:block"
                >
                    Search Jobs
                </button>
            </div>
        </div>
    );
}