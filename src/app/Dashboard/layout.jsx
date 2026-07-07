import { DashboardSideBar } from "@/components/dashboardComponents/DashboardSideBar";
import RecruiterNavbar from "@/components/dashboardComponents/RecruiterNavbar/NavbarRecruiter";
import { getCurrentUserCompany } from "@/lib/api/RecruterApi/Company";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const DashboardLayout = async ({ children }) => {
    let ComapnyName = "Company Name"
    let ComapnyImage = "https://img.magnific.com/premium-photo/abstract-neon-lights-background-with-smoke-fog-grunge-texture_324689-575.jpg?semt=ais_hybrid&w=740&q=80"
    let UserName = ""
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })
        const UserID = session?.user?.id
        UserName = session?.user?.name
        const getCurrentUserCompanies = await getCurrentUserCompany(UserID)

        ComapnyName = getCurrentUserCompanies[0].CompanyName
        ComapnyImage = getCurrentUserCompanies[0].ThumbnailImage
    }
    catch (error) {
        // console.log(error)
    }
    return (
        <div className="flex min-h-screen">
            <DashboardSideBar />
            <div className="flex-1 px-10 pb-20 ">
                <RecruiterNavbar UserName={UserName} ComapnyName={ComapnyName} ComapnyImage={ComapnyImage} />
                <main className="mt-8">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;