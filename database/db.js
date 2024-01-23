//rakesh12345
//mongodb+srv://rakeshibm909:rakesh12345@meardatabase.fzh6dii.mongodb.net/eNotebook
import { connect } from "mongoose";
import 'dotenv/config'

const connectToMongo = async () => {
  try {
    await connect(process.env.MONGO_URI);
    // await connect(
    //   "mongodb+srv://rakeshibm909:rakesh12345@meardatabase.fzh6dii.mongodb.net/eNotebook"
    // );
    console.log("----Database connected Successfully");
  } catch (error) {
    console.log(error)
  }
};
export default connectToMongo;
