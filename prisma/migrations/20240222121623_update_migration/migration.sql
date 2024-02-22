/*
  Warnings:

  - The primary key for the `Gift` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GroupList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GroupWishList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Notification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ReservedGift` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserGroup` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserNotification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserWishlist` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `WishList` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BASIC', 'ADMIN');

-- DropForeignKey
ALTER TABLE "Gift" DROP CONSTRAINT "Gift_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Gift" DROP CONSTRAINT "Gift_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "Gift" DROP CONSTRAINT "Gift_wishlistId_fkey";

-- DropForeignKey
ALTER TABLE "GroupWishList" DROP CONSTRAINT "GroupWishList_groupId_fkey";

-- DropForeignKey
ALTER TABLE "GroupWishList" DROP CONSTRAINT "GroupWishList_wishlistId_fkey";

-- DropForeignKey
ALTER TABLE "ReservedGift" DROP CONSTRAINT "ReservedGift_giftId_fkey";

-- DropForeignKey
ALTER TABLE "ReservedGift" DROP CONSTRAINT "ReservedGift_reservedById_fkey";

-- DropForeignKey
ALTER TABLE "UserGroup" DROP CONSTRAINT "UserGroup_groupId_fkey";

-- DropForeignKey
ALTER TABLE "UserGroup" DROP CONSTRAINT "UserGroup_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserNotification" DROP CONSTRAINT "UserNotification_notificationId_fkey";

-- DropForeignKey
ALTER TABLE "UserNotification" DROP CONSTRAINT "UserNotification_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserWishlist" DROP CONSTRAINT "UserWishlist_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserWishlist" DROP CONSTRAINT "UserWishlist_wishlistId_fkey";

-- DropForeignKey
ALTER TABLE "WishList" DROP CONSTRAINT "WishList_userId_fkey";

-- DropForeignKey
ALTER TABLE "WishList" DROP CONSTRAINT "created_by_fk";

-- AlterTable
ALTER TABLE "Gift" DROP CONSTRAINT "Gift_pkey",
ALTER COLUMN "giftId" DROP DEFAULT,
ALTER COLUMN "giftId" SET DATA TYPE TEXT,
ALTER COLUMN "receiverId" SET DATA TYPE TEXT,
ALTER COLUMN "wishlistId" SET DATA TYPE TEXT,
ALTER COLUMN "groupId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Gift_pkey" PRIMARY KEY ("giftId");
DROP SEQUENCE "Gift_giftId_seq";

-- AlterTable
ALTER TABLE "GroupList" DROP CONSTRAINT "GroupList_pkey",
ALTER COLUMN "groupId" DROP DEFAULT,
ALTER COLUMN "groupId" SET DATA TYPE TEXT,
ADD CONSTRAINT "GroupList_pkey" PRIMARY KEY ("groupId");
DROP SEQUENCE "GroupList_groupId_seq";

-- AlterTable
ALTER TABLE "GroupWishList" DROP CONSTRAINT "GroupWishList_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "groupId" SET DATA TYPE TEXT,
ALTER COLUMN "wishlistId" SET DATA TYPE TEXT,
ADD CONSTRAINT "GroupWishList_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "GroupWishList_id_seq";

-- AlterTable
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Notification_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Notification_id_seq";

-- AlterTable
ALTER TABLE "ReservedGift" DROP CONSTRAINT "ReservedGift_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "giftId" SET DATA TYPE TEXT,
ALTER COLUMN "reservedById" SET DATA TYPE TEXT,
ADD CONSTRAINT "ReservedGift_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ReservedGift_id_seq";

-- AlterTable
ALTER TABLE "UserGroup" DROP CONSTRAINT "UserGroup_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "groupId" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserGroup_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserGroup_id_seq";

-- AlterTable
ALTER TABLE "UserNotification" DROP CONSTRAINT "UserNotification_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "notificationId" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserNotification_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserNotification_id_seq";

-- AlterTable
ALTER TABLE "UserProfile" DROP CONSTRAINT "UserProfile_pkey",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'BASIC',
ALTER COLUMN "userId" DROP DEFAULT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("userId");
DROP SEQUENCE "UserProfile_userId_seq";

-- AlterTable
ALTER TABLE "UserWishlist" DROP CONSTRAINT "UserWishlist_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "wishlistId" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserWishlist_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserWishlist_id_seq";

-- AlterTable
ALTER TABLE "WishList" DROP CONSTRAINT "WishList_pkey",
ALTER COLUMN "wishlistId" DROP DEFAULT,
ALTER COLUMN "wishlistId" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "WishList_pkey" PRIMARY KEY ("wishlistId");
DROP SEQUENCE "WishList_wishlistId_seq";

-- AddForeignKey
ALTER TABLE "UserGroup" ADD CONSTRAINT "UserGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroup" ADD CONSTRAINT "UserGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "GroupList"("groupId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishList" ADD CONSTRAINT "WishList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishList" ADD CONSTRAINT "created_by_fk" FOREIGN KEY ("userId") REFERENCES "UserProfile"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWishlist" ADD CONSTRAINT "UserWishlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWishlist" ADD CONSTRAINT "UserWishlist_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "WishList"("wishlistId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupWishList" ADD CONSTRAINT "GroupWishList_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "GroupList"("groupId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupWishList" ADD CONSTRAINT "GroupWishList_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "WishList"("wishlistId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservedGift" ADD CONSTRAINT "ReservedGift_giftId_fkey" FOREIGN KEY ("giftId") REFERENCES "Gift"("giftId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReservedGift" ADD CONSTRAINT "ReservedGift_reservedById_fkey" FOREIGN KEY ("reservedById") REFERENCES "UserProfile"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gift" ADD CONSTRAINT "Gift_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "WishList"("wishlistId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gift" ADD CONSTRAINT "Gift_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "GroupList"("groupId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gift" ADD CONSTRAINT "Gift_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "UserProfile"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNotification" ADD CONSTRAINT "UserNotification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNotification" ADD CONSTRAINT "UserNotification_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;
