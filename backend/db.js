const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://sriramn44:test123@school-managment.vrrst.mongodb.net/schoolDB?retryWrites=true&w=majority&appName=school-managment");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;