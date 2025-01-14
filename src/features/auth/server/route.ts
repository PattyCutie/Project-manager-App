import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { signInSchema, signupSchema } from "../schemas";

const app = new Hono()
  .post("/signin", zValidator("json", signInSchema), async (c) => {
    const { email, password } = c.req.valid("json");

    console.log({ email, password });
    return c.json({ success: "ok" });
  })
  .post("/signup", zValidator("json", signupSchema), async (c) => {
    const { name, email, password } = c.req.valid("json");

    console.log({ name, email, password });
    return c.json({ success: "ok" });
  });
export default app;
