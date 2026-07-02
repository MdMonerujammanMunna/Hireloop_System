"use client";

import {
    Magnifier,
    Bell,
    Envelope,
} from "@gravity-ui/icons";
import { Avatar, Badge, Input } from "@heroui/react";
import { usePathname } from "next/navigation";

export default function RecruiterNavbar() {
    const pathName = usePathname();
    console.log(pathName, "pathName");
    return (
        <>

            {
                pathName === "/Dashboard/Recruiter/company" ?
                    <header className="h-14 border-b border-white/5 bg-[#141414]">
                        <div className="mx-auto flex h-full items-center justify-between px-8">

                            {/* Logo */}
                            <h1 className="text-2xl font-semibold text-white tracking-tight">
                                My Company
                            </h1>

                            {/* Right Side */}
                            <div className="flex items-center gap-5">

                                <div className="relative ">
                                    <Magnifier
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                                        width={18}
                                        height={18}
                                    />

                                    <Input
                                        placeholder="Search applications, jobs, or talent..."
                                        className={"w-full pl-12 rounded-full "}
                                    />
                                </div>
                                {/* Notification */}
                                <button
                                    className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/5"
                                >
                                    <Bell className="h-5 w-5 text-zinc-300" />
                                </button>

                            </div>
                        </div>
                    </header>
                    :
                    <header className="w-full mt-3 py-1 bg-[#171717] border border-zinc-800 flex items-center px-6 rounded-full">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative ">
                                <Magnifier
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                                    width={18}
                                    height={18}
                                />

                                <Input
                                    placeholder="Search applications, jobs, or talent..."
                                    className={"w-full pl-12 rounded-l-full "}
                                />
                            </div>
                        </div>
                        <hr className="h-6 border-white/20 border ml-5" />
                        {/* Right Side */}
                        <div className="flex items-center gap-6 ml-8">
                            {/* Notification */}
                            <button className="relative text-zinc-400 hover:text-white transition">
                                <Bell width={20} height={20} />
                                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500" />
                            </button>

                            <hr className="h-6 border-white/20 border" />
                            {/* User */}
                            <div className="flex items-center gap-3">
                                <div className="text-right">
                                    <p className="text-sm font-medium text-white">
                                        Alex Sterling
                                    </p>

                                    <p className="text-xs text-zinc-500">
                                        TechFlow Inc.
                                    </p>
                                </div>

                                <Avatar
                                    src="https://i.pravatar.cc/150?img=8"
                                    size="sm"
                                    className="ring-2 ring-zinc-700"
                                />
                            </div>
                        </div>
                    </header>
            }


            {/* 
            <header className="h-14 border-b border-white/5 bg-[#141414] px-6">
                <div className="flex h-full items-center justify-between">

                    <div className="relative ">
                        <Magnifier
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                            width={18}
                            height={18}
                        />

                        <Input
                            placeholder="Search applications, jobs, or talent..."
                            className={"w-full pl-12 rounded-full "}
                        />
                    </div>

                 
                    <div className="flex items-center">


                        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-white/5 hover:text-white">
                            <Bell className="h-4 w-4" />
                        </button>


                        <button className="ml-2 flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-white/5 hover:text-white">
                            <Envelope className="h-4 w-4" />
                        </button>


                        <hr className="h-6 mx-5 border-white/20 border" />

                        <Avatar>
                            <Avatar.Image
                                src="https://i.pravatar.cc/150?img=8"
                                alt="User Avatar"
                            />
                        </Avatar>
                    </div>

                </div>
            </header>
             */}
        </>

    );
}