import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const EnquiryModal = ({ isOpen, onClose, title = "Get in Touch!", buttonText = "Send Enquiry" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    budget: '',
    service: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        budget: '',
        service: ''
      });
      setCurrentStep(1);
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const floatingElements = [
    { emoji: '💼', delay: 0 },
    { emoji: '📊', delay: 0.5 },
    { emoji: '🎯', delay: 1 },
    { emoji: '💡', delay: 1.5 },
    { emoji: '🚀', delay: 2 },
    { emoji: '⭐', delay: 2.5 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Overlay with particles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 backdrop-blur-[1px] bg-black/50"
            onClick={onClose}
          >
            
          </motion.div>

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateX: -90 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              rotateX: 0,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.8
              }
            }}
            exit={{ 
              scale: 0.5, 
              opacity: 0, 
              rotateX: 90,
              transition: {
                duration: 0.3
              }
            }}
            className="relative w-full max-w-6xl bg-white border-4 border-gray-300 shadow-2xl overflow-hidden"
            style={{ perspective: "1000px" }}
          >

            <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
              {/* Left Side - Animated Illustration */}
              <div className="relative lg:w-2/5 p-8 lg:p-12 flex flex-col items-center justify-center text-white overflow-hidden min-h-[300px]">
            <Image src={"https://cdn3d.iconscout.com/3d/premium/thumb/businessman-checking-mail-box-3d-icon-png-download-7528413.png"}  width={500} height={500} />

              </div>

              {/* Right Side - Multi-step Form */}
              <div className="lg:w-3/5 p-8 lg:p-12 overflow-y-auto">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {/* Close Button */}
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>

                  {/* Success State */}
                  {isSuccess ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex flex-col items-center justify-center py-12"
                    >
                      <motion.div
                        animate={{ 
                          rotate: 360,
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 1 }}
                        className="text-8xl mb-6"
                      >
                        🎉
                      </motion.div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h3>                      <h3 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h3>
                      <p className="text-gray-600 text-lg">We'll get back to you shortly!</p>
                    </motion.div>
                  ) : (
                    <>
                      {/* Progress Steps */}
                      <div className="flex items-center justify-between mb-8">
                        {[1, 2, 3].map((step) => (
                          <div key={step} className="flex items-center">
                            <motion.div
                              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                                currentStep >= step
                                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                  : 'bg-gray-200 text-gray-400'
                              }`}
                              animate={currentStep === step ? { scale: [1, 1.1, 1] } : {}}
                              transition={{ duration: 0.5, repeat: Infinity }}
                            >
                              {currentStep > step ? '✓' : step}
                            </motion.div>
                            {step < 3 && (
                              <div className={`w-16 h-1 mx-2 rounded ${
                                currentStep > step ? 'bg-purple-500' : 'bg-gray-200'
                              }`} />
                            )}
                          </div>
                        ))}
                      </div>

                      <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                          {currentStep === 1 && (
                            <motion.div
                              key="step1"
                              initial={{ x: 50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -50, opacity: 0 }}
                              className="space-y-6"
                            >
                              <h3 className="text-2xl font-bold text-gray-800 mb-4">Personal Information</h3>
                              
                              <div className="space-y-4">
                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name *
                                  </label>
                                  <div className="relative group">
                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
                                      👤
                                    </span>
                                    <input
                                      type="text"
                                      name="name"
                                      value={formData.name}
                                      onChange={handleChange}
                                      required
                                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all bg-white/80 backdrop-blur-sm group-hover:shadow-lg"
                                      placeholder="John Doe"
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                  </label>
                                  <div className="relative group">
                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
                                      ✉️
                                    </span>
                                    <input
                                      type="email"
                                      name="email"
                                      value={formData.email}
                                      onChange={handleChange}
                                      required
                                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all bg-white/80 backdrop-blur-sm group-hover:shadow-lg"
                                      placeholder="john@example.com"
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number
                                  </label>
                                  <div className="relative group">
                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
                                      📱
                                    </span>
                                    <input
                                      type="tel"
                                      name="phone"
                                      value={formData.phone}
                                      onChange={handleChange}
                                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all bg-white/80 backdrop-blur-sm group-hover:shadow-lg"
                                      placeholder="+1 (555) 000-0000"
                                    />
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {currentStep === 2 && (
                            <motion.div
                              key="step2"
                              initial={{ x: 50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -50, opacity: 0 }}
                              className="space-y-6"
                            >
                              <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Details</h3>
                              
                              <div className="space-y-4">
                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Company Name
                                  </label>
                                  <div className="relative group">
                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
                                      🏢
                                    </span>
                                    <input
                                      type="text"
                                      name="company"
                                      value={formData.company}
                                      onChange={handleChange}
                                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all bg-white/80 backdrop-blur-sm group-hover:shadow-lg"
                                      placeholder="Company Inc."
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Service Required *
                                  </label>
                                  <div className="relative group">
                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
                                      🎯
                                    </span>
                                    <select
                                      name="service"
                                      value={formData.service}
                                      onChange={handleChange}
                                      required
                                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all bg-white/80 backdrop-blur-sm group-hover:shadow-lg appearance-none cursor-pointer"
                                    >
                                      <option value="">Select a service</option>
                                      <option value="web">Web Development</option>
                                      <option value="mobile">Mobile App</option>
                                      <option value="design">UI/UX Design</option>
                                      <option value="consulting">Consulting</option>
                                      <option value="other">Other</option>
                                    </select>
                                  </div>
                                </div>

                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Budget Range
                                  </label>
                                  <div className="relative group">
                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
                                      💰
                                    </span>
                                    <select
                                      name="budget"
                                      value={formData.budget}
                                      onChange={handleChange}
                                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all bg-white/80 backdrop-blur-sm group-hover:shadow-lg appearance-none cursor-pointer"
                                    >
                                      <option value="">Select budget</option>
                                      <option value="1k-5k">$1,000 - $5,000</option>
                                      <option value="5k-10k">$5,000 - $10,000</option>
                                      <option value="10k-25k">$10,000 - $25,000</option>
                                      <option value="25k+">$25,000+</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {currentStep === 3 && (
                            <motion.div
                              key="step3"
                              initial={{ x: 50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -50, opacity: 0 }}
                              className="space-y-6"
                            >
                              <h3 className="text-2xl font-bold text-gray-800 mb-4">Message</h3>
                              
                              <div className="space-y-4">
                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Subject *
                                  </label>
                                  <div className="relative group">
                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">
                                      📝
                                    </span>
                                    <input
                                      type="text"
                                      name="subject"
                                      value={formData.subject}
                                      onChange={handleChange}
                                      required
                                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all bg-white/80 backdrop-blur-sm group-hover:shadow-lg"
                                      placeholder="Project Discussion"
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message *
                                  </label>
                                  <div className="relative group">
                                    <span className="absolute left-4 top-4 text-xl">
                                      💬
                                    </span>
                                    <textarea
                                      name="message"
                                      value={formData.message}
                                      onChange={handleChange}
                                      required
                                      rows="4"
                                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all bg-white/80 backdrop-blur-sm group-hover:shadow-lg resize-none"
                                      placeholder="Tell us about your project..."
                                    />
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8 space-x-4">
                          {currentStep > 1 && (
                            <motion.button
                              type="button"
                              onClick={prevStep}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                            >
                              ← Previous
                            </motion.button>
                          )}
                          
                          {currentStep < 3 ? (
                            <motion.button
                              type="button"
                              onClick={nextStep}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="ml-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                            >
                              Next →
                            </motion.button>
                          ) : (
                            <motion.button
                              type="submit"
                              disabled={isSubmitting}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="ml-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {isSubmitting ? (
                                <span className="flex items-center">
                                  <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="inline-block mr-2"
                                  >
                                    ⏳
                                  </motion.span>
                                  Sending...
                                </span>
                              ) : (
                                <span className="flex items-center">
                                  {buttonText}
                                  <span className="ml-2">✨</span>
                                </span>
                              )}
                            </motion.button>
                          )}
                        </div>
                      </form>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Example usage:
// const [isModalOpen, setIsModalOpen] = useState(false);
// <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />