const express = require('express');
const router = express.Router();

const Post = require('../models/Post.js');

// get posts
router.get('/', async (req, res) => {
    const posts = await Post.find().populate('author','name')
    res.json({message: "posts fetched!", posts})
})

//create post
router.post('/', async (req, res) => {
    const post = await Post.create(req.body);
    res.json({message: "post create!", post})
})

module.exports = router;