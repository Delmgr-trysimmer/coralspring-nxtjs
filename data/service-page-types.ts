export type ServiceMeta = {
  title: string;
  description: string;
};

export type ServiceContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      /**
       * `aside` — floats right on large screens so following text wraps (like the hero video).
       * `inline` — full-width block in the article column.
       */
      layout?: "aside" | "inline";
      /** Hint sizes for `next/image` optimization; optional, defaults are fine for diagrams. */
      width?: number;
      height?: number;
    };

export type ServiceVideo =
  | { kind: "mp4"; src: string; poster?: string }
  | { kind: "youtube"; videoId: string }
  /** Animated GIF (`<img>`) for hero sidebar; paths under `public/`. */
  | { kind: "gif"; src: string; alt: string };

export type ServicePageDoc = {
  slug: string;
  meta: ServiceMeta;
  /** Optional line above the main title (e.g. Have A Perfect Smile!). */
  tagline?: string;
  /** Main hero / document title. */
  title: string;
  /** Breadcrumb label (can be shorter than `title`). */
  breadcrumbLabel?: string;
  video?: ServiceVideo;
  content: ServiceContentBlock[];
};
