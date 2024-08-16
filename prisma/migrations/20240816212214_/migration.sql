/*
  Warnings:

  - You are about to drop the column `linealId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `repetitionId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `secuenseId` on the `Event` table. All the data in the column will be lost.
  - The primary key for the `Lineal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Lineal` table. All the data in the column will be lost.
  - The primary key for the `Repetition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Repetition` table. All the data in the column will be lost.
  - The primary key for the `Secuence` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Secuence` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "linealId",
DROP COLUMN "repetitionId",
DROP COLUMN "secuenseId";

-- AlterTable
ALTER TABLE "Lineal" DROP CONSTRAINT "Lineal_pkey",
DROP COLUMN "id";

-- AlterTable
ALTER TABLE "Repetition" DROP CONSTRAINT "Repetition_pkey",
DROP COLUMN "id";

-- AlterTable
ALTER TABLE "Secuence" DROP CONSTRAINT "Secuence_pkey",
DROP COLUMN "id";
