import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { DoctorCard } from '../ui/DoctorCard';
import { doctors } from '../../data/doctors';

interface TeamProps {
  onBookDoctor: (doctorName: string) => void;
}

export const Team: React.FC<TeamProps> = ({ onBookDoctor }) => {
  // First row: 3 doctors
  const firstRowDoctors = doctors.slice(0, 3);
  // Remaining doctors centered
  const secondRowDoctors = doctors.slice(3, 5);

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="فريق العمل الطبي"
          subtitle="نخبة من الاستشاريين والأخصائيين المتخصصين في العلاج الطبيعي والتأهيل والتغذية العلاجية"
        />

        {/* Desktop Balanced Layout: Row 1 (3 items), Row 2 (2 items centered) */}
        <div className="space-y-6 md:space-y-8">
          {/* Row 1: 3 Doctors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {firstRowDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onBook={onBookDoctor}
              />
            ))}
          </div>

          {/* Row 2: 2 Doctors Centered on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center gap-6 md:gap-8">
            {secondRowDoctors.map((doctor) => (
              <div key={doctor.id} className="lg:w-[calc(33.333%-1.35rem)]">
                <DoctorCard
                  doctor={doctor}
                  onBook={onBookDoctor}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
