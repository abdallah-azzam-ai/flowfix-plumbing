const N8N_WEBHOOK_URL = "https://n8n.myhren.ai/webhook/flowfix-lead";

const form = document.getElementById("lead-form");
const note = document.getElementById("form-note");
const submitBtn = document.getElementById("submit-btn");

function setNote(text, kind) {
  note.textContent = text;
  note.classList.remove("ok", "err");
  if (kind) note.classList.add(kind);
}

function validPhone(v) {
  return v.replace(/\D/g, "").length >= 10;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    fullName: document.getElementById("fullName").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    zip: document.getElementById("zip").value.trim(),
    service: document.getElementById("service").value,
    urgency: document.getElementById("urgency").value,
    details: document.getElementById("details").value.trim(),
    page: window.location.href,
    submittedAt: new Date().toISOString()
  };

  if (!data.fullName || !validPhone(data.phone) || !data.zip || !data.service || !data.details) {
    setNote("Check name, phone, ZIP, service and details, then try again.", "err");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
  setNote("Sending to our dispatcher...");

  try {
    if (N8N_WEBHOOK_URL.includes("example.com")) {
      await new Promise((r) => setTimeout(r, 600));
      setNote("Thanks " + data.fullName.split(" ")[0] + ". Demo mode. Connect n8n to send this live.", "ok");
    } else {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("bad status " + res.status);
      setNote("Got it. We will call " + data.phone + " in about 15 minutes.", "ok");
      form.reset();
    }
  } catch (err) {
    setNote("Send failed. Call (555) 234-8890 and we will help now.", "err");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Call me with my price";
  }
});
