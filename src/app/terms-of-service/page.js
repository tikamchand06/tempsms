export const metadata = {
  title: "Terms of Conditions",
  description:
    "Read our terms of service and usage rules. Understand your rights and responsibilities when using our free virtual phone numbers.",
  keywords: ["terms of service", "terms and conditions"],
};

export default function TermsOfService() {
  const jsonData = [
    {
      section: "Description of Service",
      content:
        "TempSMS provides users with access to temporary phone numbers to receive SMS messages for the purpose of account verification and OTP (One-Time Password) reception.",
    },
    {
      section: "Nature of Public Numbers",
      content:
        "Public Access: You acknowledge that messages received on our 'Public Numbers' are visible to all users of the website.\n\nRisk Assumption: You are solely responsible for any data or account security risks associated with receiving a code on a public number. We are not liable for unauthorized access to accounts verified using our service.",
    },
    {
      section: "Prohibited Activities",
      content:
        "You agree NOT to use our service for:\n\nIllegal Acts: Any activity that violates local, state, national, or international law.\n\nFinancial Services: Verifying high-security accounts such as banking, government IDs, or payment processors (PayPal, Stripe, etc.).\n\nAbuse/Spam: Registering accounts in bulk to send spam, or attempting to 'brute force' our API.\n\nHarassment: Using numbers to facilitate the stalking, harassment, or harming of individuals.",
    },
    {
      section: "Service Availability & Reliability",
      content:
        "'As-Is' Basis: The service is provided without warranties of any kind. We do not guarantee that numbers will always be online or that SMS messages will always be delivered.\n\nNumber Rotation: We reserve the right to remove, change, or rotate phone numbers at any time without prior notice.",
    },
    {
      section: "Intellectual Property",
      content:
        "All content on this website, including the UI design, logo, and database structure, is the property of TempSMS and is protected by copyright laws. You may not scrape our data or reproduce our service for commercial purposes.",
    },
    {
      section: "Limitation of Liability",
      content:
        "To the maximum extent permitted by law, TempSMS and its owners shall not be liable for any direct, indirect, incidental, or consequential damages resulting from:\n\nYour use of, or inability to use, the service.\n\nUnauthorized access to your third-party accounts.\n\nAny data loss or technical failure of our SMS delivery system.",
    },
    {
      section: "Account Termination",
      content:
        "We reserve the right to block your IP address or restrict your access to the website if we determine, at our sole discretion, that you have violated these terms or engaged in abusive behavior.",
    },
    {
      section: "Changes to Terms",
      content:
        "We may update these Terms of Conditions from time to time. Your continued use of the website after changes are posted constitutes your acceptance of the new terms.",
    },
    {
      section: "Governing Law",
      content:
        "These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
    },
  ];

  return (
    <div className='max-w-4xl mx-auto px-4 py-16 md:py-24'>
      <h1 className='text-4xl font-extrabold text-slate-900 mb-4'>Terms of Service</h1>
      <p className='text-slate-600 text-sm mb-6'>Effective Date: December 23, 2025</p>
      <div className='prose prose-slate lg:prose-lg max-w-none text-slate-600 leading-relaxed space-y-6'>
        <p className='text-lg'>
          By accessing or using TempSMS, you agree to be bound by these Terms of Conditions. If you do not agree with any part of these
          terms, you are prohibited from using this service.
        </p>

        {jsonData?.map(({ section, content }, index) => (
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
