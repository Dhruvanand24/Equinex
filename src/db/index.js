import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

import { MaterialRequest } from "../models/materialRequest.model.js";
import { materialRequestData } from "./materialRequestData.js";

const connectDB = async () => {
    try {
        console.log(process.env.MONGODB_URI)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB  HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB

// ------------------Inserting Data------------------------------------------

const initDB = async () => {
    // await Listing.deleteMany({});
    // initdata.data = initdata.data.map((obj) => ({...obj, owner: "6552fde9e4eaa714cd92b989"}));
    await MaterialRequest.insertMany(materialRequestData);
    console.log("Data Inserted");
}

initDB();