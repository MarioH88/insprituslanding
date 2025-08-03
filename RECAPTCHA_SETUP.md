# Google reCAPTCHA Setup Guide

This guide will help you set up Google reCAPTCHA for your contact form to prevent spam and bot submissions.

## Step 1: Create a Google reCAPTCHA Account

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Sign in with your Google account
3. Click "Create" to add a new site

## Step 2: Configure Your Site

1. **Label**: Enter a descriptive name (e.g., "Inspritus Landing Page")
2. **reCAPTCHA type**: Select **"reCAPTCHA v2"** 
3. **Sub-type**: Choose **"I'm not a robot" Checkbox**
4. **Domains**: Add your domains:
   - For development: `localhost`
   - For production: `yourdomain.com` (replace with your actual domain)

## Step 3: Get Your Keys

After creating the site, you'll receive:
- **Site Key** (public) - This goes in your .env.local file
- **Secret Key** (private) - Keep this secure, only for server-side verification

## Step 4: Update Environment Variables

Update your `.env.local` file:

```env
# Replace the test key with your real site key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_real_site_key_here
```

## Step 5: Test the CAPTCHA

1. Start your development server: `npm run dev`
2. Go to your contact form
3. You should see the reCAPTCHA checkbox
4. Complete the CAPTCHA and try submitting the form

## Current Configuration

**Development**: Currently using Google's test keys that work on localhost
**Production**: You MUST replace with real keys before deploying

## Test Keys (Current)

- **Site Key**: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`
- These keys always pass validation and are meant for testing only

## Security Features

✅ **Prevents spam submissions**
✅ **Blocks automated bots**
✅ **Validates on form submission**
✅ **Resets after successful form submission**
✅ **Dark theme to match your design**
✅ **Compact size for better UX**

## Troubleshooting

### CAPTCHA not showing:
- Check if the site key is correct
- Ensure your domain is added to the reCAPTCHA settings
- Check browser console for errors

### Form submission blocked:
- Make sure you complete the CAPTCHA before submitting
- Check if the CAPTCHA token is being generated

### Production deployment:
- Replace test keys with real keys
- Add your production domain to reCAPTCHA settings
- Test thoroughly before going live

## Additional Security

For enhanced security, consider:
- Server-side verification of CAPTCHA tokens
- Rate limiting on form submissions
- Additional validation rules
- Monitoring and alerting for suspicious activity
