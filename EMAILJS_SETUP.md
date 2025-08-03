# EmailJS Integration Setup Guide

This guide will help you set up EmailJS to handle contact form submissions in your Inspritus landing page.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (you'll need this later)

### For Gmail:
- Select "Gmail"
- Click "Connect Account" and sign in with your Gmail
- Your service will be created automatically

### For Other Providers:
- Follow the specific instructions for SMTP setup
- You'll need your email server settings

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} <{{from_email}}>
To: {{to_email}}

Message:
{{message}}

---
This message was sent from the Inspritus contact form.
```

4. Save the template and note down your **Template ID**

### Template Variables:
- `{{from_name}}` - The sender's name
- `{{from_email}}` - The sender's email
- `{{message}}` - The message content
- `{{to_email}}` - Your receiving email (hello@insprit.us)

## Step 4: Get Your Public Key

1. Go to **General** settings in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)
3. Copy this key

## Step 5: Configure Environment Variables

1. Update your `.env.local` file with your EmailJS credentials:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace the placeholder values with your actual EmailJS credentials
3. Make sure `.env.local` is in your `.gitignore` file to keep your keys secure

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your contact form
3. Fill out and submit the form
4. Check your email inbox for the message
5. Check the browser console for any errors

## Troubleshooting

### Common Issues:

1. **"EmailJS configuration is incomplete" error**
   - Check that all three environment variables are set correctly
   - Restart your development server after updating .env.local

2. **Form submits but no email received**
   - Verify your Service ID, Template ID, and Public Key are correct
   - Check your spam folder
   - Ensure your email template is published (not in draft)

3. **CORS errors**
   - Make sure you're using the browser version of EmailJS (`@emailjs/browser`)
   - Check that your domain is allowed in EmailJS settings

4. **Rate limiting**
   - EmailJS free tier has limits (200 emails/month)
   - Consider upgrading if you need more

### Debug Mode:

To enable more detailed logging, temporarily add this to your ContactForm component:

```javascript
// Add this before the emailjs.send() call
console.log('Sending email with params:', templateParams);
console.log('Service ID:', serviceId);
console.log('Template ID:', templateId);
```

## Security Notes

- Never expose your private keys in client-side code
- The public key is safe to use in client-side applications
- Consider implementing additional validation on the server side for production
- Set up domain restrictions in EmailJS dashboard for added security

## Customization

You can customize the contact form by:

1. **Modifying the template**: Add more fields or change the email format
2. **Styling**: Update the CSS classes in the ContactForm component
3. **Validation**: Add client-side validation rules
4. **Success/Error handling**: Customize the success and error messages

## Production Deployment

Before deploying to production:

1. Set up environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Test the form on your live site
3. Monitor your EmailJS usage in the dashboard
4. Consider setting up email notifications for failed deliveries

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS FAQ: https://www.emailjs.com/docs/faq/
- Community Support: EmailJS Discord/Forum
