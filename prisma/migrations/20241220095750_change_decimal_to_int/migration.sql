/*
  Warnings:

  - You are about to alter the column `price` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.
  - You are about to alter the column `diskon` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(2,1)` to `Integer`.
  - You are about to alter the column `rating` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(2,1)` to `Integer`.

*/
-- DropIndex
DROP INDEX "profile_avatar_key";

-- DropIndex
DROP INDEX "profile_banner_key";

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "img_product" SET DATA TYPE TEXT,
ALTER COLUMN "price" SET DATA TYPE INTEGER,
ALTER COLUMN "description" SET DATA TYPE VARCHAR(555),
ALTER COLUMN "diskon" SET DATA TYPE INTEGER,
ALTER COLUMN "rating" SET DEFAULT 5,
ALTER COLUMN "rating" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "profile" ALTER COLUMN "avatar" SET DATA TYPE TEXT,
ALTER COLUMN "banner" SET DATA TYPE TEXT,
ALTER COLUMN "bio" SET DATA TYPE TEXT;
