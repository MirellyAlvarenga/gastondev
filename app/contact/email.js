import emailjs from "emailjs-com";

export const sendEmail = (form) => {
  return emailjs.sendForm(
    "service_lmrq8jg",    
    "seu_template_id",    
    form,                 
    "sua_public_key"    
  );
};
