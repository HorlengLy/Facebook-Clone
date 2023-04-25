import React from 'react';
import {HiPhoto} from "react-icons/hi2"
import {BsFillEmojiSmileFill,BsFillShareFill} from "react-icons/bs"
import {MdPublic} from "react-icons/md"
import {AiFillLike,AiOutlineSend,AiOutlineClose} from "react-icons/ai"
import {BiComment} from "react-icons/bi"
import IT from "../asset/images/IT.png"
import Comment from './Comment';
const CommentLayout = ({toggleComment}) => {
    return (
        <>
            <div className='relative'>
                <h1 className='text-[20px] font-bold flex justify-center'>HorlengLy's Post</h1>
                <span onClick={toggleComment} className='absolute right-4 top-0 p-2 rounded-[50%] bg-gray-300 hover:bg-gray-200 cursor-pointer'>
                    <AiOutlineClose size='20px'/>
                </span>
            </div>
            <hr className='mt-3'/>
            <div className='h-[65vh] overflow-y-auto p-[30px] scrollbar-thin scrollbar-thumb-[#009fff] scrollbar-track-gray-300'>
                <div className=''>
                    <div className='flex gap-4'>
                        <span>
                            <img src={IT} alt="" className='w-[50px] rounded-[50%] border border-[#009fff]'/>
                        </span>
                        <span>
                            <h1 className='font-semibold text-[16px]'>Horleng Ly</h1>
                            <span className='flex gap-2'>
                                <span>
                                    1h
                                </span>
                                <span>
                                    <MdPublic size='20px' />
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
                <div className='mt-5 '>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ab assumenda soluta et hic optio consectetur nostrum incidunt totam iste ad quos animi, ut nobis velit beatae delectus, perspiciatis ipsa?
                    </p>
                    <div>
                        <img src={IT} alt="" className='rounded-lg'/>
                    </div>
                </div>
                {/* reaction */}
                <div className=' mt-3'>
                    <div className='flex justify-between'>
                        <span className='flex items-center gap-2'>
                            <span className='bg-[#2196f3] rounded-[50%] p-1 cursor-pointer'>
                                <AiFillLike size="15px" fill='#fff'/>
                            </span>
                            <span>10</span>
                        </span>
                        <span className='flex gap-4 items-center'>
                            <span className='flex gap-1 items-center cursor-pointer'>
                                <span>10</span>
                                <span>Comments</span>
                            </span>
                            <span className='flex gap-1 items-center cursor-pointer'>
                                <span>2</span>
                                <span>Share</span>
                            </span>
                        </span>
                    </div>
                </div>

                <hr className='mt-2'/>

                <div className='flex mt-1   '>
                    <span className='flex-1 flex gap-2 justify-center cursor-pointer hover:bg-gray-200 py-2 rounded-lg'>
                        <span>
                            <AiFillLike size="25px" fill='#2196f3'/>
                        </span>
                        <span>Like</span>
                    </span>
                    <span className='flex-1 flex gap-2 justify-center cursor-pointer hover:bg-gray-200 py-2 rounded-lg'>
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

                {/* comment */}
                <div className='mt-5 flex flex-col gap-3'>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
                
            </div>
            <div className='px-[30px] py-2 flex gap-3'>
                <div>
                    <img src={IT} alt="" className='w-[45px] rounded-[50%] border border-[#009fff]'/>
                </div>
                <div className='rounded-[10px] pb-3 px-5 pt-1 bg-gray-100 w-full'>
                    <div className='w-full'>
                        <input type="text" placeholder='Write a comment...' className='bg-transparent py-2'/>
                    </div>
                    <div className='flex items-center justify-between '>
                        <div className='flex gap-2 items-center'>
                            <span className='cursor-pointer'>
                                <BsFillEmojiSmileFill size='20px'/>
                            </span>
                            <span className='cursor-pointer'>
                                <HiPhoto size='23px'/>
                            </span>
                        </div>
                        <span className='cursor-pointer'>
                            <AiOutlineSend size="25px" fill='#009fff'/>
                        </span>
                    </div>
                </div>
                
            </div>
                
        </>
    );
}

export default CommentLayout;
