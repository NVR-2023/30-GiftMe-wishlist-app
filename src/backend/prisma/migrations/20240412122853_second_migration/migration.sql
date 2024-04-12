/*
  Warnings:

  - You are about to drop the column `email` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `UserProfile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Group" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "GroupMember" ALTER COLUMN "invitationDate" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Notification" ALTER COLUMN "timestamp" SET DEFAULT now();

-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "email",
DROP COLUMN "password",
ALTER COLUMN "createdAt" SET DEFAULT now();
