import React from 'react';

const JobsHeader = ({ Length }) => {
    return (
        <>
            <div className="mb-9">
                <h1 className='text-2xl font-medium'>Found {Length} Professional Jobs</h1>
                {/* <div className=""></div> */}
            </div>
        </>
    );
};

export default JobsHeader;