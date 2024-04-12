/*
  Warnings:

  - A unique constraint covering the columns `[authUserId]` on the table `UserProfile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authUserId` to the `UserProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "authUserId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_authUserId_key" ON "UserProfile"("authUserId");
