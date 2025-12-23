import { Shield, Smartphone, Globe, Cloud, CheckCircle } from "lucide-react";

export const metadata = {
  title: "About Us | Privacy-First Virtual SMS Service",
  description:
    "Learn how TempSMS helps you protect your privacy online. Our mission is to provide secure, disposable phone numbers to prevent spam and keep your personal data safe.",
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
  ],
};

export default function About() {
  return (
    <div className='max-w-4xl mx-auto px-4 py-16 md:py-24'>
      <div className='text-center mb-20'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight'>Protecting Your Digital Identity</h1>
        <p className='text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed'>
          TempSMS provides a free, disposable virtual phone number service to help people avoid spam and keep their real phone numbers
          private.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-20'>
        <div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Our Mission</h2>
          <p className='text-slate-600 leading-relaxed mb-6'>
            In an age where every website asks for your phone number, privacy has become a luxury. We believe that you shouldn't have
            to trade your personal data just to sign up for a service or check out a piece of content.
          </p>
          <p className='text-slate-600 leading-relaxed'>
            TempSMS was created as a tool for developers, security researchers, and privacy-conscious users to safely interact with the
            web without the risk of unwanted marketing calls or identity tracking.
          </p>
        </div>
        <div className='bg-slate-50 rounded-3xl p-8 border border-slate-100'>
          <ul className='space-y-6'>
            {[
              {
                icon: <Shield className='text-indigo-600' />,
                title: "Privacy Guaranteed",
                text: "No logs, no tracking, just pure anonymity.",
              },
              {
                icon: <Globe className='text-violet-600' />,
                title: "Global Coverage",
                text: "Numbers from over 20+ countries worldwide.",
              },
              {
                icon: <Cloud className='text-sky-600' />,
                title: "Real-time Feed",
                text: "Messages appear instantly as they hit our servers.",
              },
            ].map((item, i) => (
              <li key={i} className='flex gap-4'>
                <div className='flex-shrink-0'>{item.icon}</div>
                <div>
                  <h4 className='font-bold text-slate-900'>{item.title}</h4>
                  <p className='text-sm text-slate-500'>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='bg-indigo-600 rounded-3xl p-10 text-white relative overflow-hidden'>
        <div className='absolute top-0 right-0 p-12 opacity-10'>
          <Smartphone size={200} />
        </div>
        <div className='relative z-10'>
          <h2 className='text-3xl font-bold mb-6'>Why use TempSMS?</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {[
              "Avoid marketing spam and robocalls",
              "Bypass verification walls easily",
              "Protect your real identity",
              "Test registration flows for apps",
              "Completely free of charge",
              "No account or registration required",
            ].map((item, i) => (
              <div key={i} className='flex items-center gap-3'>
                <CheckCircle size={20} className='text-indigo-200' />
                <span className='font-medium'>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
