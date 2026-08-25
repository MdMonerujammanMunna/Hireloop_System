import HeaderSection from '@/components/JobDetailsPageComponents/Header/HeaderSection';
import SortCard from '@/components/JobDetailsPageComponents/SmallCard/SortCard';
import { GetOneJobs } from '@/lib/api/SingleJob/single';
import React from 'react';

const DetailsPage = async ({ params }) => {
    const paramso = await params;
    const job = await GetOneJobs(paramso.id);
    // console.log(job);
    const { title, company, type, profileImage, maxSalary, minSalary, category, location, isRemote } = job
    const HederData = { title, company, type, profileImage }
    const SortData = { maxSalary, minSalary, category, type, location, isRemote }
    return (
        <>
            <article className="px-10 mt-10">
                <HeaderSection HeaderData={HederData} />
                <div className="grid grid-cols-5 mt-5 gap-5">
                    <div className="col-span-3">
                        <SortCard SortData={SortData} />
                    </div>
                    <div className="col-span-2">hello</div>
                </div>
            </article>
        </>
    );
};

export default DetailsPage;