"use client";

import { useState } from "react";

interface EnquiryFormProps {
  tech: any;
}

export default function EnquiryForm({ tech }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    technology: tech.name || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        technology: tech.name || "",
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-[#0f2a6b] mb-2">Thank You!</h3>
        <p className="text-[#4a5578]">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#0f2a6b] mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#1a3fa0]/15 focus:ring-2 focus:ring-[#1a3fa0]/30 focus:border-[#1a3fa0] outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#0f2a6b] mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#1a3fa0]/15 focus:ring-2 focus:ring-[#1a3fa0]/30 focus:border-[#1a3fa0] outline-none transition-all"
            placeholder="john@company.com"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#0f2a6b] mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#1a3fa0]/15 focus:ring-2 focus:ring-[#1a3fa0]/30 focus:border-[#1a3fa0] outline-none transition-all"
            placeholder="+1 234 567 890"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-[#0f2a6b] mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#1a3fa0]/15 focus:ring-2 focus:ring-[#1a3fa0]/30 focus:border-[#1a3fa0] outline-none transition-all"
            placeholder="Your Company"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#0f2a6b] mb-1">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-[#1a3fa0]/15 focus:ring-2 focus:ring-[#1a3fa0]/30 focus:border-[#1a3fa0] outline-none transition-all resize-none"
          placeholder={`Tell us about your ${tech.name} project...`}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-[#e8a020] text-white font-semibold rounded-xl hover:bg-[#f0b832] transition-all duration-300 shadow-lg shadow-[#e8a020]/30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            "Send Enquiry"
          )}
        </button>
      </div>
      <p className="text-xs text-[#6b7a9e] text-center">
        We respect your privacy. Your information will be kept confidential.
      </p>
    </form>
  );
}