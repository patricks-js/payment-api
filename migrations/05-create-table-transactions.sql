CREATE TABLE "tb_transactions"(
    "id" UUID NOT NULL,
    "sender_id" UUID NOT NULL,
    "receiver_id" UUID NOT NULL,
    "amount" DECIMAL(8, 2) NOT NULL,
    "timestamp" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "tb_transactions" ADD PRIMARY KEY("id");
ALTER TABLE
    "tb_transactions" ADD CONSTRAINT "tb_transactions_sender_id_unique" UNIQUE("sender_id");
ALTER TABLE
    "tb_transactions" ADD CONSTRAINT "tb_transactions_receiver_id_unique" UNIQUE("receiver_id");
