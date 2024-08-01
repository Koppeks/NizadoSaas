/*
  Warnings:

  - The `bannedDays` column on the `Calendar` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Days" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- AlterTable
ALTER TABLE "Calendar" DROP COLUMN "bannedDays",
ADD COLUMN     "bannedDays" "Days"[];

-- DropEnum
DROP TYPE "days";
