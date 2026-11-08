import React from 'react';
import { Calendar, ChevronDown, Award, ShieldCheck, Stethoscope } from 'lucide-react';
import heroDoctorImg from '../../../Public/dr-amr.png';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-sky-50/60 via-white to-slate-50/40"
    >
      {/* Subtle background ambient circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Right Column (Arabic RTL First): Text & Headline */}
          <div className="lg:col-span-7 text-right space-y-6">
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs sm:text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
              <span>رعاية طبية بمواصفات عالمية</span>
            </div>

            {/* Main Headline & Doctor Credentials */}
            <div className="space-y-3">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
                style={{ textWrap: 'balance' }}
              >
                مركز المجد للعلاج الطبيعي والتأهيل
              </h1>
              <div className="pt-2">
                <span className="text-xl sm:text-2xl font-bold text-sky-700 block">
                  تحت إشراف دكتور / عمرو صبري
                </span>
                <p className="text-base sm:text-lg font-medium text-slate-700 mt-1">
                  استشاري العلاج الطبيعي والتأهيل
                </p>
                <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
                  <Award className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="font-semibold text-slate-800">
                    ماجستير ودكتوراه جامعة القاهرة
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              في مركز المجد للعلاج الطبيعي والتأهيل بالإسكندرية، جناكليس، نقدم برامج العلاج الطبيعي والتأهيل الحركي، علاج آلام الظهر والرقبة والعمود الفقري، تأهيل إصابات الملاعب وتأهيل الأطفال، تحت إشراف د. عمرو صبري، استشاري العلاج الطبيعي والتأهيل.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-sky-600 hover:bg-sky-700 active:scale-98 text-white font-bold rounded-xl shadow-md shadow-sky-600/25 transition-all text-base cursor-pointer"
              >
                <Calendar className="w-5 h-5 shrink-0" />
                <span>احجز موعدك الآن</span>
              </button>

              <button
                type="button"
                onClick={handleScrollToServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-sky-50 text-sky-700 border border-sky-300 font-bold rounded-xl shadow-xs transition-colors text-base cursor-pointer"
              >
                <span>تعرف على خدماتنا</span>
                <ChevronDown className="w-4 h-4 shrink-0" />
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-sky-600 shrink-0" />
                <span>برامج علاجية فردية متخصصة</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>أحدث تقنيات التأهيل الطبي</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-sky-600 shrink-0" />
                <span>كوادر واستشاريون متخصصون</span>
              </div>
            </div>
          </div>

          {/* Left Column (Image & Composition) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Frame */}
            <div className="relative w-full max-w-md aspect-4/5 sm:aspect-3/4 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src={heroDoctorImg}
                alt="دكتور عمرو صبري استشاري العلاج الطبيعي والتأهيل"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />

              {/* In-Frame Doctor Label */}
              <div className="absolute bottom-4 right-4 left-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-right">
                <p className="text-xs text-sky-600 font-bold">المشرف العام</p>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                  د. عمرو صبري
                </h3>
                <p className="text-xs text-slate-600">
                  استشاري العلاج الطبيعي والتأهيل - ماجستير ودكتوراه جامعة القاهرة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
