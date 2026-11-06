import { LocationItem } from '../types';

export const locations: LocationItem[] = [
  {
    id: 1,
    name: 'مركز المجد للعلاج الطبيعي والتأهيل',
    address: 'الإسكندرية، جناكليس - 227 شارع الفتح',
    workingHours: 'من السبت للخميس: 10:00 صباحاً - 10:00 مساءً',
    isMainBranch: true,
  },
  {
    id: 2,
    name: 'مستشفى إيليت',
    address: 'كارفور سيتي سنتر، الإسكندرية',
    isMainBranch: false,
  },
  {
    id: 3,
    name: 'مستشفى سهلا',
    address: 'محرم بك، الإسكندرية',
    isMainBranch: false,
  },
  {
    id: 4,
    name: 'مركز ترياق',
    address: 'طريق الحرية، سبورتنج، الإسكندرية',
    isMainBranch: false,
  },
];
