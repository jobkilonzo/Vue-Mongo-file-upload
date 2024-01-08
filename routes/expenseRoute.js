import express from 'express'
import {createExpense, getExpenses, deleteExpenses, updateExpenses} from '../controller/expenseController.js'
const router = express.Router()

router.post('/createExpense', createExpense)
router.get('/', getExpenses)
router.delete('/deleteExpenses/:id', deleteExpenses)
router.put('/updateExpenses/:id', updateExpenses)
export default router