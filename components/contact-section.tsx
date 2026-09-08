"use client";

import { ArrowUpRight, Check, LoaderCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Status = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to send message.");

      setStatus("success");
      setMessage("Message sent. I’ll get back to you soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send message.");
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            eyebrow="05 / Contact"
            title="Let’s make something worth shipping."
            description="Have an opportunity, project, or idea in mind? Send me a note directly from the site."
          />
        </Reveal>

        <div className="contact-layout">
          <Reveal>
            <div className="contact-aside">
              <p className="eyebrow">Direct line</p>
              <h3>Good ideas deserve a real conversation.</h3>
              <p>
                I’m always interested in thoughtful engineering work, ambitious products, and conversations with people building useful things.
              </p>
              <a href="https://www.linkedin.com/in/joseph-milici/" target="_blank" rel="noreferrer">
                Prefer LinkedIn? <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field-row">
                <label>
                  <span>Name</span>
                  <input name="name" autoComplete="name" maxLength={80} required placeholder="Your name" />
                </label>
                <label>
                  <span>Email</span>
                  <input name="email" type="email" autoComplete="email" maxLength={160} required placeholder="you@example.com" />
                </label>
              </div>

              <label className="contact-message-field">
                <span>Message</span>
                <textarea name="message" rows={7} minLength={10} maxLength={3000} required placeholder="Tell me what you’re working on..." />
              </label>

              <label className="contact-honeypot" aria-hidden="true">
                Company website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>

              <div className="contact-submit-row">
                <button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? <LoaderCircle className="contact-spinner" size={16} /> : status === "success" ? <Check size={16} /> : <Send size={16} />}
                  {status === "sending" ? "Sending" : status === "success" ? "Sent" : "Send message"}
                </button>
                {message ? <p className={`contact-status ${status}`}>{message}</p> : <p className="contact-privacy">No newsletter. No automated follow-up.</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
