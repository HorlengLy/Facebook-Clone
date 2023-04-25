import React from 'react';
import {RiLiveFill} from "react-icons/ri"
import {HiPhoto} from "react-icons/hi2"
import {BsFillEmojiSmileFill} from "react-icons/bs"
import IT from "../asset/images/IT.png"
import { Link } from 'react-router-dom';
const YourMind = ({togglePost}) => {
    return (
            <div className='bg-white py-2 px-5 rounded-md'>
                <div className='flex gap-2'>
                    <Link to='/profile/sjjjs'>
                        <img src={IT} alt="" className='w-[55px] rounded-[50%]'/>
                    </Link>
                    <div className='w-full'>
                        <input type="text" name="" id="" placeholder="What's on your mind? , Horlengg" 
                        className='bg-gray-200 rounded-full px-10 '/>
                    </div>
                </div>
                <hr className='mt-1'/>
                <div className='flex py-2 px-[50px] justify-between'>
                    <span className='flex items-center gap-2  cursor-pointer'>
                        <span>
                            <RiLiveFill size="30px" fill="skyblue"/>
                        </span>
                        <span className='md:inline hidden'>Live Video</span>
                    </span>
                    <span onClick={togglePost} className='flex items-center gap-2 cursor-pointer'>
                        <span >
                            <HiPhoto size="30px" fill="green"/>
                        </span>
                        <span className='md:inline hidden'>Post Image</span>
                    </span>
                    <span className='flex items-center gap-2 cursor-pointer'>
                        <span>
                            <BsFillEmojiSmileFill size="30px" fill="green"/>
                        </span>
                        <span className='md:inline hidden'>Felling</span>
                    </span>
                </div>
            </div>
    );
}

export default YourMind;
