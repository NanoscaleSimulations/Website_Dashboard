
import React from 'react'
import { FormRow, Alert, } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';


const Blogs = () => {

    const {
        isLoading,
        isEditing,
        showAlert,
        displayAlert,
        title,
        subtitle,
        author,
        text,
        fulltext, 
        readmore,
        handleChange,
        clearValues, 
        createBlog
    } = useAppContext();


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !subtitle || !author || !text || !fulltext || !readmore) {
            displayAlert()
            return
        }
        if (isEditing) {
            // eventually editJob()
            return;
        }
        createBlog();
    };

    const handleBlogInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        handleChange({ name, value })
        //console.log(`${name}:${value}`);
    };

    return (
        <Wrapper>
            <form className='form'>
                <h3>{isEditing ? 'edit blog' : 'add blog'} </h3>
                {showAlert && <Alert />}

                {/* title */}
                <div className='form-center'>
                    <FormRow
                        type='text'
                        name='title'
                        value={title}
                        handleChange={handleBlogInput}
                    />

                    {/* subtitle */}
                    <FormRow
                        type='text'
                        name='subtitle'
                        value={subtitle}
                        handleChange={handleBlogInput}
                    />

                    {/* author */}
                    <FormRow
                        type='text'
                        name='author'
                        value={author}
                        handleChange={handleBlogInput}
                    />

                    {/* text */}
                    <FormRow
                        type='text'
                        name='text'
                        value={text}
                        handleChange={handleBlogInput}
                    />

                    {/* fulltext */}
                    <FormRow
                        type='text'
                        name='fulltext'
                        value={fulltext}
                        handleChange={handleBlogInput}
                    />

                    {/* read more */}
                    <FormRow
                        type='text'
                        name='readmore'
                        value={readmore}
                        handleChange={handleBlogInput}
                    />

                
                    <div className='btn-container'>
                        <button className='btn btn-block submit-btn' type='submit' onClick={handleSubmit} disabled={isLoading} >
                            submit
                        </button>
                        <button className='btn btn-block clear-btn' onClick={(e) => { 
                            e.preventDefault();
                            clearValues();
                        }} >
                            clear
                        </button>
                    </div>
                </div>
            </form>
        </Wrapper>
    );

};

export default Blogs;
