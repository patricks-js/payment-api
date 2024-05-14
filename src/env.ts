import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().transform(Number),
  DATABASE_URL: z.string().min(10)
});

export const env = envSchema.parse(Bun.env);
