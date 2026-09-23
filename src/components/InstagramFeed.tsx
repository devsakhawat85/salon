import React from 'react';
import { INSTAGRAM_POSTS, ARTIST_INFO } from '../data/content';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0a0a0c] py-28 md:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-14 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#c5a880] mb-3">
              <Instagram className="h-3.5 w-3.5" />
              <span>Digital Archive</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#faf8f5]">
              Follow The Work
            </h2>
          </div>

          <a
            href={ARTIST_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c5a880] hover:text-[#dfc8aa] transition-colors"
          >
            <span>Follow {ARTIST_INFO.handle}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Editorial Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-10">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={ARTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#121216] border border-white/5 block"
            >
              <img
                src={post.image}
                alt={post.caption}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Dark Overlay with Engagement & Caption */}
              <div className="absolute inset-0 bg-[#0a0a0c]/85 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-medium">
                  {post.category}
                </span>

                <p className="text-[11px] font-light text-[#e2ded6] line-clamp-3 leading-relaxed">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-[11px] text-[#a39f99] pt-2 border-t border-white/10">
                  <div className="flex items-center gap-1">
                    <Heart className="h-3 w-3 text-red-400" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 bg-[#121216] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c827a]">
          <p>
            Real formulations, behind-the-chair videos, and educational announcements are shared weekly on Instagram.
          </p>
          <a
            href={ARTIST_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-[#faf8f5] hover:text-[#c5a880] transition-colors whitespace-nowrap"
          >
            Visit Instagram Profile →
          </a>
        </div>
      </div>
    </section>
  );
};
