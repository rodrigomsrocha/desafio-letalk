/*
  Warnings:

  - You are about to drop the column `dateBirth` on the `Loan` table. All the data in the column will be lost.
  - Added the required column `dataNascimento` to the `Loan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Loan" DROP COLUMN "dateBirth",
ADD COLUMN     "dataNascimento" TIMESTAMP(3) NOT NULL;
