import FilterSidebar from '@/components/BrowseJobsPageComponents/FiltersideBar/Filtersection';
import SearchBarForBrowseJobs from '@/components/BrowseJobsPageComponents/SearchBar/Searchbar';
import React from 'react';

const BrowseJobsPage = () => {
    return (
        <div>
            <SearchBarForBrowseJobs />
            <div className='grid md:grid-cols-5 mx-4'>
                <FilterSidebar />
            </div>
        </div>
    );
};

export default BrowseJobsPage;