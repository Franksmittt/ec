"use client";

import { useState, useTransition } from "react";
import {
  leadStepOneSchema,
  leadStepTwoSchema,
  leadStepThreeSchema,
} from "@/lib/validations";

type FormState = {
  name: string;
  email: string;
  area: string;
  timeline: string;
  siteStatus: string;
  phone: string;
  privacyAcknowledged: boolean;
  prospectusAcknowledged: boolean;
  marketingConsent: boolean;
};

const initial: FormState = {
  name: "",
  email: "",
  area: "",
  timeline: "1-3 months",
  siteStatus: "Still searching",
  phone: "",
  privacyAcknowledged: false,
  prospectusAcknowledged: false,
  marketingConsent: false,
};

export function LeadCaptureForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [pending, startTransition] = useTransition();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function nextFromOne() {
    const parsed = leadStepOneSchema.safeParse(form);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        next[String(issue.path[0])] = issue.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setStep(2);
  }

  function nextFromTwo() {
    const parsed = leadStepTwoSchema.safeParse(form);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        next[String(issue.path[0])] = issue.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setStep(3);
  }

  function submit() {
    const parsed = leadStepThreeSchema.safeParse({
      privacyAcknowledged: form.privacyAcknowledged,
      prospectusAcknowledged: form.prospectusAcknowledged,
      marketingConsent: form.marketingConsent,
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        next[String(issue.path[0])] = issue.message;
      });
      setErrors(next);
      return;
    }

    startTransition(async () => {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        setErrors({ form: "Something went wrong. Please try again." });
        return;
      }
      setDone(true);
    });
  }

  if (done) {
    return (
      <div className="border border-blue/20 bg-paper p-8 text-center shadow-[0_16px_40px_rgba(8,53,114,0.08)]">
        <p className="font-display text-3xl font-bold tracking-wide text-blue-deep">
          Prospectus request received
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          We will review your area and timeline, then follow up with the
          investment pack.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-line bg-paper p-6 shadow-[0_16px_40px_rgba(8,53,114,0.08)] md:p-8">
      <div className="mb-8 flex items-center gap-3">
        <p className="text-sm font-semibold text-ink">Step {step} of 3</p>
        <div className="h-px flex-1 bg-line" />
        <div className="flex gap-1.5">
          {[1, 2, 3].map((n) => (
            <span
              key={n}
              className={`h-2 w-2 rounded-full ${
                n <= step ? "bg-blue" : "bg-line"
              }`}
            />
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-5">
          <Field
            label="Full name"
            error={errors.name}
            value={form.name}
            onChange={(v) => update("name", v)}
            autoComplete="name"
          />
          <Field
            label="Email"
            type="email"
            error={errors.email}
            value={form.email}
            onChange={(v) => update("email", v)}
            autoComplete="email"
          />
          <Field
            label="Target area"
            error={errors.area}
            value={form.area}
            onChange={(v) => update("area", v)}
            placeholder="e.g. Germiston, Gauteng"
          />
          <button
            type="button"
            onClick={nextFromOne}
            className="w-full bg-blue py-3.5 text-[15px] font-semibold text-paper transition hover:bg-blue-deep"
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <Select
            label="Deployment timeline"
            value={form.timeline}
            onChange={(v) => update("timeline", v)}
            options={["1-3 months", "3-6 months", "6+ months", "Exploring"]}
          />
          <Select
            label="Site status"
            value={form.siteStatus}
            onChange={(v) => update("siteStatus", v)}
            options={[
              "I own the land",
              "Negotiating a commercial lease",
              "Still searching",
              "Other",
            ]}
          />
          <Field
            label="Phone (optional)"
            type="tel"
            error={errors.phone}
            value={form.phone}
            onChange={(v) => update("phone", v)}
            autoComplete="tel"
          />
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 border border-line py-3.5 text-[15px] font-semibold text-ink"
            >
              Back
            </button>
            <button
              type="button"
              onClick={nextFromTwo}
              className="flex-1 bg-blue py-3.5 text-[15px] font-semibold text-paper transition hover:bg-blue-deep"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <p className="text-sm leading-relaxed text-ink-soft">
            Electro City is the responsible party for this enquiry. Endpoint
            Media provides technical website services only. Supplying information
            is voluntary; without minimum contact and area details we cannot
            process the request. Full notices:{" "}
            <a href="/legal/privacy" className="font-semibold text-blue">
              Privacy
            </a>
            {" · "}
            <a href="/legal/terms" className="font-semibold text-blue">
              Terms
            </a>
            {" · "}
            <a href="/legal/information" className="font-semibold text-blue">
              Legal information
            </a>
            .
          </p>

          <label className="flex items-start gap-3 text-sm text-ink">
            <input
              type="checkbox"
              checked={form.privacyAcknowledged}
              onChange={(e) => update("privacyAcknowledged", e.target.checked)}
              className="mt-1 accent-[var(--blue)]"
            />
            <span>
              I consent to Electro City processing my personal information to
              contact me regarding this enquiry, subject to the{" "}
              <a href="/legal/privacy" className="font-semibold text-blue">
                Privacy Notice
              </a>
              . Unticked by default.
            </span>
          </label>
          {errors.privacyAcknowledged && (
            <p className="text-xs text-red">{errors.privacyAcknowledged}</p>
          )}

          <label className="flex items-start gap-3 text-sm text-ink">
            <input
              type="checkbox"
              checked={form.prospectusAcknowledged}
              onChange={(e) =>
                update("prospectusAcknowledged", e.target.checked)
              }
              className="mt-1 accent-[var(--blue)]"
            />
            <span>
              I acknowledge that any prospectus materials, package figures, and
              calculator outputs are illustrative / informational only; they are
              not an earnings guarantee, not a franchise offer, and not legal or
              financial advice. I have been advised to seek independent legal and
              financial advice before concluding any commercial agreement.
              Unticked by default.
            </span>
          </label>
          {errors.prospectusAcknowledged && (
            <p className="text-xs text-red">{errors.prospectusAcknowledged}</p>
          )}

          <label className="flex items-start gap-3 text-sm text-ink">
            <input
              type="checkbox"
              checked={form.marketingConsent}
              onChange={(e) => update("marketingConsent", e.target.checked)}
              className="mt-1 accent-[var(--blue)]"
            />
            <span>
              Optional: I consent to receiving electronic direct marketing about
              Electro City opportunities (email / SMS / similar). I may withdraw
              consent at any time. Unticked by default (POPIA Section 69
              posture).
            </span>
          </label>

          {errors.form && <p className="text-xs text-red">{errors.form}</p>}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex-1 border border-line py-3.5 text-[15px] font-semibold text-ink"
            >
              Back
            </button>
            <button
              type="button"
              onClick={submit}
              disabled={pending}
              className="flex-1 bg-blue py-3.5 text-[15px] font-semibold text-paper transition hover:bg-blue-deep disabled:opacity-60"
            >
              {pending ? "Sending…" : "Request prospectus"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border border-line bg-paper px-3 py-3 text-[15px] text-ink outline-none transition focus:border-blue"
      />
      {error && <span className="mt-1 block text-xs text-red">{error}</span>}
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border border-line bg-paper px-3 py-3 text-[15px] text-ink outline-none transition focus:border-blue"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
