/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Code` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Code` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Code" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
