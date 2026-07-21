"use client";

import { Magnifier, SealPercent } from "@gravity-ui/icons";
import { Input, Button } from "@heroui/react";

export default function SearchBar() {
    return (
        <div className=" rounded-xl border border-zinc-800 bg-[#1A1A1A] mx-10 mt-3 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between px-4 py-5 gap-10">
                <div className="flex items-center  gap-5 w-full">
                    <Magnifier className="font-bold text-white w-6 h-6 md:block hidden" />
                    <Input
                        placeholder="Search by job title, keywords..."
                        className={"w-full border border-white  rounded-md "}
                    />
                </div>

                <Button
                    className={" px-16 py-5 rounded-md bg-white text-[#2F3131] font-semibold"}
                >
                    Search Jobs
                </Button>
            </div>
        </div>
    );
}