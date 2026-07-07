import JobCreatePage from "@/components/dashboardComponents/JobCreatePage/JobCreatePage";
import NoCompanyPage from "@/components/dashboardComponents/NoCompanyPage/NoCompanyPage";
import JobLimitCard from "@/components/JobLimitCard/JobLimitCard";
import { getCurrentUserCompany } from "@/lib/api/RecruterApi/Company";
import { getCompanyJobs } from "@/lib/api/RecruterApi/job";
import { auth } from "@/lib/auth";

import { headers } from "next/headers";



export default async function NewJobPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const UserID = session?.user?.id
    const UserPlan = session?.user?.plan
    const getCurrentUserCompanies = await getCurrentUserCompany(UserID)
    // console.log(getCurrentUserCompanies)
    if (getCurrentUserCompanies.length <= 0) {
        return <NoCompanyPage />
    }

    const companyId = getCurrentUserCompanies[0]._id
    const res = await getCompanyJobs(companyId)
    const TotalJobs = res.length
    console.log(TotalJobs, UserPlan)
    return (
        <>
            {
                UserPlan === "free" && TotalJobs >= 3 ? <JobLimitCard />
                    :
                    < JobCreatePage CompanyData={getCurrentUserCompanies[0]} />
            }
        </>
    );
}