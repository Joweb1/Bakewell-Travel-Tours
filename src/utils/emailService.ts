import { ConsultationRequest } from '../types';

export interface SendEmailParams {
  fullName: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  destination: string;
  travelDate: string;
  message?: string;
}

export async function sendClientConfirmation(params: SendEmailParams): Promise<boolean> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const clientTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CLIENT;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_EMAILJS_PRIVATE_KEY;

  if (!serviceId || !publicKey) {
    const errorMsg = `EmailJS keys not configured. Missing: ${!serviceId ? 'VITE_EMAILJS_SERVICE_ID' : ''} ${!publicKey ? 'VITE_EMAILJS_PUBLIC_KEY' : ''}`;
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  if (!clientTemplateId) {
    console.warn('Client template ID is not configured.');
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

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: clientTemplateId,
      user_id: publicKey,
      ...(privateKey ? { accessToken: privateKey } : {}),
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`EmailJS Client Send Failure: ${text}`);
  }

  return true;
}

export async function sendCompanyNotification(params: SendEmailParams): Promise<boolean> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const companyTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_COMPANY;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_EMAILJS_PRIVATE_KEY;

  if (!serviceId || !publicKey) {
    const errorMsg = `EmailJS keys not configured. Missing: ${!serviceId ? 'VITE_EMAILJS_SERVICE_ID' : ''} ${!publicKey ? 'VITE_EMAILJS_PUBLIC_KEY' : ''}`;
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  if (!companyTemplateId) {
    console.warn('Company template ID is not configured.');
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

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: companyTemplateId,
      user_id: publicKey,
      ...(privateKey ? { accessToken: privateKey } : {}),
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`EmailJS Company Send Failure: ${text}`);
  }

  return true;
}

export async function sendBookingEmails(params: SendEmailParams): Promise<boolean> {
  // Only send to the company
  await sendCompanyNotification(params);
  return true;
}
