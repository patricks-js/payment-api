CREATE TYPE "customer_type" AS ENUM ('COMMON', 'MERCHANT');

ALTER TABLE "tb_customers" ADD COLUMN type "customer_type";
