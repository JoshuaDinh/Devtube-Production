const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("mongoDB Connected");
  } catch (err) {
    console.error(err.message);
    // Exit Process With Failure
    process.exit(1);
  }
};

module.exports = connectDB;
