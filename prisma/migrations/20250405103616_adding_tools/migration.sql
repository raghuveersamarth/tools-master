-- CreateTable
CREATE TABLE `Tool` (
    `id` INTEGER NOT NULL,
    `tool_no` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `size` VARCHAR(191) NOT NULL,
    `specification` VARCHAR(191) NOT NULL,
    `used_for_component` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Tool_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
