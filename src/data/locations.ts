import { LocationItem } from '../types';

export const locations: LocationItem[] = [
  {
    id: 1,
    name: 'مركز المجد للعلاج الطبيعي والتأهيل',
    address: 'الإسكندرية، جناكليس - 227 شارع الفتح',
    workingHours: 'من السبت للخميس: 10:00 صباحاً - 10:00 مساءً',
    googleMapsUrl: 'https://maps.google.com/?q=Alexandria+Janaklis+227+Al+Fath+Street',
    isMainBranch: true,
  },
  {
    id: 2,
    name: 'مستشفى إيليت',
    isMainBranch: false,
  },
  {
    id: 3,
    name: 'مستشفى سهلا',
    isMainBranch: false,
  },
  {
    id: 4,
    name: 'مركز ترياق',
    isMainBranch: false,
  },
];
