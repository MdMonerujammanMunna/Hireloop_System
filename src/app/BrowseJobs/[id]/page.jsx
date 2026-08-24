import HeaderSection from '@/components/JobDetailsPageComponents/Header/HeaderSection';
import { GetOneJobs } from '@/lib/api/SingleJob/single';
import React from 'react';

const DetailsPage = async ({ params }) => {
    const paramso = await params;
    const job = await GetOneJobs(paramso.id);
    const { title, company, type, profileImage } = job
    const HederData = { title, company, type, profileImage }
    return (
        <>
            <article className="px-10 mt-10">
                <HeaderSection HeaderData={HederData} />
            </article>
        </>
    );
};

export default DetailsPage;