import type { Context } from "@netlify/functions";

function sendEmail(message: string, email: string, name?: string) {
  return fetch(`https://api.brevo.com/v3/smtp/email`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": process.env.BREVO_API_KEY!,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      to: [
        {
          name: process.env.CONTACT_FORM_EMAIL_TO_NAME,
          email: process.env.CONTACT_FORM_EMAIL_TO_EMAIL,
        },
      ],
      replyTo: {
        email,
        name,
      },
      templateId: Number(process.env.BREVO_CONTACT_FORM_TEMPLATE_ID),
      params: {
        message,
        name,
      },
    }),
  });
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }
  return typeof error === "string" ? error : JSON.stringify(error);
}

export default async function handler(request: Request) {
  try {
    const body = await request.json();
    if (typeof body !== "object" || body == null) {
      return new Response("Request body should be an object", {
        status: 400,
      });
    }

    if (!("email" in body) || typeof body.email !== "string") {
      return new Response(
        "Request body should contain 'email' field of type 'string'",
        {
          status: 400,
        },
      );
    }

    if (!("message" in body) || typeof body.message !== "string") {
      return new Response(
        "Request body should contain 'message' field of type 'string'",
        {
          status: 400,
        },
      );
    }
    return sendEmail(
      body.message,
      body.email,
      "name" in body && typeof body.name === "string" && body.name !== ""
        ? body.name
        : undefined,
    );
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    return new Response(errorMessage, {
      status: 400,
    });
  }
}
