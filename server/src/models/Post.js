const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 255,
        },
        message: {
            type: String,
            required: true,
            minLength: 1,
        },
        creator: {
            type: String,
            required: true,
        },
        tags: {
            type: [String],
            default: [],
        },
        selectedFile: {
            type: String,
            required: true,
        },
        likeCount: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Post", PostSchema);
