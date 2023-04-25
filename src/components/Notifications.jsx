import React from 'react';
import IT from "../asset/images/IT.png"
import {AiOutlineClose} from "react-icons/ai"
const Notifications = ({toggleNotification}) => {
    return (
        <>
            <div className='relative'>
                <span onClick={toggleNotification} className='absolute right-4 top-[-4px] p-2 rounded-[50%] bg-gray-300 hover:bg-gray-200 cursor-pointer'>
                    <AiOutlineClose size='20px'/>
                </span>
            </div>
            <h1 className='text-[20px] font-semibold px-3'>Notifications</h1>
            <hr className='mt-2'/>
            <ul className='mt-5'>
                <li className='flex gap-4 p-2 rounded items-center px-3 hover:bg-gray-200 cursor-pointer'>
                    <span>
                        <img src={IT} alt="" className='w-[45px] rounded-[50%] border-2 border-[#009fff]'/>
                    </span> 
                    <div>
                        <div className='flex items-center gap-2'>
                            <h3 className='capitalize font-semibold'>Horleng Ly</h3>
                            <span>
                                liked your post
                            </span>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <span className='text-[14px] font-medium'>
                                2 hour ago
                            </span>
                            <span className='text-[14px] font-medium hover:underline hover:text-red-600 cursor-pointer'>
                                delete
                            </span>
                        </div>
                    </div>
                </li>
                <li className='flex gap-4 p-2 rounded items-center px-3 hover:bg-gray-200 cursor-pointer'>
                    <span>
                        <img src={IT} alt="" className='w-[45px] rounded-[50%] border-2 border-[#009fff]'/>
                    </span> 
                    <div>
                        <div className='flex items-center gap-2'>
                            <h3 className='capitalize font-semibold'>Horleng Ly</h3>
                            <span>
                                liked your post
                            </span>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <span className='text-[14px] font-medium'>
                                2 hour ago
                            </span>
                            <span className='text-[14px] font-medium hover:underline hover:text-red-600 cursor-pointer'>
                                delete
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default Notifications;
