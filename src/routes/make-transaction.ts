import { randomUUID } from "node:crypto";
import { CustomerType } from "@/models/customer";
import { customerRepository } from "@/repositories/customer-repository";
import { transactionRepository } from "@/repositories/transaction-repository";
import Elysia, { t } from "elysia";

export const makeTransaction = new Elysia().post(
  "/transactions",
  async ({ body }) => {
    const { senderId, receiverId, amount } = body;

    const sender = await customerRepository.findById(senderId);
    const receiver = await customerRepository.findById(receiverId);

    if (!sender || !receiver) {
      throw new Error("Customer not found!");
    }

    if (sender.balance < amount) {
      throw new Error("Insufficient balance.");
    }

    if (sender.type === CustomerType.Merchant || senderId === receiverId) {
      throw new Error("Operation not allowed.");
    }

    const transactionId = randomUUID();
    const timestamp = Date.now();

    await customerRepository.updateBalance(sender.balance - amount, senderId);
    await customerRepository.updateBalance(
      Number(receiver.balance) + Number(amount),
      receiverId
    );

    await transactionRepository.create({
      id: transactionId,
      senderId,
      receiverId,
      amount,
      timestamp
    });

    return {
      transactionId,
      timestamp,
      amount,
      sender: {
        id: senderId,
        name: sender.name
      },
      receiver: {
        id: receiverId,
        name: receiver.name
      }
    };
  },
  {
    tags: ["transaction"],
    body: t.Object({
      senderId: t.String({ format: "uuid" }),
      receiverId: t.String({ format: "uuid" }),
      amount: t.Numeric()
    })
  }
);
