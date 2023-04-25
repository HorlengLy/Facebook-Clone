import React from 'react';

const DefualtPage = () => {
    return (
        <div className='grid place-content-center h-screen bg-white'>
            <div className='flex flex-col gap-10 text-center'>
                <span className='text-[100px] text-red-500'>404</span>
                <span className='text-[20px]'>This page doesn't exist</span>
            </div>
        </div>
    );
}

export default DefualtPage;
