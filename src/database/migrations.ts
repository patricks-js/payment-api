import { migrate } from "postgres-migrations";
import { pg } from "./postgres";

import path from "node:path";

const config = {
  database: "payment",
  user: "user",
  password: "secret",
  host: "localhost",
  port: 5432,
  ensureDatabaseExists: true,
  defaultDatabase: "payment"
};

try {
  await migrate(config, path.join(__dirname, "..", "..", "migrations"));
  console.log("Migrations done!");
} catch (e) {
  if (e instanceof Error) {
    console.log(e.message);
  } else {
    console.log("An error occur");
  }
} finally {
  pg.end();
}
