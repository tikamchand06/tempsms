import Link from "next/link";
import { use } from "react";
import { ChevronLeft } from "lucide-react";
import { MOCK_NUMBERS } from "../../../lib/constants";
import { simpleIdFromNumber } from "../../../lib/common";
import NumberDetail from "../../../components/NumberDetail";

// This function generates the metadata dynamically
export async function generateMetadata({ params }) {
  const num = params?.num;
  const phone = MOCK_NUMBERS.find((n) => simpleIdFromNumber(n?.number) === num) || MOCK_NUMBERS[0];

  return {
    title: `Receive SMS on ${phone?.number} | Virtual Number for OTP`,
    description: `View live SMS messages for ${phone?.number}. Use this temporary number to get your verification code instantly.`,
    alternates: {
      canonical: `https://tempsms.tcmhack.in/numbers/${simpleIdFromNumber(phone?.number)}`,
    },
  };
}

export default function NumberInfo({ params }) {
  const { num } = use(params);

  const phone = MOCK_NUMBERS.find((n) => simpleIdFromNumber(n?.number) === num) || MOCK_NUMBERS[0];

  // if (!phone) return null;

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12'>
      <div className='flex items-center space-x-2 text-sm text-slate-500 mb-8'>
        <Link href='/numbers' className='hover:text-indigo-600 transition-colors flex items-center gap-1'>
          <ChevronLeft size={16} />
          Back to Numbers
        </Link>
        <span>/</span>
        <span className='font-medium text-slate-900'>{phone.number}</span>
      </div>

      <NumberDetail phone={phone} />
    </div>
  );
}
