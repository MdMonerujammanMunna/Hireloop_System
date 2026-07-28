import FilterSidebar from '@/components/BrowseJobsPageComponents/FiltersideBar/Filtersection';
import JobsHeader from '@/components/BrowseJobsPageComponents/HeaderJobPage/JobsHeader';
import JobCard from '@/components/BrowseJobsPageComponents/JobDetailsCard/JobCard';
import SearchBarForBrowseJobs from '@/components/BrowseJobsPageComponents/SearchBar/Searchbar';
import React from 'react';
const jobs = [
    {
        id: 1,
        title: "Senior Product Designer",
        company: "TechFlow Systems",
        location: "San Francisco, CA (Remote)",
        salary: "$140k - $180k",
        type: "Full-time",
        tag: "Easy Apply",
        tagColor: "green",
    },
    {
        id: 2,
        title: "Lead Frontend Engineer",
        company: "FinGrid Solutions",
        location: "New York, NY",
        salary: "$165k - $210k",
        type: "Hybrid",
    },
    {
        id: 3,
        title: "UX Researcher",
        company: "CreativeStudio",
        location: "Austin, TX",
        salary: "$110k - $145k",
        type: "Contract",
    },
    {
        id: 4,
        title: "Machine Learning Engineer",
        company: "HealthAI Corp",
        location: "Boston, MA (Remote)",
        salary: "$180k - $250k",
        type: "Senior",
        tag: "Hot Job",
        tagColor: "yellow",
    },
];
const BrowseJobsPage = () => {
    return (
        <div>
            <SearchBarForBrowseJobs />
            <div className='grid md:grid-cols-5 mx-4 md:gap-5'>
                <FilterSidebar />
                <main className='col-span-4 mt-10 md:mt-0'>

                    <div className="min-h-screen bg-[#0b0b0b] p-8 text-white">
                        <div className="mx-auto max-w-5xl">
                            <JobsHeader />
                            <div className="space-y-5">
                                {jobs.map((job) => (
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