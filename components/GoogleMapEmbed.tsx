import { cn } from "@/lib/utils";

export const CORAL_SPRINGS_SMILES_MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d228981.65500318812!2d-80.249298!3d26.266909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9053973045607%3A0x57c297f7f9aeb0e7!2sCoral%20Springs%20Smiles%20%7C%20Dentist%20Coral%20Springs%20%7C%20Emergency%20%26%20Cosmetic%20Dentist%2C%20Periodontics%20and%20Implant%20Dentistry!5e0!3m2!1sen!2sin!4v1777268592341!5m2!1sen!2sin";

export type GoogleMapEmbedProps = {
  className?: string;
  /** Accessible name for the embedded map. */
  title?: string;
  /** Google Maps embed URL; defaults to Coral Springs Smiles. */
  src?: string;
};

export default function GoogleMapEmbed({
  title = "Coral Springs Smiles office location on Google Maps",
  src = CORAL_SPRINGS_SMILES_MAP_EMBED_SRC,
}: GoogleMapEmbedProps) {
  return (
    <div className="pt-12">
      <div
        className={cn(
          "overflow-hidden rounded-2xl border-4 border-[#004a63] shadow-[0_24px_60px_rgba(0,35,52,0.22)] max-w-7xl mx-auto"
        )}
      >
        <iframe
          src={src}
          title={title}
          className="w-full h-full rounded-2xl  max-w-7xl mx-auto relative aspect-16/6"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
