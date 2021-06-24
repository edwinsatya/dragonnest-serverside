const mongoose = require("mongoose");
const mongouri = process.env.MONGO_URI;

module.exports = () => {
  mongoose.connect(
    mongouri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) console.log("Failed To Connect DB");
      else console.log(`Connected To DB`);
    }
  );
};
