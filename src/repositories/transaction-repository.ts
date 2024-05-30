import { pg } from "@/database/postgres";
import type { Transaction } from "@/models/transaction";

export const transactionRepository = {
  async findAll() {
    return pg<Transaction[]> /*sql*/`
      SELECT * FROM tb_transactions;
    `;
  },
  async findById(id: string) {
    return pg<Transaction[]> /*sql*/`
      SELECT * FROM tb_transactions WHERE id::text = ${id};
    `;
  },
  async create(input: Transaction) {
    const { id, senderId, receiverId, amount, timestamp } = input;

    await pg /*sql*/`
      INSERT INTO tb_transactions
      VALUES
        (${id}, ${senderId}, ${receiverId}, ${amount}, ${timestamp})
    `;
  }
};
