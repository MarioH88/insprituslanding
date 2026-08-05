import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Inspritus LLC.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#06b6d4] px-4 py-16">
      <div className="mx-auto max-w-3xl rounded-xl border-2 border-cyan-400 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
        <h1 className="mb-6 text-4xl font-extrabold text-cyan-300">Terms of Service</h1>
        <p className="mb-4 text-sm text-gray-300">Last updated: August 5, 2026</p>

        <div className="space-y-6 text-gray-100 leading-relaxed">
          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Agreement</h2>
            <p>
              By accessing insprit.us, you agree to these Terms of Service. If you do not agree, please do not
              use this website.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Early Access</h2>
            <p>
              Inspritus is currently offered on an early access basis. Features, pricing, and availability may
              change. Submitting a contact or early access request does not guarantee acceptance into the program.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>Use the site for unlawful purposes</li>
              <li>Attempt to disrupt or compromise site security</li>
              <li>Submit false, misleading, or abusive information through our forms</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Intellectual Property</h2>
            <p>
              All content on this site — including text, branding, graphics, and software — is owned by Inspritus
              LLC or its licensors and is protected by applicable intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Disclaimer</h2>
            <p>
              This website and its content are provided &quot;as is&quot; for informational purposes. Inspritus does
              not provide legal, audit, or compliance advice through this site. You are responsible for ensuring
              your organization meets applicable regulatory requirements.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Inspritus LLC shall not be liable for any indirect,
              incidental, or consequential damages arising from your use of this website.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Contact</h2>
            <p>
              Questions about these terms? Email{" "}
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
