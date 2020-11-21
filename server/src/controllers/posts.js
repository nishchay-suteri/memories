const Post = require("../models/Post");

const postsGetController = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const postsPostController = async (req, res) => {
    const post = new Post({
        title: req.body.title,
        message: req.body.message,
        creator: req.body.creator,
        tags: req.body.tags,
        selectedFile: req.body.selectedFile,
        likeCount: req.body.likeCount,
    });
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

module.exports = {
    postsGetController,
    postsPostController,
};
