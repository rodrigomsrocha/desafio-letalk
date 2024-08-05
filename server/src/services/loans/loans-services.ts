interface Loan {
  id: number;
  amount: number;
  borrower: string;
}

let loans: Loan[] = [
  { id: 1, amount: 1000, borrower: 'John Doe' },
  { id: 2, amount: 2000, borrower: 'Jane Doe' }
];

export function getAllLoans() {
  return loans;
}

export function getLoanById(id: number) {
  return loans.find(loan => loan.id === id);
}

export function createLoan(amount: number, borrower: string) {
  const newLoan: Loan = {
    id: loans.length + 1,
    amount,
    borrower
  };
  loans.push(newLoan);
  return newLoan;
}
