import { DashboardSideBar } from "@/components/dashboardComponents/DashboardSideBar";


const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen  mt-8">
            <DashboardSideBar />
            <main className="flex-1 mx-12">{children}</main>
        </div>
    );
};

export default DashboardLayout;