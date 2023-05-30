const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://manishpanwar682:b0ElV4zRPpcHZoJ7@cluster0.a2zwtkc.mongodb.net/alldata', {
    
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Db is Connected Successfully");
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;
