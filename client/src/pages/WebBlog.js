
import React from 'react'
import BlogsContainer from '../components/BlogsContainer';


const WebBlog = () => {

  
  return (
    <React.Fragment>
            <div className='blog-info'>
                <h1>
                    Check out our cool <span>blogs..</span>
                </h1>
                <BlogsContainer WebBlog={true} />
            </div>
    </React.Fragment>
);
}


export default WebBlog