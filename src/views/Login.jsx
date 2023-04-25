import { Link } from "react-router-dom"
import {FcWiFiLogo} from "react-icons/fc"
import {RiLockPasswordLine} from "react-icons/ri"
import {MdOutlineMailLock} from "react-icons/md"
import {BsFacebook} from "react-icons/bs"
import {IoLogoGoogle} from "react-icons/io5"
function Auth(){
    return (
        <>
            <div className="overflow-hidden xl:w-[80%] sm:w-[90%] w-full lg:h-[85vh] h-screen bg-white mx-auto rounded shadow-[0px_5px_5px_rgba(0,0,0,0.2)] flex lg:flex-row flex-col lg:mt-12">
                <div className="relative flex-1  p-[20px] lg:rounded-l bg-gradient-to-r from-[#00b09b] to-[#96c93d] lg:flex hidden justify-center items-center">
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
                        <Link to="/signup">
                            <button className="w-[150px] hover:scale-[1.05] hover:shadow-hoverShadow mx-auto rounded-full bg-[#6da709] hover:bg-[#7fbe12] text-gray-100">Sign Up</button>
                        </Link>
                    </div>
                </div>
                <div className="animate-FormAnimate flex-1 p-[20px] flex flex-col items-center justify-center">
                    <span className=" text-[35px] text-cyan-600 flex justify-center font-mono tracking-widest">Login</span>

                    <div className="mt-16 xl:w-[60%] sm:w-[80%] w-full mx-auto flex flex-col gap-10">
                        <div className="relative">
                            <span className="absolute top-[10px] left-4">
                                <MdOutlineMailLock size="20"/>
                            </span>
                            <input type="text" id="email" required placeholder="Your email address...." autoComplete="off" 
                            className="peer bg-gray-100 placeholder:invisible focus:placeholder:visible pl-12"/>
                            <label htmlFor="email" className="absolute tracking-wide left-12 top-[10px] peer-focus:top-[-30px] peer-valid:left-0 peer-valid:top-[-30px] peer-focus:left-0 peer-focus:text-sky-600 peer-valid:text-sky-600 transition-all duration-200">Email</label>
                        </div>
                        <div className="relative">
                            <span className="absolute top-[10px] left-4">
                                <RiLockPasswordLine size="20"/>
                            </span>
                            <input type="text" id="password" required placeholder="Your password...." autoComplete="off" 
                            className="peer bg-gray-100 placeholder:invisible focus:placeholder:visible px-12"/>
                            <label htmlFor="password" className="absolute tracking-wide left-12 top-[10px] peer-focus:top-[-30px] peer-valid:left-0 peer-valid:top-[-30px] peer-focus:left-0 peer-focus:text-sky-600 peer-valid:text-sky-600 transition-all duration-200">
                                Password
                            </label>
                        <div className="flex mt-5 justify-between items-center">
                            <span className="flex gap-2 items-center">
                                <input type="checkbox" id="checkbox" className="peer"/>
                                <label htmlFor="checkbox" className="text-sm peer-checked:text-sky-600">Remember me letter</label>
                            </span>
                            <Link to="#">
                                <span className="text-sm text-blue-700 cursor-pointer underline" >
                                    forgot password?
                                </span>
                            </Link>
                        </div>
                        </div>
                        <button className="w-[150px] hover:scale-[1.05] hover:shadow-hoverShadow mx-auto rounded-full bg-[#6da709] hover:bg-[#7fbe12] text-gray-100">
                            Login
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
                        <div className="flex justify-center lg:hidden">
                            <span>Did not have account?</span>
                            <Link>
                                <span className="text-blue-700 ml-2 cursor-pointer underline">Register now</span>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
  };

  export default Auth;
  