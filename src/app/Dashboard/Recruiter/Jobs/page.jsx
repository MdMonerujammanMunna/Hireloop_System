import JobsTable from '@/components/dashboardComponents/CompanyJobPostTable/PostTable';
import { getCompanyJobs } from '@/lib/api/job';
import React from 'react';

const RecruiterJobs = async () => {
    const companyId = "Man_123"
    const res = await getCompanyJobs(companyId)
    return (
        <div>
            <JobsTable item={res} />
        </div>
    );
};

export default RecruiterJobs;