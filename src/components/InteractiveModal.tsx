import React, { useState } from "react";
import { X, Check, ArrowRight, ArrowLeft, ClipboardList, BookOpen, Clock, Calendar, CheckCircle, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface InteractiveModalProps {
  type: "apply" | "login" | "callback" | null;
  onClose: () => void;
}

export default function InteractiveModal({ type, onClose }: InteractiveModalProps) {
  // Apply Multi-step states
  const [applyStep, setApplyStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    gradYear: "2026",
    stream: "Science (PCM)",
    score10: "",
    testScore: "",
    testSlot: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Login States
  const [loginPhone, setLoginPhone] = useState("");
  const [loginOtp, setLoginOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Callback States
  const [callbackSent, setCallbackSent] = useState(false);

  if (!type) return null;

  const handleApplyNext = () => {
    // Basic step 1 validation
    if (applyStep === 1) {
      const stepErrors: Record<string, string> = {};
      if (!formData.name.trim()) stepErrors.name = "Full name is required";
      if (!formData.email.trim() || !formData.email.includes("@")) stepErrors.email = "Valid email is required";
      if (!formData.phone.trim() || formData.phone.length < 10) stepErrors.phone = "Valid 10-digit phone is required";
      
      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        return;
      }
      setErrors({});
    }
    setApplyStep((prev) => prev + 1);
  };

  const handleApplyBack = () => {
    setApplyStep((prev) => prev - 1);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplyStep(4); // Success step
  };

  const handleSendOtp = () => {
    if (loginPhone.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = () => {
    if (loginOtp === "123456" || loginOtp.length === 6) {
      setLoginSuccess(true);
    }
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop blur with deep cobalt tint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
      />

      {/* Modal Box: white theme matching HKBK's premium contemporary guidelines */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        className="relative bg-white border border-brand-neutral w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl z-10 p-6 md:p-8 text-brand-navy font-sans text-left"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-brand-cobalt hover:text-brand-action bg-brand-neutral hover:bg-brand-neutral/80 rounded-full p-2 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. APPLY NOW MODAL CONTENT */}
        {type === "apply" && (
          <div>
            {applyStep < 4 && (
              <div className="mb-6 flex items-center space-x-3">
                <ClipboardList className="w-6 h-6 text-brand-cobalt" />
                <div>
                  <h3 className="text-xl font-medium text-brand-cobalt sentence-case">HKBK admission portal</h3>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5">
                    Step {applyStep} of 3: {applyStep === 1 ? "Student details" : applyStep === 2 ? "Academic profile" : "Slot booking"}
                  </p>
                </div>
              </div>
            )}

            {/* Step Indicators */}
            {applyStep < 4 && (
              <div className="flex space-x-2 mb-8">
                <div className={`h-1.5 flex-1 rounded-full transition-all ${applyStep >= 1 ? "bg-brand-cobalt" : "bg-brand-neutral"}`} />
                <div className={`h-1.5 flex-1 rounded-full transition-all ${applyStep >= 2 ? "bg-brand-cobalt" : "bg-brand-neutral"}`} />
                <div className={`h-1.5 flex-1 rounded-full transition-all ${applyStep >= 3 ? "bg-brand-cobalt" : "bg-brand-neutral"}`} />
              </div>
            )}

            {applyStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-gray-400 block mb-1.5 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your first and last name"
                    className="w-full bg-brand-neutral border border-brand-neutral focus:border-brand-cobalt rounded-xl px-4 py-3 text-sm focus:outline-none text-brand-navy"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-400 block mb-1.5 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-brand-neutral border border-brand-neutral focus:border-brand-cobalt rounded-xl px-4 py-3 text-sm focus:outline-none text-brand-navy"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-400 block mb-1.5 uppercase tracking-wide">Mobile Number</label>
                  <input
                    type="tel"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                    placeholder="10-digit number"
                    className="w-full bg-brand-neutral border border-brand-neutral focus:border-brand-cobalt rounded-xl px-4 py-3 text-sm focus:outline-none text-brand-navy"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-400 block mb-1.5 uppercase tracking-wide">Your State</label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="e.g. Karnataka"
                      className="w-full bg-brand-neutral border border-brand-neutral focus:border-brand-cobalt rounded-xl px-4 py-3 text-sm focus:outline-none text-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-400 block mb-1.5 uppercase tracking-wide">12th Passing Yr</label>
                    <select
                      value={formData.gradYear}
                      onChange={(e) => setFormData({ ...formData, gradYear: e.target.value })}
                      className="w-full bg-brand-neutral border border-brand-neutral focus:border-brand-cobalt rounded-xl px-4 py-3 text-sm focus:outline-none text-brand-navy"
                    >
                      <option value="2026">2026</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="Before 2024">Before 2024</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleApplyNext}
                  className="w-full bg-[#8C1515] hover:bg-[#721111] py-3 rounded-xl font-medium text-sm text-white tracking-wide flex justify-center items-center space-x-1 mt-6 cursor-pointer"
                >
                  <span>Continue to Academic Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {applyStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-gray-400 block mb-1.5 uppercase tracking-wide">High School Stream</label>
                  <select
                    value={formData.stream}
                    onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                    className="w-full bg-brand-neutral border border-brand-neutral focus:border-brand-cobalt rounded-xl px-4 py-3 text-sm focus:outline-none text-brand-navy"
                  >
                    <option value="Science (PCM)">Science (Physics, Chemistry, Maths)</option>
                    <option value="Science (PCB)">Science (Physics, Chemistry, Biology)</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts / Humanities">Arts / Humanities</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-400 block mb-1.5 uppercase tracking-wide">Class 10 Percentage</label>
                  <input
                    type="text"
                    value={formData.score10}
                    onChange={(e) => setFormData({ ...formData, score10: e.target.value })}
                    placeholder="e.g. 92%"
                    className="w-full bg-brand-neutral border border-brand-neutral focus:border-brand-cobalt rounded-xl px-4 py-3 text-sm focus:outline-none text-brand-navy"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-400 block mb-1.5 uppercase tracking-wide">Entrance Rank / SAT Score (Optional)</label>
                  <input
                    type="text"
                    value={formData.testScore}
                    onChange={(e) => setFormData({ ...formData, testScore: e.target.value })}
                    placeholder="e.g. KCET, COMEDK or Board merits"
                    className="w-full bg-brand-neutral border border-brand-neutral focus:border-brand-cobalt rounded-xl px-4 py-3 text-sm focus:outline-none text-brand-navy"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handleApplyBack}
                    className="flex-1 bg-brand-neutral hover:bg-brand-neutral/80 py-3 rounded-xl font-medium text-sm text-brand-navy flex justify-center items-center space-x-1 border border-brand-neutral cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={handleApplyNext}
                    className="flex-1 bg-[#8C1515] hover:bg-[#721111] py-3 rounded-xl font-medium text-sm text-white flex justify-center items-center space-x-1 cursor-pointer"
                  >
                    <span>Choose Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {applyStep === 3 && (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Select your preferred counseling session slot. Confirmation and physical checklist details will be sent directly via text message.
                </p>

                <div className="space-y-2.5">
                  {[
                    "Saturday, July 4 - 10:00 AM to 1:00 PM",
                    "Sunday, July 5 - 2:00 PM to 5:00 PM",
                    "Wednesday, July 8 - 11:00 AM to 2:00 PM"
                  ].map((slot) => (
                    <label
                      key={slot}
                      className={`flex items-center space-x-3 p-4 rounded-xl border cursor-pointer transition-all ${
                        formData.testSlot === slot
                          ? "bg-brand-neutral border-brand-cobalt text-brand-cobalt"
                          : "bg-white border-brand-neutral text-gray-500 hover:text-brand-cobalt"
                      }`}
                    >
                      <input
                        type="radio"
                        name="testSlot"
                        value={slot}
                        checked={formData.testSlot === slot}
                        onChange={(e) => setFormData({ ...formData, testSlot: e.target.value })}
                        className="accent-brand-cobalt"
                        required
                      />
                      <span className="text-xs font-medium leading-normal">{slot}</span>
                    </label>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleApplyBack}
                    className="flex-1 bg-brand-neutral hover:bg-brand-neutral/80 py-3 rounded-xl font-medium text-sm text-brand-navy flex justify-center items-center space-x-1 border border-brand-neutral cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 py-3 rounded-xl font-medium text-sm text-white flex justify-center items-center space-x-1 cursor-pointer"
                  >
                    <span>Submit Application</span>
                  </button>
                </div>
              </form>
            )}

            {applyStep === 4 && (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-medium text-brand-cobalt sentence-case">Application received</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                  Congratulations, <strong>{formData.name}</strong>! Your admission interest has been successfully locked in.
                </p>

                <div className="bg-brand-neutral border border-brand-neutral/80 p-4 rounded-2xl text-left text-xs space-y-3 max-w-sm mx-auto">
                  <strong className="text-brand-cobalt block mb-1 font-medium">Your next steps checklist:</strong>
                  <div className="flex items-start space-x-2.5 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Check your email <strong>{formData.email}</strong> for validation criteria.</span>
                  </div>
                  <div className="flex items-start space-x-2.5 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Get physical documents ready for campus submission.</span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="bg-[#8C1515] hover:bg-[#721111] text-white px-6 py-3 rounded-xl font-medium text-sm tracking-wide cursor-pointer w-full"
                >
                  Return to Campus Tour
                </button>
              </div>
            )}
          </div>
        )}

        {/* 2. LOGIN MODAL CONTENT */}
        {type === "login" && (
          <div>
            {!loginSuccess ? (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Smartphone className="w-6 h-6 text-brand-cobalt" />
                  <div>
                    <h3 className="text-xl font-medium text-brand-cobalt sentence-case">Student portal login</h3>
                    <p className="text-xs text-gray-400 font-medium">Verify credentials securely via single-use code.</p>
                  </div>
                </div>

                {!otpSent ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-medium text-gray-400 block mb-1.5 uppercase tracking-wide">Registered Phone Number</label>
                      <input
                        type="tel"
                        maxLength={10}
                        value={loginPhone}
                        onChange={(e) => setLoginPhone(e.target.value.replace(/\D/g, ""))}
                        placeholder="10-digit number"
                        className="w-full bg-brand-neutral border border-brand-neutral focus:border-brand-cobalt rounded-xl px-4 py-3 text-sm focus:outline-none text-brand-navy"
                      />
                    </div>

                    <button
                      onClick={handleSendOtp}
                      disabled={loginPhone.length < 10}
                      className="w-full bg-[#8C1515] hover:bg-[#721111] disabled:bg-gray-200 disabled:text-gray-400 py-3 rounded-xl font-medium text-sm text-white tracking-wide flex justify-center items-center space-x-1 cursor-pointer"
                    >
                      <span>Send OTP Code</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-medium text-gray-400 block mb-1.5 uppercase tracking-wide">Enter 6-Digit OTP</label>
                      <input
                        type="text"
                        maxLength={6}
                        value={loginOtp}
                        onChange={(e) => setLoginOtp(e.target.value.replace(/\D/g, ""))}
                        placeholder="e.g. 123456"
                        className="w-full bg-brand-neutral border border-brand-neutral focus:border-brand-cobalt rounded-xl px-4 py-3 text-sm font-mono tracking-[0.2em] text-center focus:outline-none text-brand-navy"
                      />
                      <span className="text-[10px] text-gray-400 italic mt-1 block">
                        OTP code sent. Enter any 6-digit sequence to proceed.
                      </span>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setOtpSent(false)}
                        className="flex-1 bg-brand-neutral hover:bg-brand-neutral/80 py-3 rounded-xl font-medium text-xs text-brand-navy cursor-pointer"
                      >
                        Change Number
                      </button>
                      <button
                        onClick={handleVerifyOtp}
                        disabled={loginOtp.length < 6}
                        className="flex-1 bg-[#8C1515] disabled:bg-gray-200 disabled:text-gray-400 text-white py-3 rounded-xl font-medium text-xs flex justify-center items-center cursor-pointer"
                      >
                        Verify & Access
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-medium text-brand-cobalt sentence-case">Login successful</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                  Welcome back! Redirecting you securely to your academic and timetable calendar panel...
                </p>

                <button
                  onClick={onClose}
                  className="bg-[#8C1515] hover:bg-[#721111] text-white px-6 py-3 rounded-xl font-medium text-sm tracking-wide cursor-pointer w-full"
                >
                  Enter Portal Dashboard
                </button>
              </div>
            )}
          </div>
        )}

        {/* 3. CALLBACK MODAL CONTENT */}
        {type === "callback" && (
          <div>
            {!callbackSent ? (
              <form onSubmit={handleCallbackSubmit} className="space-y-5">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="w-6 h-6 text-brand-cobalt animate-pulse" />
                  <div>
                    <h3 className="text-xl font-medium text-brand-cobalt sentence-case">Request counselor call</h3>
                    <p className="text-xs text-gray-500 font-medium">Get course blueprint, physical counseling schedules, and fee guidance in 10 minutes.</p>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-400 block mb-1.5 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-brand-neutral border border-brand-neutral focus:border-brand-cobalt rounded-xl px-4 py-3 text-sm focus:outline-none text-brand-navy"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-400 block mb-1.5 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    maxLength={10}
                    required
                    placeholder="10-digit mobile number"
                    className="w-full bg-brand-neutral border border-brand-neutral focus:border-brand-cobalt rounded-xl px-4 py-3 text-sm focus:outline-none text-brand-navy"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-400 block mb-1.5 uppercase tracking-wide">Best Time to Call</label>
                  <select
                    className="w-full bg-brand-neutral border border-brand-neutral focus:border-brand-cobalt rounded-xl px-4 py-3 text-sm focus:outline-none text-brand-navy"
                  >
                    <option>Anytime (As soon as possible)</option>
                    <option>Morning (9:00 AM to 12:00 PM)</option>
                    <option>Afternoon (12:00 PM to 4:00 PM)</option>
                    <option>Evening (4:00 PM to 8:00 PM)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8C1515] hover:bg-[#721111] text-white py-3.5 rounded-xl font-medium text-sm tracking-wide flex justify-center items-center mt-6 cursor-pointer"
                >
                  Request Counselor Callback
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-medium text-brand-cobalt sentence-case">Callback scheduled</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                  An academic counselor from HKBK has received your details and will get in touch during your requested time window.
                </p>

                <button
                  onClick={onClose}
                  className="bg-[#8C1515] hover:bg-[#721111] text-white px-6 py-3 rounded-xl font-medium text-sm tracking-wide cursor-pointer w-full"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        )}

      </motion.div>
    </div>
  );
}
