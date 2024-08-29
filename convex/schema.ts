import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  ...authTables,
});
