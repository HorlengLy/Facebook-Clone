import React from 'react';
import IT from "../asset/images/IT.png"
const AllFriends = () => {
    return (
        <div className="p-5 bg-white rounded-lg mt-5">
            <div className='flex justify-between items-center'>
                <h1 className='capitalize text-[20px] font-semibold'>Friends</h1>
                <span className='hover:underline text-blue-600 cursor-pointer'>See all friend</span>
            </div>
            <div className='mt-5 rounded-lg overflow-hidden grid grid-cols-3 gap-y-2 gap-x-2'>
                <div>
                    <img src={IT} alt="" className='cursor-pointer hover:brightness-200 transition-all duration-300 rounded-lg'/>
                    <span className='capitalize font-semibold text-[15px] flex justify-center mt-1'>Horleng ly</span>
                </div>
                <div>
                    <img src={IT} alt="" className='cursor-pointer hover:brightness-200 transition-all duration-300 rounded-lg'/>
                    <span className='capitalize font-semibold text-[15px] flex justify-center mt-1'>Horleng ly</span>
                </div>
                <div>
                    <img src={IT} alt="" className='cursor-pointer hover:brightness-200 transition-all duration-300 rounded-lg'/>
                    <span className='capitalize font-semibold text-[15px] flex justify-center mt-1'>Horleng ly</span>
                </div>
                <div>
                    <img src={IT} alt="" className='cursor-pointer hover:brightness-200 transition-all duration-300 rounded-lg'/>
                    <span className='capitalize font-semibold text-[15px] flex justify-center mt-1'>Horleng ly</span>
                </div>
                <div>
                    <img src={IT} alt="" className='cursor-pointer hover:brightness-200 transition-all duration-300 rounded-lg'/>
                    <span className='capitalize font-semibold text-[15px] flex justify-center mt-1'>Horleng ly</span>
                </div>
                <div>
                    <img src={IT} alt="" className='cursor-pointer hover:brightness-200 transition-all duration-300 rounded-lg'/>
                    <span className='capitalize font-semibold text-[15px] flex justify-center mt-1'>Horleng ly</span>
                </div>
                <div>
                    <img src={IT} alt="" className='cursor-pointer hover:brightness-200 transition-all duration-300 rounded-lg'/>
                    <span className='capitalize font-semibold text-[15px] flex justify-center mt-1'>Horleng ly</span>
                </div>

            </div>
        </div>
    );
}

export default AllFriends;
