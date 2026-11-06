import { LocationItem } from '../types';

export const locations: LocationItem[] = [
  {
    id: 1,
    name: 'مركز المجد للعلاج الطبيعي والتأهيل',
    address: 'الإسكندرية، جناكليس - 227 شارع الفتح',
    workingHours: 'من السبت للخميس: 10:00 صباحاً - 10:00 مساءً',
    isMainBranch: true,
    bookingNumber: '01154018220',
    bookingHref: 'https://wa.me/201154018220',
    bookingChannel: 'whatsapp',
  },
  {
    id: 2,
    bookingNumber: '15461',
    bookingHref: 'tel:15461',
    bookingChannel: 'phone',
    name: 'مستشفى إيليت',
    address: 'كارفور سيتي سنتر، الإسكندرية',
    isMainBranch: false,
  },
  {
    id: 3,
    bookingNumber: '15823',
    bookingHref: 'tel:15823',
    bookingChannel: 'phone',
    name: 'مستشفى سهلا',
    address: 'محرم بك، الإسكندرية',
    isMainBranch: false,
  },
  {
    id: 4,
    bookingNumber: '+20 11 03600787',
    bookingHref: 'tel:+201103600787',
    bookingChannel: 'phone',
    name: 'مركز ترياق',
    address: 'طريق الحرية، سبورتنج، الإسكندرية',
    isMainBranch: false,
  },
];
