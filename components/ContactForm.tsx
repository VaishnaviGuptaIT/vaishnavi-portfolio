"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    // You can get your free access key from https://web3forms.com/
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Name</label>
          <input name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" placeholder="your@email.com" required />
        </div>
      </div>
      <div className="form-group">
        <label>Subject</label>
        <input name="subject" type="text" placeholder="What's this about?" />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Tell me about the opportunity or project..."
          required
        />
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
        {status === "sending" ? "Sending..." : 
         status === "success" ? "Sent! ✓" : 
         status === "error" ? "Error! ✗" : 
         "Send Message ✦"}
      </button>
    </form>
  );
}
