ALTER TABLE
    "tb_customers" ADD CONSTRAINT "tb_customers_email_unique" UNIQUE("email");
ALTER TABLE
    "tb_customers" ADD CONSTRAINT "tb_customers_document_unique" UNIQUE("document");
