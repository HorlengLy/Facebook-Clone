import React from 'react';
import {MdPublic} from "react-icons/md"
import {AiFillLike} from "react-icons/ai"
import {BiComment} from "react-icons/bi"
import {BsFillShareFill} from "react-icons/bs"
import IT from "../asset/images/IT.png"
const Poster = ({toggleComment}) => {
    return (
        <div className='bg-white mt-3 rounded-md py-4 px-5'>
            <div className='flex gap-4'>
                <div>
                    <img src={IT} alt="" className='w-[50px] rounded-[50%] border-2 border-[#009fff] cursor-pointer'/>
                </div>
                <div>
                    <span className='font-semibold text-[16px] capitalize'>
                        horleng ly
                    </span>
                    <span className='flex items-center gap-2'>
                        <span>1h</span>
                        <span><MdPublic size='18px' /></span>
                    </span>
                </div>
            </div>
            <div className='relative mt-2'>
                <p className='py-3 font-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, minima!
                </p>
                <img src={IT} alt="" className='w-full'/>
            </div>
            <div>
                <div className='flex py-2 justify-between px-5'>
                    <span className='flex gap-2'>
                        <span className='bg-[#2196f3] rounded-[50%] p-1'>
                            <AiFillLike size="15px" fill='#fff'/>
                        </span>
                        <span className='font-medium text-gray-600'>10</span>
                    </span>
                    <span className='flex gap-4'>
                        <span className='flex gap-1 '>
                            <span>10</span>
                            <span>Comments</span>
                        </span>
                        <span className='flex gap-1 '>
                            <span>2</span>
                            <span>Share</span>
                        </span>
                    </span>
                </div>
                <hr/>
                <div className='flex mt-1   '>
                    <span className='flex-1 flex gap-2 justify-center cursor-pointer hover:bg-gray-200 py-2 rounded-lg'>
                        <span>
                            <AiFillLike size="25px" fill='#2196f3'/>
                        </span>
                        <span>Like</span>
                    </span>
                    <span onClick={toggleComment} className='flex-1 flex gap-2 justify-center cursor-pointer hover:bg-gray-200 py-2 rounded-lg'>
                        <span>
                            <BiComment size="25px" />
                        </span>
                        <span>Comments</span>
                    </span>
                    <span className='flex-1 flex gap-2 justify-center cursor-pointer hover:bg-gray-200 py-2 rounded-lg'>
                        <span>
                            <BsFillShareFill size="25px" />
                        </span>
                        <span>Share</span>
                    </span>
                </div>
                <hr className='mt-1'/>
            </div>
        </div>
    );
}

export default Poster;
