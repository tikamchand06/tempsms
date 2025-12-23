"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className='bg-white border border-slate-200 rounded-3xl p-8 shadow-sm'>
      {submitted ? (
        <div className='text-center py-20 animate-in zoom-in-95 duration-300'>
          <div className='bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
            <Send className='text-emerald-600' size={32} />
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-2'>Message Sent!</h2>
          <p className='text-slate-500'>We've received your request and will get back to you within 24 hours.</p>
          <button onClick={() => setSubmitted(false)} className='mt-8 text-indigo-600 font-bold hover:underline'>
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <label className='text-sm font-bold text-slate-700 uppercase tracking-wider'>Full Name</label>
              <input
                type='text'
                required
                className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all'
                placeholder='John Doe'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-bold text-slate-700 uppercase tracking-wider'>Email Address</label>
              <input
                type='email'
                required
                className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all'
                placeholder='john@example.com'
              />
            </div>
          </div>
          <div className='space-y-2'>
            <label className='text-sm font-bold text-slate-700 uppercase tracking-wider'>Subject</label>
            <select className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all'>
              <option>General Inquiry</option>
              <option>Number Not Working</option>
              <option>Feature Request</option>
              <option>Business Partnership</option>
            </select>
          </div>
          <div className='space-y-2'>
            <label className='text-sm font-bold text-slate-700 uppercase tracking-wider'>Your Message</label>
            <textarea
              rows={5}
              required
              className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all resize-none'
              placeholder='Tell us how we can help...'
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2'
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
