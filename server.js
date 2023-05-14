
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import 'express-async-errors';
import morgan from 'morgan';

// DB AND AUTH
import connectDB from './db/connect.js';

// ROUTERS
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRouter.js';
import blogRouter from './routes/blogRoutes.js';

// MIDDLEWARE
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js';

if(process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}
app.use(express.json());

app.get('/', (req, res) => {
    res.json({msg: 'Welcome!'});
});
app.get('/api/v1', (req, res) => {
    res.json({msg: 'API!'});
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);
app.use('/api/v1/blog', authenticateUser, blogRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


// ENV FILE
const port = process.env.PORT || 5000;


// DB CONNECT FILE
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) { 
        console.log(error);
    }
};

start();