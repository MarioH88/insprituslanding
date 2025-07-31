"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";

export default function Page() {
  // Carousel testimonials data
  const testimonials = [
    {
      name: "Jane Doe",
      text: "Inspritus made compliance effortless for our team. The workflow automation is a game changer!",
      company: "Acme Corp"
    },
    {
      name: "John Smith",
      text: "We saved hours every week and improved our audit readiness. Highly recommended!",
      company: "Beta Inc"
    },
    {
      name: "Priya Patel",
      text: "The interface is beautiful and the support is fantastic. Inspritus is the future of GRC.",
      company: "Gamma"
    },
    {
      name: "Carlos Mendez",
      text: "We slashed our audit prep time by 80%. Inspritus is a must-have for fast-scaling tech companies.",
      company: "SecureNova"
    },
    {
      name: "Fatima Al-Farsi",
      text: "NIST compliance used to be overwhelming. Now it’s automated, trackable, and stress-free.",
      company: "Qatari Innovation Fund"
    },
    {
      name: "Liam O’Connor",
      text: "Inspritus gave our public sector team the tools to centralize controls and stay audit-ready.",
      company: "Civitas Systems"
    },
    {
      name: "Sofia Rossi",
      text: "The AI policy builder alone is worth it. We've never been this aligned across privacy and governance.",
      company: "Veritas HealthTech"
    }
  ];
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  function nextTestimonial() {
    setTestimonialIdx(idx => (idx + 1) % testimonials.length);
  }
  function prevTestimonial() {
    setTestimonialIdx(idx => (idx - 1 + testimonials.length) % testimonials.length);
  }
  // Auto-play effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setTestimonialIdx((testimonialIdx + 1) % testimonials.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [testimonialIdx, testimonials.length]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 80,
      });
    }
  }, []);
  return (
    <main className="bg-gradient-to-br from-[#0f172a] to-[#06b6d4] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#06b6d4] to-[#0ea5e9] px-4 py-24 animate-fade-in" data-aos="fade-up">
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-to-tr from-cyan-200 to-blue-200 rounded-full blur-2xl opacity-40 animate-pulse"></div>
        <div className="max-w-3xl text-center flex flex-col items-center relative z-10">
          <div className="bg-white/80 backdrop-blur-lg rounded-full shadow-2xl p-2 mb-8 animate-float flex items-center justify-center border-4 border-cyan-400" style={{width: '120px', height: '120px', boxShadow: '0 0 32px #06b6d4, 0 0 8px #06b6d4'}}>
          <img src="/images/Inspritus logo.png" alt="Inspritus logo" className="w-full h-full object-cover rounded-full" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight animate-slide-up">Inspritus</h1>
          <p className="text-2xl md:text-3xl text-white mb-10 font-medium animate-fade-in drop-shadow">AI-powered compliance innovation for Governance, Risk, and Compliance (GRC)</p>
          <a href="#cta" className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-bold rounded-xl shadow-2xl border-2 border-cyan-400 hover:scale-105 transition-transform duration-200 animate-bounce glow-effect drop-shadow-lg">Join Early Access</a>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-400 to-transparent"></div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none"></div>
      </section>
      {/* Tailored Workflows Section */}
      <section className="relative py-20 bg-transparent" data-aos="fade-up">
        {/* Blurred SVG background shapes */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/4" aria-hidden="true">
          <img src="/images/blurred-shape-gray.svg" alt="Blurred shape" className="max-w-none" width={760} height={668} />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50" aria-hidden="true">
          <img src="/images/blurred-shape.svg" alt="Blurred shape" className="max-w-none" width={760} height={668} />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-xl font-bold">Tailored Compliance Workflows</span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-gradient-to-r from-gray-200 via-indigo-200 to-gray-200 bg-clip-text text-transparent font-nacelle text-4xl md:text-5xl font-semibold pb-4">Map your compliance journey with precision</h2>
            <p className="text-lg text-indigo-200/65">A smart, intuitive interface that empowers teams to build audit-ready compliance systems in minutes. Automate policy mapping, evidence collection, and risk reporting — all integrated with your existing tools and frameworks like SOC 2, ISO 27001, and NIST.</p>
          </div>
          <div className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x,0px)] before:translate-y-[var(--mouse-y,0px)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x,0px)] after:translate-y-[var(--mouse-y,0px)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100" href="#0" data-aos="zoom-in" data-aos-delay="0">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 transition-all duration-300 group-hover/card:scale-105 group-hover/card:shadow-indigo-500/40">
                <img src="/images/workflow-01.png" alt="Smart Compliance Toolkit" className="inline-flex transition-all duration-300 group-hover/card:scale-110 group-hover/card:shadow-[0_0_32px_#6366f1,0_0_64px_#6366f1]" width={350} height={288} />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal transition-all duration-300 group-hover/card:bg-indigo-500/40 group-hover/card:text-white">Smart Compliance Toolkit</span>
                  </div>
                  <p className="text-indigo-200/65 transition-all duration-300 group-hover/card:text-indigo-100">Automate the entire GRC process with AI-powered tools built to streamline risk registers, policy generation, and audit documentation — all in one place.</p>
                </div>
              </div>
            </a>
            {/* Card 2 */}
            <a className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x,0px)] before:translate-y-[var(--mouse-y,0px)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x,0px)] after:translate-y-[var(--mouse-y,0px)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100" href="#0" data-aos="zoom-in" data-aos-delay="100">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 transition-all duration-300 group-hover/card:scale-105 group-hover/card:shadow-indigo-500/40">
                <img src="/images/workflow-02.png" alt="Scalable Integrations" className="inline-flex transition-all duration-300 group-hover/card:scale-110 group-hover/card:shadow-[0_0_32px_#6366f1,0_0_64px_#6366f1]" width={350} height={288} />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal transition-all duration-300 group-hover/card:bg-indigo-500/40 group-hover/card:text-white">Scalable Integrations</span>
                  </div>
                  <p className="text-indigo-200/65 transition-all duration-300 group-hover/card:text-indigo-100">Seamlessly integrate with your existing stack — from cloud infrastructure to documentation platforms — to support scalable, real-time compliance operations.</p>
                </div>
              </div>
            </a>
            {/* Card 3 */}
            <a className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x,0px)] before:translate-y-[var(--mouse-y,0px)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x,0px)] after:translate-y-[var(--mouse-y,0px)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100" href="#0" data-aos="zoom-in" data-aos-delay="200">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 transition-all duration-300 group-hover/card:scale-105 group-hover/card:shadow-indigo-500/40">
                <img src="/images/workflow-03.png" alt="Customizable Workflow Engines" className="inline-flex transition-all duration-300 group-hover/card:scale-110 group-hover/card:shadow-[0_0_32px_#6366f1,0_0_64px_#6366f1]" width={350} height={288} />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal transition-all duration-300 group-hover/card:bg-indigo-500/40 group-hover/card:text-white">Customizable Workflow Engines</span>
                  </div>
                  <p className="text-indigo-200/65 transition-all duration-300 group-hover/card:text-indigo-100">Adapt workflows to your team’s unique compliance needs. Whether you're preparing for a federal grant audit or aligning with ISO standards, Inspritus molds to your framework.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* Trusted by Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 flex flex-col items-center" data-aos="fade-up">
        <span className="uppercase text-xs text-cyan-300 mb-4 tracking-widest">Trusted by</span>
        <div className="relative w-full flex justify-center items-center">
          {/* Modern SVG illustration for trusted brands */}
          <img src="/images/features.png" alt="Trusted Brands Network" className="w-full max-w-2xl rounded-2xl shadow-2xl border-2 border-cyan-400" />
        </div>
      </section>
      {/* How It Works Section - Black & Centered */}
      <section className="max-w-4xl mx-auto px-4 py-16 rounded-2xl shadow-2xl bg-black border border-cyan-700 flex flex-col items-center" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold mb-8 text-cyan-300 drop-shadow-2xl text-center" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>How Inspritus Works</h2>
        <div className="grid md:grid-cols-3 gap-8 w-full justify-items-center font-inter">
          <div className="flex flex-col items-center bg-black rounded-xl shadow-lg p-8 border border-cyan-700 animate-float-box transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40" data-aos="zoom-in" data-aos-delay="0">
            <div className="bg-gradient-to-tr from-cyan-400 to-blue-400 rounded-full p-6 mb-6 animate-pulse shadow-xl border-2 border-cyan-400 flex items-center justify-center">
              <svg width="56" height="56" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" /><path d="M12 6v6l4 2" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="font-bold text-cyan-300 mb-3 text-2xl text-center" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>Connect</span>
            <span className="text-gray-200 text-lg text-center font-medium leading-relaxed font-nacelle">
              Securely integrate Inspritus with your existing cloud infrastructure, documentation tools, and project management systems. Instantly sync data sources for real-time compliance visibility.<br />
              <span className="text-xs text-cyan-400 mt-2 block">SEO: compliance integration, GRC system integration, secure data sync</span>
            </span>
          </div>
          <div className="flex flex-col items-center bg-black rounded-xl shadow-lg p-8 border border-cyan-700 animate-float-box transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40" data-aos="zoom-in" data-aos-delay="100">
            <div className="bg-gradient-to-tr from-cyan-400 to-blue-400 rounded-full p-6 mb-6 animate-pulse shadow-xl border-2 border-cyan-400 flex items-center justify-center">
              <svg width="56" height="56" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" fill="#fff" /><path d="M8 12h8" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </div>
            <span className="font-bold text-cyan-300 mb-3 text-2xl text-center" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>Automate</span>
            <span className="text-gray-200 text-lg text-center font-medium leading-relaxed font-nacelle">
              Let our AI engine manage repetitive GRC tasks — from risk register updates to control evidence mapping — so your team can focus on what matters most.<br />
              <span className="text-xs text-cyan-400 mt-2 block">SEO: AI compliance automation, automated risk register, evidence collection tool</span>
            </span>
          </div>
          <div className="flex flex-col items-center bg-black rounded-xl shadow-lg p-8 border border-cyan-700 animate-float-box transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40" data-aos="zoom-in" data-aos-delay="200">
            <div className="bg-gradient-to-tr from-cyan-400 to-blue-400 rounded-full p-6 mb-6 animate-pulse shadow-xl border-2 border-cyan-400 flex items-center justify-center">
              <svg width="56" height="56" fill="none" viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="#fff" /><path d="M12 8v4" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </div>
            <span className="font-bold text-cyan-300 mb-3 text-2xl text-center" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>Report</span>
            <span className="text-gray-200 text-lg text-center font-medium leading-relaxed font-nacelle">
              Generate audit-ready reports, dashboards, and compliance insights in just a few clicks. Stay aligned with SOC 2, ISO 27001, NIST, and grant audit requirements.<br />
              <span className="text-xs text-cyan-400 mt-2 block">SEO: audit-ready reports, GRC reporting, SOC 2 dashboard, compliance analytics</span>
            </span>
          </div>
        </div>
      </section>
      {/* Problem Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 relative" data-aos="fade-up">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-lg font-nacelle">Why Traditional Compliance Fails</h2>
          <p className="text-base md:text-lg text-white font-medium leading-relaxed mb-6 drop-shadow font-inter">Manual compliance drains time, money, and momentum. Outdated tools and scattered workflows leave startups, institutions, and contractors exposed — slowing growth and increasing risk.</p>
          <ul className="grid gap-4 md:grid-cols-3">
            <li className="relative rounded-lg shadow-2xl p-6 border-2 border-cyan-400 overflow-hidden animate-float-box transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/40" data-aos="flip-left" data-aos-delay="0">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-60 blur-sm animate-gradient-move"></div>
              <span className="block text-2xl font-extrabold text-white mb-2 relative z-10 drop-shadow-lg font-nacelle">⏱️ Time</span>
              <span className="text-white relative z-10 drop-shadow font-medium leading-relaxed font-inter">Weeks lost on manual evidence gathering and policy tracking.</span>
            </li>
            <li className="relative rounded-lg shadow-2xl p-6 border-2 border-blue-400 overflow-hidden animate-float-box transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/40" data-aos="flip-left" data-aos-delay="100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-60 blur-sm animate-gradient-move"></div>
              <span className="block text-2xl font-extrabold text-white mb-2 relative z-10 drop-shadow-lg font-nacelle">💸 Cost</span>
              <span className="text-white relative z-10 drop-shadow font-medium leading-relaxed font-inter">Audits and consultants eat up already tight budgets.</span>
            </li>
            <li className="relative rounded-lg shadow-2xl p-6 border-2 border-indigo-400 overflow-hidden animate-float-box transition-transform duration-300 hover:scale-105 hover:shadow-indigo-500/40" data-aos="flip-left" data-aos-delay="200">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-pink-400 opacity-60 blur-sm animate-gradient-move"></div>
              <span className="block text-2xl font-extrabold text-white mb-2 relative z-10 drop-shadow-lg font-nacelle">🛠️ Inefficiency</span>
              <span className="text-white relative z-10 drop-shadow font-medium leading-relaxed font-inter">Disconnected tools and spreadsheets slow compliance teams down.</span>
            </li>
          </ul>
        </div>
      </section>


      {/* Solution Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 relative">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-lg" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>AI-Powered Compliance, Reimagined</h2>
          <p className="text-base md:text-lg text-white font-medium leading-relaxed mb-6 drop-shadow" style={{fontFamily: 'Inter, Arial, sans-serif'}}>Inspritus leverages AI to automate and streamline GRC tasks. Our platform delivers:</p>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="relative rounded-lg shadow-2xl p-6 border-2 border-cyan-400 overflow-hidden animate-float-box transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-400 hover:to-cyan-400 group" data-aos="fade-right" data-aos-delay="0">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-60 blur-sm animate-gradient-move group-hover:opacity-80 group-hover:blur-md transition-all duration-300"></div>
              <span className="font-extrabold text-white relative z-10 drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-1" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>Risk Register Automation</span>
              <p className="text-white relative z-10 drop-shadow font-medium leading-relaxed transition-colors duration-300 group-hover:text-cyan-100" style={{fontFamily: 'Inter, Arial, sans-serif'}}>Instantly generate and update risk registers for SOC 2, ISO 27001, and NIST frameworks.</p>
            </li>
            <li className="relative rounded-lg shadow-2xl p-6 border-2 border-blue-400 overflow-hidden animate-float-box transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-400 group" data-aos="fade-left" data-aos-delay="100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-60 blur-sm animate-gradient-move group-hover:opacity-80 group-hover:blur-md transition-all duration-300"></div>
              <span className="font-extrabold text-white relative z-10 drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-1" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>Policy Generation</span>
              <p className="text-white relative z-10 drop-shadow font-medium leading-relaxed transition-colors duration-300 group-hover:text-blue-100" style={{fontFamily: 'Inter, Arial, sans-serif'}}>AI-driven policy templates tailored to your organization’s needs.</p>
            </li>
            <li className="relative rounded-lg shadow-2xl p-6 border-2 border-cyan-400 overflow-hidden animate-float-box transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-400 hover:to-cyan-400 group" data-aos="fade-right" data-aos-delay="200">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-60 blur-sm animate-gradient-move group-hover:opacity-80 group-hover:blur-md transition-all duration-300"></div>
              <span className="font-extrabold text-white relative z-10 drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-1" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>Privacy Mapping</span>
              <p className="text-white relative z-10 drop-shadow font-medium leading-relaxed transition-colors duration-300 group-hover:text-cyan-100" style={{fontFamily: 'Inter, Arial, sans-serif'}}>Automated mapping for privacy controls and regulatory requirements.</p>
            </li>
            <li className="relative rounded-lg shadow-2xl p-6 border-2 border-cyan-400 overflow-hidden animate-float-box transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-400 hover:to-cyan-400 group" data-aos="fade-left" data-aos-delay="300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-60 blur-sm animate-gradient-move group-hover:opacity-80 group-hover:blur-md transition-all duration-300"></div>
              <span className="font-extrabold text-white relative z-10 drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-1" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>Audit-Ready AI Assistant</span>
              <p className="text-white relative z-10 drop-shadow font-medium leading-relaxed transition-colors duration-300 group-hover:text-cyan-100" style={{fontFamily: 'Inter, Arial, sans-serif'}}>Prepare for audits with real-time evidence collection and documentation.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 bg-gradient-to-br from-[#0f172a] to-[#06b6d4] rounded-2xl shadow-2xl" data-aos="fade-up">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-cyan-300 drop-shadow-2xl text-center" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>Who We Serve</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-xl shadow-xl p-6 flex flex-col items-center animate-float-box transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40" data-aos="fade-up" data-aos-delay="0">
            <span className="text-2xl md:text-3xl font-extrabold text-cyan-300 mb-2 drop-shadow-lg font-nacelle">Startups</span>
            <span className="text-gray-100 text-xl md:text-2xl text-center font-medium leading-relaxed font-inter">Fast-track SOC 2 and ISO 27001 readiness with AI-driven compliance automation.</span>
          </div>
          <div className="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-xl shadow-xl p-6 flex flex-col items-center animate-float-box transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40" data-aos="fade-up" data-aos-delay="100">
            <span className="text-2xl md:text-3xl font-extrabold text-purple-300 mb-2 drop-shadow-lg font-nacelle">Grant Recipients</span>
            <span className="text-gray-100 text-xl md:text-2xl text-center font-medium leading-relaxed font-inter">Simplify NIST alignment and streamline compliance for federal funding programs.</span>
          </div>
          <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-xl shadow-xl p-6 flex flex-col items-center animate-float-box transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40" data-aos="fade-up" data-aos-delay="200">
            <span className="text-2xl md:text-3xl font-extrabold text-pink-300 mb-2 drop-shadow-lg font-nacelle">Public Sector</span>
            <span className="text-gray-100 text-xl md:text-2xl text-center font-medium leading-relaxed font-inter">Automate risk registers and audit prep for government and education teams.</span>
          </div>
        </div>
      </section>

      {/* What Our Users Say - Carousel Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 rounded-2xl shadow-2xl bg-black border border-cyan-700 flex flex-col items-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-cyan-300 drop-shadow-2xl text-center">What Our Users Say</h2>
        <div className="flex flex-col items-center bg-black rounded-xl shadow-lg p-8 border border-cyan-700 animate-float-box w-full max-w-xl transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/40">
          <p className="text-xl md:text-2xl text-gray-100 text-center mb-6 font-medium leading-relaxed">{testimonials[testimonialIdx].text}</p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-bold text-cyan-300">{testimonials[testimonialIdx].name}</span>
            <span className="text-gray-400">&mdash; {testimonials[testimonialIdx].company}</span>
          </div>
          <div className="flex gap-4 mt-2">
            <button onClick={prevTestimonial} className="px-4 py-2 rounded-full bg-cyan-700 text-white font-bold hover:bg-cyan-500 transition">&#8592; Prev</button>
            <button onClick={nextTestimonial} className="px-4 py-2 rounded-full bg-cyan-700 text-white font-bold hover:bg-cyan-500 transition">Next &#8594;</button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="max-w-3xl mx-auto px-4 py-16 bg-gradient-to-br from-[#0f172a] to-[#06b6d4] rounded-2xl shadow-2xl" data-aos="fade-up">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-cyan-300 drop-shadow-2xl text-center" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>Contact Us</h2>
        <p className="text-xl md:text-2xl mb-8 font-medium leading-relaxed text-gray-100 text-center" style={{fontFamily: 'Inter, Arial, sans-serif'}}>Have a question or want to learn more about AI-powered compliance? Fill out the form below — our team will get back to you shortly.</p>
        <p className="text-base text-cyan-300 mb-4 text-center">Or email us directly at <a href="mailto:hello@insprit.us" className="underline hover:text-blue-400">hello@insprit.us</a></p>
        <form className="flex flex-col gap-6 bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl border-2 border-cyan-400">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-cyan-200 font-semibold">Name <span className="text-red-400">(Required)</span></label>
            <input type="text" id="name" name="name" required className="px-4 py-3 rounded-lg bg-white/80 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-cyan-200 font-semibold">Email <span className="text-red-400">(Required — use for reply & updates)</span></label>
            <input type="email" id="email" name="email" required className="px-4 py-3 rounded-lg bg-white/80 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-cyan-200 font-semibold">Message <span className="text-gray-400">(What would you like to know?)</span></label>
            <textarea id="message" name="message" rows={5} required className="px-4 py-3 rounded-lg bg-white/80 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
          </div>
          <button type="submit" className="mt-4 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-extrabold rounded-xl shadow-2xl border-2 border-cyan-400 hover:scale-105 hover:drop-shadow-xl transition-transform duration-200 animate-bounce glow-effect" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>Send Message</button>
        </form>
      </section>
    </main>
  );
}
