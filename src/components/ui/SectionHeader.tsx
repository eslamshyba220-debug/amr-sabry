import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'start';
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-right max-w-2xl'
      }`}
    >
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 ${
          light ? 'text-white' : 'text-slate-900'
        }`}
        style={{ textWrap: 'balance' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? 'text-slate-200' : 'text-slate-600'
          }`}
          style={{ textWrap: 'balance' }}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 bg-sky-600 rounded-full ${
          align === 'center' ? 'mx-auto' : 'mr-0'
        }`}
      />
    </div>
  );
};
