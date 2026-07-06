import JobCreatePage from "@/components/dashboardComponents/JobCreatePage/JobCreatePage";
import NoCompanyPage from "@/components/dashboardComponents/NoCompanyPage/NoCompanyPage";
import { getCurrentUserCompany } from "@/lib/api/RecruterApi/Company";
import { auth } from "@/lib/auth";

import { headers } from "next/headers";



export default async function NewJobPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const UserID = session?.user?.id
    const getCurrentUserCompanies = await getCurrentUserCompany(UserID)
    // console.log(getCurrentUserCompanies)

    return (
        <>{
            getCurrentUserCompanies.length > 0 ?
                <JobCreatePage CompanyData={getCurrentUserCompanies[0]} />
                :
                <NoCompanyPage />

        }
        </>
    );
}