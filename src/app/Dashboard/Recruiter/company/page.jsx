
"use client";

import { Button } from "@heroui/react";
import { HouseFill } from "@gravity-ui/icons";

const CompanyPage = () => {
    return (
        <>
            <section className="min-h-screen bg-[#111111] flex items-center justify-center px-6">
                <div className="text-center max-w-lg">

                    {/* Illustration */}
                    <div className="relative mx-auto w-52 h-52 flex items-center justify-center">

                        {/* Glow */}
                        <div className="absolute w-56 h-56 rounded-full bg-white/10 blur-3xl" />

                        {/* Card */}
                        <div className="relative w-40 h-44 rounded-3xl bg-[#232323] border border-white/10 shadow-2xl rotate-[-4deg] flex items-center justify-center">

                            <div className="w-28 space-y-3">

                                <div className="w-7 h-7 rounded-md bg-white/10" />

                                <div className="space-y-2">
                                    <div className="h-2 rounded-full bg-white/10 w-full" />
                                    <div className="h-2 rounded-full bg-white/10 w-5/6" />
                                    <div className="h-2 rounded-full bg-white/10 w-4/6" />
                                    <div className="h-2 rounded-full bg-white/10 w-3/5" />
                                </div>
                            </div>

                            {/* Decorative */}
                            <div className="absolute bottom-3 right-3 text-white/15 text-3xl font-black rotate-12">
                                A
                            </div>
                        </div>

                        {/* Floating Icon */}
                        <div className="absolute top-3 right-5 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl">

                            <HouseFill className="w-6 h-6 text-black" />

                        </div>
                    </div>

                    {/* Content */}

                    <h1 className="text-3xl font-medium text-white mt-10">
                        Company not registered yet
                    </h1>

                    <p className="text-gray-400 mt-5 leading-7 max-w-md mx-auto">
                        Set up your business profile to start posting high-performance
                        job listings and manage your talent loop.
                    </p>

                    {/* Buttons */}

                    <div className="flex flex-col items-center sm:flex-row justify-center gap-4 mt-10">

                        <Button
                            className="bg-white text-[#2F3131] font-medium px-16 py-6 rounded-lg"
                        >
                            Register your company
                        </Button>
                        <Button
                            className=" border-white/15 text-white bg-[#1A1A1A] font-medium px-16 py-6 rounded-lg"
                        >
                            View FAQ
                        </Button>
                    </div>

                    {/* Footer */}

                    <p className="text-xs text-gray-500 mt-16">
                        Need specialized assistance? Contact our enterprise support
                        team.
                    </p>

                </div>
            </section>
        </>
    );
};

export default CompanyPage;
