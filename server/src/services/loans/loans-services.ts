import { prisma } from "../../lib/prisma";

interface Loan {
  cpf: string;
  uf: string;
  dataNascimento: string;
  valorEmprestimo: number;
  valorParcela: number;
  juros: number;
  qtdParcelas: number;
}

export async function getAllLoans() {
  try {
    const loans = await prisma.loan.findMany();
    return loans;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getLoanById(id: string) {
  try {
    const loan = await prisma.loan.findUnique({
      where: {
        id: id,
      },
    });

    if(!loan) {
      return null;
    }

    return loan
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function createLoan(loan: Loan) {
  try {
    const newLoan = await prisma.loan.create({
      data: {
        ...loan
      },
    });
    return newLoan;
  } catch (error) {
    console.error(error);
    return null;
  }
}
