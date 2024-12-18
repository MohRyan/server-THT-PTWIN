-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('PRIA', 'WANITA');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(255),
    "password" VARCHAR(255),
    "gender" "Gender" NOT NULL DEFAULT 'PRIA',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "id" TEXT NOT NULL,
    "avatar" VARCHAR(125) NOT NULL,
    "banner" VARCHAR(125) NOT NULL,
    "bio" VARCHAR(255) NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "name_product" VARCHAR(255) NOT NULL,
    "img_product" VARCHAR(255) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "sku" VARCHAR(50) NOT NULL,
    "diskon" DECIMAL(2,1),
    "rating" DECIMAL(2,1) DEFAULT 5,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profile_avatar_key" ON "profile"("avatar");

-- CreateIndex
CREATE UNIQUE INDEX "profile_banner_key" ON "profile"("banner");

-- CreateIndex
CREATE UNIQUE INDEX "profile_userId_key" ON "profile"("userId");

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
