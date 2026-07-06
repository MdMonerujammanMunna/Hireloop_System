
import ActiveRolesCard from "@/components/dashboardComponents/CompanyPageDesing/ActiveRolesCard/ActiveRolesCard";
import CompanyPageBanner from "@/components/dashboardComponents/CompanyPageDesing/CompanyPageBanner/CompanyPageBanner";
import ImageGallary from "@/components/dashboardComponents/CompanyPageDesing/CompanyPageImageGallary/ImageGallary";
import StatusCardForCompany from "@/components/dashboardComponents/CompanyPageDesing/CompanyPageStatusCard/StatusCardForCompany";
import HiringTeamCard from "@/components/dashboardComponents/CompanyPageDesing/Hiring Team/HiringTeamCard";
import EmptyCompanyPage from "@/components/dashboardComponents/EmptyCompanyPage/EmptyCompanyPage";
import { getCurrentUserCompany } from "@/lib/api/RecruterApi/Company";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";



const CompanyPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const UserID = session?.user?.id
    const getCurrentUserCompanies = await getCurrentUserCompany(UserID)

    // console.log(getCurrentUserCompanies)


    return (
        <>
            {getCurrentUserCompanies.length <= 0
                ?
                <EmptyCompanyPage />
                :
                <div>
                    {
                        getCurrentUserCompanies.map((company, index) => {
                            return (
                                <div key={index}>
                                    <CompanyPageBanner company={company} />
                                    <div className="grid lg:grid-cols-3 gap-6 mt-15">
                                        <div className="col-span-2 ">
                                            {/* About  section */}
                                            <div className="">
                                                <h1 className="text-3xl font-medium text-white mb-8">
                                                    About {company.CompanyName}
                                                </h1>
                                                <p className="text-[18px] text-white/60 mt-1">
                                                    Founded in 2014, LuminaTech Systems has emerged as a global leader in high-performance cloud
                                                    infrastructure and decentralized computing systems. We bridge the gap between traditional
                                                    enterprise legacy architectures and the next generation of intelligent, automated cloud ecosystems.
                                                    Our mission is to empower organizations with resilient, scalable, and secure technologies that drive
                                                    <br /> <br />
                                                    meaningful progress. With a focus on R&D, LuminaTech holds over 140 patents in data encryption
                                                    and real-time processing, ensuring our clients stay at the bleeding edge of the digital revolution.
                                                </p>
                                            </div>
                                            {/* Company Stats  section */}
                                            <div className="mt-16">
                                                <h1 className="text-2xl font-medium mb-8">Company Stats</h1>
                                                <StatusCardForCompany />
                                            </div>
                                            <div className="mt-16">
                                                <ImageGallary />
                                            </div>
                                        </div>
                                        <div className="space-y-8">
                                            <ActiveRolesCard />
                                            <HiringTeamCard />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>}

        </>
    );
};

export default CompanyPage;
