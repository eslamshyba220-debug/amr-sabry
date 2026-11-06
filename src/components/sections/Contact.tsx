import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { MapPin, Phone, MessageCircle, Clock, Calendar } from 'lucide-react';

interface ContactProps {
  onOpenBooking: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="تواصل معنا الآن"
          subtitle="فريق الاستقبال في مركز المجد جاهز للرد على استفساراتكم وحجز مواعيدكم طوال أيام الأسبوع"
        />

        <div className="grid grid-cols-1 gap-8 items-stretch">
          {/* Contact Details Cards (7 cols) */}
          <div className="flex flex-col justify-between space-y-6 text-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Address */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  عنوان المركز
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  الإسكندرية، جناكليس
                </p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">
                  227 شارع الفتح
                </p>
              </div>

              {/* Card 2: Phones */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  أرقام الهواتف
                </h3>
                <div className="space-y-1.5 pt-1">
                  <a
                    href="tel:01154018220"
                    className="block text-sm font-bold text-slate-800 hover:text-sky-600 transition-colors"
                    dir="ltr"
                  >
                    01154018220 (موبايل)
                  </a>
                  <a
                    href="tel:035744992"
                    className="block text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors"
                    dir="ltr"
                  >
                    035744992 (خط أرضي)
                  </a>
                </div>
              </div>

              {/* Card 3: WhatsApp */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  خدمة واتساب الرسمية
                </h3>
                <p className="text-xs text-slate-500 mb-2">
                  للحجز السريع والاستفسارات الطبية
                </p>
                <a
                  href="https://wa.me/201154018220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
                  dir="ltr"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>01154018220</span>
                </a>
              </div>

              {/* Card 4: Working Hours */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  ساعات العمل
                </h3>
                <p className="text-xs font-semibold text-sky-800">
                  من السبت إلى الخميس:
                </p>
                <p className="text-sm font-bold text-slate-800 mt-1" dir="ltr">
                  10:00 AM - 10:00 PM
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  الجمعة عطلة أسبوعية
                </p>
              </div>
            </div>

            {/* Direct Booking Action Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-700 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-right">
                <h4 className="text-lg font-bold">جاهز لحجز جلستك العلاجية؟</h4>
                <p className="text-xs text-sky-100 mt-0.5">
                  املأ طلب الحجز وسيتم التواصل معك لتأكيد الموعد الأنسب
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-sky-50 text-sky-800 font-bold rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>احجز موعدك الآن</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
