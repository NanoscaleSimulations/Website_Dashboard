
import React from 'react'
import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import WebBlog from './WebBlog';
import Wrapper from '../assets/wrappers/JobsContainer';
import PageBtnContainer from './PageBtnContainer';



const WebBlogContainer = () => {

    const { getJobs, jobs, isLoading, page, totalJobs, numOfPages } = useAppContext();
    useEffect(() => {
        getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    if (isLoading) {
        return <Loading center />;
    }
    if (jobs.length === 0) {
        return (
        <Wrapper>
            <h2>No jobs to display...</h2>
        </Wrapper>
        );
    }
    return (
        <Wrapper>
            <h5>
                {totalJobs} job{jobs.length > 1 && 's'} found
            </h5>
            <div className='jobs'>
                {jobs.map((job) => {
                return <WebBlog key={job._id} {...job} />;
                })}
            </div>
            {numOfPages > 1 && <PageBtnContainer />}
        </Wrapper>
    );
    
};

export default WebBlogContainer;
