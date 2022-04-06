-- CreateTable
CREATE TABLE "movie" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "release_data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movieRent" (
    "userId" TEXT NOT NULL,
    "movieID" TEXT NOT NULL,

    CONSTRAINT "movieRent_pkey" PRIMARY KEY ("userId","movieID")
);

-- CreateIndex
CREATE UNIQUE INDEX "movie_title_key" ON "movie"("title");

-- AddForeignKey
ALTER TABLE "movieRent" ADD CONSTRAINT "movieRent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movieRent" ADD CONSTRAINT "movieRent_movieID_fkey" FOREIGN KEY ("movieID") REFERENCES "movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
