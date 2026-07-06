import JobsTable from '@/components/dashboardComponents/CompanyJobPostTable/PostTable';
import NoCompanyPage from '@/components/dashboardComponents/NoCompanyPage/NoCompanyPage';
import { getCurrentUserCompany } from '@/lib/api/RecruterApi/Company';
import { getCompanyJobs } from '@/lib/api/RecruterApi/job';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const RecruiterJobs = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const UserID = session?.user?.id
    const getCurrentUserCompanies = await getCurrentUserCompany(UserID)
    if (getCurrentUserCompanies.length <= 0) {
        return <NoCompanyPage />
    }
    const companyId = getCurrentUserCompanies[0]._id
    const res = await getCompanyJobs(companyId)
    // console.log(companyId)
    return (
        <div>
            <JobsTable item={res} />
        </div>
    );
};

export default RecruiterJobs;