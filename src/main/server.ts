import { env } from "@/env";
import { Elysia } from "elysia";
import { registerCustomer } from "./routes/register-customer";

const app = new Elysia({ prefix: "/api" })
  .use(registerCustomer)
  .listen(env.PORT);

console.log(
  `🦊 Elysia is running! Access Swagger UI at http://${app.server?.hostname}:${app.server?.port}/swagger`
);
