import React, { useEffect } from 'react';
import { X, Calendar, Phone } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
  navItems: { label: string; href: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
  navItems,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLinkClick = (href: string) => {
    onClose();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="قائمة التنقل للهواتف"
      className="fixed inset-0 z-50 flex lg:hidden bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-4/5 max-w-sm h-full bg-white shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
        <div>
          {/* Top Bar with Brand & Close */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
            <span className="text-lg font-bold text-sky-800">
              مركز المجد
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="إغلاق القائمة"
              className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="px-4 py-3 text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors text-right"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom CTAs */}
        <div className="pt-6 border-t border-slate-100 space-y-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl shadow-md shadow-sky-600/20 active:scale-98 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>احجز موعدك الآن</span>
          </button>

          <a
            href="tel:01154018220"
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4 shrink-0 text-slate-500" />
            <span dir="ltr">01154018220</span>
          </a>
        </div>
      </div>
    </div>
  );
};
