const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB is Connected`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
