export const metadata = {
  title: "About Us - Open PRO",
  description: "Learn more about Inspritus and our mission.",
};

import Link from "next/link";

export default function AboutAuth() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#06b6d4] px-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl border-2 border-cyan-400">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-cyan-300 mb-2 drop-shadow-2xl" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>About Us</h1>
          <p className="text-gray-100">Inspritus is dedicated to transforming GRC with AI-powered innovation. Our mission is to empower organizations to achieve security and compliance faster, with less manual effort and more confidence.</p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-cyan-300 text-lg">Our Values</span>
          <ul className="list-disc list-inside text-gray-100 text-base">
            <li>Innovation in AI and automation</li>
            <li>Transparency and trust</li>
            <li>Customer-centric support</li>
            <li>Security-first mindset</li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <Link href="/signin" className="text-cyan-300 hover:underline">Back to Sign In</Link>
        </div>
      </div>
    </section>
  );
}
