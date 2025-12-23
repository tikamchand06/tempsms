import NumberPage from "./numbers/page";
import { Shield, Lock, Zap, Search, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className='space-y-0'>
      <section className='bg-slate-900 py-16 md:py-24 text-white relative overflow-hidden'>
        <div className='absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl'></div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <div className='inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6'>
            Privacy First SMS Service
          </div>
          <h1 className='text-4xl md:text-6xl font-extrabold mb-6 tracking-tight'>
            Receive SMS Online <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400'>Anonymously & Free</span>
          </h1>
          <p className='text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed'>
            Protect your identity. Use our disposable phone numbers to bypass SMS verification on websites, apps, and services without
            revealing your real number.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <div className='flex items-center space-x-2 px-6 py-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm'>
              <Shield className='text-emerald-400' size={20} />
              <span className='text-sm font-medium'>100% Private</span>
            </div>
            <div className='flex items-center space-x-2 px-6 py-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm'>
              <Zap className='text-amber-400' size={20} />
              <span className='text-sm font-medium'>Instant Delivery</span>
            </div>
            <div className='flex items-center space-x-2 px-6 py-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm'>
              <Lock className='text-sky-400' size={20} />
              <span className='text-sm font-medium'>Secure SSL</span>
            </div>
          </div>
        </div>
      </section>

      <NumberPage isHome={true} />

      <section className='bg-white py-20 border-t border-slate-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-extrabold text-slate-900 mb-4'>How It Works</h2>
            <p className='text-slate-500 max-w-2xl mx-auto'>
              Getting a temporary SMS is easier than ever. Follow these three simple steps to verify your account.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            {[
              {
                step: "01",
                title: "Choose a Number",
                desc: "Browse our list of available virtual numbers from dozens of countries.",
                icon: <Phone className='text-indigo-600' />,
              },
              {
                step: "02",
                title: "Enter Number Online",
                desc: "Provide the virtual number to the service or app you are trying to verify.",
                icon: <Search className='text-violet-600' />,
              },
              {
                step: "03",
                title: "Read Your SMS",
                desc: "Wait for the message to appear in the real-time feed on our website.",
                icon: <Mail className='text-emerald-600' />,
              },
            ].map((item, i) => (
              <div key={i} className='relative group p-8 rounded-3xl hover:bg-slate-50 transition-colors'>
                <div className='absolute top-4 right-8 text-6xl font-black text-slate-100 group-hover:text-slate-200 transition-colors select-none'>
                  {item.step}
                </div>
                <div className='mb-6 relative'>
                  <div className='w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-100'>
                    {item.icon}
                  </div>
                </div>
                <h3 className='text-xl font-bold text-slate-900 mb-4'>{item.title}</h3>
                <p className='text-slate-500 leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
