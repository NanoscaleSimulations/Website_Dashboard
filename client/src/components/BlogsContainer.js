

import React from 'react'
import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Blog from './Blog';
import Wrapper from '../assets/wrappers/JobsContainer';



const BlogsContainer = () => {

    const { getBlogs, blogs, isLoading, page, totalBlogs } = useAppContext();
    
    useEffect(() => {
        getBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return <Loading center />;
    }
    if (blogs.length === 0) {
        return (
        <Wrapper>
            <h2>No blog to display...</h2>
        </Wrapper>
        );
    }
    return (
        <Wrapper>
            <h5>
                {totalBlogs} blog{blogs.length > 1 && 's'} found
            </h5>
            <div className='jobs'>
                {blogs.map((blog) => {
                return <Blog key={blog._id} {...blog} />;
                })}
            </div>
        </Wrapper>
    );
    
};

export default BlogsContainer;
