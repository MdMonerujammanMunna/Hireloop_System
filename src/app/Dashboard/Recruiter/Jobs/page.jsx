import JobsTable from '@/components/dashboardComponents/CompanyJobPostTable/PostTable';
import { getCompanyJobs } from '@/lib/api/RecruterApi/job';
import React from 'react';

const RecruiterJobs = async () => {
    const companyId = "Man_1"
    const res = await getCompanyJobs(companyId)
    // console.log(res)
    return (
        <div>
            <JobsTable item={res} />
        </div>
    );
};

export default RecruiterJobs;