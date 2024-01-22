import { z } from "zod";

export const contactFormSchema = z.object({
  email: z
    .string({
      required_error: "I need to be able to contact you",
    })
    .email("This email address is not in the correct format"),
  name: z.string().optional(),
  message: z.string({
    required_error: "Without a message, there is no point contacting me",
  }),
});

export type ContactDetails = z.infer<typeof contactFormSchema>;
