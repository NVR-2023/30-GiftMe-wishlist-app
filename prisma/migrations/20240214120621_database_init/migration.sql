-- CreateTable
CREATE TABLE "UserProfile" (
    "userId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "avatarImage" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "GroupList" (
    "groupId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "GroupList_pkey" PRIMARY KEY ("groupId")
);

-- CreateTable
CREATE TABLE "UserGroup" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "UserGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WishList" (
    "wishlistId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "WishList_pkey" PRIMARY KEY ("wishlistId")
);

-- CreateTable
CREATE TABLE "UserWishlist" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "wishlistId" INTEGER NOT NULL,
    "isCreator" BOOLEAN NOT NULL,
    "isReceiver" BOOLEAN NOT NULL,

    CONSTRAINT "UserWishlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupWishList" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "wishlistId" INTEGER NOT NULL,

    CONSTRAINT "GroupWishList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReservedGift" (
    "id" SERIAL NOT NULL,
    "reservedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isPurchased" BOOLEAN NOT NULL DEFAULT false,
    "giftId" INTEGER NOT NULL,
    "reservedById" INTEGER NOT NULL,

    CONSTRAINT "ReservedGift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gift" (
    "giftId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "giftImage" TEXT,
    "provider" TEXT NOT NULL,
    "providerUrl" TEXT NOT NULL,
    "isSentToMe" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "isPriceTracked" BOOLEAN NOT NULL DEFAULT false,
    "upperPriceLimit" DOUBLE PRECISION,
    "lowerPriceLimit" DOUBLE PRECISION,
    "deliverDate" TIMESTAMP(3),
    "maxDeliverDate" TIMESTAMP(3),
    "registerDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "receiverId" INTEGER NOT NULL,
    "wishlistId" INTEGER NOT NULL,
    "groupId" INTEGER,

    CONSTRAINT "Gift_pkey" PRIMARY KEY ("giftId")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "isRead" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserNotification" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "notificationId" INTEGER NOT NULL,

    CONSTRAINT "UserNotification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_email_key" ON "UserProfile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserGroup_userId_groupId_key" ON "UserGroup"("userId", "groupId");

-- CreateIndex
CREATE UNIQUE INDEX "WishList_name_key" ON "WishList"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserWishlist_userId_wishlistId_key" ON "UserWishlist"("userId", "wishlistId");

-- CreateIndex
CREATE UNIQUE INDEX "GroupWishList_groupId_wishlistId_key" ON "GroupWishList"("groupId", "wishlistId");

-- CreateIndex
CREATE UNIQUE INDEX "ReservedGift_giftId_key" ON "ReservedGift"("giftId");

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
