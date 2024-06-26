-- CreateEnum
CREATE TYPE "subscription_type" AS ENUM ('Visualizer', 'Promoted', 'Free', 'client', 'Admin');

-- CreateTable
CREATE TABLE "Model_User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT NOT NULL DEFAULT 'image',
    "subscription" "subscription_type" NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Model_User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Model_Calendar" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Model_Calendar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Calendar" (
    "userId" TEXT NOT NULL,
    "calendarId" TEXT NOT NULL,

    CONSTRAINT "User_Calendar_pkey" PRIMARY KEY ("userId","calendarId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Model_User_email_key" ON "Model_User"("email");

-- AddForeignKey
ALTER TABLE "User_Calendar" ADD CONSTRAINT "User_Calendar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Model_User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Calendar" ADD CONSTRAINT "User_Calendar_calendarId_fkey" FOREIGN KEY ("calendarId") REFERENCES "Model_Calendar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
