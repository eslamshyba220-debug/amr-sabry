import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { partners } from '../../data/partners';
import { Building2 } from 'lucide-react';

export const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-16 md:py-20 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="تعاقدات مركز المجد"
          subtitle="نفخر بتقديم خدماتنا لعملاء كبرى الشركات والهيئات"
        />

        {/* Clean, professional organization cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-sky-300 hover:bg-sky-50/50 hover:shadow-xs transition-all duration-200 text-center min-h-[95px]"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-2 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-sky-900 transition-colors leading-tight">
                {partner.name}
              </span>
              {partner.category && (
                <span className="text-[10px] text-slate-400 mt-1">
                  {partner.category}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
