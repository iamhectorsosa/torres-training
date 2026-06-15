import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Please enter a name longer than 2 characters.",
  }),
  phone: z.e164({
    message: "Please enter a valid phone number",
  }),
  email: z.email({
    message: "Please enter a valid email.",
  }),
  personal_training: z.boolean().optional(),
  osteopathy: z.boolean().optional(),
  notes: z
    .string()
    .max(500, {
      message: "Notes cannot be longer than 500 characters",
    })
    .optional(),
});

export type ContactFormFields = z.infer<typeof formSchema>;
