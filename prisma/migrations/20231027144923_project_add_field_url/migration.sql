/*
  Warnings:

  - You are about to drop the column `url` on the `ProjectImage` table. All the data in the column will be lost.
  - Added the required column `siteUrl` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "githubUrl" TEXT,
ADD COLUMN     "siteUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProjectImage" DROP COLUMN "url";
