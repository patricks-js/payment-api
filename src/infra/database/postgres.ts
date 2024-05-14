import { env } from "@/env";
import postgres from "postgres";

export const pg = postgres(env.DATABASE_URL);
