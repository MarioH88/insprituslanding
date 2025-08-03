'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmailJSConfig, getEmailJSConfig } from '../utils/emailjs-config';
import ReCAPTCHA from 'react-google-recaptcha';

interface ContactFormProps {
  readonly className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    message: ''
  });
  const [validationErrors, setValidationErrors] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Initialize EmailJS
  useEffect(() => {
    const { publicKey } = getEmailJSConfig();
    console.log('EmailJS initialization - publicKey available:', !!publicKey);
    if (publicKey) {
      try {
        emailjs.init(publicKey);
        console.log('EmailJS initialized successfully with public key:', publicKey.substring(0, 6) + '...');
      } catch (initError) {
        console.error('EmailJS initialization failed:', initError);
      }
    } else {
      console.error('EmailJS public key not found in environment variables');
    }
  }, []);

  // Validation functions
  const validateName = (value: string, fieldName: string): string => {
    if (!value.trim()) return `${fieldName} is required`;
    if (value.trim().length < 2) return `${fieldName} must be at least 2 characters`;
    if (!/^[a-zA-Z\s'-]+$/.test(value)) return `${fieldName} can only contain letters, spaces, hyphens, and apostrophes`;
    return '';
  };

  const validateEmail = (value: string): string => {
    if (!value.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return '';
  };

  const validateOrganization = (value: string): string => {
    if (!value.trim()) return 'Organization name is required';
    if (value.trim().length < 2) return 'Organization name must be at least 2 characters';
    return '';
  };

  const validateMessage = (value: string): string => {
    if (!value.trim()) return 'Message is required';
    if (value.trim().length < 10) return 'Message must be at least 10 characters';
    if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
    return '';
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
        return validateName(value, 'First name');
      case 'lastName':
        return validateName(value, 'Last name');
      case 'organization':
        return validateOrganization(value);
      case 'email':
        return validateEmail(value);
      case 'message':
        return validateMessage(value);
      default:
        return '';
    }
  };

  const validateForm = (): boolean => {
    const errors = {
      firstName: validateField('firstName', formData.firstName),
      lastName: validateField('lastName', formData.lastName),
      organization: validateField('organization', formData.organization),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };

    setValidationErrors(errors);
    
    // Check CAPTCHA
    if (!captchaToken) {
      setErrorMessage('Please complete the CAPTCHA verification.');
      return false;
    }
    
    return !Object.values(errors).some(error => error !== '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error for this field when user starts typing
    if (validationErrors[name as keyof typeof validationErrors]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token) {
      setErrorMessage(''); // Clear error when CAPTCHA is completed
    }
  };

  const resetCaptcha = () => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
    setCaptchaToken(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      setSubmitStatus('error');
      setErrorMessage('Please fix the validation errors before submitting.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Validate EmailJS configuration
      const validation = validateEmailJSConfig();
      console.log('EmailJS Validation:', validation);
      
      if (!validation.isValid) {
        throw new Error(`EmailJS configuration is incomplete: ${validation.errors.join(', ')}`);
      }

      const { serviceId, templateId, publicKey } = getEmailJSConfig();
      console.log('EmailJS Config Details:');
      console.log('- Service ID:', serviceId);
      console.log('- Template ID:', templateId);
      console.log('- Public Key:', publicKey ? publicKey.substring(0, 6) + '...' : 'MISSING');
      console.log('- Service ID type:', typeof serviceId);
      console.log('- Template ID type:', typeof templateId);
      console.log('- Public Key type:', typeof publicKey);

      const templateParams = {
        name: `${formData.firstName} ${formData.lastName}`,
        time: new Date().toLocaleString(),
        message: `From: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Organization: ${formData.organization}

Message:
${formData.message}`,
      };

      console.log('Sending email with params:', templateParams);

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully!');
      setSubmitStatus('success');
      
      // Reset form data
      setFormData({
        firstName: '',
        lastName: '',
        organization: '',
        email: '',
        message: ''
      });
      setValidationErrors({
        firstName: '',
        lastName: '',
        organization: '',
        email: '',
        message: ''
      });
      
      // Reset CAPTCHA
      resetCaptcha();
      
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      console.error('Error type:', typeof error);
      console.error('Error constructor:', error?.constructor?.name);
      
      let errorMsg = 'Failed to send message. Please try again.';
      
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        errorMsg = error.message;
      } else if (typeof error === 'object' && error !== null) {
        console.error('Error object keys:', Object.keys(error));
        if ('text' in error) {
          console.error('EmailJS error text:', error.text);
          errorMsg = `EmailJS Error: ${error.text}`;
        }
        if ('status' in error) {
          console.error('EmailJS error status:', error.status);
          errorMsg += ` (Status: ${error.status})`;
        }
      }
      
      setSubmitStatus('error');
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMessageCountColor = (length: number): string => {
    if (length > 1000) return 'text-red-400';
    if (length > 800) return 'text-yellow-400';
    return 'text-gray-400';
  };

  return (
    <div>
      <form 
        onSubmit={handleSubmit} 
        className={`flex flex-col gap-2 bg-white/10 backdrop-blur-lg rounded-md p-4 shadow-lg border border-cyan-400 ${className}`}
      >
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-2 rounded bg-green-500/20 border border-green-400 text-green-100">
          <p className="font-medium text-xs">✅ Message sent successfully!</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-2 rounded bg-red-500/20 border border-red-400 text-red-100">
          <p className="font-medium text-xs">❌ {errorMessage}</p>
        </div>
      )}

      {/* Name Fields Row */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label htmlFor="firstName" className="text-cyan-200 text-xs mb-1 block">
            First Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className={`w-full px-2 py-1.5 rounded bg-white/80 text-gray-900 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-xs ${
              validationErrors.firstName ? 'border border-red-500' : ''
            }`}
            placeholder="First name"
          />
          {validationErrors.firstName && (
            <span className="text-red-400 text-xs block mt-0.5">{validationErrors.firstName}</span>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="text-cyan-200 text-xs mb-1 block">
            Last Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className={`w-full px-2 py-1.5 rounded bg-white/80 text-gray-900 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-xs ${
              validationErrors.lastName ? 'border border-red-500' : ''
            }`}
            placeholder="Last name"
          />
          {validationErrors.lastName && (
            <span className="text-red-400 text-xs block mt-0.5">{validationErrors.lastName}</span>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="organization" className="text-cyan-200 text-xs mb-1 block">
          Organization <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className={`w-full px-2 py-1.5 rounded bg-white/80 text-gray-900 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-xs ${
            validationErrors.organization ? 'border border-red-500' : ''
          }`}
          placeholder="Organization"
        />
        {validationErrors.organization && (
          <span className="text-red-400 text-xs block mt-0.5">{validationErrors.organization}</span>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-cyan-200 text-xs mb-1 block">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className={`w-full px-2 py-1.5 rounded bg-white/80 text-gray-900 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-xs ${
            validationErrors.email ? 'border border-red-500' : ''
          }`}
          placeholder="email@example.com"
        />
        {validationErrors.email && (
          <span className="text-red-400 text-xs block mt-0.5">{validationErrors.email}</span>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-cyan-200 text-xs mb-1 block">
          Message <span className="text-red-400">*</span>
          <span className="text-gray-400"> (10-1000)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={2}
          required
          disabled={isSubmitting}
          className={`w-full px-2 py-1.5 rounded bg-white/80 text-gray-900 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none text-xs ${
            validationErrors.message ? 'border border-red-500' : ''
          }`}
          placeholder="How can we help..."
        />
        <div className="flex justify-between text-xs mt-0.5">
          {validationErrors.message && (
            <span className="text-red-400">{validationErrors.message}</span>
          )}
          <span className={`ml-auto ${getMessageCountColor(formData.message.length)}`}>
            {formData.message.length}/1000
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`mt-3 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-bold rounded shadow border border-cyan-400 transition-all text-xs relative overflow-hidden ${
          isSubmitting 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:scale-105 animate-neon-pulse'
        }`}
        style={{
          animation: isSubmitting ? 'none' : 'neonPulse 1.5s ease-in-out infinite alternate',
          boxShadow: isSubmitting ? 'none' : '0 0 15px rgba(34, 211, 238, 0.8), 0 0 30px rgba(34, 211, 238, 0.6), 0 0 45px rgba(34, 211, 238, 0.4)',
          textShadow: isSubmitting ? 'none' : '0 0 10px rgba(255, 255, 255, 0.8)'
        }}
      >
        {/* Neon glow overlay */}
        {!isSubmitting && (
          <div 
            className="absolute inset-0 bg-gradient-to-r from-cyan-300/40 to-blue-300/40 rounded"
            style={{
              animation: 'neonGlow 1.5s ease-in-out infinite alternate'
            }}
          />
        )}
        
        <span className="relative z-10 font-extrabold tracking-wide">
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-1">
              <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Sending...
            </span>
          ) : (
            'SEND MESSAGE'
          )}
        </span>
      </button>

      {/* CAPTCHA */}
      <div className="mt-4 flex justify-center">
        <div className="scale-75 origin-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6Ldb5pgrAAAAAEew5aLy9ZztGptg_XbeWRoSKf-s"
            onChange={handleCaptchaChange}
            theme="dark"
            size="compact"
          />
        </div>
        {!captchaToken && errorMessage.includes('CAPTCHA') && (
          <span className="text-red-400 text-xs block mt-1 text-center w-full">Please complete the CAPTCHA verification.</span>
        )}
      </div>
      
      <style>{`
        @keyframes neonPulse {
          0% {
            box-shadow: 
              0 0 10px rgba(34, 211, 238, 0.6),
              0 0 20px rgba(34, 211, 238, 0.5),
              0 0 30px rgba(34, 211, 238, 0.4),
              0 0 40px rgba(34, 211, 238, 0.2),
              inset 0 0 10px rgba(34, 211, 238, 0.3);
          }
          100% {
            box-shadow: 
              0 0 20px rgba(34, 211, 238, 1),
              0 0 35px rgba(34, 211, 238, 0.8),
              0 0 50px rgba(34, 211, 238, 0.6),
              0 0 70px rgba(34, 211, 238, 0.4),
              0 0 90px rgba(34, 211, 238, 0.2),
              inset 0 0 15px rgba(34, 211, 238, 0.5);
          }
        }
        
        @keyframes neonGlow {
          0% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </form>
    </div>
  );
}
