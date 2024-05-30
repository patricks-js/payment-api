import { CustomerType } from "@/domain/entities/customer-type";
import { customerRepository } from "@/repositories/customer-repository";
import { faker } from "@faker-js/faker";
import { pg } from "./postgres";

export const customers = Array.from({ length: 5 }).map(() => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    document: faker.string.numeric({ length: 11 }),
    email: faker.internet.email(),
    password: faker.internet.password(),
    type: CustomerType.Common
  };
});

try {
  if ((await customerRepository.findAll()).length > 0) {
    console.log("Database already has data!");
    pg.end();
    process.exit(0);
  }

  await customerRepository.createAll(customers);

  console.log("Database seeded!");
} catch (error) {
  console.error("Error seeding database:", error);
} finally {
  pg.end();
}
