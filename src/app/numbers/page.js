import NumberList from "../../components/NumberList";

export const metadata = {
  title: "Temporary Phone Numbers List | Virtual SMS Numbers by Country",
  description:
    "Browse our active list of temporary phone numbers from USA, UK, India, and more. Select a country to start receiving SMS and OTP codes instantly for any website or app.",
  keywords: [
    "virtual number list",
    "sms numbers by country",
    "disposable phone numbers",
    "receive international sms",
    "temp numbers usa",
    "temp numbers uk",
    "temp numbers india",
    "temporary phone numbers",
    "free virtual numbers",
    "otp verification",
    "sms verification",
    "temp phone number for whatsapp",
    "temp phone number for telegram",
    "temp phone number for google",
    "online sms receiver",
    "burner numbers",
    "sms bypass",
    "virtual phone number service",
  ],
};

export default function NumberPage({ isHome = false }) {
  return <NumberList isHome={isHome} />;
}
