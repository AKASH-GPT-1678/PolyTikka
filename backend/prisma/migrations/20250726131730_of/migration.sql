/*
  Warnings:

  - You are about to drop the column `numofSearched` on the `Politician` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Politician" DROP COLUMN "numofSearched",
ADD COLUMN     "numOfSearched" INTEGER;
