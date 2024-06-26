/*
  Warnings:

  - The values [Visualizer,Promoted,Free,Admin] on the enum `subscription_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "subscription_type_new" AS ENUM ('visualizer', 'promoted', 'free', 'client', 'admin');
ALTER TABLE "Model_User" ALTER COLUMN "subscription" TYPE "subscription_type_new" USING ("subscription"::text::"subscription_type_new");
ALTER TYPE "subscription_type" RENAME TO "subscription_type_old";
ALTER TYPE "subscription_type_new" RENAME TO "subscription_type";
DROP TYPE "subscription_type_old";
COMMIT;
