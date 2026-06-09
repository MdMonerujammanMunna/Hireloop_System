"use client";

import { useState } from "react";

export default function NewJobPage() {
    const [form, setForm] = useState({
        title: "",
        category: "",
        type: "Full-time",
        minSalary: "",
        maxSalary: "",
        currency: "USD",
        location: "",
        isRemote: false,
        deadline: "",
        responsibilities: "",
        requirements: "",
        benefits: "",
        company: "Your Company Name",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...form,
            status: "active",
            createdAt: new Date(),
        };
        console.log("Submitting Job:", payload);
        alert("Job posted successfully!");
    };

    return (
        <div className="flex items-center justify-center p-4 antialiased text-white font-sans">
            {/* Modal Card Container */}
            <div className="w-full max-w-[580px] bg-[#121214] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">

                {/* Header Section */}
                <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-zinc-800">
                    <div>
                        <h1 className="text-[22px] font-semibold text-zinc-100 tracking-tight">
                            Post a New Job
                        </h1>
                        <p className="text-sm text-zinc-400 mt-1">
                            Enter your job details to find your next great hire.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="text-zinc-400 hover:text-zinc-200 transition p-1"
                        onClick={() => alert("Close modal")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">

                    {/* Row 1: Job Title & Category */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-300">Job Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="e.g. Software Engineer"
                                className="w-full h-11 px-3.5 rounded-lg bg-[#1a1a1e] border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition text-sm"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-300">Job Category</label>
                            <input
                                type="text"
                                name="category"
                                placeholder="e.g. Technology"
                                className="w-full h-11 px-3.5 rounded-lg bg-[#1a1a1e] border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition text-sm"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Row 2: Job Type & Application Deadline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-300">Job Type</label>
                            <div className="relative">
                                <select
                                    name="type"
                                    value={form.type}
                                    className="w-full h-11 pl-3.5 pr-10 rounded-lg bg-[#1a1a1e] border border-zinc-800 text-zinc-200 appearance-none focus:outline-none focus:border-zinc-700 transition text-sm"
                                    onChange={handleChange}
                                >
                                    <option>Full-time</option>
                                    <option>Part-time</option>
                                    <option>Remote</option>
                                    <option>Contract</option>
                                    <option>Internship</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-300">Application Deadline</label>
                            <input
                                type="date"
                                name="deadline"
                                className="w-full h-11 px-3.5 rounded-lg bg-[#1a1a1e] border border-zinc-800 text-zinc-200 focus:outline-none focus:border-zinc-700 transition text-sm [color-scheme:dark]"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Row 3: Salary Range & Currency */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Salary Range</label>
                        <div className="grid grid-cols-3 gap-3">
                            <input
                                type="number"
                                name="minSalary"
                                placeholder="Min"
                                className="w-full h-11 px-3.5 rounded-lg bg-[#1a1a1e] border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition text-sm"
                                onChange={handleChange}
                            />
                            <input
                                type="number"
                                name="maxSalary"
                                placeholder="Max"
                                className="w-full h-11 px-3.5 rounded-lg bg-[#1a1a1e] border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition text-sm"
                                onChange={handleChange}
                            />
                            <div className="relative">
                                <select
                                    name="currency"
                                    value={form.currency}
                                    className="w-full h-11 pl-3.5 pr-10 rounded-lg bg-[#1a1a1e] border border-zinc-800 text-zinc-200 appearance-none focus:outline-none focus:border-zinc-700 transition text-sm"
                                    onChange={handleChange}
                                >
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>BDT</option>
                                    <option>INR</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 4: Location Input + Toggle Integration */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-zinc-300">Location</label>

                            {/* Premium Interactive Toggle Switch */}
                            <label className="flex items-center gap-2.5 cursor-pointer select-none">
                                <span className="text-xs text-zinc-400 font-medium">Remote Job</span>
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        name="isRemote"
                                        checked={form.isRemote}
                                        onChange={handleChange}
                                        className="sr-only peer"
                                    />
                                    {/* Toggle Track */}
                                    <div className="w-9 h-5 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 peer-checked:after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-700 border border-zinc-700"></div>
                                </div>
                            </label>
                        </div>

                        <div className="relative flex items-center">
                            <div className={`absolute left-3.5 pointer-events-none transition-colors ${form.isRemote ? 'text-zinc-700' : 'text-zinc-500'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <input
                                type="text"
                                name="location"
                                disabled={form.isRemote}
                                value={form.isRemote ? "" : form.location}
                                placeholder={form.isRemote ? "Everywhere (Remote)" : "City, Country"}
                                className="w-full h-11 pl-10 pr-3.5 rounded-lg bg-[#1a1a1e] border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition text-sm disabled:opacity-30 disabled:cursor-not-allowed disabled:border-zinc-900"
                                onChange={handleChange}
                                required={!form.isRemote}
                            />
                        </div>
                    </div>

                    {/* Row 5: Textareas Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-300">Responsibilities</label>
                            <textarea
                                name="responsibilities"
                                placeholder="What will they do..."
                                rows={3}
                                className="w-full p-3.5 rounded-lg bg-[#1a1a1e] border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition resize-none text-sm leading-relaxed"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-300">Requirements</label>
                            <textarea
                                name="requirements"
                                placeholder="Skills, experience..."
                                rows={3}
                                className="w-full p-3.5 rounded-lg bg-[#1a1a1e] border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition resize-none text-sm leading-relaxed"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Row 6: Benefits */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Benefits <span className="text-xs text-zinc-500">(Optional)</span></label>
                        <textarea
                            name="benefits"
                            placeholder="Perks, healthcare, equity..."
                            rows={2}
                            className="w-full p-3.5 rounded-lg bg-[#1a1a1e] border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition resize-none text-sm leading-relaxed"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Footer Footer Info & Action Buttons */}
                    <div className="pt-4 border-t border-zinc-800/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <p className="text-[11px] text-zinc-500 max-w-xs leading-normal">
                            Posting as <span className="text-zinc-300 font-medium">{form.company}</span>. Linked directly to active quota plan.
                        </p>
                        <div className="flex items-center justify-end gap-3 shrink-0 w-full sm:w-auto">
                            <button
                                type="button"
                                className="flex-1 sm:flex-none px-5 h-11 text-sm font-medium rounded-lg text-zinc-300 hover:bg-zinc-900 border border-zinc-800 transition"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 sm:flex-none px-5 h-11 text-sm font-semibold rounded-lg bg-white text-black hover:bg-zinc-200 transition"
                            >
                                Publish Job
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}