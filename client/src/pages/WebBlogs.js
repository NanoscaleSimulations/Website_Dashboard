import React from 'react';
import Wrapper from '../assets/wrappers/LandingPage';
import WebBlogContainer from '../components/WebBlogContainer';

const WebBlogs = () => {


    return (
        <Wrapper>
            <div className=''>
                {/* INFO */}
                <div className=''>
                    <h1 style={{textAlign:'center', padding: 5}}>Our Blogs</h1>
                    <WebBlogContainer/>
                </div>
            </div>
        </Wrapper>
    );
};


export default WebBlogs;
