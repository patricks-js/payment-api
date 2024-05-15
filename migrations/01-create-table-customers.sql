CREATE TABLE "tb_customers" (
	"customer_id" UUID PRIMARY KEY NOT NULL,
  "full_name" VARCHAR(128) NOT NULL,
  "document" VARCHAR(14) NOT NULL,
  "email" VARCHAR(128) UNIQUE NOT NULL,
  "password" VARCHAR(255) NOT NULL
);
