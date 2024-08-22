-- CreateTable
CREATE TABLE "User_Event" (
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "User_Event_pkey" PRIMARY KEY ("userId","eventId")
);

-- AddForeignKey
ALTER TABLE "User_Event" ADD CONSTRAINT "User_Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Event" ADD CONSTRAINT "User_Event_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
