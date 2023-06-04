
import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});


export default mongoose.model('Email', EmailSchema);