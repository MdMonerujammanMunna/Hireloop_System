import { Button } from "@heroui/react";
import RightSideOverview from "../OverrviewRightSide/RightSideOverview";
import LeftSideOverview from "../OverviewLeftSide/LeftSideOverview";
import { Plus } from "@gravity-ui/icons";
import Link from "next/link";

export default function DashboardOverview() {
    return (
        <>
            <div className="relative grid md:grid-cols-9 gap-5">
                <div className="col-span-6">
                    <LeftSideOverview />
                </div>
                <div className="col-span-3 mt-10 md:mt-0">
                    <RightSideOverview />
                </div>
            </div>
            <Link href="/Dashboard/Recruiter/company">
                <div className="absolute right-10 mt-5 flex items-center justify-center bg-white rounded-full h-10 w-10 ">
                    <Plus className=" text-[#2F3131] " />
                </div>
            </Link>
        </>
    );
}