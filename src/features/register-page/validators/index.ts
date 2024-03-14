import { loginSchema } from "../../../features/login-page/validators";
import { z } from "zod";

export const registerSchema = z
  .object({
    data: z.object({
      fullName: z
        .string()
        .min(6, { message: "Full Name must at least be 6 characters long" }),
      phoneNumber: z
        .string()
        .min(10, {
          message: "Phone Number must at least be 10 characters long",
        })
        .max(12, {
          message: "Phone Number cannot be more than 12 characters long",
        }),
    }),
  })
  .and(loginSchema);

export type RegisterSchema = z.infer<typeof registerSchema>;
