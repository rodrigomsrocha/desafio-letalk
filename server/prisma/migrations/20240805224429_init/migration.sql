-- CreateTable
CREATE TABLE "Loan" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "dateBirth" TIMESTAMP(3) NOT NULL,
    "valorEmprestimo" DOUBLE PRECISION NOT NULL,
    "valorParcela" DOUBLE PRECISION NOT NULL,
    "juros" DOUBLE PRECISION NOT NULL,
    "qtdParcelas" INTEGER NOT NULL,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);
