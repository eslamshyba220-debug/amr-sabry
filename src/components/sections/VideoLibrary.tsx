import React, { useState } from 'react';
import { Play } from 'lucide-react';
import thumbnail1 from '../../assets/images/video-thumbnails/1478920913884327.jpg';
import thumbnail2 from '../../assets/images/video-thumbnails/926581159755547.jpg';
import thumbnail3 from '../../assets/images/video-thumbnails/1269625421781908.jpg';
import thumbnail4 from '../../assets/images/video-thumbnails/1268556148567355.jpg';
import thumbnail5 from '../../assets/images/video-thumbnails/896956859853957.jpg';
import thumbnail6 from '../../assets/images/video-thumbnails/1077959327893636.jpg';

const videos = [
  { id: '1478920913884327', thumbnail: thumbnail1 },
  { id: '926581159755547', thumbnail: thumbnail2 },
  { id: '1269625421781908', thumbnail: thumbnail3 },
  { id: '1268556148567355', thumbnail: thumbnail4 },
  { id: '896956859853957', thumbnail: thumbnail5 },
  { id: '1077959327893636', thumbnail: thumbnail6 },
];

export const VideoLibrary: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <section id="videos" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video) => {
            const isActive = activeVideoId === video.id;

            return (
              <article
                key={video.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-9/16 overflow-hidden bg-slate-900">
                  {isActive ? (
                    <iframe
                      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(`https://www.facebook.com/reel/${video.id}/`)}&show_text=false&autoplay=1`}
                      title={`Facebook video ${video.id}`}
                      className="absolute inset-0 h-full w-full border-0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveVideoId(video.id)}
                      aria-label={`تشغيل الفيديو ${video.id}`}
                      className="group absolute inset-0 flex h-full w-full items-center justify-center cursor-pointer"
                    >
                      <img
                        src={video.thumbnail}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-slate-950/70 text-white shadow-xl ring-2 ring-white/80 transition-transform group-hover:scale-110">
                        <Play className="mr-0.5 h-7 w-7 fill-current" aria-hidden="true" />
                      </span>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
