import React from 'react';
import IT from "../asset/images/IT.png"
import {FaUserFriends} from "react-icons/fa"
import {GrGroup} from "react-icons/gr"
import {AiFillFile} from "react-icons/ai"
import { Link } from 'react-router-dom';
const SubNavLeft = () => {
    return (
        <div className='py-10 px-2 w-[90%]'>
            <ul>
                <Link to='/profile/sjhhhd'>
                    <li className='flex gap-4 items-center cursor-pointer py-2 px-4 hover:bg-gray-100 rounded-lg transition-all duration-200'>
                        <img src={IT} alt="" className='w-[40px] rounded-[50%]  border-2 border-[#009fff]'/>
                        <span className='capitalize font-bold'>Horleng Ly</span>
                    </li>
                </Link>
                <li className='flex gap-4 items-center cursor-pointer py-2 px-4 hover:bg-gray-100 rounded-lg transition-all duration-200'>
                    <FaUserFriends size="30px" fill='#009fff'/>
                    <span className='capitalize font-bold'>Friend</span>
                </li>
                <li className='flex gap-4 items-center cursor-pointer py-2 px-4 hover:bg-gray-100 rounded-lg transition-all duration-200'>
                    <GrGroup size="30px" fill='#009fff' stroke='#009fff'/>
                    <span className='capitalize font-bold'>Groups</span>
                </li>
                <li className='flex gap-4 items-center cursor-pointer py-2 px-4 hover:bg-gray-100 rounded-lg transition-all duration-200'>
                    <AiFillFile size="30px" fill='#009fff'/>
                    <span className='capitalize font-bold'>Saved</span>
                </li>
            </ul>
            
        </div>
    );
}

export default SubNavLeft;
