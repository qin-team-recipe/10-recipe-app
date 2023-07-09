/*
  Warnings:

  - You are about to drop the `chef` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `favorite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `follow` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `instruction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `link` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recipe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shoppingItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shoppingList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."favorite" DROP CONSTRAINT "favorite_recipe_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."favorite" DROP CONSTRAINT "favorite_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."follow" DROP CONSTRAINT "follow_chef_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."follow" DROP CONSTRAINT "follow_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."ingredient" DROP CONSTRAINT "ingredient_recipe_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."instruction" DROP CONSTRAINT "instruction_recipe_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."link" DROP CONSTRAINT "link_chef_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."recipe" DROP CONSTRAINT "recipe_chef_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."recipe" DROP CONSTRAINT "recipe_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."shoppingItem" DROP CONSTRAINT "shoppingItem_ingredient_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."shoppingItem" DROP CONSTRAINT "shoppingItem_shoppingList_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."shoppingList" DROP CONSTRAINT "shoppingList_recipe_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."shoppingList" DROP CONSTRAINT "shoppingList_user_id_fkey";

-- DropTable
DROP TABLE "public"."chef";

-- DropTable
DROP TABLE "public"."favorite";

-- DropTable
DROP TABLE "public"."follow";

-- DropTable
DROP TABLE "public"."ingredient";

-- DropTable
DROP TABLE "public"."instruction";

-- DropTable
DROP TABLE "public"."link";

-- DropTable
DROP TABLE "public"."recipe";

-- DropTable
DROP TABLE "public"."shoppingItem";

-- DropTable
DROP TABLE "public"."shoppingList";

-- DropTable
DROP TABLE "public"."user";

-- CreateTable
CREATE TABLE "Chef" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chef_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "site" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "site_id" TEXT,
    "follower" TEXT,
    "chef_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "servings" TEXT NOT NULL,
    "link" TEXT,
    "image_url1" TEXT NOT NULL,
    "image_url2" TEXT,
    "status" TEXT NOT NULL,
    "chef_id" INTEGER,
    "user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instruction" (
    "id" SERIAL NOT NULL,
    "step" INTEGER NOT NULL,
    "description" TEXT,
    "note" TEXT,
    "recipe_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Instruction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" TEXT,
    "recipe_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShoppingList" (
    "id" SERIAL NOT NULL,
    "step" INTEGER NOT NULL,
    "user_id" UUID NOT NULL,
    "recipe_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShoppingList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShoppingItem" (
    "id" SERIAL NOT NULL,
    "isChecked" BOOLEAN NOT NULL,
    "shoppingList_id" INTEGER NOT NULL,
    "ingredient_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShoppingItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "user_id" UUID NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("user_id","recipe_id")
);

-- CreateTable
CREATE TABLE "Follow" (
    "user_id" UUID NOT NULL,
    "chef_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("user_id","chef_id")
);

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_chef_id_fkey" FOREIGN KEY ("chef_id") REFERENCES "Chef"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_chef_id_fkey" FOREIGN KEY ("chef_id") REFERENCES "Chef"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instruction" ADD CONSTRAINT "Instruction_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingList" ADD CONSTRAINT "ShoppingList_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingList" ADD CONSTRAINT "ShoppingList_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingItem" ADD CONSTRAINT "ShoppingItem_shoppingList_id_fkey" FOREIGN KEY ("shoppingList_id") REFERENCES "ShoppingList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingItem" ADD CONSTRAINT "ShoppingItem_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_chef_id_fkey" FOREIGN KEY ("chef_id") REFERENCES "Chef"("id") ON DELETE CASCADE ON UPDATE CASCADE;
