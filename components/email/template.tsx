import * as React from "react";

import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
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
  personal_training?: boolean;
  osteopathy?: boolean;
}) => (
  <Html>
    <Head />
    <Preview>Welcome and thank you for reaching out to Torres Training</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          style={imageHeader}
          src="https://www.torrestraining.pt/images/email-header.png"
        />
        <Text style={heading}>Message received</Text>
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
          Welcome and thank you for reaching out to Torres Training!
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
            <Text style={review}>{notes}</Text>
          </>
        )}
        <Text style={paragraph}>We will reach out to you shortly!</Text>
        <Text style={paragraph}>
          Best,
          <br />
          Torres Training Team
        </Text>
        <Hr style={hr} />
        <Img
          style={imageFooter}
          src="https://www.torrestraining.pt/images/email-footer.png"
        />
        <Text>
          <Link style={link} href="https://maps.app.goo.gl/3qsjdQLcA2otPAqN7">
            R. Rodrigues Sampaio, 170 A, Lisbon, PT
          </Link>
          <Link style={link} href="https://maps.app.goo.gl/8vkndt5e61yKn7wN6">
            TĚLO Fitness Studio
          </Link>
          <Link style={link} href="mailto:ptfabiotorres@gmail.com">
            ptfabiotorres@gmail.com
          </Link>
          <Link style={link} href="https://wa.me/351961379705">
            +351 961 379 705
          </Link>
          <Link style={link} href="https://www.instagram.com/pt.fabiotorres">
            @pt.fabiotorres
          </Link>
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
  width: "600px",
  maxWidth: "100%",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const imageHeader = {
  maxWidth: "100%",
};

const imageFooter = {
  maxWidth: "50%",
};

const heading = {
  fontSize: "28px",
  lineHeight: "28px",
  fontWeight: "600",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "28px",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const link = {
  display: "block",
  fontSize: "14px",
  color: "#9ca299",
  textDecoration: "underline",
};
