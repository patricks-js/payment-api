import { migrate } from "postgres-migrations";
import { pg } from "./postgres";

import path from "node:path";

async function migrations() {
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
    await migrate(config, path.join(__dirname, "..", "..", "..", "migrations"));
  } finally {
    pg.end();
  }
}

migrations();
