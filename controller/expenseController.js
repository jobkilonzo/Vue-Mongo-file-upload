import Expense from "../models/Expense.js"
export  const createExpense = async (req, res) =>{
    const newExpense = new Expense(req.body)

    try{
        const savedExpense = await newExpense.save()
        res.status(200).json({success: true, message: "Expense saved successfully", data: savedExpense})
    }catch(err){
        res.status(500).json({success: false, message: err})
    }
}

export const getExpenses= async (req, res) => {
    try{
        const expenses = await Expense.find({})
    res.status(200).json({success: true, message: "Fetched expenses successfull", data: expenses})
    }catch(err){
        res.status(500).json({success: false, message: err})
    }
}


export const deleteExpenses= async (req, res) => {
    const id = req.params.id
    try{
        
        await Expense.findByIdAndDelete(id)
        res.status(200).json({success: true, message: "Deleted expense successfull"})
    }catch(err){
        res.status(500).json({success: false, message: err})
    }
}


export const updateExpenses= async (req, res) => {
    const id = req.params.id
    try{
       
        const expenses = await Expense.findByIdAndUpdate(id,
            {
                $set: req.body
            }, {new:true})
    res.status(200).json({success: true, message: "Expense updated successfull", data: expenses})
    }catch(err){
        res.status(500).json({success: false, message: err})
    }
}