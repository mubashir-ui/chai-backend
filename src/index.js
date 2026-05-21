import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env"
});


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port:${process.env.PORT}`);
        app.on("ERROR",(error)=>{
            console.log("Error",error);
            throw error
            
        })
        
    })
})
.catch((error)=>{
    console.log(`Error is from app .js`,error)
})



















// import express from "express"
// const app = express()
// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//         app.on("ERROR", (error)=>{
//             console.log("ERROR",error);
//             throw err    
//         });
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port ${process.env.PORT}`);
            
//         })
        
//     } catch (error) {
//         console.log(error);
//         throw err
//     }
// })()