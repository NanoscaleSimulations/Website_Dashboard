
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import 'express-async-errors';
import morgan from 'morgan';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

// COOKIE
import cookieParser from 'cookie-parser';

// DB AND AUTH
import connectDB from './db/connect.js';

// ROUTERS
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRouter.js';
import blogsRouter from './routes/blogsRouter.js';

// MIDDLEWARE
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js';

if(process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

// only when ready to deploy
app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('/', (req, res) => {
    res.json({msg: 'Welcome!'});
});
app.get('/api/v1', (req, res) => {
    res.json({msg: 'API!'});
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);
app.use('/api/v1/blogs', authenticateUser, blogsRouter);

// only when ready to deploy
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

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