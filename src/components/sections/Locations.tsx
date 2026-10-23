import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { MapPin, Clock, Calendar, ExternalLink, Building } from 'lucide-react';
import { locations } from '../../data/locations';

interface LocationsProps {
  onBookDoctor: (doctorName: string) => void;
}

export const Locations: React.FC<LocationsProps> = ({ onBookDoctor }) => {
  return (
    <section id="locations" className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="أماكن تواجد الدكتور عمرو صبري"
          subtitle="يمكنكم حجز كشف واستشارة د. عمرو صبري في الصروح الطبية التالية"
        />

        {/* Locations Grid */}
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
                {/* Header Badge & Icon */}
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

                {/* Address if available */}
                {loc.address && (
                  <div className="flex items-start gap-2 text-xs text-slate-600 mb-2.5 leading-relaxed">
                    <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                )}

                {/* Working hours if available */}
                {loc.workingHours && (
                  <div className="flex items-start gap-2 text-xs text-slate-600 mb-3 leading-relaxed">
                    <Clock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{loc.workingHours}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-4 border-t border-slate-100 space-y-2">
                <button
                  type="button"
                  onClick={() => onBookDoctor('د / عمرو صبري')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors active:scale-98 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>احجز موعد كشف</span>
                </button>

                {loc.googleMapsUrl && (
                  <a
                    href={loc.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs text-slate-600 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    <span>عرض الموقع على الخريطة</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
