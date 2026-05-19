"use client";

import { useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setFeedback("");

    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      const errorMessage = "Web3Forms key is missing. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local.";
      console.error(errorMessage);
      setStatus("error");
      setFeedback(errorMessage);
      return;
    }

    formData.append("access_key", accessKey);
    if (!formData.get("subject")) {
      formData.set("subject", "New Portfolio Contact Message");
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFeedback("Thank you! Your message was sent successfully.");
        e.currentTarget.reset();
      } else {
        const errorMessage = data.error || "Unable to send your message. Please try again.";
        console.error("Form submission error:", data);
        setStatus("error");
        setFeedback(errorMessage);
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus("error");
      setFeedback("Network error. Please try again later.");
    } finally {
      window.setTimeout(() => setStatus("idle"), 7000);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell me about the opportunity or project..."
          required
        />
      </div>

      <div aria-live="polite" role="status" className="form-status">
        {status === "sending" && <p className="status-text">Sending your message...</p>}
        {status === "success" && <p className="status-text status-success">{feedback}</p>}
        {status === "error" && <p className="status-text status-error">{feedback}</p>}
      </div>

      <button
        type="submit"
        className="form-submit"
        disabled={status === "sending"}
        style={
          status === "success"
            ? { background: "linear-gradient(135deg,#10B981,#059669)" }
            : status === "error"
            ? { background: "linear-gradient(135deg,#EF4444,#B91C1C)" }
            : undefined
        }
      >
        {status === "sending"
          ? "Sending..."
          : status === "success"
          ? "Sent! ✓"
          : status === "error"
          ? "Error! ✗"
          : "Send Message ✦"}
      </button>
    </form>
  );
}
