const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./db.js');
const User = require('./models/User.js');

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

connectDB().then(deleteUser);