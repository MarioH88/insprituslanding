import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-auto w-full border-t border-white/10 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Inspritus</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              AI-powered compliance for startups, grant recipients, and public sector teams.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 transition hover:text-cyan-300">
                  About Us
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-gray-400 transition hover:text-cyan-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="mailto:hello@insprit.us" className="text-gray-400 transition hover:text-cyan-300">
                  hello@insprit.us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#contact" className="text-gray-400 transition hover:text-cyan-300">
                  Early Access
                </a>
              </li>
              <li>
                <span className="text-gray-500">SOC 2</span>
              </li>
              <li>
                <span className="text-gray-500">ISO 27001</span>
              </li>
              <li>
                <span className="text-gray-500">NIST 800-53</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-400 transition hover:text-cyan-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 transition hover:text-cyan-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">Inspritus LLC</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
