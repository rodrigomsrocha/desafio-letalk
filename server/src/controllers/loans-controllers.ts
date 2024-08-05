import { Request, Response } from "express";
import { createLoan, getAllLoans, getLoanById } from "../services/loans/loans-services";

export async function getAllLoansController(req: Request, res: Response) {
  try {
    const loans = await getAllLoans()
    res.status(200).json(loans)
    
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getLoanByIdController(req: Request, res: Response) {
  try {
    const loan = await getLoanById(req.params.id);
    if (loan) {
      res.status(200).json(loan);
    } else {
      res.status(404).json({ message: `Loan with id ${req.params.id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function createLoanController(req: Request, res: Response) {
  try {
    const loanInformation = req.body;
    if (!loanInformation) {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    const newLoan = await createLoan(loanInformation);

    if(!newLoan) {
      return res.status(500).json({ message: 'Failed to create loan' });
    }

    return res.status(201).json(newLoan);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
