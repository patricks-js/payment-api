import { env } from "@/env";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { description, title, version } from "../package.json";
import { getAllCustomers } from "./routes/get-all-customers";
import { registerBalance } from "./routes/register-balance";
import { registerCustomer } from "./routes/register-customer";

const app = new Elysia({ prefix: "/api" })
  .use(
    swagger({
      documentation: {
        info: { title, version, description }
      },
      exclude: ["/api/"],
      provider: "scalar"
    })
  )
  .use(getAllCustomers)
  .use(registerBalance)
  .use(registerCustomer)
  .get("/", ({ set }) => {
    set.redirect = "/swagger";
  })
  .listen(env.PORT);

console.log(
  `🦊 Elysia is running! Access Swagger UI at http://${app.server?.hostname}:${app.server?.port}/api/swagger`
);
