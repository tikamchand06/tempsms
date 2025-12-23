import { cn } from "../lib/utils";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const jsonLd = {
  "@type": "WebSite",
  name: "TempSMS",
  "@context": "https://schema.org",
  url: "https://tempsms.tcmhack.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://tempsms.tcmhack.in/numbers?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const metadata = {
  metadataBase: new URL("https://tempsms.tcmhack.in"),
  title: {
    default: "Receive SMS Online | Free Temporary Virtual Numbers for OTP",
    template: "%s | TempSMS", // This adds "| TempSMS" to all subpages
  },
  description:
    "Use our free virtual phone numbers to receive SMS online for OTP verification. Bypass phone verification on WhatsApp, Telegram, Google, and more. Fast, reliable, and secure.",
  keywords: [
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
  ],
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    android: "/favicon/android-chrome-192x192.png",
    other: [
      {
        rel: "android-chrome-512x512",
        url: "/favicon/android-chrome-512x512.png",
      },
    ],
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Receive SMS Online | Free Temporary Virtual Numbers for OTP",
    description:
      "Use our free virtual phone numbers to receive SMS online for OTP verification. Bypass phone verification on WhatsApp, Telegram, Google, and more. Fast, reliable, and secure.",
    url: "https://tempsms.tcmhack.in",
    siteName: "TempSMS",
    images: [
      {
        width: 1200,
        height: 630,
        alt: "TempSMS - Receive SMS Online",
        url: "https://tempsms.tcmhack.in/og-image.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={cn("text-base antialiased", inter.className)}>
        <div className='min-h-screen flex flex-col'>
          <Header />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </div>

        <Toaster position='top-center' />

        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>

      <GoogleAnalytics gaId={process.env.GA_ID} />
    </html>
  );
}
