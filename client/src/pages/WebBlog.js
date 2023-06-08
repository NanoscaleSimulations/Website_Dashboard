
import React from 'react'
import BlogsContainer from '../components/BlogsContainer';
import { Container } from 'react-bootstrap';


const WebBlog = () => {


    return (
        <div className='blog'>
            <React.Fragment>
                <Container style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div style={{maxWidth:1000, width:1000}}>
                        <h2 className='text-center text-light pt-4'>Newest Blogs</h2>
                        <BlogsContainer isBlogPage={true} />
                    </div>
                </Container>
            </React.Fragment>
        </div>
    );
}


export default WebBlog