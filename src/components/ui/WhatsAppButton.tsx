import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <aside aria-label="تواصل سريع عبر واتساب">
      <a
        href="https://wa.me/201154018220"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا مباشرة عبر واتساب"
        className="fixed bottom-6 left-6 z-40 group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
      >
        <MessageCircle className="w-6 h-6 shrink-0 fill-current" />
        <span className="hidden sm:inline-block text-sm font-bold tracking-tight">
          تواصل معنا واتساب
        </span>
      </a>
    </aside>
  );
};
