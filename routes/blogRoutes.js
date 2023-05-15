
import express from 'express';
const router = express.Router();

import { createBlog, deleteBlog, updateBlog, getAllBlogs } from "../controllers/blogController.js";


// API ROUTES FOR JOBS
router.route('/').post(createBlog).get(getAllBlogs)
router.route('/:id').delete(deleteBlog).patch(updateBlog)

export default router;