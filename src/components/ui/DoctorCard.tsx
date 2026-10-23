import React from 'react';
import { Calendar, GraduationCap } from 'lucide-react';
import { Doctor } from '../../types';

interface DoctorCardProps {
  doctor: Doctor;
  onBook: (doctorName: string) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBook }) => {
  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-200 overflow-hidden text-right">
      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between gap-4">
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
            {doctor.name}
          </h3>

          <p className="text-sm font-medium text-sky-700 leading-snug">
            {doctor.specialty}
          </p>

          {/* Qualification only rendered if provided */}
          {doctor.qualification && (
            <div className="flex items-start gap-2 pt-1 text-xs text-slate-500 leading-relaxed">
              <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>{doctor.qualification}</span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => onBook(doctor.name)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-sky-700 bg-sky-50 hover:bg-sky-600 hover:text-white rounded-xl transition-colors duration-150 active:scale-98 cursor-pointer"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>احجز موعد</span>
          </button>
        </div>
      </div>
    </div>
  );
};
