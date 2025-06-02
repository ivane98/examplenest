-- CreateEnum
CREATE TYPE "Role" AS ENUM ('INTERN', 'ADMIN', 'ENGINEER');

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_name_key" ON "Post"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Post_email_key" ON "Post"("email");
