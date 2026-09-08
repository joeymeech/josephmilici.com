"use client";

import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type FormState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || "Something went wrong.");

      setState("success");
      setMessage("Message sent. I’ll get back to you soon.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            eyebrow="05 / Contact"
            title="Let’s build something interesting."
            description="Have a project, opportunity, or idea worth talking about? Send me a message directly."
          />
        </Reveal>

        <div className="contact-layout">
          <Reveal>
            <div className="contact-aside">
              <p className="eyebrow">Direct line</p>
              <h3>Good work usually starts with a conversation.</h3>
              <p>
                I’m always interested in thoughtful engineering problems, ambitious products, and conversations with people building useful things.
              </p>
              <div className="contact-status"><span className="status-dot" /> Based in Philadelphia · Working in Wilmington</div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field-row">
                <label>
                  <span>Name</span>
                  <input name="name" autoComplete="name" required minLength={2} maxLength={80} placeholder="Your name" />
                </label>
                <label>
                  <span>Email</span>
                  <input name="email" type="email" autoComplete="email" required maxLength={160} placeholder="you@example.com" />
                </label>
              </div>

              <label>
                <span>Message</span>
                <textarea name="message" required minLength={10} maxLength={3000} rows={7} placeholder="What are you working on?" />
              </label>

              <label className="contact-honeypot" aria-hidden="true">
                <span>Company website</span>
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>

              <div className="contact-form-footer">
                <button type="submit" className="contact-submit" disabled={state === "sending"}>
                  {state === "sending" ? (
                    <><LoaderCircle size={16} className="contact-spinner" /> Sending</>
                  ) : state === "success" ? (
                    <><Check size={16} /> Sent</>
                  ) : (
                    <>Send message <ArrowUpRight size={16} /></>
                  )}
                </button>
                {message ? <p className={`contact-feedback ${state}`}>{message}</p> : <p className="contact-privacy">No mailing list. No automated follow-up.</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
