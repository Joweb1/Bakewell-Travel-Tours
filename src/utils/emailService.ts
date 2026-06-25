import { ConsultationRequest } from '../types';

interface SendEmailParams {
  fullName: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  destination: string;
  travelDate: string;
  message?: string;
}

export async function sendBookingEmails(params: SendEmailParams): Promise<boolean> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const companyTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_COMPANY;
  const clientTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CLIENT;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !publicKey) {
    console.warn('EmailJS keys not configured. Local storage registry bypass only.');
    return false;
  }

  const templateParams = {
    title: "New Booking Reservation Request",
    fullName: params.fullName,
    name: params.fullName,
    email: params.email,
    phone: params.phone,
    serviceNeeded: params.serviceNeeded,
    destination: params.destination,
    travelDate: params.travelDate,
    message: params.message || 'No special requests.',
  };

  try {
    const promises: Promise<Response>[] = [];

    // 1. Dispatch Company Notification
    if (companyTemplateId) {
      promises.push(
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: companyTemplateId,
            user_id: publicKey,
            template_params: templateParams,
          }),
        })
      );
    }

    // 2. Dispatch Client Confirmation
    if (clientTemplateId) {
      promises.push(
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: clientTemplateId,
            user_id: publicKey,
            template_params: templateParams,
          }),
        })
      );
    }

    const responses = await Promise.all(promises);

    for (const response of responses) {
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`EmailJS Send Failure: ${text}`);
      }
    }

    return true;
  } catch (error) {
    console.error('EmailJS dispatch failed:', error);
    throw error;
  }
}
