import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Reqired"),
});

export const signupSchema = z.object({
  name: z.string().trim().min(1, "Reqired"),
  email: z.string().email(),
  password: z.string().min(8, "Minimum 8 characters reqired"),
});