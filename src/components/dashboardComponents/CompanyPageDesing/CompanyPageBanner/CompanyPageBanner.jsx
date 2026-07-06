import { CheckDouble, CircleFill, CircleXmarkFill, Globe, Plus } from '@gravity-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CompanyDefaultBackground = "https://img.magnific.com/premium-photo/abstract-neon-lights-background-with-smoke-fog-grunge-texture_324689-575.jpg?semt=ais_hybrid&w=740&q=80"
const CompanyPageBanner = ({ company }) => {
    const getStatusClass = (status) => { switch (status) { case "active": return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"; case "pending": return "bg-amber-500/10 text-amber-400 border border-amber-500/20"; default: return "bg-red-500/10 text-red-400 border border-red-500/20"; } }
    return (
        <>
            <section
                className="relative overflow-hidden rounded-lg bg-[#0B0B12]"
            >
                {/* Background */}
                <div className="absolute inset-0">
                    <Image
                        src={company.ThumbnailImage || CompanyDefaultBackground}
                        alt="background"
                        fill
                        className="object-cover opacity-35"
                    />

                    {/* linear Overlay */}
                    <div className="absolute inset-0 bg-linear-to-b from-indigo-700/20 via-[#0B0B12]/40 to-[#0B0B12]" />

                    {/* Bottom Shadow */}
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative z-10 flex flex-col justify-between gap-8 px-8 pt-52 pb-5 lg:flex-row lg:items-end">

                    {/* Left */}
                    <div className="flex flex-col  lg:flex-row items-start lg:items-end gap-6">

                        {/* Logo */}
                        <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-yellow-500/20 bg-linear-to-br from-yellow-600 to-yellow-900 shadow-xl">
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVexxzbg3jvRGCioSPljjTfsjn7CWC45h3L40QZwXjQ&s=10"
                                alt="logo"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Info */}
                        <div>

                            <div className="flex flex-wrap items-center gap-3">

                                <h1 className="text-4xl font-bold text-white">
                                    {company.CompanyName}
                                </h1>

                                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(company.CompanyStatus)}`}>
                                    <div className="flex items-center justify-center gap-2">

                                        <span> {
                                            company.CompanyStatus === "active" ? <CheckDouble /> : company.CompanyStatus === "pending" ? <CircleFill /> : <CircleXmarkFill />
                                        }</span>
                                        {company.CompanyStatus}
                                    </div>
                                </span>

                            </div>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                                {company.Industry}
                            </p>

                        </div>

                    </div>

                    {/* Right Buttons */}
                    <div className="flex gap-4">

                        <button
                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
                        >
                            <Plus size={18} />
                            Follow
                        </button>

                        <Link href={company.Website} target="_blank"
                            className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 text-nowrap"
                        >
                            <Globe size={18} />
                            Visit Website
                        </Link>

                    </div>

                </div>
            </section>
        </>
    );
};

export default CompanyPageBanner;