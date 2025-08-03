// EmailJS Configuration Validator
// This utility helps validate your EmailJS setup

export const validateEmailJSConfig = () => {
  // Fallback values for testing - remove in production
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_n440sfr';
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'KafBEl5cQkMtuRy_xcKwU';
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'eyy3qbCzAGx1WeBi-';

  console.log('Raw env vars:', {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  });

  const errors: string[] = [];

  if (!serviceId || serviceId === 'YOUR_SERVICE_ID') {
    errors.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID is not configured');
  }

  if (!templateId || templateId === 'YOUR_TEMPLATE_ID') {
    errors.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID is not configured');
  }

  if (!publicKey || publicKey === 'YOUR_PUBLIC_KEY') {
    errors.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY is not configured');
  }

  return {
    isValid: errors.length === 0,
    errors,
    config: {
      serviceId: serviceId || 'Not set',
      templateId: templateId || 'Not set',
      publicKey: publicKey ? `${publicKey.substring(0, 6)}...` : 'Not set'
    }
  };
};

export const getEmailJSConfig = () => {
  return {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_n440sfr',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'KafBEl5cQkMtuRy_xcKwU',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'eyy3qbCzAGx1WeBi-'
  };
};
