-- CreateTable
CREATE TABLE "FavoriteBooks" (
    "id" SERIAL NOT NULL,
    "bookId" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FavoriteBooks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteBooks_bookId_key" ON "FavoriteBooks"("bookId");

-- AddForeignKey
ALTER TABLE "FavoriteBooks" ADD CONSTRAINT "FavoriteBooks_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
