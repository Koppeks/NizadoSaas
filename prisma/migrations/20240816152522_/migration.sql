-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('REPETITION', 'LINEAL', 'SECUENSE');

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT,
    "type" "EventType" NOT NULL,
    "repetitionId" TEXT NOT NULL,
    "linealId" TEXT NOT NULL,
    "secuenseId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Repetition" (
    "id" TEXT NOT NULL,
    "repeatedDays" "Days"[],
    "timeFrame" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "Repetition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lineal" (
    "id" TEXT NOT NULL,
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "Lineal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Secuence" (
    "id" TEXT NOT NULL,
    "multipleFrom" TIMESTAMP(3)[],
    "multipleTo" TIMESTAMP(3)[],
    "eventId" TEXT NOT NULL,

    CONSTRAINT "Secuence_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Repetition_eventId_key" ON "Repetition"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "Lineal_eventId_key" ON "Lineal"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "Secuence_eventId_key" ON "Secuence"("eventId");

-- AddForeignKey
ALTER TABLE "Repetition" ADD CONSTRAINT "Repetition_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lineal" ADD CONSTRAINT "Lineal_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Secuence" ADD CONSTRAINT "Secuence_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
