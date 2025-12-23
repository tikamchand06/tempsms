"use client";

import { toast } from "sonner";
import { Button } from "./ui/button";
import { MESSAGES } from "../lib/constants";
import { useState, useEffect, useCallback } from "react";
import { RefreshCcw, Clock, ShieldAlert, Copy, MessageSquare, AlertCircle } from "lucide-react";

const defaultCountdown = 10; // seconds

const simulateSMS = (phone, n = 0) => {
  const messages = MESSAGES[phone?.countryCode] || [];

  // fetch upto n random messages
  const length = n || Math.floor(Math.random() * 3);
  const randomMessages = Array.from({ length }, () => messages[Math.floor(Math.random() * messages.length)]);
  return randomMessages?.map((m, i) => ({ ...m, id: m?.id + Date.now() + i + 897 })) || [];
};

export default function NumberDetail({ phone }) {
  const [isLoading, setIsLoading] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [countdown, setCountdown] = useState(defaultCountdown);
  const [messages, setMessages] = useState(simulateSMS(phone, 5));

  const fetchNewSMS = useCallback(async () => {
    if (!phone || isLoading) return;

    setIsLoading(true);
    try {
      // Simulate an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newMessages = simulateSMS(phone);
      setMessages((prev) => [...newMessages, ...prev].slice(0, 20)); // Keep last 20
      setLastUpdated(new Date());
    } catch (error) {
      console.error("Failed to fetch SMS:", error);
    } finally {
      setIsLoading(false);
      setCountdown(defaultCountdown);
    }
  }, [phone, isLoading]);

  useEffect(() => {
    let interval;
    if (autoRefresh && !isLoading) {
      interval = setInterval(() => fetchNewSMS(), defaultCountdown * 1000);
    }
    return () => clearInterval(interval);
  }, [autoRefresh, isLoading, fetchNewSMS]);

  const copyToClipboard = () => {
    if (phone) {
      navigator.clipboard.writeText(phone.number);
      toast.success("Number copied to clipboard!");
    }
  };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
      <div className='space-y-6'>
        <div className='bg-white border border-slate-200 rounded-2xl p-8 shadow-sm'>
          <div className='text-center mb-6'>
            <span className='text-6xl mb-4 block'>{phone.flag}</span>
            <h2 className='text-2xl font-bold text-slate-900 mb-1'>{phone.country}</h2>
            <p className='text-slate-400 font-medium text-sm'>{phone.provider} Network</p>
          </div>

          <div className='bg-slate-50 rounded-xl p-4 mb-6 text-center border border-slate-100'>
            <p className='text-xs text-slate-400 font-bold uppercase tracking-wider mb-2'>Selected Number</p>
            <h3 className='text-2xl font-mono font-bold text-slate-800 mb-4'>{phone.number}</h3>
            <Button
              size='lg'
              onClick={copyToClipboard}
              className='w-full bg-indigo-600 rounded-xl font-bold hover:bg-indigo-700 transition-all active:scale-95 shadow-md shadow-indigo-100 cursor-pointer'
            >
              <Copy size={18} />
              Copy Number
            </Button>
          </div>

          <div className='space-y-4'>
            <div className='flex items-center justify-between text-sm'>
              <span className='text-slate-500'>Status</span>
              <span className='text-emerald-500 font-bold flex items-center gap-1.5'>
                <span className='w-2 h-2 bg-emerald-500 rounded-full animate-pulse'></span>
                Online
              </span>
            </div>
            <div className='flex items-center justify-between text-sm'>
              <span className='text-slate-500'>Type</span>
              <span className='text-slate-900 font-semibold'>Virtual Mobile</span>
            </div>
            <div className='flex items-center justify-between text-sm'>
              <span className='text-slate-500'>Speed</span>
              <span className='text-slate-900 font-semibold text-emerald-600'>Fast Delivery</span>
            </div>
          </div>
        </div>

        <div className='bg-amber-50 border border-amber-100 rounded-2xl p-6'>
          <div className='flex items-start gap-4'>
            <div className='bg-amber-100 p-2 rounded-lg'>
              <ShieldAlert className='text-amber-600' size={20} />
            </div>
            <div>
              <h4 className='font-bold text-amber-900 mb-2'>Privacy Warning</h4>
              <p className='text-sm text-amber-800 leading-relaxed opacity-80'>
                This number is public. Do not use it for sensitive information like bank accounts or medical records. Anyone can see
                the messages received on this number.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:col-span-2 space-y-6'>
        <div className='bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col h-[700px]'>
          <div className='p-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10'>
            <div className='flex items-center gap-3'>
              <div className='bg-indigo-50 p-2.5 rounded-xl'>
                <MessageSquare className='text-indigo-600' size={20} />
              </div>
              <div>
                <h3 className='font-bold text-slate-900'>Message Feed</h3>
                <div suppressHydrationWarning className='flex items-center gap-2 text-xs text-slate-400'>
                  <Clock size={12} />
                  Last updated: {lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                </div>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='hidden sm:flex items-center gap-2 text-xs font-bold text-slate-400'>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-indigo-500'></span>
                </span>
                REFRESH IN {countdown}S
              </div>
              <Button
                variant='secondary'
                disabled={isLoading}
                onClick={fetchNewSMS}
                title='Manual Refresh'
                className='rounded-xl cursor-pointer'
              >
                <RefreshCcw size={20} className={isLoading ? "animate-spin text-indigo-600" : ""} />
              </Button>
            </div>
          </div>

          <div className='flex-grow overflow-y-auto p-6 space-y-6'>
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div
                  key={msg?.id + index}
                  className={`flex flex-col space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className='flex items-center justify-between'>
                    <span
                      suppressHydrationWarning
                      className='text-xs font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded border border-slate-100'
                    >
                      {msg?.co}
                    </span>
                    <span className='text-[10px] font-semibold text-slate-300 uppercase'>{msg.timestamp}</span>
                  </div>
                  <div className='bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-indigo-200 transition-colors group'>
                    <p suppressHydrationWarning className='text-slate-700 leading-relaxed font-medium'>
                      {msg?.txt}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className='flex flex-col items-center justify-center h-full text-center space-y-4 opacity-50'>
                <div className='bg-slate-50 p-6 rounded-full'>
                  <RefreshCcw size={48} className='text-slate-300 animate-spin' />
                </div>
                <div>
                  <h4 className='text-lg font-bold text-slate-900 mb-1'>Waiting for messages...</h4>
                  <p className='text-slate-500 max-w-xs mx-auto text-sm'>
                    Send an SMS to this number. It will automatically appear here within 10-20 seconds.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className='p-4 bg-slate-50 border-t border-slate-100'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  id='autorefresh'
                  checked={autoRefresh}
                  onChange={(e) => setAutoRefresh(e.target.checked)}
                  className='w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500'
                />
                <label htmlFor='autorefresh' className='text-xs font-bold text-slate-500 uppercase cursor-pointer'>
                  Auto-Refresh Enabled
                </label>
              </div>
              <div className='text-[10px] font-black text-slate-400 uppercase tracking-tighter'>End-to-End Encrypted Access</div>
            </div>
          </div>
        </div>

        <div className='bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4'>
          <div className='text-indigo-600'>
            <AlertCircle size={24} />
          </div>
          <p className='text-sm text-slate-600 leading-relaxed'>
            Messages are automatically deleted every 24 hours to ensure our system remains fast and efficient.
          </p>
        </div>
      </div>
    </div>
  );
}
