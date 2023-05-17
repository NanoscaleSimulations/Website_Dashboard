
import { StatusCodes } from "http-status-codes";


const errorHandlerMiddleware = (err, req, res, next) => {

    // Create the object defaultError with the automatic 500 error by the StatusCodes and setup the props msg
    const defaultError = {
        // Provide this err msg in your browser
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, try agian later'
    }
    if (err.name === 'ValidationError') {
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        //defaultError.msg = err.message
        // Set them as an array and iterate over them and join them together as 1 string
        defaultError.msg = Object.values(err.errors)
        .map((item) => item.message)
        .join(', ')

    }
    if (err.code && err.code === 11000) {
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`
    }
    // pass in the object and its prop parameters
    // res.status(defaultError.statusCode).json({ msg: err});
    res.status(defaultError.statusCode).json({ msg: defaultError.msg });

};

export default errorHandlerMiddleware;