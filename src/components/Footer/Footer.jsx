"use client";

import { Link } from "@heroui/react";
import {
    LogoFacebook,
    LogoLinkedin,
    LogoTelegram,
} from "@gravity-ui/icons";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black">
            <div className="mx-auto container px-6 py-20">
                <div className="flex md:flex-row flex-col justify-between gap-5">
                    {/* Brand */}
                    <div className="flex-1 flex flex-col items-center md:items-start md:text-left text-center">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="no-underline"
                        >
                            <Image src="/logo 1.png" alt="Hireloop Logo" width={200} height={200} />
                        </Link>

                        <p className=" leading-8 text-zinc-500">
                            The AI-native career platform. Built for people who
                            take their work seriously.
                        </p>
                    </div>

                    {/* All link  */}
                    <div className="flex-1 flex flex-col md:flex-row justify-center items-center md:items-start gap-5 md:gap-10 lg:gap-15 mb-10">
                        {/* Product */}
                        <div>
                            <h3 className="mb-3 text-lg font-medium text-indigo-500">
                                Product
                            </h3>

                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-zinc-500 transition hover:text-[#5C53FE] no-underline"
                                    >
                                        Job discovery
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="#"
                                        className="text-zinc-500 transition hover:text-[#5C53FE] no-underline"
                                    >
                                        Worker AI
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="#"
                                        className="text-zinc-500 transition hover:text-[#5C53FE] no-underline"
                                    >
                                        Companies
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="#"
                                        className="text-zinc-500 transition hover:text-[#5C53FE] no-underline"
                                    >
                                        Salary data
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h3 className="mb-3 text-lg font-medium text-indigo-500">
                                Navigations
                            </h3>

                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-zinc-500 transition hover:text-[#5C53FE] no-underline"
                                    >
                                        Help center
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="#"
                                        className="text-zinc-500 transition hover:text-[#5C53FE] no-underline"
                                    >
                                        Career library
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="#"
                                        className="text-zinc-500 transition hover:text-[#5C53FE] no-underline"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="mb-3 text-lg font-medium text-indigo-500">
                                Resources
                            </h3>

                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-zinc-500 transition hover:text-[#5C53FE] no-underline"
                                    >
                                        Brand Guideline
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="#"
                                        className="text-zinc-500 transition hover:text-[#5C53FE] no-underline"
                                    >
                                        Newsroom
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className=" flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 text-sm text-zinc-600 md:flex-row">
                    <div className=" flex items-center gap-3 justify-center">
                        <Link
                            href="#"
                            className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-zinc-400 transition hover:bg-zinc-800"
                        >
                            <LogoFacebook className="h-5 w-5" />
                        </Link>

                        <Link
                            href="#"
                            className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-500"
                        >
                            <LogoTelegram className="h-5 w-5" />
                        </Link>

                        <Link
                            href="#"
                            className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-zinc-400 transition hover:bg-zinc-800"
                        >
                            <LogoLinkedin className="h-5 w-5 " />
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-1 lg:gap-6 ">
                        <p>Copyright 2026 — Programming Hero</p>
                        <Link
                            href="#"
                            className="text-zinc-600 transition hover:text-[#5C53FE] no-underline"
                        >
                            Terms & Policy - Privacy Guideline
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}