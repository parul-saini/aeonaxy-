import  mongoose  from "mongoose";

const DbConnect = async()=>{
    try {
        const db = await mongoose.connect(`${process.env.MongoDb_url}`);
        console.log(`Connected with database successfully!`);
    } catch (error) {
        console.log(error);
        console.log(`Failed to connect with database `);
    }
}

export default DbConnect;