import React, { useRef, useState } from 'react';
import IT from "../asset/images/IT.png"
import {MdPublic} from "react-icons/md"
import {BsFillEmojiNeutralFill,BsImages} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"
const Post = ({togglePost}) => {
    const [image,setImage] = useState(null)
    function imagePreview(e){
        console.log(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0]))
    }
    
    
    return (
        <>
            <span onClick={togglePost} className='absolute right-2 top-2 p-2 rounded-[50%] bg-gray-300 hover:bg-gray-200 cursor-pointer'>
                <AiOutlineClose size='20px'/>
            </span>
            <h1 className='flex justify-center text-[25px] font-semibold'>Create Post</h1>
            <hr className='mt-2'/>
            <div className='md:px-[30px] px-[10px] mt-4'>
                <div className='flex gap-2'>
                    <img src={IT} alt="" className='w-[50px] rounded-[50%] border-2 border-[#009fff]'/>
                    <div>
                        <h4 className='text-[16px] tracking-wider font-semibold'>Horleng</h4>
                        <span>
                            <MdPublic size="20px" />
                        </span>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-2'>
                        <input type="text" placeholder="What's on your mind?,Horlengg" className='text-base placeholder:text-base'/>
                        <span className='cursor-pointer'>
                            <BsFillEmojiNeutralFill size='25px'/>
                        </span>
                    </div>
                    <div className='relative border bg-gray-200 h-[250px] rounded-lg overflow-y-auto scrollbar-track-[#009fff] scrollbar-thin'>
                        <span className='cursor-pointer absolute right-3 top-2 p-2 rounded-[50%] bg-gray-100 hover:bg-gray-200'>
                            <AiOutlineClose size='20px'/>
                        </span>
                        <label htmlFor="img" className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <input type="file" id='img' hidden onChange={imagePreview} />
                            <div className='cursor-pointer flex flex-col items-center'>
                                <span className='p-2 rounded-[50%] bg-gray-100 hover:bg-gray-400 transition-all duration-150'>
                                    <BsImages size="25px"/>
                                </span>
                                <span className={'text-[20px] '+(image?'text-gray-200':'text-gray-700')}>Add a photo</span>
                            </div>
                        </label>
                        {
                            image?<img  src={image} alt="" />:<></>
                        }
                    </div>    
                    <button className='bg-blue-700 hover:bg-blue-600 w-[100px] mt-4 rounded-lg text-gray-300'>Post</button>
            </div>
        </>
    );
}

export default Post;
