import React from 'react';
import IT from "../asset/images/IT.png"
import {BsFillEmojiSmileFill} from "react-icons/bs"
import {HiPhoto} from "react-icons/hi2"
import {RiLiveFill} from "react-icons/ri"
import Poster from '../components/Poster';
import Introducts from '../components/Introducts';
import AllPhoto from '../components/AllPhoto';
import AllFriends from '../components/AllFriends';
import ProfileCover from '../components/ProfileCover';
import { Link } from 'react-router-dom';
const Profile = () => {
    return (
        <div className='h-screen'>
            <Link to='/' className='absolute top-4 left-4'>
                <span className='text-red-600 underline'>back</span>
            </Link>
            <div className='lg:w-[70%] sm:[90%] w-[95%] mx-auto bg-white md:px-[50px]'>
                <ProfileCover />
                <hr className='lg:mt-0 mt-3'/>
                <div className='mt-3'>
                    <ul className='flex lg:gap-4 gap-2 sm:w-full w-[96%] mx-auto'>
                        <li className='font-semibold cursor-pointer py-3 px-4 border-b-2 border-transparent hover:border-b-[#009fff] hover:text-[#009fff] text-[#009fff] border-b-[#009fff]'>Post</li>
                        <li className='font-semibold cursor-pointer py-3 px-4 border-b-2 border-transparent hover:border-b-[#009fff] hover:text-[#009fff]'>Followers</li>
                        <li className='font-semibold cursor-pointer py-3 px-4 border-b-2 border-transparent hover:border-b-[#009fff] hover:text-[#009fff]'>Photos</li>
                        <li className='font-semibold cursor-pointer py-3 px-4 border-b-2 border-transparent hover:border-b-[#009fff] hover:text-[#009fff]'>Videos</li>
                        <li className='font-semibold cursor-pointer py-3 px-4 border-b-2 border-transparent hover:border-b-[#009fff] hover:text-[#009fff]'>Groups</li>
                    </ul>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col lg:gap-5  mt-5 lg:w-[70%] sm:[90%] w-[95%] mx-auto'>
                <div className='flex-[0.7]'>

                    <Introducts />
                    <AllPhoto />
                    <AllFriends />
                    <div className='mt-5 lg:block hidden text-center'>
                        <span>Facebook clone by @Horlenggg</span><br />
                        <span>20/04/2023</span>
                    </div>
                    
                </div>
                <div className='flex-1 lg:mt-0 mt-5'>
                    <div className='p-5 bg-white rounded-lg'>
                        <div className=' flex gap-2'>
                            <div>
                                <img src={IT} alt="" className='w-[45px] rounded-[50%] border-2 border-[#009fff]'/>
                            </div>
                            <div className='w-full'>
                                <input type="text" placeholder="What's on your mind? " className='rounded-3xl bg-gray-300 px-10 py-2'/>
                            </div>
                        </div>
                        <hr className='mt-1'/>
                        <div className='flex py-1 mt-3 px-[50px] justify-between'>
                            <span className='flex items-center gap-2  cursor-pointer'>
                                <span>
                                    <RiLiveFill size="30px" fill="green"/>
                                </span>
                                <span className='md:inline hidden'>Live Video</span>
                            </span>
                            <span className='flex items-center gap-2 cursor-pointer'>
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
                    <Poster />
                    <Poster />
                </div>
                <div className='lg:hidden block mt-5 text-center mb-[100px]'>
                    <span>Facebook clone by @Horlenggg</span><br />
                    <span>20/04/2023</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;
