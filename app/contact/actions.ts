"use server";

import type { ContactFormFields } from "./form";
import { Resend } from "resend";
import { ContactEmail } from "@/components/email/template";

const resend = new Resend(process.env.RESEND_API_KEY);

const FABIO_EMAIL = "ptfabiotorres@gmail.com";
const TEST_EMAIL = "delivered@resend.dev";

export async function formAction({
  name,
  email,
  personal_training,
  mobility_training,
  notes,
}: ContactFormFields): Promise<void> {
  const { error } = await resend.emails.send({
    from: "Fabio from Torres Training <noreply@torrestraining.pt>",
    to:
      process.env.NODE_ENV === "production"
        ? [FABIO_EMAIL, email]
        : [TEST_EMAIL],
    subject: `Hi ${name}! Your contact message was received`,
    text: "We will reach out to you shortly",
    react: ContactEmail({
      name,
      personal_training,
      mobility_training,
      notes,
    }),
  });

  if (error) {
    throw error;
  }
}
