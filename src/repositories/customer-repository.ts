import { pg } from "@/infra/database/postgres";
import type { Customer } from "@/models/customer";

export const customerRepository = {
  async findAll() {
    return pg<Omit<Customer, "password">[]> /*sql*/`
      SELECT id, name, email, document, balance, type FROM tb_customers;
    `;
  },
  async findById(id: string) {
    const [customer]: Omit<Customer, "password">[] = await pg /*sql*/`
      SELECT id, name, email, document, balance, type FROM tb_customers WHERE id::text = ${id};
    `;

    return customer;
  },
  async findByEmail(email: string) {
    const [customer]: Omit<Customer, "password">[] = await pg /*sql*/`
      SELECT id, name, email, document, balance, type FROM tb_customers WHERE email LIKE ${email};
    `;

    return customer;
  },
  async create(input: Omit<Customer, "balance">) {
    const { id, name, email, document, password, type } = input;

    await pg /*sql*/`
      INSERT INTO tb_customers
        (id, name, email, document, password, type)
      VALUES
        (${id}, ${name}, ${email}, ${document}, ${password}, ${type})
      `;
  },
  async createAll(input: Omit<Customer, "balance">[]) {
    for (const newCustomer of input) {
      const { id, name, email, document, password, type } = newCustomer;

      await pg /*sql*/`
        INSERT INTO tb_customers
          (id, name, email, document, password, type)
        VALUES
          (${id}, ${name}, ${email}, ${document}, ${password}, ${type})
      `;
    }
  },
  async updateBalance(amount: number, id: string): Promise<void> {
    const customer = await this.findById(id);

    if (!customer) {
      return;
    }

    await pg /*sql*/`
      UPDATE tb_customers
      SET balance = ${amount}
      WHERE id::text = ${id}
    `;
  },
  async delete(id: string) {
    await pg /*sql*/`DELETE tb_customers WHERE id LIKE ${id}`;
  }
};
