import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { MapPin, Clock, Building, Phone, MessageCircle } from 'lucide-react';
import { locations } from '../../data/locations';

export const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="أماكن تواجد الدكتور عمرو صبري"
          subtitle="عناوين الأماكن التي يتواجد بها د. عمرو صبري"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className={`flex flex-col justify-between h-full p-6 rounded-2xl bg-white border transition-all duration-200 text-right ${
                loc.isMainBranch
                  ? 'border-sky-300 ring-2 ring-sky-100 shadow-sm'
                  : 'border-slate-200/80 shadow-xs hover:border-sky-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                  {loc.isMainBranch && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800">
                      الفرع الرئيسي
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {loc.name}
                </h3>

                {loc.address && (
                  <div className="flex items-start gap-2 text-xs text-slate-600 mb-2.5 leading-relaxed">
                    <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                )}

                {loc.workingHours && (
                  <div className="flex items-start gap-2 text-xs text-slate-600 mb-3 leading-relaxed">
                    <Clock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{loc.workingHours}</span>
                  </div>
                )}

                {loc.bookingNumber && loc.bookingHref && loc.bookingChannel && (
                  <a
                    href={loc.bookingHref}
                    target={loc.bookingChannel === 'whatsapp' ? '_blank' : undefined}
                    rel={loc.bookingChannel === 'whatsapp' ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900 transition-colors"
                    aria-label={`للحجز في ${loc.name}: ${loc.bookingNumber}`}
                  >
                    {loc.bookingChannel === 'whatsapp' ? (
                      <MessageCircle className="w-4 h-4 shrink-0" />
                    ) : (
                      <Phone className="w-4 h-4 shrink-0" />
                    )}
                    <span>
                      <span className="text-xs text-slate-500">للحجز: </span>
                      <span dir="ltr">{loc.bookingNumber}</span>
                    </span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
