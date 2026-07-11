// components/contact/ContactClient.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
  User,
  MessageSquare,
  Building2,
  ChevronRight,
  Loader2,
  BadgeCheck,
  Trophy,
  Users,
  Sparkles,
} from "lucide-react";
import { CTASection } from "@/components/pages/aboutus";

interface Office {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coords: { lat: number; lng: number };
  image: string;
  features: string[];
  timezone: string;
}

interface ContactClientProps {
  initialData: {
    offices: Office[];
    services: string[];
    budgetRanges: string[];
    faqs: { q: string; a: string }[];
    socialLinks: { name: string; icon: string; url: string; color: string }[];
    companyInfo: {
      phone: string;
      email: string;
      responseTime: string;
      consultationType: string;
    };
  };
}

// Social icon mapping
const socialIconMap: Record<string, any> = {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
};

function getSocialIcon(iconName: string) {
  return socialIconMap[iconName] || Globe;
}

export default function ContactClient({ initialData }: ContactClientProps) {
  const { offices, services, budgetRanges, faqs, socialLinks, companyInfo } = initialData;
  
  const [activeOffice, setActiveOffice] = useState(offices[0]);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: services[0],
    budget: budgetRanges[0],
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormState("success");
    setFormData({
      name: "",
      email: "",
      company: "",
      service: services[0],
      budget: budgetRanges[0],
      message: "",
    });

    setTimeout(() => setFormState("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection companyInfo={companyInfo} />
      
      <MainContent
        activeOffice={activeOffice}
        setActiveOffice={setActiveOffice}
        formState={formState}
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        offices={offices}
        services={services}
        budgetRanges={budgetRanges}
        socialLinks={socialLinks}
      />

      <FAQSection faqs={faqs} />
      <CTASection />
    </div>
  );
}

// Hero Section
function HeroSection({ companyInfo }: { companyInfo: ContactClientProps["initialData"]["companyInfo"] }) {
  return (
    <>
      <style>{`
        .contact-hero-section {
          position: relative;
          overflow: hidden;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gold-word { color: #e8a020; }
      `}</style>

      <section className="contact-hero-section relative w-full">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />

          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.4) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-6"
            >
              <Sparkles size={14} className="text-[#e8a020]" />
              Get in Touch
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-semibold text-[#0f2a6b] leading-[1.1] mb-6"
            >
              Let's Build Something{" "}
              <span className="gold-word">Extraordinary</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-[#4a5578] leading-relaxed mb-6 max-w-3xl mx-auto"
            >
              Have a project in mind? We'd love to hear from you. Send us a
              message and we'll respond within {companyInfo.responseTime}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {[
                { icon: BadgeCheck, text: "ISO 9001:2015 Certified" },
                { icon: Trophy, text: "13+ Years Experience" },
                { icon: Users, text: "55+ Expert Engineers" },
                { icon: Globe, text: "25+ Countries Served" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#4a5578]">
                    <Icon className="w-4 h-4 text-[#e8a020]" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#1a3fa0]/20 flex justify-center">
            <div className="w-1 h-2 bg-[#1a3fa0] rounded-full mt-2" />
          </div>
        </motion.div>
      </section>
    </>
  );
}

// Main Content
function MainContent({
  activeOffice,
  setActiveOffice,
  formState,
  formData,
  handleSubmit,
  handleChange,
  offices,
  services,
  budgetRanges,
  socialLinks,
}: {
  activeOffice: Office;
  setActiveOffice: (office: Office) => void;
  formState: "idle" | "submitting" | "success";
  formData: any;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  offices: Office[];
  services: string[];
  budgetRanges: string[];
  socialLinks: ContactClientProps["initialData"]["socialLinks"];
}) {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl border border-[#1a3fa0]/08 p-8 md:p-10"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#0f2a6b] mb-2">Send us a Message</h2>
                <p className="text-[#4a5578]">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thank you for reaching out. We'll be in touch shortly.</p>
                  <button
                    onClick={() => {
                      setFormState("idle");
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        service: services[0],
                        budget: budgetRanges[0],
                        message: "",
                      });
                    }}
                    className="mt-6 text-green-700 font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#0f2a6b]">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4a5578] w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#f8f9fc] border border-[#1a3fa0]/10 focus:outline-none focus:ring-2 focus:ring-[#1a3fa0]/20 focus:border-[#1a3fa0] transition-all text-[#0f2a6b]"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#0f2a6b]">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4a5578] w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#f8f9fc] border border-[#1a3fa0]/10 focus:outline-none focus:ring-2 focus:ring-[#1a3fa0]/20 focus:border-[#1a3fa0] transition-all text-[#0f2a6b]"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#0f2a6b]">Company Name</label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4a5578] w-5 h-5" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#f8f9fc] border border-[#1a3fa0]/10 focus:outline-none focus:ring-2 focus:ring-[#1a3fa0]/20 focus:border-[#1a3fa0] transition-all text-[#0f2a6b]"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#0f2a6b]">Service Interested In</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4a5578] w-5 h-5" />
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#f8f9fc] border border-[#1a3fa0]/10 focus:outline-none focus:ring-2 focus:ring-[#1a3fa0]/20 focus:border-[#1a3fa0] transition-all appearance-none cursor-pointer text-[#0f2a6b]"
                        >
                          {services.map((service) => (
                            <option key={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#0f2a6b]">Project Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#f8f9fc] border border-[#1a3fa0]/10 focus:outline-none focus:ring-2 focus:ring-[#1a3fa0]/20 focus:border-[#1a3fa0] transition-all appearance-none cursor-pointer text-[#0f2a6b]"
                    >
                      {budgetRanges.map((range) => (
                        <option key={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#0f2a6b]">Project Details *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#f8f9fc] border border-[#1a3fa0]/10 focus:outline-none focus:ring-2 focus:ring-[#1a3fa0]/20 focus:border-[#1a3fa0] transition-all resize-none text-[#0f2a6b]"
                      placeholder="Tell us about your project goals, timeline, and requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full py-4 bg-gradient-to-r from-[#1a3fa0] to-[#2952cc] text-white font-bold text-lg rounded-xl shadow-lg shadow-[#1a3fa0]/25 hover:shadow-[#1a3fa0]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Direct Contact Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  value: "+91 9887120429",
                  sub: "Mon-Fri 9am-6pm",
                  color: "text-[#1a3fa0]",
                  bg: "bg-[#1a3fa0]/5",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  value: "hello@digitonix.in",
                  sub: "24/7 Support",
                  color: "text-[#e8a020]",
                  bg: "bg-[#e8a020]/5",
                },
                {
                  icon: Clock,
                  title: "Visit Us",
                  value: "Global Offices",
                  sub: "4 Locations",
                  color: "text-[#2952cc]",
                  bg: "bg-[#2952cc]/5",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${item.bg} p-5 rounded-2xl border border-[#1a3fa0]/08`}
                >
                  <item.icon className={`w-7 h-7 ${item.color} mb-3`} />
                  <h3 className="font-semibold text-[#0f2a6b] text-sm">{item.title}</h3>
                  <p className="text-[#0f2a6b] font-medium text-sm mt-1">{item.value}</p>
                  <p className="text-[#4a5578] text-xs mt-1">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Selector */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl border border-[#1a3fa0]/08 overflow-hidden"
            >
              <div className="p-5 border-b border-[#1a3fa0]/08">
                <h2 className="text-lg font-bold text-[#0f2a6b]">Our Global Offices</h2>
                <p className="text-[#4a5578] text-sm">Select a location to view details</p>
              </div>

              <div className="max-h-[400px] overflow-y-auto">
                {offices.map((office) => (
                  <button
                    key={office.id}
                    onClick={() => setActiveOffice(office)}
                    className={`w-full text-left p-4 flex items-start gap-4 transition-all duration-300 border-b border-[#1a3fa0]/05 last:border-0 hover:bg-[#f8f9fc] ${
                      activeOffice.id === office.id
                        ? "bg-[#f8f9fc] border-l-4 border-l-[#e8a020]"
                        : "border-l-4 border-l-transparent"
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                        activeOffice.id === office.id
                          ? "bg-[#e8a020] text-[#0f2a6b]"
                          : "bg-[#f8f9fc] text-[#4a5578]"
                      }`}
                    >
                      <Building2 size={18} />
                    </div>
                    <div className="flex-1 text-left">
                      <h3
                        className={`font-semibold ${
                          activeOffice.id === office.id ? "text-[#e8a020]" : "text-[#0f2a6b]"
                        }`}
                      >
                        {office.city}, {office.country}
                      </h3>
                      <p className="text-sm text-[#4a5578] mt-0.5 line-clamp-1">{office.address}</p>
                      {activeOffice.id === office.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-2 flex flex-wrap gap-1.5"
                        >
                          {office.features.map((f, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 bg-white border border-[#e8a020]/20 text-[#e8a020] rounded-md font-medium"
                            >
                              {f}
                            </span>
                          ))}
                        </motion.div>
                      )}
                    </div>
                    {activeOffice.id === office.id && (
                      <ChevronRight className="w-4 h-4 text-[#e8a020] ml-auto shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Map Visualization */}
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              key={activeOffice.id}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group"
            >
              <Image
                src={activeOffice.image}
                alt={`${activeOffice.city} Office - Digitonix`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a6b]/80 via-[#0f2a6b]/20 to-transparent" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#e8a020]/30 rounded-full animate-ping" />
                  <div className="w-12 h-12 bg-[#e8a020] rounded-full border-4 border-white shadow-xl flex items-center justify-center text-[#0f2a6b] relative z-10">
                    <MapPin size={22} />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Globe size={14} className="text-[#e8a020]" />
                  <span className="text-xs font-medium text-[#e8a020] uppercase tracking-wider">
                    {activeOffice.country}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{activeOffice.city} Office</h3>
                <p className="text-gray-300 text-sm mb-3 flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0" /> {activeOffice.address}
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Phone size={14} className="text-[#e8a020]" />
                    <span className="text-gray-300">{activeOffice.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#e8a020]" />
                    <span className="text-gray-300 text-xs">{activeOffice.hours}</span>
                  </div>
                </div>
                <a
                  href={`mailto:${activeOffice.email}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-[#e8a020] font-semibold text-sm hover:gap-2.5 transition-all"
                >
                  {activeOffice.email} <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="bg-[#0f2a6b] rounded-2xl p-6 text-center">
              <h3 className="text-white font-semibold mb-4 text-sm">Connect With Us</h3>
              <div className="flex justify-center gap-3">
                {socialLinks.map((social, i) => {
                  const Icon = getSocialIcon(social.icon);
                  return (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:text-white hover:scale-110 hover:shadow-lg`}
                      aria-label={social.name}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-[#f8f9fc] border-t border-[#1a3fa0]/08">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Frequently Asked <span className="text-[#e8a020]">Questions</span>
          </h2>
          <p className="text-[#4a5578]">Quick answers to common questions about working with us.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl border border-[#1a3fa0]/08 hover:shadow-md transition-shadow overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#f8f9fc] transition-colors"
              >
                <span className="font-semibold text-[#0f2a6b]">{faq.q}</span>
                <ChevronRight
                  className={`w-5 h-5 text-[#1a3fa0] transition-transform duration-300 ${
                    openIndex === idx ? "rotate-90" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4 text-sm text-[#4a5578] leading-relaxed">{faq.a}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}