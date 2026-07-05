
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

    console.log(getCurrentUserCompanies)
    return (
        <>
            {getCurrentUserCompanies.length <= 0
                ?
                <EmptyCompanyPage />
                :
                <div>
                    Company Page
                </div>}

        </>
    );
};

export default CompanyPage;
