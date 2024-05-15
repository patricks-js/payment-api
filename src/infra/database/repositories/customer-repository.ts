import type { ICustomerRepository } from "@/application/repositories/customer-repository";
import type { Customer } from "@/domain/entities/customer";
import { pg } from "../postgres";

export class CustomerRepository implements ICustomerRepository {
  async findByEmail(email: string): Promise<Customer> {
    const [customer] = await pg<[Customer]> /*sql*/`
      SELECT * FROM tb_customers as c WHERE c.email LIKE ${email}
    `;

    return customer;
  }
  async findAll(): Promise<Omit<Customer, "password">[]> {
    return pg<Omit<Customer, "password">[]> /*sql*/`
      SELECT customer_id as id, full_name, document, email, balance, type FROM tb_customers;
    `;
  }

  async create(
    input: Omit<Customer, "balance">
  ): Promise<{ customerId: string }> {
    const { id, fullName, document, email, password, type } = input;

    const returning = await pg<{ customer_id: string }[]> /*sql*/`
      INSERT INTO tb_customers
        (customer_id, full_name, document, email, password, type)
      VALUES
        (${id}, ${fullName}, ${document}, ${email}, ${password}, ${type})
      RETURNING customer_id
      `;

    return {
      customerId: returning[0].customer_id
    };
  }
  async updateBalance(amount: number, customerId: string): Promise<void> {
    const [customer] = await pg<[Customer]> /*sql*/`
      SELECT * FROM tb_customers as c WHERE c.customer_id = ${customerId}
    `;

    if (!customer) {
      return;
    }

    await pg /*sql*/`
      UPDATE tb_customers
      SET balance = ${amount}
      WHERE customer_id::text = ${customerId}
    `;
  }
}
