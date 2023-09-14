const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`# Database connection established`);
    console.log(` - Database connected to the HOST: `, connect.connection.host);
    console.log(` - Database connected with the NAME: `,connect.connection.name);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
