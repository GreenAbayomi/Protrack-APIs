require("dotenv").config()
const app = require('./app')
const { connectDB } = require("./src/config/db.config")
const PORT = process.env.PORT || 8000


const start = async()=>{
    try {        
        await connectDB()
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}...`);
        })       
    } catch (err) {
        console.log(`Error: ${err.message}`);       
    }
}
start()






