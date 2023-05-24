import express from 'express';
const router = express.Router();

import {
    getAllBlogs
} from '../controllers/blogsController.js';

router.route('/').get(getAllBlogs);

export default router;