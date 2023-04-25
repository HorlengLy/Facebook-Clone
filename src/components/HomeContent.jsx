import React from 'react';
import Poster from './Poster';
import YourMind from './YourMind';
const HomeContent = ({togglePost,toggleComment}) => {
    return (
        <div className='py-1 md:px-[20px] px-[5px] z-0'>
            <YourMind togglePost={togglePost}/>
            {/* Post */}
            <Poster toggleComment={toggleComment}/>
            <Poster toggleComment={toggleComment}/>
            <Poster toggleComment={toggleComment}/>
        </div>
    );
}

export default HomeContent;
