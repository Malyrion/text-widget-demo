/*
  Warnings:

  - Made the column `createdBy` on table `Widget` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Widget" DROP CONSTRAINT "Widget_createdBy_fkey";

-- AlterTable
ALTER TABLE "Widget" ALTER COLUMN "createdBy" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Widget" ADD CONSTRAINT "Widget_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
