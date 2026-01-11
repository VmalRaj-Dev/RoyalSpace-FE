// Email service utility for sending form submissions
// This uses EmailJS for client-side email sending

import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone?: string;
  serviceType?: string;
  message?: string;
}

const RECIPIENT_EMAIL = 'info@royalfur.in';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Initialize EmailJS
 */
export const initEmailJS = () => {
  if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'your_public_key') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log('EmailJS initialized');
  }
};

/**
 * Send contact form data via email using EmailJS
 */
export const sendContactEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    // Log for development
    console.log('Contact Form Submission:', data);
    console.log(`To: ${RECIPIENT_EMAIL}`);
    
    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'your_service_id') {
      console.warn('EmailJS not configured. Email will not be sent.');
      console.log('Form data that would be sent:', data);
      return true; // Return true for development
    }
    
    // Send email using EmailJS
    const templateParams = {
      to_email: RECIPIENT_EMAIL,
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Not provided',
      subject: data.subject || 'Contact Form Submission',
      message: data.message,
      reply_to: data.email,
    };
    
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );
    
    console.log('Email sent successfully:', response);
    return response.status === 200;
  } catch (error) {
    console.error('Error sending contact email:', error);
    return false;
  }
};

/**
 * Send consultation form data via email using EmailJS
 */
export const sendConsultationEmail = async (data: ConsultationFormData): Promise<boolean> => {
  try {
    // Log for development
    console.log('Consultation Form Submission:', data);
    console.log(`To: ${RECIPIENT_EMAIL}`);
    
    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'your_service_id') {
      console.warn('EmailJS not configured. Email will not be sent.');
      console.log('Form data that would be sent:', data);
      return true; // Return true for development
    }
    
    // Send email using EmailJS
    const templateParams = {
      to_email: RECIPIENT_EMAIL,
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Not provided',
      service_type: data.serviceType || 'Not specified',
      subject: 'New Consultation Request',
      message: data.message || 'No additional message',
      reply_to: data.email,
    };
    
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );
    
    console.log('Consultation email sent successfully:', response);
    return response.status === 200;
  } catch (error) {
    console.error('Error sending consultation email:', error);
    return false;
  }
};

/**
 * Alternative: Open default email client with pre-filled data
 * This is a fallback method that works without backend
 */
export const openEmailClient = (data: ContactFormData | ConsultationFormData, type: 'contact' | 'consultation') => {
  const subject = type === 'contact' 
    ? (data as ContactFormData).subject || 'Contact Form Submission'
    : 'Consultation Request';
    
  let body = `Name: ${data.name}\nEmail: ${data.email}\n`;
  
  if (data.phone) {
    body += `Phone: ${data.phone}\n`;
  }
  
  if (type === 'consultation' && (data as ConsultationFormData).serviceType) {
    body += `Service Type: ${(data as ConsultationFormData).serviceType}\n`;
  }
  
  body += `\nMessage:\n${data.message || 'No message provided'}`;
  
  const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
};

/**
 * Get recipient email for display purposes
 */
export const getRecipientEmail = () => RECIPIENT_EMAIL;
