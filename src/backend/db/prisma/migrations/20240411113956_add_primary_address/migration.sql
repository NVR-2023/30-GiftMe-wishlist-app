/*
  Warnings:

  - You are about to drop the column `email` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `UserProfile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "email",
DROP COLUMN "password";
