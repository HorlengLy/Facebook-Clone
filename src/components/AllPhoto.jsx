import React from 'react';
import IT from "../asset/images/IT.png"
const AllPhoto = () => {
    return (
        <div className="p-5 bg-white rounded-lg mt-5">
            <div className='flex justify-between items-center'>
                <h1 className='capitalize text-[20px] font-semibold'>Photos</h1>
                <span className='hover:underline text-blue-600 cursor-pointer'>See all photos</span>
            </div>
            <div className='mt-5 rounded-lg overflow-hidden grid grid-cols-3 gap-y-2 gap-x-2'>
                <img src={IT} alt="" className='cursor-pointer hover:brightness-200 transition-all duration-300'/>
                <img src={IT} alt="" className='cursor-pointer hover:brightness-200 transition-all duration-300'/>
                <img src={IT} alt="" className='cursor-pointer hover:brightness-200 transition-all duration-300'/>
                <img src={IT} alt="" className='cursor-pointer hover:brightness-200 transition-all duration-300'/>
                <img src={IT} alt="" className='cursor-pointer hover:brightness-200 transition-all duration-300'/>
                <img src={IT} alt="" className='cursor-pointer hover:brightness-200 transition-all duration-300'/>
                <img src={IT} alt="" className='cursor-pointer hover:brightness-200 transition-all duration-300'/>

            </div>
        </div>
    );
}

export default AllPhoto;
