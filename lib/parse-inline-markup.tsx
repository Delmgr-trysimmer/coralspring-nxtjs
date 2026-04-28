import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN_RE = /(\*\*[^*]+\*\*|\[[^\]]*\]\([^)]*\))/g;

const linkClassName =
  "font-semibold text-brand underline-offset-2 transition-colors hover:text-brand-muted hover:underline";

/**
 * Renders `**bold**` and `[label](/path)` (or `tel:`, `mailto:`, `https:`) as React nodes.
 */
export function parseInlineMarkup(text: string): ReactNode {
  if (!text) return null;

  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(TOKEN_RE.source, "g");

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }

    const token = match[1]!;
    if (token.startsWith("**") && token.endsWith("**") && token.length > 4) {
      nodes.push(
        <strong key={`${match.index}-s`}>{token.slice(2, -2)}</strong>,
      );
    } else {
      const linkMatch = token.match(/^\[([^\]]*)\]\(([^)]*)\)$/);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        const external =
          /^https?:\/\//i.test(href) ||
          href.startsWith("mailto:") ||
          href.startsWith("tel:");

        if (external) {
          nodes.push(
            <a
              key={`${match.index}-a`}
              href={href}
              className={linkClassName}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </a>,
          );
        } else {
          nodes.push(
            <Link
              key={`${match.index}-l`}
              href={href}
              className={linkClassName}
            >
              {label}
            </Link>,
          );
        }
      } else {
        nodes.push(token);
      }
    }

    last = match.index + token.length;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  return <>{nodes}</>;
}
