import DashboardOverview from "@/components/dashboardComponents/Overview/Overview";
import StatsCards from "@/components/dashboardComponents/StatsCard/StatsCard";


const RecruiterHomePage = () => {
    return (
        <>
            <div className="">
                <h1 className="font-medium text-4xl mb-16">Welcome back, Munna Islam</h1>
                <div className="my-15">
                    <StatsCards />
                </div>
                <DashboardOverview />
            </div>
        </>
    )
};

export default RecruiterHomePage;