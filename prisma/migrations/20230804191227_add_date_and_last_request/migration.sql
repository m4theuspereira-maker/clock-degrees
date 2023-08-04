/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Result` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Result` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Result` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Result" DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lastRequest" TIMESTAMP(3);
