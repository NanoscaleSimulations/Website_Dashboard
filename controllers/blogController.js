
import Blog from '../models/Blog.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';



const createBlog = async (req, res) => {

    const { title, subtitle, text, author, readmore, fulltext } = req.body;

    if (!title || !text || !subtitle || !author || !readmore || !fulltext) {
        throw new BadRequestError('Please Provide All Values');
    }

    req.body.createdBy = req.user.userId;

    const blog = await Blog.create(req.body);
    res.status(StatusCodes.CREATED).json({ blog });
}


const deleteBlog = async (req, res) => {
    res.send('delete blog')
}


const getAllBlogs = async (req, res) => {
    res.send('get all blogs')
}


const updateBlog = async (req, res) => {
    res.send('update blog')
}


const showStats = async (req, res) => {
    res.send('show stats')
}


export { createBlog, deleteBlog, getAllBlogs, updateBlog, showStats }