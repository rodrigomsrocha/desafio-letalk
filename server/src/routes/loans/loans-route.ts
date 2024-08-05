import express from "express"
import { createLoanController, getAllLoansController, getLoanByIdController } from "../../controllers/loans-controllers"

export const loansRouter = express.Router()

loansRouter.get("/", getAllLoansController)

loansRouter.get("/:id", getLoanByIdController)

loansRouter.post("/", createLoanController)
