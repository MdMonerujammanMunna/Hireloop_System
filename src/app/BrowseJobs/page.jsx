import { getAllJobs } from '@/lib/api/BrowseJob/AllJobget';
import BrowseJobsContent from '@/components/BrowseJobsPageComponents/BrowseJobsContent';

const BrowseJobsPage = async () => {
    const jobs = await getAllJobs();
    return <BrowseJobsContent jobs={jobs} />;
};

export default BrowseJobsPage;