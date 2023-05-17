
import express from 'express';
const router = express.Router();

import { createJob, deleteJob, updateJob, showStats, getAllJobs } from "../controllers/jobsController.js";
import testUser from '../middleware/testUser.js';

// API ROUTES FOR JOBS
router.route('/').post(testUser, createJob).get(getAllJobs)
router.route('/stats').get(showStats)
router.route('/:id').delete(testUser, deleteJob).patch(updateJob)

export default router;
