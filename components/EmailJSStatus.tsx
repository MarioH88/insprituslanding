'use client';

import { validateEmailJSConfig } from '../utils/emailjs-config';

export default function EmailJSStatus() {
  const validation = validateEmailJSConfig();

  if (validation.isValid) {
    return (
      <div className="mb-4 p-3 bg-green-500/20 border border-green-400 text-green-100 rounded-lg">
        <p className="font-semibold">✅ EmailJS is configured correctly!</p>
        <p className="text-sm">Service: {validation.config.serviceId}</p>
        <p className="text-sm">Template: {validation.config.templateId}</p>
        <p className="text-sm">Public Key: {validation.config.publicKey}</p>
      </div>
    );
  }

  return (
    <div className="mb-4 p-3 bg-amber-500/20 border border-amber-400 text-amber-100 rounded-lg">
      <p className="font-semibold">⚠️ EmailJS needs configuration</p>
      <p className="text-sm mb-2">Please update your .env.local file with:</p>
      <ul className="text-xs space-y-1">
        {validation.errors.map((error) => (
          <li key={error}>• {error}</li>
        ))}
      </ul>
      <p className="text-xs mt-2">See EMAILJS_SETUP.md for detailed instructions.</p>
    </div>
  );
}
