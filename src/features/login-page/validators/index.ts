import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must at least be 8 characters long" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
