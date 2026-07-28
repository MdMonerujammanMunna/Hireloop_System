import FilterSidebar from '@/components/BrowseJobsPageComponents/FiltersideBar/Filtersection';
import JobsHeader from '@/components/BrowseJobsPageComponents/HeaderJobPage/JobsHeader';
import JobCard from '@/components/BrowseJobsPageComponents/JobDetailsCard/JobCard';
import SearchBarForBrowseJobs from '@/components/BrowseJobsPageComponents/SearchBar/Searchbar';
import { getAllJobs } from '@/lib/api/BrowseJob/AllJobget';
import React from 'react';

const BrowseJobsPage = async () => {
    const DataJobs = await getAllJobs()
    const Length = DataJobs.length
    return (
        <div>
            <SearchBarForBrowseJobs />
            <div className='grid md:grid-cols-5 mx-4 md:gap-5'>
                <FilterSidebar />
                <main className='col-span-0 mt-10 md:mt-0 md:col-span-4'>

                    <div className="min-h-screen  p-8 text-white">
                        <div className="mx-auto max-w-5xl">
                            <JobsHeader Length={Length} />
                            <div className="space-y-5">
                                {DataJobs.map((job) => (
                                    <JobCard key={job.id} job={job} />
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BrowseJobsPage;