import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { navItems } from './Navbar';

export const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Col 1: About Al-Majd */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                م
              </div>
              <span className="text-xl font-bold text-white">
                مركز المجد
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              مركز المجد للعلاج الطبيعي والتأهيل تحت إشراف د. عمرو صبري، استشاري العلاج الطبيعي والتأهيل، وجهتك المتخصصة لاستعادة الحركة، تخفيف الألم، وتحسين جودة الحياة.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/201154018220"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-600/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب مباشر: 01154018220</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-8 after:h-0.5 after:bg-sky-500">
              روابط سريعة
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="hover:text-sky-400 transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-8 after:h-0.5 after:bg-sky-500">
              معلومات التواصل
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <span>الإسكندرية، جناكليس - 227 شارع الفتح</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:01154018220" className="hover:text-white transition-colors" dir="ltr">
                    01154018220
                  </a>
                  <a href="tel:035744992" className="hover:text-white transition-colors text-xs" dir="ltr">
                    035744992 (أرضي)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/201154018220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                  dir="ltr"
                >
                  01154018220 (واتساب)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Working Hours */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-8 after:h-0.5 after:bg-sky-500">
              مواعيد العمل
            </h3>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 space-y-2">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
                <Clock className="w-4 h-4" />
                <span>ساعات الاستقبال اليومية:</span>
              </div>
              <p className="text-sm font-bold text-white">من السبت إلى الخميس</p>
              <p className="text-xs text-slate-300" dir="ltr">
                10:00 AM - 10:00 PM
              </p>
              <p className="text-xs text-slate-400 pt-1">
                (10:00 صباحاً - 10:00 مساءً)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500">
          <p>© 2026 مركز المجد للعلاج الطبيعي والتأهيل. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};
