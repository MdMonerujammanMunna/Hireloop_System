"use client";

import { Table, Button, Chip } from "@heroui/react";
import { Eye, Pencil, TrashBin } from '@gravity-ui/icons';
import Link from "next/link";

export default function JobsTable({ item }) {
    const getStatusClass = (status) => {
        switch (status) {
            case "active":
                return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";

            case "Pending":
                return "bg-amber-500/10 text-amber-400 border border-amber-500/20";

            default:
                return "bg-red-500/10 text-red-400 border border-red-500/20";
        }
    };

    const jobs = Array.isArray(item) ? item : [item];

    return (
        <div className="">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Manage Jobs
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        View and manage all posted jobs
                    </p>
                </div>
                <Link href={"/Dashboard/Recruiter/Jobs/New"}>
                    <Button className="bg-orange-500 text-white hover:bg-orange-600">
                        Add Job
                    </Button>
                </Link>
            </div>

            <Table>
                <Table.ScrollContainer>
                    <Table.Content
                        aria-label="Jobs Table"
                        className="min-w-250"
                    >
                        <Table.Header>
                            <Table.Column isRowHeader>Job</Table.Column>
                            <Table.Column>Company</Table.Column>
                            <Table.Column>Location/Remote</Table.Column>
                            <Table.Column>Type</Table.Column>
                            <Table.Column>Status</Table.Column>
                            <Table.Column>Actions</Table.Column>
                        </Table.Header>

                        <Table.Body>
                            {jobs.map((job) => (
                                <Table.Row key={job._id || job.id}>
                                    <Table.Cell>
                                        <div>
                                            <p className="font-semibold text-white">
                                                {job.title}
                                            </p>

                                            <p className="text-xs text-slate-500">
                                                {job.companyId}
                                            </p>
                                        </div>
                                    </Table.Cell>

                                    <Table.Cell>{job.company}</Table.Cell>

                                    <Table.Cell>{job.location !== "" ? job.location : job.isRemote == true ? "Remote" : ""}</Table.Cell>

                                    <Table.Cell>
                                        <Chip>
                                            {job.type}
                                        </Chip>
                                    </Table.Cell>

                                    <Table.Cell>
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusClass(
                                                job.status
                                            )}`}
                                        >
                                            {job.status}
                                        </span>
                                    </Table.Cell>

                                    <Table.Cell>
                                        <div className="flex gap-2">
                                            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-500 text-white transition hover:bg-sky-600">
                                                <Eye className="size-5" />
                                            </button>

                                            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-white transition hover:bg-amber-600">
                                                <Pencil className="size-5" />
                                            </button>

                                            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500 text-white transition hover:bg-rose-600">
                                                <TrashBin className="size-5" />
                                            </button>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
}