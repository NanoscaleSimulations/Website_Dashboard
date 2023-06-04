import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title'],
            minLength: 3,
            maxLength: 30,
        },
        subtitle: {
            type: String,
            required: [true, 'Please provide a subtitle'],
            minLength: 3,
            maxLength: 30,
        },
        author: {
            type: String,
            required: [true, 'Please provide author'],
            minLength: 6,
        },
        description: {
            type: String,
            required: [true, 'Please provide a text'],
        },
        readmore: {
            type: String,
            required: [true, 'Please provide a read more'],
        },
        fulltext: {
            type: String,
            required: [true, 'Please provide a full text'],
        },
        blogImage: {
            type: String,
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please provide user'],
        },
    },
    { timestamps: true }
)

export default mongoose.model('Blog', BlogSchema)
