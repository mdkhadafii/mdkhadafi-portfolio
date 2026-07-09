const CONTACT_EMAIL = process.env.CONTACT_FORM_EMAIL || "mdkhadafii@gmail.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const jsonHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

const jsonResponse = (statusCode, body) => ({
  statusCode,
  headers: jsonHeaders,
  body: JSON.stringify(body)
});

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return jsonResponse(204, {});
  }

  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { message: "Method not allowed." });
  }

  let payload;

  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return jsonResponse(400, { message: "Request tidak valid." });
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const message = String(payload.message || "").trim();

  if (!name || !isValidEmail(email) || !message) {
    return jsonResponse(400, { message: "Nama, email, dan pesan wajib diisi dengan benar." });
  }

  try {
    const response = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Pesan portfolio baru dari ${name}`,
        _template: "table",
        _captcha: "false",
        _replyto: email,
        source: payload.source || event.headers.referer || "Portfolio contact form"
      })
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.success === false) {
      return jsonResponse(response.status || 502, {
        message: result.message || "Pesan belum bisa dikirim."
      });
    }

    return jsonResponse(200, { success: true });
  } catch {
    return jsonResponse(502, {
      message: "Server belum bisa menghubungi layanan email. Coba lagi beberapa saat."
    });
  }
};
