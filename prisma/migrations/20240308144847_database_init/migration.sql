-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('GROUP', 'WISHLIST', 'GIFT_RESERVATION', 'GIFT_PURCHASE');

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "avatarImage" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "myaddress" TEXT NOT NULL,
    "secondAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT now(),
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "groupName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT now(),
    "isActive" BOOLEAN NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupMember" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "isInvited" BOOLEAN NOT NULL,
    "isAccepted" BOOLEAN NOT NULL DEFAULT false,
    "invitationDate" TIMESTAMP(3) NOT NULL DEFAULT now(),
    "acceptanceDate" TIMESTAMP(3) NOT NULL,
    "groupId" UUID NOT NULL,
    "userProfileId" UUID,

    CONSTRAINT "GroupMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WishlistInvitationMember" (
    "invitationId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "wishlistId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "isInvited" BOOLEAN NOT NULL,
    "isAccepted" BOOLEAN NOT NULL DEFAULT false,
    "invitationDate" TIMESTAMP(3) NOT NULL,
    "acceptanceDate" TIMESTAMP(3),

    CONSTRAINT "WishlistInvitationMember_pkey" PRIMARY KEY ("invitationId")
);

-- CreateTable
CREATE TABLE "Wishlist" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "createdById" UUID NOT NULL,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WishListUser" (
    "wishListId" UUID NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "WishListUser_pkey" PRIMARY KEY ("wishListId","userId")
);

-- CreateTable
CREATE TABLE "Gift" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "vendor" TEXT,
    "url" TEXT,
    "image" TEXT,
    "price" DOUBLE PRECISION,
    "category" TEXT,
    "currency" TEXT,
    "isPriceTracked" BOOLEAN NOT NULL,
    "priceUpperLimit" DOUBLE PRECISION,
    "priceLowerLimit" DOUBLE PRECISION,
    "status" TEXT NOT NULL,
    "reservationDate" TIMESTAMP(3),
    "reservedBy" TEXT,
    "isPurchased" BOOLEAN NOT NULL,
    "purchasedDate" TIMESTAMP(3),
    "deliveryDate" TIMESTAMP(3),
    "isDeliveredToReceiver" BOOLEAN,

    CONSTRAINT "Gift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WishListGift" (
    "wishListId" UUID NOT NULL,
    "giftId" UUID NOT NULL,

    CONSTRAINT "WishListGift_pkey" PRIMARY KEY ("wishListId","giftId")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT now(),
    "notificationType" "NotificationType" NOT NULL,
    "userId" UUID NOT NULL,
    "groupId" UUID,
    "wishlistId" UUID,
    "giftId" UUID,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GiftToWishlist" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GiftToWishlist_AB_unique" ON "_GiftToWishlist"("A", "B");

-- CreateIndex
CREATE INDEX "_GiftToWishlist_B_index" ON "_GiftToWishlist"("B");

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMember" ADD CONSTRAINT "GroupMember_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMember" ADD CONSTRAINT "GroupMember_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistInvitationMember" ADD CONSTRAINT "WishlistInvitationMember_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistInvitationMember" ADD CONSTRAINT "WishlistInvitationMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishListUser" ADD CONSTRAINT "WishListUser_wishListId_fkey" FOREIGN KEY ("wishListId") REFERENCES "Wishlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishListUser" ADD CONSTRAINT "WishListUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishListGift" ADD CONSTRAINT "WishListGift_wishListId_fkey" FOREIGN KEY ("wishListId") REFERENCES "Wishlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishListGift" ADD CONSTRAINT "WishListGift_giftId_fkey" FOREIGN KEY ("giftId") REFERENCES "Gift"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_giftId_fkey" FOREIGN KEY ("giftId") REFERENCES "Gift"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GiftToWishlist" ADD CONSTRAINT "_GiftToWishlist_A_fkey" FOREIGN KEY ("A") REFERENCES "Gift"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GiftToWishlist" ADD CONSTRAINT "_GiftToWishlist_B_fkey" FOREIGN KEY ("B") REFERENCES "Wishlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
