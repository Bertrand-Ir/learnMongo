const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./db.js');
const User = require('./models/User.js');
const Post = require('./models/Post.js');
const Comment = require('./models/Comment.js')

//create
const createUser = async () => {
    const result = await User.create({
        name: "bertrand",
        email: "bertrand@gmail.com",
        phone: 788422766
    });

    console.log('user added successfully'+result)
}

//read
const readUser = async () => {
    const result = await User.find();

    console.log('our data are: '+result);
}

//update
const updateUser = async () => {
    const result = await User.findByIdAndUpdate("69c3966cd4841c8d9fb8cd56", {
        name: "random"
    })

    console.log('user updated successfully'+result)
}

//delete
const deleteUser = async () => {
    await User.findByIdAndDelete("69c3966cd4841c8d9fb8cd56")

    console.log('user deleted successfully')
}


//seed blog data
const seedData = async () => {
    //clear database
    await User.deleteMany();
    await Post.deleteMany();
    await Comment.deleteMany();

    console.log('data cleared successfully')

    //create account
    const user1 = await User.create({
        name: "Riza",
        email: "riza@gmail.com",
        phone: 700000000
    })

    const user2 = await User.create({
        name: "Joyce",
        email: "joyce@gmail.com",
        phone: 788888888
    })

    console.log('accounts created successfully');


    //create a post
    const post1 = await Post.create({
        title: "Let me ask you something!",
        body: "How is the internship sofar?",
        author: user1._id
    })

    console.log('post was added successfully')

    //create a comment
    const comment1 = await Comment.create({
        text: "Super Excited!",
        author: user2._id,
        post: post1._id
    })

    const comment2 = await Comment.create({
        text: "Me too!",
        author: user1._id,
        post: post1._id
    })

    console.log("comments added successful")

    //read post with populate
    const readPost = await Post.find().populate('author','name');
    console.log("posts are: "+readPost)

    //read comment with populate
    const readcomment = await Comment.find()
        .populate('author','name')
        .populate('post','title');

    console.log('comments are: '+readcomment)

}

connectDB().then(seedData);