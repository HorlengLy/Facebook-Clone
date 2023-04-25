import React from 'react';
import IT from "../asset/images/IT.png"
const SubNavRight = () => {
    return (
        <div className='py-10 px-5'>
            <div>
                <h1 className='text-[20px] font-bold'>Friend Requests</h1>
                <hr />
                <div className='h-[40vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#009fff] scrollbar-track-slate-200'>
                    <ul className='mt-5'>
                        {
                            Array.from([1,2,3,4,5]).map((item,index)=>(
                                <li key={index} className='flex gap-5 rounded-lg py-3 px-4 hover:bg-gray-100'>
                                    <div>
                                        <img src={IT} alt="" className='rounded-[50%] w-[55px] border-2 border-[#009fff]'/>
                                    </div>
                                    <span className='flex flex-col gap-5'>
                                        <span className='font-semibold text-[15px] capitalize'>
                                            my crush
                                        </span>
                                        <span className='flex gap-2'>
                                            <button className='py-2 w-[80px] bg-[#009fff] hover:bg-[#54beff] text-gray-100'>Confirm</button>
                                            <button className='py-2 w-[80px] bg-red-600 hover:bg-red-500 text-gray-100'>Delete</button>
                                        </span>
                                    </span>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>
            <div className='mt-8'>
                <h1 className='text-[20px] font-bold'>Friends Active</h1>
                <hr />
                <ul className="mt-5 h-[30vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#009fff] scrollbar-track-slate-200">
                    {
                        Array.from([1,2,3,4,5,5,6,6,7,7]).map((item,index)=>(
                            <li key={index} className='flex gap-3 items-center transition-all duration-200 cursor-pointer py-2 px-5 hover:bg-gray-200 rounded-lg'>
                                <span className='relative'>
                                    <span className='bg-green-600 p-1 absolute right-[1px] bottom-1 rounded-[50%]'></span>
                                    <img src={IT} alt="" className='w-[35px] rounded-[50%] border-2 border-[#009fff]'/>
                                </span>
                                <span className='capitalize font-semibold text-sm'>my crush</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default SubNavRight;
