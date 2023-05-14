
import express from 'express';
const router = express.Router();

import { createBlog, deleteBlog, updateBlog, showStats, getAllBlogs } from "../controllers/blogController.js";


// API ROUTES FOR JOBS
router.route('/').post(createBlog).get(getAllBlogs)
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteBlog).patch(updateBlog)

export default router;