"use client"
import DashboardOverview from "@/components/dashboardComponents/Overview/Overview";
import StatsCards from "@/components/dashboardComponents/StatsCard/StatsCard";
import { useSession } from "@/lib/auth-client";


const RecruiterHomePage = () => {
    const { data: session, isPending } = useSession()
    if (isPending) {
        <div className="">Loading......</div>
    }
    const user = session?.user
    console.log(user)
    return (
        <>
            <div className="">
                <h1 className="font-medium text-4xl mb-16">Welcome back,{user?.name} </h1>
                <div className="my-15">
                    <StatsCards />
                </div>
                <DashboardOverview />
            </div>
        </>
    )
};

export default RecruiterHomePage;