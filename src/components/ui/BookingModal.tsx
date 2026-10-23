import React, { useState, useEffect } from 'react';
import { X, Send, Calendar, User, Phone, Stethoscope, FileText, CheckCircle2 } from 'lucide-react';
import { BookingFormData } from '../../types';
import { doctors } from '../../data/doctors';
import { services } from '../../data/services';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctor?: string;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialDoctor = '',
  initialService = '',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    service: initialService,
    doctor: initialDoctor,
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync state when opened with initial values
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        phone: '',
        service: initialService || '',
        doctor: initialDoctor || '',
        preferredDate: '',
        notes: '',
      });
      setSubmitted(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialDoctor, initialService]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the WhatsApp message in the exact specified format
    const messageLines = [
      'مرحباً، أرغب في حجز موعد في مركز المجد.',
      '',
      `الاسم: ${formData.name.trim() || 'غير محدد'}`,
      `رقم الهاتف: ${formData.phone.trim() || 'غير محدد'}`,
      `الخدمة: ${formData.service.trim() || 'عام / استشارة'}`,
      `الطبيب: ${formData.doctor.trim() || 'أول طبيب متاح'}`,
      `الموعد المفضل: ${formData.preferredDate.trim() || 'في أقرب وقت'}`,
      `ملاحظات: ${formData.notes.trim() || 'لا توجد'}`,
    ];

    const messageText = messageLines.join('\n');
    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/201154018220?text=${encodedText}`;

    setSubmitted(true);

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      onClose();
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-right max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-l from-sky-600 to-sky-700 text-white flex items-center justify-between shrink-0">
          <div>
            <h2 id="booking-modal-title" className="text-xl font-bold">
              طلب حجز موعد
            </h2>
            <p className="text-xs text-sky-100 mt-0.5">
              سيتم تحويل طلبك مباشرة لفريق الاستقبال عبر واتساب لتأكيد الموعد
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق النافذة"
            className="p-2 text-sky-100 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <CheckCircle2 className="w-14 h-14 text-emerald-500 mb-3 animate-bounce" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                جاري فتح تطبيق واتساب...
              </h3>
              <p className="text-sm text-slate-500">
                يرجى الضغط على إرسال داخل واتساب لإتمام طلب الحجز
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  الاسم بالكامل <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="مثال: أحمد محمد"
                    className="w-full pr-10 pl-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-hidden transition-all text-right"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  رقم الهاتف (واتساب) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="01XXXXXXXXX"
                    dir="ltr"
                    className="w-full pl-3 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-hidden transition-all text-right"
                  />
                  <Phone className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  الخدمة المطلوبة
                </label>
                <div className="relative">
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full pr-10 pl-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-hidden transition-all text-right cursor-pointer"
                  >
                    <option value="">اختر الخدمة...</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                  <FileText className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Doctor Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  الطبيب المعالج (اختياري)
                </label>
                <div className="relative">
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full pr-10 pl-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-hidden transition-all text-right cursor-pointer"
                  >
                    <option value="">اختر الطبيب...</option>
                    {doctors.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.specialty})
                      </option>
                    ))}
                  </select>
                  <Stethoscope className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  الموعد المفضل
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    placeholder="مثال: غداً مساءً، أو الأحد القادم الساعة 5"
                    className="w-full pr-10 pl-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-hidden transition-all text-right"
                  />
                  <Calendar className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  ملاحظات أو تفاصيل الحالة
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="وصف مختصر للألم أو المشكلة الصحية..."
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-hidden transition-all resize-none text-right"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 active:scale-98 text-white font-bold rounded-xl shadow-md shadow-sky-600/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>إرسال طلب الحجز عبر واتساب</span>
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  يتم إرسال البيانات مباشرة إلى رقم المركز الرسمي: 01154018220
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
