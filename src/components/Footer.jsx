import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Phone, Info, Home, Mail, Handshake } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", icon: <Home size={18} /> },
  { name: "About", path: "/about-us", icon: <Info size={18} /> },
  { name: "Numbers", path: "/numbers", icon: <Phone size={18} /> },
];

const footerLinks = [
  { name: "Contact", path: "/contact-us", icon: <Mail size={18} /> },
  { name: "Privacy Policy", path: "/privacy-policy", icon: <ShieldCheck size={18} /> },
  { name: "Terms of Service", path: "/terms-of-service", icon: <Handshake size={18} /> },
];

export default function Footer() {
  return (
    <footer className='bg-white border-t border-slate-200 pt-12 pb-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-8'>
          <div className='col-span-1 md:col-span-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <Image src='/logo.png' alt='Logo' width={32} height={32} />
              <span className='text-xl font-bold text-slate-900'>TempSMS</span>
            </div>
            <p className='text-slate-500 max-w-sm mb-6 leading-relaxed'>
              Protect your personal privacy by using our disposable phone numbers for online verifications. Free, fast, and completely
              anonymous.
            </p>
          </div>
          <div className='col-span-1 md:col-span-2 flex items-start gap-12'>
            <div className='flex-auto'>
              <h4 className='font-semibold text-slate-900 mb-4 uppercase text-xs tracking-wider'>Service</h4>
              <ul className='space-y-3'>
                {navLinks.map(({ path, icon, name }) => (
                  <li key={path}>
                    <Link
                      href={path}
                      className='text-slate-600 hover:text-indigo-600 transition-colors text-sm flex items-center gap-2'
                    >
                      {icon} {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex-auto'>
              <h4 className='font-semibold text-slate-900 mb-4 uppercase text-xs tracking-wider'>Legal</h4>
              <ul className='space-y-3'>
                {footerLinks.map(({ path, icon, name }) => (
                  <li key={path}>
                    <Link
                      href={path}
                      className='text-slate-600 hover:text-indigo-600 transition-colors text-sm flex items-center gap-2'
                    >
                      {icon} {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-400 text-sm'>
          <p>© {new Date().getFullYear()} TempSMS Service. Built with privacy in mind.</p>
          <div className='flex items-center space-x-6'>
            <span>
              Status: <span className='text-emerald-500 font-medium'>All systems operational</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
