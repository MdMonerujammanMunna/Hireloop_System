"use client";

import Link from "next/link";
import {
    Card,
    Button,
    Chip,
    Avatar,
} from "@heroui/react";
import { ArrowUpRightFromSquare } from "@gravity-ui/icons";

const jobs = [
    {
        title: "Senior Distributed Systems Engineer",
        location: "SF / Remote",
        salary: "$180k - $240k",
        applicants: [
            "https://i.pravatar.cc/150?img=12",
            "https://i.pravatar.cc/150?img=22",
        ],
        more: "+12",
    },
    {
        title: "Product Design Lead",
        location: "New York",
        salary: "$160k - $210k",
        applicants: [
            "https://i.pravatar.cc/150?img=32",
            "https://i.pravatar.cc/150?img=41",
        ],
        more: "+5",
    },
    {
        title: "DevOps Architect (Infra)",
        location: "Remote",
        salary: "$190k+",
        applicants: ["https://i.pravatar.cc/150?img=50"],
        more: "+22",
    },
];

export default function ActiveRolesCard() {
    return (
        <Card className="bg-[#1F1F21] border border-white/10 shadow-none rounded-2xl">
            {/* Header */}
            <Card.Header className="flex flex-row items-center justify-between px-7 py-6">
                <h2 className="text-3xl font-semibold text-white">
                    Active Roles
                </h2>

                <Chip
                    size="sm"
                    radius="sm"
                    className={{
                        base: "bg-zinc-700 ",
                        content: "text-white font-semibold p-2",
                    }}
                >
                    14
                </Chip>
            </Card.Header>

            <div className="border-t border-white/5" />

            {/* Body */}
            <Card.Content className="p-0">
                {jobs.map((job, index) => (
                    <div
                        key={job.title}
                        className={`px-7 py-7 ${index !== jobs.length - 1
                            ? "border-b border-white/5"
                            : ""
                            }`}
                    >
                        <div className="flex justify-between gap-4">
                            <h3 className="text-xl font-medium text-white">
                                {job.title}
                            </h3>

                            <Link href="#">
                                <ArrowUpRightFromSquare
                                    size={18}
                                    className="text-zinc-500 hover:text-white"
                                />
                            </Link>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <Chip
                                variant="flat"
                                className={{
                                    base: "bg-zinc-700 text-zinc-300",
                                }}
                            >
                                {job.location}
                            </Chip>

                            <Chip
                                variant="flat"
                                className={{
                                    base: "bg-zinc-700 text-zinc-300",
                                }}
                            >
                                {job.salary}
                            </Chip>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div isBordered max={2} className="flex items-center -space-x-2">
                                {job.applicants.map((img) => (
                                    <Avatar key={img} className="border-2 ">
                                        <Avatar.Image src={img} alt="Avatar" size="sm" />
                                    </Avatar>
                                ))}

                                <Avatar className="">
                                    <Avatar.Fallback className="text-xs">{job.more}</Avatar.Fallback>
                                </Avatar>
                            </div>

                            <Button
                                radius="sm"
                                className="bg-white px-7 font-semibold text-black"
                            >
                                Quick Apply
                            </Button>
                        </div>
                    </div>
                ))}
            </Card.Content>

            {/* Footer */}
            <Card.Footer className="justify-center border-t border-white/5 bg-[#252527] py-6">
                <Button
                    variant="light"
                    className="text-zinc-300 hover:text-white"
                >
                    See all 14 openings
                </Button>
            </Card.Footer>
        </Card>
    );
}