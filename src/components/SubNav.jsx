import React from 'react';
import {AiOutlineClose} from "react-icons/ai"
const SubNav = ({toggleNav,toggleNotification}) => {
    return (
        <div className='py-7'>
            <span onClick={toggleNav} className='absolute right-5 top-5 cursor-pointer p-2 rounded-[50%] bg-gray-300 hover:bg-gray-200'>
                <AiOutlineClose size="25px" />
            </span>
            <h1 className='text-[25px] font-medium'>Navigations</h1>
            <ul className='mt-5'>
                <li onClick={toggleNav} className='capitalize py-2 px-4 hover:bg-gray-200 rounded cursor-pointer'>
                    profile
                </li>
                <li onClick={()=>{toggleNav();toggleNotification()}} className='capitalize py-2 px-4 hover:bg-gray-200 rounded cursor-pointer'>
                    Notifications
                </li>
                <li onClick={toggleNav} className='capitalize py-2 px-4 hover:bg-gray-200 rounded cursor-pointer'>
                    Friends
                </li>
                <li onClick={toggleNav} className='capitalize py-2 px-4 hover:bg-gray-200 rounded cursor-pointer'>
                    groups
                </li>
                <li onClick={toggleNav} className='capitalize py-2 px-4 hover:bg-gray-200 rounded cursor-pointer'>
                    friend request
                </li>
                <li onClick={toggleNav} className='capitalize py-2 px-4 hover:bg-gray-200 rounded cursor-pointer'>
                    friend Active
                </li>
            </ul>
        </div>
    );
}

export default SubNav;
