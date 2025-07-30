"use client";

import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { supabase, WaitlistEntry } from '@/lib/supabase';

interface WaitlistSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistSection: React.FC<WaitlistSectionProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email address", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Show loading toast
      const loadingToast = toast.loading("Submitting your information...", {
        position: "top-right",
      });

      // Submit to Supabase
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            status: 'pending'
          }
        ])
        .select();

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (error) {
        // Handle specific error cases
        console.error('Full Supabase error details:', error);
        
        if (error.code === '23505') {
          // Duplicate email error
          toast.error("🤔 This email is already on our waitlist!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else if (error.code === '42P01') {
          // Table doesn't exist
          toast.error("⚠️ Database table not found. Please contact support.", {
            position: "top-right",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else if (error.message?.includes('permission denied')) {
          // RLS policy issue
          toast.error("🔒 Permission denied. Please contact support.", {
            position: "top-right",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          // Other database errors
          toast.error(`❌ Database error: ${error.message}`, {
            position: "top-right",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
        return;
      }

      // Success! Reset form and close modal
      setFormData({ name: "", email: "" });
      onClose();

      // Show success message
      toast.success("🎉 Successfully joined the waitlist! We'll notify you when we launch.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      console.log('Waitlist entry saved:', data);

    } catch (error) {
      // Network or other errors
      console.error('Network error:', error);
      toast.error("🌐 Network error. Please check your connection and try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white shadow-2xl overflow-hidden w-full max-w-sm md:max-w-6xl max-h-[90vh] md:h-auto"
        style={{
          // Remove fixed dimensions, let responsive classes handle it
        }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-end p-4 md:p-6">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Content - Responsive Layout */}
        <div className="w-full md:flex md:min-h-[600px]">
          {/* Left Section - Protocol Information (Hidden on mobile) */}
          <div className="hidden md:flex md:w-1/2 p-6 lg:p-12">
            <div className="flex flex-col max-w-md">
              <div>
                <h3
                  className="text-2xl lg:text-3xl xl:text-4xl mb-8 lg:mb-10"
                  style={{
                    fontFamily: "Gotham",
                    fontWeight: 700,
                    lineHeight: "110%",
                    letterSpacing: "0%",
                    color: "#1C1C1C",
                  }}
                >
                  Decentralized Staking Protocol.
                </h3>
              </div>

              <div className="space-y-6 lg:space-y-8">
                {/* Feature 1 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  </div>
                  <div>
                    <h4
                      className="mb-2 text-lg lg:text-xl"
                      style={{
                        fontFamily: "Gotham",
                        fontWeight: 350,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#1C1C1C",
                      }}
                    >
                      Korem ipsum dolor sit amet, consectetur.
                    </h4>
                    <p
                      className="text-sm lg:text-base"
                      style={{
                        fontFamily: "Gotham",
                        fontWeight: 325,
                        lineHeight: "150%",
                        color: "#1C1C1C80",
                      }}
                    >
                      Norem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  </div>
                  <div>
                    <h4
                      className="mb-2 text-lg lg:text-xl"
                      style={{
                        fontFamily: "Gotham",
                        fontWeight: 350,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#1C1C1C",
                      }}
                    >
                      Korem ipsum dolor sit amet, consectetur.
                    </h4>
                    <p
                      className="text-sm lg:text-base"
                      style={{
                        fontFamily: "Gotham",
                        fontWeight: 325,
                        lineHeight: "150%",
                        color: "#1C1C1C80",
                      }}
                    >
                      Norem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  </div>
                  <div>
                    <h4
                      className="mb-2 text-lg lg:text-xl"
                      style={{
                        fontFamily: "Gotham",
                        fontWeight: 350,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#1C1C1C",
                      }}
                    >
                      Korem ipsum dolor sit amet, consectetur.
                    </h4>
                    <p
                      className="text-sm lg:text-base"
                      style={{
                        fontFamily: "Gotham",
                        fontWeight: 325,
                        lineHeight: "150%",
                        color: "#1C1C1C80",
                      }}
                    >
                      Norem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Divider (Hidden on mobile) */}
          <div className="hidden md:block w-px bg-gray-200 self-stretch"></div>

          {/* Right Section - Waitlist Form (Full width on mobile, half width on desktop) */}
          <div className="flex flex-col md:justify-center items-center w-full md:w-1/2 p-6 pb-8 lg:p-12">
            <div className="w-full max-w-sm flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-8">
              <div className="text-center">
                <h3
                  className="mb-3 md:mb-4 text-xl md:text-3xl lg:text-4xl"
                  style={{
                    fontFamily: "Gotham",
                    fontWeight: 600,
                    lineHeight: "120%",
                    color: "#1C1C1C",
                  }}
                >
                  Join our journey and get early access
                </h3>
              </div>
              
              <div className="text-center">
                <p
                  className="text-sm md:text-base lg:text-lg mb-3 md:mb-4"
                  style={{
                    fontFamily: "Gotham",
                    fontWeight: 400,
                    lineHeight: "140%",
                    color: "#6B7280",
                  }}
                >
                  Join our extensive waitlist today to spark connection and get
                  notified when we launch
                </p>

                {/* Avatar Images */}
                <div className="flex justify-center items-center">
                  <img
                    src="/waitlist.png"
                    alt="Waitlist users"
                    className="h-8 md:h-10 lg:h-12"
                  />
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-center space-y-3 md:space-y-4 lg:space-y-5"
              >
                <div className="w-full flex flex-col space-y-2 md:space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={(e) => {
                      e.target.style.border = "1.7px solid #7C3AED";
                      e.target.style.color = "#000000";
                    }}
                    onBlur={(e) => {
                      e.target.style.border = "1.7px solid #7C3AED1A";
                      e.target.style.color = "#1C1C1C4D";
                    }}
                    placeholder="Tell us your name..."
                    required
                    className="w-full h-11 md:h-12 lg:h-14 px-4 lg:px-5 py-3 lg:py-4 rounded-lg border-[1.7px] bg-[#7C3AED1A] border-[#7C3AED1A] focus:ring-0 focus:outline-none transition-all duration-200 text-sm md:text-base"
                    style={{
                      fontFamily: "Gotham",
                      fontWeight: 400,
                      color: "#1C1C1C4D",
                    }}
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={(e) => {
                      e.target.style.border = "1.7px solid #7C3AED";
                      e.target.style.color = "#000000";
                    }}
                    onBlur={(e) => {
                      e.target.style.border = "1.7px solid #7C3AED1A";
                      e.target.style.color = "#1C1C1C4D";
                    }}
                    placeholder="Enter your email address"
                    required
                    className="w-full h-11 md:h-12 lg:h-14 px-4 lg:px-5 py-3 lg:py-4 rounded-lg border-[1.7px] bg-[#7C3AED1A] border-[#7C3AED1A] focus:ring-0 focus:outline-none transition-all duration-200 text-sm md:text-base"
                    style={{
                      fontFamily: "Gotham",
                      fontWeight: 400,
                      color: "#1C1C1C4D",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 md:h-12 lg:h-14 text-white font-semibold text-sm md:text-base rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-2 md:mt-4"
                  style={{
                    background: isSubmitting ? "#6B7280" : "#7C3AED",
                    border: "1px solid #69696980",
                    fontFamily: "Gotham",
                    fontWeight: 600,
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>

              {/* Divider Line */}
              <div className="w-full h-px bg-black/10 mt-2 md:mt-4"></div>

              <div className="text-center">
                <p
                  className="text-xs md:text-sm lg:text-base"
                  style={{
                    fontFamily: "Gotham",
                    fontWeight: 350,
                    lineHeight: "140%",
                    textAlign: "center",
                    color: "#6B7280",
                  }}
                >
                  By clicking &quot;Submit&quot; you agree to our{" "}
                  <a
                    href="/privacy"
                    className="text-purple-600 hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-purple-600 hover:underline">
                    Terms of Use
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistSection;
