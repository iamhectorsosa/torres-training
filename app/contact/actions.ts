"use server";

import { ContactFormFields } from "./form";
import { Resend } from "resend";
import { ContactEmail } from "@/components/email/template";

const resend = new Resend(process.env.RESEND_API_KEY);

const FABIO_EMAIL = "ptfabiotorres@gmail.com";
const HECTOR_EMAIL = "hello@hectorsosa.me";

export async function formAction({
  name,
  email,
  personal_training,
  mobility_training,
  notes,
}: ContactFormFields): Promise<{
  result: "SUCCESS" | "ERROR";
}> {
  const emailList =
    process.env.NODE_ENV === "production"
      ? [FABIO_EMAIL, email]
      : [HECTOR_EMAIL, email];
  try {
    const res = await resend.emails.send({
      from: "Fabio from Torres Training <noreply@torrestraining.pt>",
      to: emailList,
      subject: `Hi ${name}! Your contact message was received`,
      text: "We will reach out to you shortly",
      react: ContactEmail({
        name,
        personal_training,
        mobility_training,
        notes,
      }),
    });

    if (res.error) {
      throw res.error;
    }

    return { result: "SUCCESS" };
  } catch (error) {
    console.error(error);
    return { result: "ERROR" };
  }
}
