import { Schema, model } from "mongoose";


const expenseSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    expenseType: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    
},  { timestamps: true })
const Expense = model('Expense', expenseSchema)
export default Expense
