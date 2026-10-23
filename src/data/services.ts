import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: 'عيادة العلاج الطبيعي',
    description: 'علاج متكامل لمشاكل العظام والعمود الفقري',
    iconName: 'Activity',
    slug: 'physical-therapy',
  },
  {
    id: 2,
    title: 'تأهيل الأطفال',
    description: 'قسم متخصص لتنمية المهارات الحركية للأطفال',
    iconName: 'Baby',
    slug: 'pediatric-rehab',
  },
  {
    id: 3,
    title: 'إصابات الملاعب',
    description: 'تأهيل رياضي مكثف للعودة للملاعب بأمان',
    iconName: 'Trophy',
    slug: 'sports-injuries',
  },
  {
    id: 4,
    title: 'التغذية العلاجية',
    description: 'أنظمة غذائية مخصصة تحت إشراف طبي',
    iconName: 'Apple',
    slug: 'clinical-nutrition',
  },
  {
    id: 5,
    title: 'جلسات إذابة الدهون',
    description: 'أحدث التقنيات لنحت القوام بفاعلية',
    iconName: 'Flame',
    slug: 'fat-reduction',
  },
  {
    id: 6,
    title: 'التخاطب',
    description: 'برامج متخصصة لعلاج مشاكل النطق والنمو',
    iconName: 'MessageSquare',
    slug: 'speech-therapy',
  },
  {
    id: 7,
    title: 'الحجامة الطبية',
    description: 'جلسات علاجية تقليدية بأسس علمية حديثة',
    iconName: 'HeartPulse',
    slug: 'cupping-therapy',
  },
  {
    id: 8,
    title: 'التحكم في الإخراج',
    description: 'علاج تخصصي لمشاكل عضلات الحوض',
    iconName: 'ShieldCheck',
    slug: 'pelvic-rehab',
  },
  {
    id: 9,
    title: 'كشف أون لاين',
    description: 'استشارات طبية عن بعد أينما كنت',
    iconName: 'Video',
    slug: 'online-consultation',
  },
];
