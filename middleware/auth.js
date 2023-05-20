
import jwt from 'jsonwebtoken';
import { UnauthenticatedError } from '../errors/index.js';

UnauthenticatedError;
const auth = async (req, res, next) => {

    // Cookies
    const token = req.cookies.token;
    if (!token) {
        throw new UnauthenticatedError('Authentication Invalid');
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        // TEST USER
        const testUser = payload.userId === '6465298aaba87fbb9418fdb5';
        req.user = { userId: payload.userId, testUser };
        next();
    } catch (error) {
        throw new UnauthenticatedError('Authentication invalid');
    }

};


export default auth;
