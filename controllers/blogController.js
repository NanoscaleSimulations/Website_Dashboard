
import Blog from '../models/Blog.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';



const createBlog = async (req, res) => {

    const { title, subtitle, text, author, readmore, fulltext } = req.body;

    if (!title || !subtitle || !author || !text || !readmore || !fulltext) {
        throw new BadRequestError('Please Provide All Values');
    }

    req.body.createdBy = req.user.userId;

    const blog = await Blog.create(req.body);
    res.status(StatusCodes.CREATED).json({ blog });
}

const getAllBlogs = async (req, res) => {
    
    const queryObject = {
        createdBy: req.user.userId,
    };
    // add stuff based on condition

    // NO AWAIT

    let result = Blog.find(queryObject);

    // setup pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const blogs = await result;

    const totalBlogs = await Blog.countDocuments(queryObject);
    const numOfPages = Math.ceil(totalBlogs / limit);

    res.status(StatusCodes.OK).json({ blogs, totalBlogs, numOfPages });
}

// Update job details
const updateBlog = async (req, res) => {

    const { id: blogId } = req.params;
    const { title, subtitle, text, author, fulltext, readmore } = req.body;

    if (!title || !subtitle || !author || !text || !readmore || !fulltext) {
        throw new BadRequestError('Please provide all values');
    }
    const blog = await Blog.findOne({ _id: blogId });

    if (!blog) {
        throw new NotFoundError(`No blog with id :${blogId}`);
    }

    // check permissions
    checkPermissions(req.user, blog.createdBy);

    const updatedBlog = await Blog.findOneAndUpdate({ _id: blogId }, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(StatusCodes.OK).json({ updatedBlog });

};


// Delete a selected job
const deleteBlog = async (req, res) => {

    const { id: blogId } = req.params;

    const blog = await Blog.findOneAndDelete({ _id: blogId });

    if (!blog) {
        throw new NotFoundError(`No blog with id :${blogId}`);
    }

    checkPermissions(req.user, blog.createdBy);

    // await blog.remove();

    res.status(StatusCodes.OK).json({ msg: 'Success! Blog removed' });

};




export { createBlog, deleteBlog, getAllBlogs, updateBlog,}