import React, { useRef } from 'react';
// import Loading from '../components/Loading';
import Header from '../components/Header';
import SubNavLeft from '../components/SubNavLeft';
import SubNavRight from '../components/SubNavRight';
import SubNav from '../components/SubNav';
import HomeContent from '../components/HomeContent';
import Post from '../components/Post';
import CommentLayout from '../components/CommentLayout';
import Notifications from '../components/Notifications';
const Home = () => {
    const nav = useRef(null)
    const post = useRef(null)
    const comment = useRef(null)
    const noti = useRef(null)
    function toggleNav(){
        nav.current.classList.toggle('right-[-5000px]');
        nav.current.classList.toggle('right-0');
    }
    function togglePost(){
        post.current.classList.toggle('top-[-1000px]')
        post.current.classList.toggle('top-[80px]')
    }
    function toggleComment(){
        comment.current.classList.toggle('top-[-1000px]')
        comment.current.classList.toggle('top-[60px]')
    }
    function toggleNotification(){
        noti.current.classList.toggle('right-[-1000px]')
        noti.current.classList.toggle('right-0')
    }
    return (
        <div className='w-screen h-screen'>
            <Header toggleNav={toggleNav} toggleNotification={toggleNotification}/>
            <div ref={nav} className='fixed z-[1000] lg:hidden block transition-all duration-300 ease-out md:w-[30%] sm:w-[40%] w-[70%] right-[-5000px] p-5 shadow-[0px_0px_3px_rgba(0,0,0,0.1)] bg-white h-full'>
                <SubNav toggleNav={toggleNav} toggleNotification={toggleNotification}/>
            </div>
            <div className='lg:block hidden fixed h-full bg-white left-0 w-[25%] top-[62px]'>
                <SubNavLeft />
            </div>
            <div className='lg:block hidden fixed right-0 bg-white lg:w-[25%] top-[62px] h-full z-50'>
                <SubNavRight />
            </div>
            <div ref={noti} className='lg:w-[25%] sm:w-[50%] w-[80%] fixed right-[-1000px] h-[100vh] bg-white z-[1000] py-8 px-[20px] shadow-[0px_0px_3px_rgba(0,0,0,0.1)] transition-all duration-300'>
                <Notifications toggleNotification={toggleNotification}/>
            </div>
            {/* home page layout */}
            
            <div className='lg:w-[50%] md:w-[80%] w-[98%] h-full mx-auto py-[60px]'>
                <HomeContent togglePost={togglePost} toggleComment={toggleComment}/>
                <div ref={post} className='py-[20px] lg:w-[40%] sm:w-[70%] w-[95%] fixed bg-white top-[-1000px] left-0  right-0 mx-auto rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.2)] transition-all duration-300'>
                    <Post togglePost={togglePost}/>
                </div>
                <div ref={comment} className='py-[20px] lg:w-[50%] sm:w-[70%] w-[95%] fixed bg-white top-[-1000px] left-0  right-0 mx-auto rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.2)] transition-all duration-300'>
                    <CommentLayout toggleComment={toggleComment}/>
                </div>
                <div className='text-center py-5'>
                    <span>Facebook clone by @Horlenggg</span><br />
                    <span>20/04/2023</span>
                </div>
            </div>
            
        </div>
    )
}

export default Home;
