import mongoose from "mongoose";

const connnectToDatabase = async ()=>{

    try {

        mongoose.set("strictQuery", false);// only to remove deprecationWaring
        const {connection} = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connceted to ${connection.host}`);
        
    } catch (error) {
        console.log(`something went wrong ${error}`);
    }

}

export default connnectToDatabase;