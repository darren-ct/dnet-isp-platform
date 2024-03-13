import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must at least be 8 characters long" }),
  fullName: z
    .string()
    .min(6, { message: "Full Name must at least be 6 characters long" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone Number must at least be 10 characters long" })
    .max(12, {
      message: "Phone Number cannot be more than 12 characters long",
    }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
