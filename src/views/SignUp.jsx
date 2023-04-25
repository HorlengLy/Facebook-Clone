import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import {FcWiFiLogo} from "react-icons/fc"
import {RiLockPasswordLine} from "react-icons/ri"
import {MdOutlineMailLock} from "react-icons/md"
import {BsFacebook,BsFillSendCheckFill} from "react-icons/bs"
import {AiOutlineArrowRight} from "react-icons/ai"
import {IoLogoGoogle} from "react-icons/io5"
const SignUp = () => {
    useEffect(()=>{
        const inputs = document.querySelectorAll('.otp')
        inputs.forEach((input,index1)=>{
            input.addEventListener('keyup',(e)=>{
                const prevousInput = input.previousElementSibling
                const currentInput = input
                const nextInput = input.nextElementSibling
                if(currentInput.value.toString().length>1 ){
                    currentInput.value = ''
                    return 
                }
                if(currentInput.value && nextInput && nextInput.hasAttribute('disabled')){
                    nextInput.removeAttribute('disabled')
                    nextInput.focus()
                }
                if(e.key==='Backspace'){
                    inputs.forEach((ele,index2)=>{
                        if(index2>=index1 && prevousInput){
                            currentInput.value = ""
                            ele.setAttribute('disabled',true)
                            prevousInput.focus()
                        }
                    })
                }
            })
    
        })
    },[])
    
    return (
        <>
            <div className="overflow-hidden xl:w-[80%] sm:w-[90%] w-[95%] lg:h-[85vh] h-[100vh] bg-white mx-auto rounded shadow-[0px_5px_5px_rgba(0,0,0,0.2)] flex lg:flex-row flex-col-reverse lg:mt-12">
                <div className="relative flex-1 p-[20px] lg:rounded-l bg-gradient-to-r from-[#00b09b] to-[#96c93d] lg:flex hidden justify-center items-center">
                    <span className="absolute left-5 top-5">
                        <FcWiFiLogo size='50'/>
                    </span>
                    <div className="flex flex-col  items-center">
                        <div className="mb-10">
                            <span className="text-[30px] font-bold flex justify-center text-gray-100 font-mono tracking-widest first-letter:text-[50px]">
                                Wellcome
                            </span>
                            <span className="text-gray-100 mt-2 text-sm px-[50px] text-center flex justify-center">
                                enjoy with khmer social media, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, commodi?
                            </span>
                        </div>
                        <Link to="/login">
                            <button className="w-[150px] hover:scale-[1.05] hover:shadow-hoverShadow mx-auto rounded-full bg-[#6da709] hover:bg-[#7fbe12] text-gray-100">
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="animate-FormAnimate relative flex-1 p-[20px] flex flex-col items-center justify-center">

                    <div className="mt-16 lg:w-[70%] sm:w-[80%] w-full mx-auto flex flex-col gap-10">
                        <span className=" text-[30px] text-cyan-600 flex justify-center font-mono">Register</span>
                        <div className="relative">
                            <span className="absolute top-[10px] left-4">
                                <MdOutlineMailLock size="20"/>
                            </span>
                            <input type="text" id="email" required placeholder="Your email address...." autoComplete="off"
                            className="peer bg-gray-100 placeholder:invisible focus:placeholder:visible px-12 rounded-l"/>
                            <label htmlFor="email" className="absolute tracking-wide left-12 top-[10px] peer-focus:top-[-30px] peer-valid:left-0 peer-valid:top-[-30px] peer-focus:left-0 peer-focus:text-sky-600 peer-valid:text-sky-600 transition-all duration-200">Email</label>
                        </div>
                        <div className="relative">
                            <span className="absolute top-[10px] left-4">
                                <RiLockPasswordLine size="20"/>
                            </span>
                            <input type="password" id="password" required placeholder="Your password...." autoComplete="off" 
                            className="peer bg-gray-100 rounded placeholder:invisible focus:placeholder:visible px-12"/>
                            <label htmlFor="password" className="absolute tracking-wide left-12 top-[10px] peer-focus:top-[-30px] peer-valid:left-0 peer-valid:top-[-30px] peer-focus:left-0 peer-focus:text-sky-600 peer-valid:text-sky-600 transition-all duration-200">
                                New Password
                            </label>
                        </div>
                        <div className="relative">
                            <span className="absolute top-[10px] left-4">
                                <RiLockPasswordLine size="20"/>
                            </span>
                            <input type="password" id="con-pass" required placeholder="Your password...." autoComplete="off" 
                            className="peer bg-gray-100 rounded placeholder:invisible focus:placeholder:visible px-12"/>
                            <label htmlFor="con-passs" className="absolute tracking-wide left-12 top-[10px] peer-focus:top-[-30px] peer-valid:left-0 peer-valid:top-[-30px] peer-focus:left-0 peer-focus:text-sky-600 peer-valid:text-sky-600 transition-all duration-200">
                                Confirm Password
                            </label>
                        </div>
                        <button className="w-[150px] hover:scale-[1.05] hover:shadow-hoverShadow mx-auto rounded-full bg-[#6da709] hover:bg-[#7fbe12] text-gray-100 ">
                            Send OTP
                        </button>
                        <div className="flex gap-10 justify-center">
                            <div className="relative">
                                <span className="peer cursor-pointer">
                                    <BsFacebook size="30px" fill="#0d47a1"/>
                                </span>
                                <span className="peer-hover:visible invisible text-sm py-1 bg-gray-400 px-4 rounded-full text-[#0d47a1] transition-all duration-500 absolute left-[-100%] top-[-30px]">  
                                    Facebook
                                </span>
                            </div>
                            <div className="relative">
                                <span className="cursor-pointer peer">
                                    <IoLogoGoogle size="30px" fill="#f57c00"/>
                                </span>
                                <span className="peer-hover:visible invisible text-sm py-1 bg-gray-400 px-4 rounded-full text-[#f57c00] transition-all duration-500 absolute left-0 top-[-30px]">  
                                    Google
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='hidden mt-16 lg:w-[70%] sm:w-[80%] w-full mx-auto '>
                        <div className='w-fit mx-auto bg-[#6da709] rounded-[50%] top-[10%] absolute left-[50%] translate-x-[-50%] p-10'>
                            <BsFillSendCheckFill size="50" fill='skyblue'/>
                        </div>
                        <h4 className='text-[30px] mx-auto font-bold flex text-sky-600 justify-center tracking-widest mt-12'>Verfiy OPT</h4>
                        <div className='flex w-[200px] gap-2 mx-auto mt-10'>
                            <input type="number" className='otp font-bold text-[30px] border rounded-lg text-center' autoComplete='off'/>
                            <input type="number" disabled className='otp font-bold text-[30px] border rounded-lg text-center' autoComplete='off'/>
                            <input type="number" disabled className='otp font-bold text-[30px] border rounded-lg text-center' autoComplete='off'/>
                            <input type="number" disabled className='otp font-bold text-[30px] border rounded-lg text-center' autoComplete='off'/>
                        </div>
                        <div className='flex justify-center gap-5'>
                            <button className='w-[150px] mt-10 flex items-center justify-center gap-1 hover:scale-[1.05] hover:shadow-[0px_0px_10px_red] mx-auto rounded-full bg-red-600 hover:bg-red-500 text-gray-100'>
                                Back
                            </button>
                            <button className='w-[150px] mt-10 flex items-center justify-center gap-1 hover:scale-[1.05] hover:shadow-hoverShadow mx-auto rounded-full bg-[#6da709] hover:bg-[#7fbe12] text-gray-100'>
                                Verify OTP
                                <span>
                                    <AiOutlineArrowRight size="25px" fill='skyblue'/>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default SignUp;
