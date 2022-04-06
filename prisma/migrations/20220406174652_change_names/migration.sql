/*
  Warnings:

  - You are about to drop the `movie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `movieRent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "movieRent" DROP CONSTRAINT "movieRent_movieID_fkey";

-- DropForeignKey
ALTER TABLE "movieRent" DROP CONSTRAINT "movieRent_userId_fkey";

-- DropTable
DROP TABLE "movie";

-- DropTable
DROP TABLE "movieRent";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movies" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "release_data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieRent" (
    "userId" TEXT NOT NULL,
    "movieID" TEXT NOT NULL,

    CONSTRAINT "MovieRent_pkey" PRIMARY KEY ("userId","movieID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Movies_title_key" ON "Movies"("title");

-- AddForeignKey
ALTER TABLE "MovieRent" ADD CONSTRAINT "MovieRent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieRent" ADD CONSTRAINT "MovieRent_movieID_fkey" FOREIGN KEY ("movieID") REFERENCES "Movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
