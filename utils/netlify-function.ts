const NETLIFY_FUNCTIONS_BASE_URL = "/.netlify/functions";

export function sendContactEmail(contactDetails: ContactDetails) {
  return $fetch(`${NETLIFY_FUNCTIONS_BASE_URL}/handle-contact-form`, {
    body: contactDetails,
    method: "POST",
  });
}
