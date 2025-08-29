import emailjs from "emailjs-com";

export const sendEmail = (form) => {
  return emailjs.sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID='service_np5tram',
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID='template_cnclosa',
    form,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY='jPZ2jx0wct95Zy1tp'
  );
};