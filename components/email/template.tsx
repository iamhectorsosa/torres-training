import * as React from "react";

import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";

export const ContactEmail = ({
  name,
  notes,
  personal_training,
  osteopathy,
}: {
  name: string;
  notes?: string;
  personal_training: boolean;
  osteopathy: boolean;
}) => (
  <Html>
    <Head />
    <Preview>Welcome and thank you for reaching out to Torres Training</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
          Welcome and thank you for reaching out to Torres Training
        </Text>
        <Text style={paragraph}>
          {personal_training || osteopathy ? (
            <>
              You are interested in: {personal_training && "Personal Training"}
              {personal_training && osteopathy && " and "}
              {osteopathy && "Osteopathy"}.
            </>
          ) : (
            "You didn't select any service preferences."
          )}
        </Text>
        {notes && (
          <>
            <Text style={paragraph}>Here are your notes:</Text>
            <Text style={subparagraph}>{notes}</Text>
          </>
        )}
        <Text style={paragraph}>We will reach out to you shortly!</Text>
        <Text style={paragraph}>
          Best,
          <br />
          Torres Training Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          <a
            style={{ display: "block" }}
            href="https://maps.app.goo.gl/9aVHWEXJ8E4rZ1zJ7"
          >
            TĚLO Fitness Studio | R. Rodrigues Sampaio, 170 A, Lisbon, PT
          </a>
          <a style={{ display: "block" }} href="mailto:ptfabiotorres@gmail.com">
            ptfabiotorres@gmail.com
          </a>
          <a style={{ display: "block" }} href="https://wa.me/351961379705">
            +351 961 379 705
          </a>
          <a
            style={{ display: "block" }}
            href="https://www.instagram.com/pt.fabiotorres"
          >
            @pt.fabiotorres
          </a>
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const subparagraph = {
  color: "#979797",
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
