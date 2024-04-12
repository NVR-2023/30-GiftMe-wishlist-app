/*
  Warnings:

  - You are about to drop the column `authUserId` on the `UserProfile` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "UserProfile_authUserId_key";

-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "authUserId";
