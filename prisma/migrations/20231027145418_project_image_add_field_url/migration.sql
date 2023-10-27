/*
  Warnings:

  - Added the required column `url` to the `ProjectImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectImage" ADD COLUMN     "url" TEXT NOT NULL;
