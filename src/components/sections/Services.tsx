import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { ServiceCard } from '../ui/ServiceCard';
import { services } from '../../data/services';

interface ServicesProps {
  onBookService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="خدماتنا المتخصصة"
          subtitle="برامج علاجية وتأهيلية متكاملة مصممة بأعلى المعايير الطبية لكل فئة عمرية وحالة صحية"
        />

        {/* 10 Services in a clean responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBook={onBookService}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
