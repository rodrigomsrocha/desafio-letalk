import { Request, Response } from "express";
import { createLoan, getAllLoans, getLoanById } from "../services/loans/loans-services";

export function getAllLoansController(req: Request, res: Response) {
  const loans = getAllLoans()
  res.status(200).json(loans)
}

export function getLoanByIdController(req: Request, res: Response) {
  const loanId = parseInt(req.params.id, 10);
  const loan = getLoanById(loanId);
  if (loan) {
    res.status(200).json(loan);
  } else {
    res.status(404).json({ message: `Loan with id ${loanId} not found` });
  }
}

export function createLoanController(req: Request, res: Response) {
  const { amount, borrower } = req.body;
  if (amount && borrower) {
    const newLoan = createLoan(amount, borrower);
    res.status(201).json(newLoan);
  } else {
    res.status(400).json({ message: 'Invalid request body' });
  }
}
