
import express from 'express';
const router = express.Router();

import { createJob, deleteJob, updateJob, showStats, getAllJobs } from "../controllers/jobsController.js";


// API ROUTES FOR JOBS
router.route('/').post(createJob).get(getAllJobs)
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router;
