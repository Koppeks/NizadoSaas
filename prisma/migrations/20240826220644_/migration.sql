/*
  Warnings:

  - Made the column `id` on table `Lineal` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id` on table `Repetition` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id` on table `Secuence` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Lineal" ALTER COLUMN "id" SET NOT NULL,
ADD CONSTRAINT "Lineal_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Repetition" ALTER COLUMN "id" SET NOT NULL,
ADD CONSTRAINT "Repetition_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Secuence" ALTER COLUMN "id" SET NOT NULL,
ADD CONSTRAINT "Secuence_pkey" PRIMARY KEY ("id");
