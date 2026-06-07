"use client";

import { Card } from "@heroui/react";

import { FileText, Persons, Thunderbolt, CirclesIntersection } from '@gravity-ui/icons';
const stats = [
    {
        title: "Total Job Posts",
        value: "48",
        icon: FileText
    },
    {
        title: "Total Applicants",
        value: "1,284",
        icon: Persons
    },
    {
        title: "Active Jobs",
        value: "18",
        icon: Thunderbolt
    },
    {
        title: "Jobs Closed",
        value: "32",
        icon: CirclesIntersection
    },
];

export default function StatsCards() {
    return (
        <div className="grid gap-5 items-center justify-center grid-cols-2 xl:grid-cols-4 ">
            {stats.map((stat) => (
                <Card
                    key={stat.title}
                    shadow="none"
                    className="border border-default-100 rounded-xl"
                >
                    <Card.Content className="p-1 space-y-2">
                        <div className="p-2 h-12 w-12 flex items-center justify-center bg-[#353436] rounded-xl">
                            <stat.icon className="h-5 w-5" />
                        </div>
                        <p className="text-[#C4C7C8] text-xs">
                            {stat.title}
                        </p>

                        <h3 className="text-3xl font-semibold">
                            {stat.value}
                        </h3>
                    </Card.Content>
                </Card>
            ))}
        </div>
    );
}