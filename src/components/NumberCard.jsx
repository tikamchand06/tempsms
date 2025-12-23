import Link from "next/link";
import { toast } from "sonner";
import { simpleIdFromNumber } from "../lib/common";
import { MessageSquare, ChevronRight, Copy } from "lucide-react";

export default function NumberCard({ phone }) {
  const copyToClipboard = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(phone.number);
    toast.success("Number copied to clipboard!");
  };

  return (
    <Link
      href={`/numbers/${simpleIdFromNumber(phone?.number)}`}
      className='group relative bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 transform hover:-translate-y-1 block'
    >
      <div className='flex items-start justify-between mb-4'>
        <div className='flex items-center space-x-3'>
          <span className='text-3xl' role='img' aria-label={phone.country}>
            {phone.flag}
          </span>
          <div>
            <h3 className='font-bold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors'>{phone.country}</h3>
            <p className='text-slate-400 text-xs font-medium uppercase tracking-wide'>{phone.provider}</p>
          </div>
        </div>
        <div className='flex items-center space-x-1'>
          <span
            className={`w-2 h-2 rounded-full ${phone.status === "online" ? "bg-emerald-500 animate-pulse" : "bg-amber-400"}`}
          ></span>
          <span className='text-[10px] font-bold text-slate-400 uppercase tracking-tighter'>{phone.status}</span>
        </div>
      </div>

      <div className='flex items-center justify-between mt-2'>
        <p className='text-xl font-mono font-semibold text-slate-800 tracking-tight'>{phone.number}</p>
        <button
          onClick={copyToClipboard}
          className='p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors'
          title='Copy Number'
        >
          <Copy size={16} />
        </button>
      </div>

      <div className='mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-indigo-600 font-semibold text-sm'>
        <span className='flex items-center gap-1.5'>
          <MessageSquare size={16} />
          View Messages
        </span>
        <ChevronRight size={18} className='transform group-hover:translate-x-1 transition-transform' />
      </div>
    </Link>
  );
}
