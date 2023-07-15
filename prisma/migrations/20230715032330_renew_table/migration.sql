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
-- CreateEnum
CREATE TYPE "RecipeStatus" AS ENUM ('PUBLIC', 'LIMIT', 'PRIVATE');

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
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "is_chef" BOOLEAN,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipes" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image_url" TEXT,
    "status" "RecipeStatus" NOT NULL DEFAULT 'PRIVATE',
    "instructions" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ingredients_lists" (
    "id" SERIAL NOT NULL,
    "recipe_id" INTEGER,
    "user_id" UUID,
    "step" INTEGER,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ingredients_lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ingredients" (
    "id" SERIAL NOT NULL,
    "ingredients_id" INTEGER NOT NULL,
    "name" TEXT,
    "step" INTEGER,
    "is_checked" BOOLEAN,
    "is_shopping_list" BOOLEAN,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "links" (
    "id" SERIAL NOT NULL,
    "user_id" UUID,
    "recipe_id" INTEGER,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "follows" (
    "follower_id" UUID NOT NULL,
    "followed_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "favorites" (
    "user_id" UUID NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "follows_follower_id_followed_id_key" ON "follows"("follower_id", "followed_id");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_user_id_recipe_id_key" ON "favorites"("user_id", "recipe_id");

-- AddForeignKey
ALTER TABLE "recipes" ADD CONSTRAINT "recipes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredients_lists" ADD CONSTRAINT "ingredients_lists_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredients_lists" ADD CONSTRAINT "ingredients_lists_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredients" ADD CONSTRAINT "ingredients_ingredients_id_fkey" FOREIGN KEY ("ingredients_id") REFERENCES "ingredients_lists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "links" ADD CONSTRAINT "links_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "links" ADD CONSTRAINT "links_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_followed_id_fkey" FOREIGN KEY ("followed_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
