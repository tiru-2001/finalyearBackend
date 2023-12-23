import mongoose from "mongoose";
const connectToDatabase = async () => {
  try {
    const result = await mongoose.connect(process.env.MONGOOSE_CONNECTION);
    console.log("connected".bgGreen);
  } catch (e) {
    console.log();
  }
};

export default connectToDatabase;
