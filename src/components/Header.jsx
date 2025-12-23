"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShieldCheck, Home, Info, Mail, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", icon: <Home size={18} /> },
  { name: "Numbers", path: "/numbers", icon: <Phone size={18} /> },
  { name: "About", path: "/about-us", icon: <Info size={18} /> },
  { name: "Contact", path: "/contact-us", icon: <Mail size={18} /> },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm backdrop-blur-md bg-white/80'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex items-center space-x-2'>
            <Link href='/' className='flex items-center space-x-2'>
              <Image src='/logo.png' alt='Logo' width={36} height={36} />
              <span className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600'>
                TempSMS
              </span>
            </Link>
          </div>

          <nav className='hidden md:flex items-center space-x-8'>
            {navLinks.map(({ path, icon, name }) => (
              <Link
                key={path}
                href={path}
                className={`flex items-center space-x-1.5 text-sm font-medium transition-colors hover:text-indigo-600 ${
                  pathname === path ? "text-indigo-600" : "text-slate-600"
                }`}
              >
                {icon}
                <span>{name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
