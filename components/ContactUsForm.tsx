"use client";

import Script from "next/script";
import { useRouter } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  MAX_MESSAGE_LEN,
  validateEmail,
  validateFirstName,
  validateLastName,
  validateMessage,
  validatePhone,
} from "@/lib/contact-validation";

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

declare global {
  interface Window {
    grecaptcha?: {
      getResponse: (widgetId?: number) => string;
      reset: (widgetId?: number) => void;
    };
  }
}

function FieldLabel({
  htmlFor,
  children,
  required: isRequired,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold text-slate-900"
    >
      {children}
      {isRequired ? (
        <span className="text-brand" aria-hidden>
          {" "}
          *
        </span>
      ) : null}
    </label>
  );
}

const inputClass =
  "mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#007ea8] focus:ring-2 focus:ring-[#007ea8]/25";

export default function ContactUsForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setStatus("idle");

    if (!consent) {
      setErrorMessage("Please agree to email, call, and SMS updates to continue.");
      setStatus("error");
      return;
    }

    const vFirst = validateFirstName(firstName);
    if (!vFirst.ok) {
      setErrorMessage(vFirst.error);
      setStatus("error");
      return;
    }
    const vLast = validateLastName(lastName);
    if (!vLast.ok) {
      setErrorMessage(vLast.error);
      setStatus("error");
      return;
    }
    const vEmail = validateEmail(email);
    if (!vEmail.ok) {
      setErrorMessage(vEmail.error);
      setStatus("error");
      return;
    }
    const vPhone = validatePhone(phone);
    if (!vPhone.ok) {
      setErrorMessage(vPhone.error);
      setStatus("error");
      return;
    }
    const vMessage = validateMessage(message);
    if (!vMessage.ok) {
      setErrorMessage(vMessage.error);
      setStatus("error");
      return;
    }

    if (!siteKey) {
      setErrorMessage("Contact form is not configured (missing site key).");
      setStatus("error");
      return;
    }

    const token = window.grecaptcha?.getResponse?.() ?? "";
    if (!token) {
      setErrorMessage("Please check the “I’m not a robot” box.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: vFirst.value,
          lastName: vLast.value,
          email: vEmail.value,
          phone: vPhone.value,
          message: vMessage.value,
          consent: true,
          recaptchaToken: token,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setErrorMessage(data.error ?? "Could not send your message.");
        setStatus("error");
        window.grecaptcha?.reset?.();
        return;
      }

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setConsent(false);
      window.grecaptcha?.reset?.();
      setStatus("success");
      
      // Redirect to thank you page
      router.push("/thank-you");
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
      window.grecaptcha?.reset?.();
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      {siteKey ? (
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        />
      ) : null}

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-8 shadow-sm sm:px-8 sm:py-10"
        noValidate
      >
        <div>
          <FieldLabel htmlFor="contact-first-name" required>
            Name
          </FieldLabel>
          <div className="mt-1.5 grid gap-3 sm:grid-cols-2">
            <input
              id="contact-first-name"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className={inputClass}
            />
            <input
              id="contact-last-name"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className={inputClass}
              aria-label="Last name"
            />
          </div>
        </div>

        <div className="mt-5">
          <FieldLabel htmlFor="contact-email" required>
            Email
          </FieldLabel>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={inputClass}
          />
        </div>

        <div className="mt-5">
          <FieldLabel htmlFor="contact-phone" required>
            Phone
          </FieldLabel>
          <div className="contact-us-phone mt-1.5">
            <PhoneInput
              country="us"
              onlyCountries={["us"]}
              disableDropdown
              countryCodeEditable={false}
              value={phone}
              onChange={setPhone}
              inputProps={{
                id: "contact-phone",
                name: "phone",
                required: true,
                autoComplete: "tel",
                "aria-required": true,
              }}
              containerClass="react-tel-input w-full"
              inputClass="!w-full !h-[42px] !rounded-lg !border !border-slate-300 !bg-white !pl-[52px] !text-base !text-slate-900 shadow-sm outline-none focus:!border-[#007ea8] focus:!ring-2 focus:!ring-[#007ea8]/25"
              buttonClass="!border-slate-300 !rounded-l-lg !bg-slate-50"
              dropdownClass="!text-slate-900"
              enableSearch={false}
            />
          </div>
        </div>

        <div className="mt-5">
          <FieldLabel htmlFor="contact-message" required>
            Message
          </FieldLabel>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, MAX_MESSAGE_LEN))}
            placeholder="Message"
            className={cn(inputClass, "min-h-[140px] resize-y")}
          />
          <p className="mt-1.5 text-sm text-slate-500" aria-live="polite">
            {message.length} of {MAX_MESSAGE_LEN} max characters.
          </p>
        </div>

        <fieldset className="mt-6 border-0 p-0">
          <legend className="sr-only">Communications consent</legend>
          <p className="text-sm font-semibold text-slate-900">
            Agree to Email, Call &amp; SMS Updates
            <span className="text-brand" aria-hidden>
              {" "}
              *
            </span>
          </p>
          <label className="mt-3 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-slate-700">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              className="mt-1 size-4 shrink-0 rounded border-slate-300 text-brand focus:ring-brand"
            />
            <span>
              I agree to receive calls, emails, and SMS from Coral Springs Smiles
              for appointment reminders, promotions, and office updates. Message
              and data rates may apply. I can opt out at any time.
            </span>
          </label>
        </fieldset>

        {siteKey ? (
          <div className="mt-6 flex justify-center sm:justify-start">
            <div
              className="g-recaptcha"
              data-sitekey={siteKey}
              data-theme="light"
            />
          </div>
        ) : (
          <p className="mt-6 text-sm text-amber-800">
            This form requires{" "}
            <code className="rounded bg-amber-100 px-1 py-0.5 text-xs">
              NEXT_PUBLIC_RECAPTCHA_SITE_KEY
            </code>{" "}
            in environment variables.
          </p>
        )}

        {errorMessage ? (
          <p
            className="mt-4 text-sm font-medium text-red-700"
            role="alert"
            aria-live="assertive"
          >
            {errorMessage}
          </p>
        ) : null}

        {status === "success" ? (
          <p className="mt-4 text-sm font-medium text-emerald-800" role="status">
            Thank you — your message was sent. We will get back to you soon.
          </p>
        ) : null}

        <div className="mt-8">
          <Button type="submit" size="lg" disabled={status === "sending" || !consent}>
            {status === "sending" ? "Sending…" : "Send message"}
          </Button>
        </div>
      </form>
    </div>
  );
}
