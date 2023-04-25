import React from 'react';
import IT  from '../asset/images/IT.png'
const Comment = () => {
    return (
        <>
            <div className='flex gap-3 w-fit'>
                <div>
                    <img src={IT} alt="" className='w-[45px] rounded-[50%] border border-[#009fff]'/>
                </div>
                <div className='flex flex-col'>
                    <div className='py-2 px-[20px] rounded-[12px] bg-gray-200'>
                        <h4 className='text-[16px] font-semibold'>Horleng Ly</h4>
                        <span>
                            Lorem ipsum dolor sit amet.
                        </span>
                    </div>
                    <div className='flex items-center gap-10'>
                        <span className='hover:underline text-[13px] cursor-pointer font-semibold'>Like</span>
                        <span className='hover:underline text-[13px] cursor-pointer font-semibold'>Reply</span>
                        <span className='text-[13px] font-semibold'>1h</span>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Comment;
