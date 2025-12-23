"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import NumberCard from "./NumberCard";
import { COUNTRIES, MOCK_NUMBERS, HOME_MOCK_NUMBERS } from "../lib/constants";

export default function NumberList({ isHome = false }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCountry, setActiveCountry] = useState("All");

  const allNumbers = isHome ? HOME_MOCK_NUMBERS : MOCK_NUMBERS;

  const filteredNumbers = allNumbers.filter((num) => {
    const matchesSearch = num.number.includes(searchTerm) || num.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = activeCountry === "All" || num.country === activeCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <div className={`numbers-page ${!isHome ? "pt-12" : ""}`}>
      <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-${isHome ? 8 : 0} relative z-20`}>
        <div className='bg-white rounded-2xl shadow-xl border border-slate-100 p-6'>
          <div className='flex flex-col md:flex-row gap-6 items-center justify-between'>
            <div className='relative w-full md:w-96'>
              <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400' size={20} />
              <input
                type='text'
                value={searchTerm}
                placeholder='Search number or country...'
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-slate-700'
              />
            </div>

            <div className='flex flex-wrap items-center justify-center gap-2'>
              <button
                onClick={() => setActiveCountry("All")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeCountry === "All"
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                All Countries
              </button>
              {COUNTRIES.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setActiveCountry(c.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                    activeCountry === c.name
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <span>{c.flag}</span>
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-2xl font-bold text-slate-900'>Available Online Numbers</h2>
          <span className='text-sm font-medium text-slate-500'>Showing {filteredNumbers.length} numbers</span>
        </div>

        {filteredNumbers.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {filteredNumbers.map((phone) => (
              <NumberCard key={phone.id} phone={phone} />
            ))}
          </div>
        ) : (
          <div className='text-center py-24 bg-slate-50 rounded-3xl border border-dashed border-slate-200'>
            <div className='bg-slate-200/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Search size={32} className='text-slate-400' />
            </div>
            <h3 className='text-xl font-bold text-slate-900 mb-2'>No numbers found</h3>
            <p className='text-slate-500'>Try searching for a different country or number.</p>
          </div>
        )}
      </section>
    </div>
  );
}
