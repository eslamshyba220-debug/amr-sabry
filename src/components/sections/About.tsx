import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Quote, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import clinicImg from '../../assets/images/clinic_rehab_facility_1792776640086.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="من نحن"
          subtitle="تعرف على رؤيتنا الطبية ورسالتنا في تقديم أفضل خدمات العلاج الطبيعي والتأهيل"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image & Trust Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
              <img
                src={clinicImg}
                alt="مركز المجد للعلاج الطبيعي والتأهيل"
                className="w-full h-[360px] sm:h-[440px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 right-5 left-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 text-right">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm mb-1">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>بيئة علاجية متطورة</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  تجهيزات طبية متكاملة وأحدث أجهزة العلاج الفيزيائي والتأهيل الحركي بالإسكندرية.
                </p>
              </div>
            </div>
          </div>

          {/* Text Content & Quote */}
          <div className="lg:col-span-6 text-right space-y-6">
            <h3
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug"
              style={{ textWrap: 'balance' }}
            >
              نحن شركاءك في رحلة الشفاء والتعافي
            </h3>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              مركز المجد للعلاج الطبيعي والتأهيل هو وجهتك المتخصصة لاستعادة الحركة، تخفيف الألم، وتحسين جودة الحياة. تحت إشراف الدكتور عمرو صبري – استشاري العلاج الطبيعي والتأهيل، حاصل على الماجستير والدكتوراه من جامعة القاهرة – نقدم رعاية متكاملة مبنية على أحدث الأسس العلمية والتقنيات الحديثة في مجال العلاج الطبيعي.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              نؤمن بأن كل مريض يستحق خطة علاج فردية تناسب احتياجاته وظروفه الصحية. لذلك، يعمل فريقنا المتخصص بروح الفريق وبأعلى درجات المهنية لتقديم أفضل النتائج.
            </p>

            {/* Quote Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-sky-200/80 shadow-xs relative text-right">
              <Quote className="w-8 h-8 text-sky-400/40 absolute top-4 left-4" />
              <p className="text-sm sm:text-base font-bold text-sky-900 leading-relaxed italic relative z-10">
                "هدفنا هو أن نكون شركاءك في رحلة الشفاء والتعافي، بخطى ثابتة نحو حياة أكثر صحة واستقلالية."
              </p>
              <span className="block mt-2 text-xs font-semibold text-slate-500">
                — د. عمرو صبري
              </span>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>إشراف طبي واستشاري مباشر</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>برامج علاجية مخصصة لكل حالة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>أحدث الأجهزة والتقنيات العلاجية</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-sky-600 shrink-0" />
                <span>متابعة دورية مستمرة لتقدم المريض</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
