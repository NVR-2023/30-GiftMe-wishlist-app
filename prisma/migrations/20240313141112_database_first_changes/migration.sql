/*
  Warnings:

  - You are about to drop the column `userId` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `GroupMember` table. All the data in the column will be lost.
  - You are about to drop the column `userProfileId` on the `GroupMember` table. All the data in the column will be lost.
  - You are about to drop the column `giftId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `groupId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `wishlistId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the `WishListGift` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WishListUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WishlistInvitationMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GiftToWishlist` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `wishlistId` to the `Gift` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdById` to the `Group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentUserId` to the `GroupMember` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `Notification` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `closedBy` to the `Wishlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Wishlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `Wishlist` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "NotificationStatus" AS ENUM ('PENDING', 'READ', 'UNREAD', 'ARCHIVED', 'DISMISSED');

-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_userId_fkey";

-- DropForeignKey
ALTER TABLE "GroupMember" DROP CONSTRAINT "GroupMember_userProfileId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_giftId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_wishlistId_fkey";

-- DropForeignKey
ALTER TABLE "WishListGift" DROP CONSTRAINT "WishListGift_giftId_fkey";

-- DropForeignKey
ALTER TABLE "WishListGift" DROP CONSTRAINT "WishListGift_wishListId_fkey";

-- DropForeignKey
ALTER TABLE "WishListUser" DROP CONSTRAINT "WishListUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "WishListUser" DROP CONSTRAINT "WishListUser_wishListId_fkey";

-- DropForeignKey
ALTER TABLE "WishlistInvitationMember" DROP CONSTRAINT "WishlistInvitationMember_userId_fkey";

-- DropForeignKey
ALTER TABLE "WishlistInvitationMember" DROP CONSTRAINT "WishlistInvitationMember_wishlistId_fkey";

-- DropForeignKey
ALTER TABLE "_GiftToWishlist" DROP CONSTRAINT "_GiftToWishlist_A_fkey";

-- DropForeignKey
ALTER TABLE "_GiftToWishlist" DROP CONSTRAINT "_GiftToWishlist_B_fkey";

-- AlterTable
ALTER TABLE "Gift" ADD COLUMN     "wishlistId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Group" DROP COLUMN "userId",
ADD COLUMN     "createdById" UUID NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "GroupMember" DROP COLUMN "userId",
DROP COLUMN "userProfileId",
ADD COLUMN     "currentUserId" UUID NOT NULL,
ALTER COLUMN "invitationDate" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "giftId",
DROP COLUMN "groupId",
DROP COLUMN "userId",
DROP COLUMN "wishlistId",
DROP COLUMN "status",
ADD COLUMN     "status" "NotificationStatus" NOT NULL,
ALTER COLUMN "timestamp" SET DEFAULT now();

-- AlterTable
ALTER TABLE "UserProfile" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Wishlist" ADD COLUMN     "closedBy" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "WishListGift";

-- DropTable
DROP TABLE "WishListUser";

-- DropTable
DROP TABLE "WishlistInvitationMember";

-- DropTable
DROP TABLE "_GiftToWishlist";

-- CreateTable
CREATE TABLE "WishlistMember" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "wishlistId" UUID NOT NULL,
    "userProfileId" UUID NOT NULL,

    CONSTRAINT "WishlistMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WishlistInvitation" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "wishlistId" UUID NOT NULL,
    "isInvited" BOOLEAN NOT NULL,
    "isAccepted" BOOLEAN NOT NULL DEFAULT false,
    "invitationDate" TIMESTAMP(3) NOT NULL,
    "acceptanceDate" TIMESTAMP(3),
    "invitedById" UUID NOT NULL,
    "receivedById" UUID NOT NULL,

    CONSTRAINT "WishlistInvitation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMember" ADD CONSTRAINT "GroupMember_currentUserId_fkey" FOREIGN KEY ("currentUserId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistMember" ADD CONSTRAINT "WishlistMember_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistMember" ADD CONSTRAINT "WishlistMember_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistInvitation" ADD CONSTRAINT "WishlistInvitation_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistInvitation" ADD CONSTRAINT "WishlistInvitation_invitedById_fkey" FOREIGN KEY ("invitedById") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistInvitation" ADD CONSTRAINT "WishlistInvitation_receivedById_fkey" FOREIGN KEY ("receivedById") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gift" ADD CONSTRAINT "Gift_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
