import { CustomerType } from "@/domain/entities/customer-type";
import { faker } from "@faker-js/faker";
import { pg } from "./postgres";
import { CustomerRepository } from "./repositories/customer-repository";

export const customers = Array.from({ length: 5 }).map(() => {
  return {
    id: faker.string.uuid(),
    fullName: faker.person.fullName(),
    document: faker.string.numeric({ length: 11 }),
    email: faker.internet.email(),
    password: faker.internet.password(),
    type: CustomerType.Common
  };
});

async function seedDatabase() {
  const repository = new CustomerRepository();

  if ((await repository.findAll()).length > 0) {
    console.log("Database already have data!");
    pg.end();
    return;
  }

  for (const customer of customers) {
    await repository.create(customer);
  }

  console.log("Database seeded!");
}

seedDatabase();
