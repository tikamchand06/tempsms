export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how TempSMS handles your data. We are committed to transparency regarding our temporary SMS and OTP verification services.",
  keywords: ["privacy policy"],
  robots: ["index", "follow"],
};

export default function PrivacyPolicy() {
  const jsonData = [
    {
      section: "Information We Collect",
      content:
        "Temporary Phone Numbers: We provide public and private numbers for SMS reception.\n\nIncoming Messages: We collect and display the content of SMS messages sent to our numbers (OTPs, verification codes).\n\nUsage Data: We may collect technical data such as your IP address, browser type, and time of access for security and analytics.",
    },
    {
      section: "Public vs. Private Data",
      content:
        "Public Numbers: If you use our Public Numbers, please be aware that all incoming SMS messages (including the OTP and the sender) are visible to any visitor on our website.\n\nDo Not Use public numbers for sensitive personal accounts like banking or primary email addresses.",
    },
    {
      section: "Data Retention",
      content:
        "SMS Messages: Public messages are automatically deleted after [e.g., 24-48 hours].\n\nLogs: Server logs are kept for [e.g., 30 days] solely for the purpose of preventing abuse and DDoS attacks.",
    },
    {
      section: "How We Use Your Data",
      content:
        "We use the information collected to:\n\nProvide and maintain the verification service.\n\nMonitor for fraudulent or illegal activity.\n\nImprove our website performance and user experience.",
    },
    {
      section: "Data Sharing & Third Parties",
      content:
        "No Selling of Data: We never sell your IP address or any personal identification to third-party advertisers.\n\nLegal Compliance: We may disclose information if required by law or to protect the safety of our users and the public.",
    },
    {
      section: "Cookies & Tracking",
      content:
        'We use cookies to:\n\nRemember your preferences (like "Dark Mode" or "Selected Country").\n\nAnalyze traffic via [Google Analytics/Simple Analytics]. You can opt-out of cookies via your browser settings.',
    },
    {
      section: "Security",
      content:
        "We implement industry-standard security measures to protect our infrastructure. However, because our public numbers are accessible by everyone, we cannot guarantee the security of any information sent to those specific numbers.",
    },
    {
      section: "Contact Us",
      content:
        "If you have questions about this policy or want to report a number for abuse, please contact us at: Email: tcmhack@gmail.com",
    },
  ];

  return (
    <div className='max-w-4xl mx-auto px-4 py-16 md:py-24'>
      <h1 className='text-4xl font-extrabold text-slate-900 mb-4'>Privacy Policy</h1>
      <p className='text-slate-600 text-sm mb-6'>Last Updated: December 23, 2025</p>
      <div className='prose prose-slate lg:prose-lg max-w-none text-slate-600 leading-relaxed space-y-6'>
        <p className='text-lg'>
          At TempSMS, we provide temporary SMS reception and OTP verification services. Your privacy is our top priority. This policy
          outlines how we handle data and what information is visible to the public.
        </p>

        {jsonData.map(({ section, content }, index) => (
          <div key={index}>
            <h2 className='text-2xl font-bold text-slate-900 mt-8 mb-2'>
              {index + 1}. {section}
            </h2>
            <p>
              {content?.split("\n\n")?.map((para, idx) => (
                <div key={idx} className='mb-1'>
                  <span>{para}</span>
                </div>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
