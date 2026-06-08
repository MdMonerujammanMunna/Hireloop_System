"use client";

import { useState } from "react";
import { Button, Link } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { data: session, isLoading } = authClient.useSession()
    const user = session?.user

    const navItems = [
        { label: "Browse Jobs", href: "#" },
        { label: "Company", href: "#" },
        { label: "Pricing", href: "/Dashboard/Recruiter" },
    ];
    const LogoutClick = async () => {
        await authClient.signOut();
    }

    return (
        <nav className="w-full px-4 pt-4">
            <div className="mx-auto max-w-6xl">
                <header className="flex h-18 items-center justify-between rounded-2xl border border-white/10 bg-[#222222]/80 px-10 backdrop-blur-xl">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="no-underline"
                    >
                        <Image src="/logo 1.png" alt="Hireloop Logo" width={120} height={120} />
                    </Link>

                    {/* Desktop Actions */}
                    <div className="hidden items-center md:flex">
                        {/* Desktop Menu */}
                        <ul className="hidden items-center md:gap-5 lg:gap-10 md:flex">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        color="foreground"
                                        className="text-sm text-zinc-300 transition-colors hover:text-[#5C53FE] no-underline"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <hr className="h-6 border-[#A8A8A840] md:mx-3 lg:mx-6 border" />
                        </ul>
                        {user ?
                            <>
                                <div className="flex items-center md:gap-5 lg:gap-10 md:ml-3 lg:ml-6">
                                    <span className="text-sm text-zinc-300 ">
                                        Hello, {user.name.split(" ")[0]}
                                    </span>
                                    <Button variant="ghost" className="text-[18px] font-semibold text-[#5C53FE] no-underline" onClick={LogoutClick}>
                                        Sign out
                                    </Button>
                                </div>
                            </>
                            :
                            <>
                                <div className="flex items-center md:gap-5 lg:gap-10 md:ml-3 lg:ml-6">
                                    <Link
                                        href="/LogIn"
                                        className="text-[18px] font-semibold text-[#5C53FE] no-underline"
                                    >
                                        Sign In
                                    </Link>

                                    <Link href="/SignUpForm" className="no-underline">
                                        <Button className="bg-[#5C53FE] pt-4 pb-4 pl-6 pr-6 text-white rounded-lg text-[18px] font-medium">
                                            Get Started
                                        </Button>
                                    </Link>
                                </div>
                            </>}

                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <Xmark size={24} className="cursor-pointer" />
                        ) : (
                            <Bars size={24} className="text-[#5C53FE] cursor-pointer" />
                        )}
                    </button>
                </header>

                {/* Mobile Menu */}
                {
                    isMenuOpen && (
                        <div className="mt-2 rounded-2xl border border-white/10 bg-[#111111]/95 p-5 backdrop-blur-xl md:hidden">
                            <ul className="space-y-4">
                                {navItems.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="block text-zinc-300 hover:text-[#5C53FE] no-underline"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            {user ?
                                <>
                                    <Button
                                        onClick={LogoutClick}
                                        fullWidth
                                        className="bg-[#5C53FE] text-white w-full mt-4 "
                                    >
                                        Sign out
                                    </Button>
                                </>
                                :
                                <>
                                    <div className="mt-4 flex flex-col gap-3">
                                        <Link href="/LogIn" className=" no-underline hover:text-[#5C53FE]">
                                            Sign In
                                        </Link>

                                        <Link href="/SignUpForm" className="no-underline w-full">
                                            <Button
                                                fullWidth
                                                className="bg-[#5C53FE] text-white"
                                            >
                                                Get Started
                                            </Button>
                                        </Link>
                                    </div>
                                </>}

                        </div>
                    )
                }
            </div >
        </nav >
    );
}