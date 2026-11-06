import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';

interface ContactProps {
  selectedService?: string;
}

export default function Contact({ selectedService = '' }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedService || 'Bathroom Renovations',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid contact number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us a little about your project';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // Web3Forms integration configuration
    // Note: 'YOUR_WEB3FORMS_ACCESS_KEY' is the designated placeholder as requested.
    const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

    try {
      if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        // Simulated network response for development / demo with placeholder key
        await new Promise((resolve) => setTimeout(resolve, 800));
        setStatus('success');
        setFeedbackMessage('Thank you! Your enquiry has been received. Josh will be in touch shortly to discuss your bathroom project.');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'Bathroom Renovations',
          message: '',
        });
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Bathroom Enquiry from ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFeedbackMessage('Thank you! Your enquiry has been sent successfully. We will get back to you promptly.');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'Bathroom Renovations',
          message: '',
        });
      } else {
        setStatus('error');
        setFeedbackMessage(result.message || 'Something went wrong. Please call or WhatsApp us directly.');
      }
    } catch {
      setStatus('error');
      setFeedbackMessage('Network connection error. Please call or message us directly on WhatsApp.');
    }
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi Josh, I'm contacting you via J.F Tiling & Bathrooms website.%0A%0A*Name:* ${encodeURIComponent(formData.name || 'Not provided')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Project Details:* ${encodeURIComponent(formData.message || 'I would like to discuss a tiling/bathroom project.')}`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F7F5F0] border-t border-[#D8D5CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[2px] bg-[#B99A68]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B99A68]">
              Contact & Quotations
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#202725] mb-4 text-balance">
            Ready To Transform Your Bathroom?
          </h2>
          <p className="text-base sm:text-lg text-[#202725]/75 leading-relaxed">
            Get in touch with J.F Tiling & Bathrooms to discuss your next project and request a quote.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Contact Info & Fast Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#D8D5CE] shadow-sm">
              <h3 className="font-serif text-2xl font-medium text-[#202725] mb-6">
                Get In Touch Directly
              </h3>

              {/* Contact Details List */}
              <div className="space-y-6 mb-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#F7F5F0] border border-[#D8D5CE] flex items-center justify-center text-[#B99A68] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#202725]/60 block mb-0.5">
                      Phone Number
                    </span>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="font-medium text-base text-[#202725] hover:text-[#B99A68] transition-colors tabular-nums"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <span className="text-xs text-[#202725]/60 block mt-0.5">
                      Available for calls & project consultations
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#F7F5F0] border border-[#D8D5CE] flex items-center justify-center text-[#B99A68] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#202725]/60 block mb-0.5">
                      Email Address
                    </span>
                    <a
                      href={BUSINESS_INFO.emailHref}
                      className="font-medium text-base text-[#202725] hover:text-[#B99A68] transition-colors break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                    <span className="text-xs text-[#202725]/60 block mt-0.5">
                      Send floorplans, room dimensions or photos
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#F7F5F0] border border-[#D8D5CE] flex items-center justify-center text-[#B99A68] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#202725]/60 block mb-0.5">
                      Location
                    </span>
                    <p className="font-medium text-base text-[#202725]">
                      {BUSINESS_INFO.location}
                    </p>
                    <span className="text-xs text-[#202725]/60 block mt-0.5">
                      Covering Sheffield, Rotherham, Chesterfield & nearby areas
                    </span>
                  </div>
                </div>
              </div>

              {/* Prominent Direct Action Buttons */}
              <div className="pt-6 border-t border-[#D8D5CE]/60 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#202725] hover:bg-[#202725]/90 text-white font-semibold text-sm rounded shadow-sm transition-colors text-center active:scale-[0.99]"
                >
                  <Phone className="w-4 h-4 text-[#B99A68]" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-sm rounded shadow-sm transition-colors text-center active:scale-[0.99]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* Operating Times Badge */}
            <div className="p-5 rounded-xl bg-[#ECEAE4] border border-[#D8D5CE] flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#B99A68] shrink-0" />
              <div className="text-xs text-[#202725]/80">
                <span className="font-semibold text-[#202725] block">Business Hours</span>
                {BUSINESS_INFO.hours}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-2xl border border-[#D8D5CE] shadow-sm">
              <h3 className="font-serif text-2xl font-medium text-[#202725] mb-2">
                Send A Project Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#202725]/70 mb-7">
                Fill in the details below and we will contact you to schedule a survey or provide a tailored quote.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold block mb-0.5">Enquiry Received</span>
                    {feedbackMessage}
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-semibold block mb-0.5">Submission Note</span>
                    {feedbackMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#202725] mb-1.5">
                    Full Name <span className="text-[#B99A68]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Richardson"
                    className={`w-full px-4 py-3 bg-[#F7F5F0] border rounded-lg text-sm text-[#202725] placeholder-[#202725]/40 focus:outline-none focus:ring-2 focus:ring-[#B99A68] transition-all ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#D8D5CE]'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#202725] mb-1.5">
                      Phone Number <span className="text-[#B99A68]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 07700 900123"
                      className={`w-full px-4 py-3 bg-[#F7F5F0] border rounded-lg text-sm text-[#202725] placeholder-[#202725]/40 focus:outline-none focus:ring-2 focus:ring-[#B99A68] transition-all ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#D8D5CE]'
                      }`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#202725] mb-1.5">
                      Email Address <span className="text-[#B99A68]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. david@example.co.uk"
                      className={`w-full px-4 py-3 bg-[#F7F5F0] border rounded-lg text-sm text-[#202725] placeholder-[#202725]/40 focus:outline-none focus:ring-2 focus:ring-[#B99A68] transition-all ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#D8D5CE]'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#202725] mb-1.5">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#D8D5CE] rounded-lg text-sm text-[#202725] focus:outline-none focus:ring-2 focus:ring-[#B99A68] transition-all"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Tiling / Other">Other / General Consultation</option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#202725] mb-1.5">
                    Tell Us About Your Project <span className="text-[#B99A68]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your room size, current state, or preferred tiling style..."
                    className={`w-full px-4 py-3 bg-[#F7F5F0] border rounded-lg text-sm text-[#202725] placeholder-[#202725]/40 focus:outline-none focus:ring-2 focus:ring-[#B99A68] transition-all ${
                      errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#D8D5CE]'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#B99A68] hover:bg-[#A68653] disabled:opacity-60 text-[#202725] font-semibold text-sm rounded shadow-sm hover:shadow transition-all active:scale-[0.99] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'submitting' ? 'Sending Enquiry...' : 'Send Enquiry'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#F7F5F0] hover:bg-[#ECEAE4] text-[#202725] text-xs font-medium rounded border border-[#D8D5CE] transition-colors"
                    title="Send these details straight to WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-[#202725]/50">
                    No obligation · Free transparent quotations · Prompt Sheffield response
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
