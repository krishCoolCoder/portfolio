-- AlterTable
ALTER TABLE `blog` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);