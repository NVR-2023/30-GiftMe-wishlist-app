/*
  Warnings:

  - You are about to drop the column `secondaryAddress` on the `UserProfile` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "UserProfile_secondaryAddress_key";

-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "secondaryAddress";
