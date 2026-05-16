"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface VideoGuideProps {
  url?: string;
  title?: string;
}

/**
 * Standard branded video player for ReplyBase documentation.
 * Automatically extracts YouTube ID and displays a custom cinematic thumbnail.
 */
export default function VideoGuide({ url, title = "Video Guide" }: VideoGuideProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!url) return null;

  // Extract YouTube ID
  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYoutubeId(url);
  if (!videoId) return null;

  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-2xl transition-all hover:border-indigo-500/30 group">
      <div 
        className="relative aspect-video w-full cursor-pointer overflow-hidden" 
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            <img 
              src="/image/doc-thumbnail.png" 
              alt="Video Thumbnail" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/10 transition-all group-hover:bg-slate-900/30">
              <div className="flex flex-col items-center bg-slate-900/60 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl transition-all group-hover:bg-slate-900/80 group-hover:border-indigo-500/50 max-w-[80%]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 border border-indigo-400 shadow-xl transition-all group-hover:scale-110 group-hover:shadow-indigo-500/50">
                  <Play className="h-6 w-6 text-white fill-white ml-1" />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-white font-bold text-xl tracking-tight px-2 line-clamp-2">{title}</p>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2 opacity-80">Watch Tutorial</p>
                </div>
              </div>
            </div>
            
            {/* Academy Branding */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-indigo-600 flex items-center justify-center text-[10px] font-black text-white">RB</div>
                <span className="text-xs font-bold text-white/80 tracking-tighter">REPLYBASE ACADEMY</span>
            </div>
          </>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&autohide=1`}
            title={title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
