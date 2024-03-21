/*
  Warnings:

  - You are about to drop the column `isActive` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `myaddress` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `secondAddress` on the `UserProfile` table. All the data in the column will be lost.
  - Added the required column `primaryAddress` to the `UserProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Group" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "GroupMember" ALTER COLUMN "invitationDate" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Notification" ALTER COLUMN "timestamp" SET DEFAULT now();

-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "isActive",
DROP COLUMN "myaddress",
DROP COLUMN "secondAddress",
ADD COLUMN     "primaryAddress" TEXT NOT NULL,
ADD COLUMN     "secondaryAddress" TEXT,
ALTER COLUMN "createdAt" SET DEFAULT now();
