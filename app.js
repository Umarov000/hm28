const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
dotenv.config()
const indexRoute = require("./routes");
const PORT = process.env.PORT || 3030

const app = express()
app.use(express.json())
app.use("/api", indexRoute);



async function start() {
    try {
        await mongoose.connect("mongodb://localhost:27017/userss");
        app.listen(PORT, ()=>{
            console.log(`server runninf on port:${PORT}`);
        }) 
    } catch (error) {
        console.log(error);
    }   
}
start()
