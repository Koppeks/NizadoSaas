/*
  Warnings:

  - The values [SECUENSE] on the enum `EventType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EventType_new" AS ENUM ('REPETITION', 'LINEAL', 'SECUENCE');
ALTER TABLE "Event" ALTER COLUMN "eventType" TYPE "EventType_new" USING ("eventType"::text::"EventType_new");
ALTER TYPE "EventType" RENAME TO "EventType_old";
ALTER TYPE "EventType_new" RENAME TO "EventType";
DROP TYPE "EventType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Lineal" ADD COLUMN     "id" TEXT;

-- AlterTable
ALTER TABLE "Repetition" ADD COLUMN     "id" TEXT;

-- AlterTable
ALTER TABLE "Secuence" ADD COLUMN     "id" TEXT;
