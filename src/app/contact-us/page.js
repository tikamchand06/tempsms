import ContactForm from "../../components/ContactForm";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | [Website Name] Support & Business Inquiries",
  description:
    "Need help or want to report a number? Contact the [Website Name] support team. We're here to assist you with SMS delivery issues and business partnerships.",
  keywords: [
    "about tempsms",
    "privacy virtual numbers",
    "disposable phone numbers",
    "sms service mission",
    "protect digital identity",
    "temporary phone numbers",
    "receive sms online",
    "free virtual numbers",
    "otp verification",
    "disposable phone numbers",
    "sms verification",
    "temp phone number for whatsapp",
    "temp phone number for telegram",
    "temp phone number for google",
    "online sms receiver",
    "burner numbers",
    "sms bypass",
    "virtual phone number service",
    "safe sms verification",
    "why use temporary numbers",
    "about our otp service",
    "privacy protection",
    "contact otp support",
    "report phone number",
    "sms website help",
    "customer service",
  ],
};

export default function Contact() {
  return (
    <div className='max-w-6xl mx-auto px-4 py-16 md:py-24'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
        <div>
          <h1 className='text-4xl font-extrabold text-slate-900 mb-6'>Get in Touch</h1>
          <p className='text-lg text-slate-500 mb-10 leading-relaxed'>
            Have questions about our service? Experiencing issues with a specific number? Our team is here to help you.
          </p>

          <div className='space-y-8'>
            <div className='flex items-center gap-5'>
              <div className='bg-indigo-50 p-4 rounded-2xl text-indigo-600'>
                <Mail size={24} />
              </div>
              <div>
                <h4 className='font-bold text-slate-900'>Email Support</h4>
                <p className='text-slate-500'>tcmhack@gmail.com</p>
              </div>
            </div>
            <div className='flex items-center gap-5'>
              <div className='bg-violet-50 p-4 rounded-2xl text-violet-600'>
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className='font-bold text-slate-900'>Live Chat</h4>
                <p className='text-slate-500'>Available Mon-Fri, 9am - 5pm IST</p>
              </div>
            </div>
            <div className='flex items-center gap-5'>
              <div className='bg-emerald-50 p-4 rounded-2xl text-emerald-600'>
                <MapPin size={24} />
              </div>
              <div>
                <h4 className='font-bold text-slate-900'>Website</h4>
                <p className='text-slate-500'>https://www.tcmhack.in</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
