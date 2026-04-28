import { parsePhoneNumberFromString } from "libphonenumber-js";

export const MAX_MESSAGE_LEN = 1200;
export const MAX_NAME_LEN = 120;
export const MAX_EMAIL_LEN = 254;

export type FieldValidation =
  | { ok: true; value: string }
  | { ok: false; error: string };

const CTRL_EXCEPT_WS = /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/;

/** Short fields: block comment markers, stacked statements, classic tautologies. */
const SHORT_INJECTION =
  /(\/\*)|(\*\/)|;\s*(select|insert|delete|drop|union|update|exec|execute)\b|\bunion\s+all\s+select\b|\bor\b\s*\d+\s*=\s*\d+\b/i;

/** Message body: same plus HTML script injection; allow normal words like “select”. */
const MESSAGE_INJECTION =
  /(\/\*)|(\*\/)|;\s*(select|insert|delete|drop|union|update|exec|execute)\b|\bunion\s+all\s+select\b|\bor\b\s*\d+\s*=\s*\d+\b/i;

const SCRIPT_TAG = /<\s*script\b/i;

/** Person name: letters (any script), marks, spaces, hyphen, apostrophe, period. */
const NAME_RE = /^[\p{L}\p{M}\s'.-]+$/u;

function stripControlExceptNewlines(s: string): string {
  return s.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, "");
}

export function validateFirstName(raw: unknown): FieldValidation {
  if (typeof raw !== "string") {
    return { ok: false, error: "First name is required." };
  }
  const v = raw.trim();
  if (!v) return { ok: false, error: "First name is required." };
  if (v.length > MAX_NAME_LEN) {
    return { ok: false, error: `First name must be at most ${MAX_NAME_LEN} characters.` };
  }
  if (CTRL_EXCEPT_WS.test(v) || SHORT_INJECTION.test(v) || SCRIPT_TAG.test(v)) {
    return { ok: false, error: "First name contains invalid characters." };
  }
  if (!NAME_RE.test(v)) {
    return {
      ok: false,
      error: "First name may only include letters, spaces, hyphens, apostrophes, and periods.",
    };
  }
  return { ok: true, value: v };
}

export function validateLastName(raw: unknown): FieldValidation {
  if (typeof raw !== "string") {
    return { ok: false, error: "Last name is required." };
  }
  const v = raw.trim();
  if (!v) return { ok: false, error: "Last name is required." };
  if (v.length > MAX_NAME_LEN) {
    return { ok: false, error: `Last name must be at most ${MAX_NAME_LEN} characters.` };
  }
  if (CTRL_EXCEPT_WS.test(v) || SHORT_INJECTION.test(v) || SCRIPT_TAG.test(v)) {
    return { ok: false, error: "Last name contains invalid characters." };
  }
  if (!NAME_RE.test(v)) {
    return {
      ok: false,
      error: "Last name may only include letters, spaces, hyphens, apostrophes, and periods.",
    };
  }
  return { ok: true, value: v };
}

/**
 * Practical single-line email check plus injection-safe character set.
 */
export function validateEmail(raw: unknown): FieldValidation {
  if (typeof raw !== "string") {
    return { ok: false, error: "Email is required." };
  }
  const v = raw.trim();
  if (!v) return { ok: false, error: "Email is required." };
  if (v.length > MAX_EMAIL_LEN) {
    return { ok: false, error: "Email is too long." };
  }
  if (/[\s<>"'`\\\x00-\x1f\x7f]/.test(v)) {
    return { ok: false, error: "Email contains invalid characters." };
  }
  if (SHORT_INJECTION.test(v) || SCRIPT_TAG.test(v)) {
    return { ok: false, error: "Email contains invalid patterns." };
  }
  const emailRe =
    /^[a-z0-9][a-z0-9._%+-]{0,63}@[a-z0-9][a-z0-9-]{0,63}(\.[a-z0-9][a-z0-9-]{0,63})+$/i;
  if (!emailRe.test(v)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  return { ok: true, value: v };
}

export function validatePhone(raw: unknown): FieldValidation {
  if (typeof raw !== "string") {
    return { ok: false, error: "Phone is required." };
  }
  const trimmed = raw.trim();
  if (!trimmed) return { ok: false, error: "Phone is required." };
  if (CTRL_EXCEPT_WS.test(trimmed) || SHORT_INJECTION.test(trimmed)) {
    return { ok: false, error: "Phone contains invalid characters." };
  }
  const digits = trimmed.replace(/\D/g, "");
  if (!digits) return { ok: false, error: "Phone is required." };
  const e164 = trimmed.startsWith("+") ? trimmed : `+${digits}`;
  const parsed = parsePhoneNumberFromString(e164);
  if (!parsed?.isValid()) {
    return { ok: false, error: "Please enter a valid phone number." };
  }
  return { ok: true, value: parsed.format("E.164") };
}

export function validateMessage(raw: unknown): FieldValidation {
  if (typeof raw !== "string") {
    return { ok: false, error: "Message is required." };
  }
  let v = stripControlExceptNewlines(raw);
  v = v.trim();
  if (!v) return { ok: false, error: "Message is required." };
  if (v.length > MAX_MESSAGE_LEN) {
    return { ok: false, error: `Message must be at most ${MAX_MESSAGE_LEN} characters.` };
  }
  if (MESSAGE_INJECTION.test(v) || SCRIPT_TAG.test(v)) {
    return { ok: false, error: "Message contains disallowed patterns." };
  }
  return { ok: true, value: v };
}
