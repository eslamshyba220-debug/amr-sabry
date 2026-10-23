import React from 'react';
import { Activity, HeartPulse, Target } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const careSteps = [
  {
    icon: Activity,
    title: 'تقييم الحركة والحالة',
    description:
      'نبدأ بفهم طبيعة الألم أو صعوبة الحركة واحتياجات كل حالة، لتحديد أهداف مناسبة للعلاج والتأهيل.',
  },
  {
    icon: Target,
    title: 'خطة علاج وتأهيل مناسبة',
    description:
      'جلسات وبرامج علاج طبيعي وتأهيل حركي تُختار وفق الحالة، مع التركيز على استعادة الحركة والقيام بالأنشطة اليومية.',
  },
  {
    icon: HeartPulse,
    title: 'متابعة التقدم',
    description:
      'متابعة الاستجابة للعلاج وتطور الحركة، وتعديل البرنامج العلاجي بما يتناسب مع تقدم الحالة.',
  },
];

export const RehabInfo: React.FC = () => {
  return (
    <section id="rehab-info" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="العلاج الطبيعي والتأهيل في مركز المجد"
          subtitle="رعاية حركية متخصصة تساعدك على تخفيف الألم، وتحسين الحركة، والعودة إلى أنشطتك اليومية بأمان."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {careSteps.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 text-right"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{description}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-slate-600">
          في مركز المجد، نهتم بالتأهيل لمشكلات العظام والعمود الفقري والإصابات،
          ونساعد كل مراجع على فهم خطوات علاجه ومتابعة تقدمه بالتعاون مع فريق
          العلاج الطبيعي والتأهيل.
        </p>
      </div>
    </section>
  );
};
