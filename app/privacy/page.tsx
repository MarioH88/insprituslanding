import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Inspritus LLC.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#06b6d4] px-4 py-16">
      <div className="mx-auto max-w-3xl rounded-xl border-2 border-cyan-400 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
        <h1 className="mb-6 text-4xl font-extrabold text-cyan-300">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-300">Last updated: August 5, 2026</p>

        <div className="space-y-6 text-gray-100 leading-relaxed">
          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Overview</h2>
            <p>
              Inspritus LLC (&quot;Inspritus,&quot; &quot;we,&quot; &quot;us&quot;) respects your privacy. This policy
              explains how we collect, use, and protect information when you visit insprit.us or contact us.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Information We Collect</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Contact details you submit (name, email, organization, message)</li>
              <li>Basic usage data such as pages visited and browser type</li>
              <li>Security data such as reCAPTCHA verification tokens</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">How We Use Information</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Respond to inquiries and early access requests</li>
              <li>Improve our website and services</li>
              <li>Protect against spam, abuse, and security threats</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Third-Party Services</h2>
            <p>
              We use trusted providers to operate this site, including Vercel (hosting), EmailJS (contact form
              delivery), and Google reCAPTCHA (spam protection). These providers process data according to their
              own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Data Retention</h2>
            <p>
              We retain contact form submissions only as long as needed to respond to your inquiry and maintain
              business records, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information by contacting us
              at{" "}
              <a href="mailto:hello@insprit.us" className="text-cyan-300 underline hover:text-white">
                hello@insprit.us
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Contact</h2>
            <p>
              Questions about this policy? Email{" "}
              <a href="mailto:hello@insprit.us" className="text-cyan-300 underline hover:text-white">
                hello@insprit.us
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-cyan-300 underline hover:text-white">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
