import React from 'react';
import {
  Activity,
  Baby,
  Trophy,
  Apple,
  Flame,
  MessageSquare,
  HeartPulse,
  ShieldCheck,
  Video,
  CalendarCheck2,
} from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  onBook: (serviceTitle: string) => void;
}

// Icon dictionary matching iconName to Lucide Icon component
const iconMap: Record<string, React.ElementType> = {
  Activity,
  Baby,
  Trophy,
  Apple,
  Flame,
  MessageSquare,
  HeartPulse,
  ShieldCheck,
  Video,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBook }) => {
  const IconComponent = iconMap[service.iconName] || Activity;

  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-200 text-right justify-between">
      <div>
        {/* Icon & Index Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors duration-200">
            <IconComponent className="w-6 h-6 stroke-[1.8]" />
          </div>
          <span className="text-xs font-mono text-slate-400">
            {String(service.id).padStart(2, '0')}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* CTA Button */}
      <div className="pt-6 mt-6 border-t border-slate-100">
        <button
          type="button"
          onClick={() => onBook(service.title)}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-sky-700 bg-sky-50 hover:bg-sky-600 hover:text-white rounded-xl transition-colors duration-150 active:scale-98 cursor-pointer"
        >
          <CalendarCheck2 className="w-4 h-4 shrink-0" />
          <span>احجز الخدمة الآن</span>
        </button>
      </div>
    </div>
  );
};
