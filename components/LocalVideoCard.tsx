"use client";

import { useState, useRef } from "react";

export interface LocalVideoItem {
  src: string;
  title: string;
}

export default function LocalVideoCard({ video }: { video: LocalVideoItem }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onClick={togglePlay}
      className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-md transition-shadow hover:shadow-lg"
    >
      <video
        ref={videoRef}
        src={video.src}
        controls
        preload="metadata"
        playsInline
        aria-label={video.title}
        className="h-full w-full rounded-2xl bg-black object-contain"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity group-hover:bg-black/10">
          <div className="flex h-12 w-16 items-center justify-center rounded-2xl bg-[#212121]/80 text-white shadow-lg transition-transform group-hover:scale-110 group-hover:bg-red-600">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
