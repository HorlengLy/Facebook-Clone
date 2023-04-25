import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome,AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { BsMessenger,BsList } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import IT from "../asset/images/IT.png"
const Header = ({toggleNav,toggleNotification}) => {
    return (
        <div className='z-[100] h-[60px] fixed w-screen border-b border-gray-400 flex items-center bg-white py-2 px-2'>
            <div className='flex-1 lg:flex hidden gap-3'>
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" 
                className='w-[70px]'/>
                <div className='relative w-[60%]'>
                    <span className='absolute left-3 top-3'>
                        <AiOutlineSearch size="25px" fill='gray'/>  
                    </span>
                    <input type="search" placeholder='Search...' className='w-full py-2 rounded-full pl-12 bg-gray-100 focus:ring-1 focus:ring-gray-400'/>
                </div>
            </div>
            <div className="flex-1 flex md:gap-20 gap-14 items-center sm:justify-start justify-center">
                <span className='cursor-pointer'>
                    <AiFillHome size="35" fill='#009fff'/>
                </span>
                <span className='cursor-pointer'>
                    <MdOutlineOndemandVideo size='30px' />
                </span>
            </div>
            <div className='flex-1 flex items-center justify-center gap-5 '>
                <span className='cursor-pointer'>
                    <BsMessenger size="30px" />
                </span>
                <span onClick={toggleNotification} className='md:inline-block hidden relative cursor-pointer bg-gray-200 p-2 rounded-[50%]'>
                    <IoMdNotifications size="30px" />
                    <span className='px-2 text-gray-200 rounded-[50%] absolute bg-red-600 top-0 right-[-2px]'>
                        8
                    </span>
                </span>
                <Link to='/profile/sjshshhs'>
                    <span className='cursor-pointer md:inline-block hidden'>
                        <img src={IT} alt="" className='w-[40px] rounded-[50%] border-2 border-[#009fff]'/>
                    </span>
                </Link>
                <span onClick={toggleNav} className='cursor-pointer lg:hidden block'>
                    <BsList size="35"/>
                </span>
            </div>
        </div>
    );
}

export default Header;
