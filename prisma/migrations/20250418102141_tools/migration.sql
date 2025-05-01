/*
  Warnings:

  - Added the required column `max_quantity` to the `Tool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `min_quantity` to the `Tool` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tool` ADD COLUMN `location` VARCHAR(191) NULL,
    ADD COLUMN `max_quantity` INTEGER NOT NULL,
    ADD COLUMN `min_quantity` INTEGER NOT NULL;
