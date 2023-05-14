import mongoose from "mongoose";


const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title'],
            minLength: 3,
            maxLength: 30,
            trim: true,
        },
        subtitle: {
            type: String,
            required: [true, 'Please provide a subtitle'],
            minLength: 3,
            maxLength: 30,
            trim: true,
        },
        author: {
            type: String,
            required: [true, 'Please provide author'],
            minLength: 6,
            trim: true,
        },
        text: {
            type: String,
            required: [true, 'Please provide a text'],
            trim: true,
            
        },
        readmore: {
            type: String,
            required: [true, 'Please provide a read more'],
            trim: true,
            
        },
        fulltext: {
            type: String,
            required: [true, 'Please provide a full text'],
            trim: true,

        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please provide user'],
        },
    },
    { timestamps: true }
);



export default mongoose.model('Blog', BlogSchema); 