"use client";

import {
    Magnifier,
    Bell,
} from "@gravity-ui/icons";
import { Avatar, Input } from "@heroui/react";

export default function RecruiterNavbar() {
    return (
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
    );
}