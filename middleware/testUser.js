
import { BadRequestError } from '../errors/index.js';


const testUser = (req, res, next) => {

    if (req.user.testUser) {
        throw new BadRequestError('Moderator = Read and Edit Only!');
    }
    next();

};

export default testUser;