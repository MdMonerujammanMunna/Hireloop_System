import { DashboardSideBar } from "@/components/dashboardComponents/DashboardSideBar";
import RecruiterNavbar from "@/components/dashboardComponents/RecruiterNavbar/NavbarRecruiter";


const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <DashboardSideBar />
            <div className="flex-1 px-10 pb-20 ">
                <RecruiterNavbar />
                <main className="mt-8">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;