import React from "react";

export const metadata = {
  title: "About Us - Inspritus",
  description: "Learn more about Inspritus, our mission, and our values.",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#06b6d4] px-4">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl border-2 border-cyan-400">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-cyan-300 mb-2 drop-shadow-2xl" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}} data-aos="fade-up" data-aos-delay="100">About Us</h1>
          <p className="text-gray-100" data-aos="fade-up" data-aos-delay="200">Inspritus is redefining Governance, Risk, and Compliance (GRC) through cutting-edge AI automation. Our intelligent platform helps startups, federal grant recipients, and public sector teams simplify compliance processes, automate evidence collection, and generate audit-ready reports aligned with frameworks like SOC 2, ISO 27001, and NIST 800-53.</p>
        </div>
        <div className="text-gray-200 text-lg leading-relaxed space-y-6">
          <p data-aos="fade-up" data-aos-delay="300">We exist to help organizations achieve security and regulatory compliance faster—with less overhead and more confidence. Whether you're preparing for an audit or scaling your cybersecurity program, Inspritus accelerates your path to trust and verification.</p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-cyan-300 mb-2" data-aos="fade-up" data-aos-delay="400">🎯 Our Mission</h2>
            <p data-aos="fade-up" data-aos-delay="500">To empower mission-driven teams with AI-powered tools that make compliance smarter, faster, and radically more efficient—without sacrificing accuracy or control.</p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-cyan-300 mb-2" data-aos="fade-up" data-aos-delay="600">💡 Our Core Values</h2>
            <ul className="list-disc list-inside space-y-2">
              <li data-aos="fade-up" data-aos-delay="700"><span className="font-semibold text-white">AI-Driven Innovation</span> – We lead with automation to modernize compliance at scale.</li>
              <li data-aos="fade-up" data-aos-delay="800"><span className="font-semibold text-white">Security & Trust</span> – Every feature is built with a security-first mindset.</li>
              <li data-aos="fade-up" data-aos-delay="900"><span className="font-semibold text-white">Transparency & Integrity</span> – We build trust through clear communication and ethical design.</li>
              <li data-aos="fade-up" data-aos-delay="1000"><span className="font-semibold text-white">Customer-Centered Support</span> – We treat every client as a partner in building secure, compliant systems.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
