import React, { useState } from 'react';
import { Menu, Calendar, Phone } from 'lucide-react';
import { MobileMenu } from '../ui/MobileMenu';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const navItems = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'فريق العمل', href: '#team' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'العلاج الطبيعي والتأهيل', href: '#rehab-info' },
  { label: 'تواصل معنا', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, '#home')}
            className="flex items-center gap-2 sm:gap-3 whitespace-nowrap shrink-0 group focus:outline-hidden focus:ring-2 focus:ring-sky-500 rounded-lg"
            aria-label="مركز المجد للعلاج الطبيعي والتأهيل - الرئيسية"
          >
            <img
              src="/logo.jpg"
              alt=""
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover border border-slate-200"
              width="56"
              height="56"
            />
            <div className="flex flex-col text-right">
              <span className="text-base sm:text-xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                مركز المجد
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500">
                للعلاج الطبيعي والتأهيل
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="hover:text-sky-600 transition-colors py-2 whitespace-nowrap shrink-0 focus:outline-hidden focus:text-sky-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:01154018220"
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-sky-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span dir="ltr">01154018220</span>
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 active:scale-98 rounded-xl shadow-xs hover:shadow-md hover:shadow-sky-600/20 transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>احجز موعدك الآن</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="فتح القائمة الرئيسية"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenBooking={onOpenBooking}
        navItems={navItems}
      />
    </>
  );
};
