-- AlterTable
ALTER TABLE "Group" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "GroupMember" ALTER COLUMN "invitationDate" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Notification" ALTER COLUMN "timestamp" SET DEFAULT now();

-- AlterTable
ALTER TABLE "UserProfile" ALTER COLUMN "createdAt" SET DEFAULT now();
