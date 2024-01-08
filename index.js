import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import expenseRoute from './routes/expenseRoute.js'
dotenv.config()
const port = process.env.PORT || 8000
const mongoUri = process.env.MONGO_URI
const app = express()

const corsOptions = {
    origin:true,
    credentials: true
}
mongoose.set('strictQuery', false)
const connection = async()=>{
    try{
        mongoose.connect(mongoUri)
        console.log("Connected to db")
    }catch(err){
        console.log(err)
    }

}

app.use(express.json())
app.use(cors(corsOptions))
app.use('/api/v1/expenses', expenseRoute)
app.listen(port, ()=> {
    connection()
    console.log(`Connected on port ${port}`)
})