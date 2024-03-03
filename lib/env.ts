/* eslint-disable @typescript-eslint/no-namespace */
import { z } from "zod";

// fake import to get @types/node in the playground
import {} from "fs";

const envVariables = z.object({
  GOOGLE_MAPS_PLACE_ID: z.string(),
  GOOGLE_MAPS_KEY: z.string(),
  RESEND_API_KEY: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
