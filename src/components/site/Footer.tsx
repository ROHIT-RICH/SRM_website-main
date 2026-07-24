import { Link } from "@tanstack/react-router";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa6";
import logo from "@/assets/new-logo.png";
const cols = [
  {
    title: "Products",
    links: [
      { label: "SRM HRMS", path: "/products/hrms" },
      { label: "SRM CRM", path: "/products/crm" },
      { label: "AutoDealer ERP", path: "/products/auto-dealer-erp" },
      { label: "Wholesale Commerce", path: "/products/wholesale-commerce" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom Software", path: "/services/custom-software" },
      { label: "Web Development", path: "/services/web-development" },
      { label: "Mobile Apps", path: "/services/mobile-app-development" },
      { label: "SaaS Development", path: "/services/saas-development" },
      { label: "Business Automation", path: "/services/business-automation" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", path: "/about" },
      { label: "Founder", path: "/founders" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms & Conditions", path: "/terms-and-conditions" },
      { label: "Security Policy", path: "/security-policy" },
      { label: "Cookie Policy", path: "/cookie-policy" },
      { label: "Refund Policy", path: "/refund-policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#04060f] pt-16 pb-10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <Link to="/" href="#top" className="flex items-center gap-3">
                <div
                  className="
      relative
      flex
      items-center
      justify-center
    "
                >
                  <img
                    src={logo}
                    alt="SRM Innovations Hub"
                    className="
        h-14
        w-auto
        object-contain
        drop-shadow-[0_0_20px_rgba(0,229,255,0.8)]
      "
                  />
                </div>

                <div className="leading-tight ">
                  <div className="text-sm font-semibold text-white">SRM Innovations Hub</div>

                  <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-400">
                    Smart Software · Real Results
                  </div>
                </div>
              </Link>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              SRM Innovations builds scalable software solutions including HRMS,
              CRM, ERP, SaaS platforms, mobile applications, and business automation
              systems for growing businesses worldwide.
            </p>

           <div className="mt-5 text-xs text-muted-foreground">
  {/* Email */}
  <div className="mb-5">
    <span className="font-semibold text-white">Email</span>
    <div className="mt-1">info@srminnovationshub.com</div>
  </div>

  {/* Addresses */}
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
    <div>
      <span className="font-semibold text-white">Head Office</span>
      <div className="mt-1 leading-6">
        C-1 Balram Nagar,
        <br />
        Gwalior, Madhya Pradesh
      </div>
    </div>

    <div>
      <span className="font-semibold text-white">Branch Office</span>
      <div className="mt-1 leading-6">
        Indore,
        <br />
        Madhya Pradesh
      </div>
    </div>
  </div>

  
</div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-semibold uppercase tracking-widest text-white">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.path}>
                    <Link
                      to={l.path}
                      className="text-sm text-muted-foreground transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} SRM Innovations Hub. All rights reserved.
          </div>

          {/* Social */}
  <div className="mt-6 flex flex-wrap items-center gap-3">
  {[
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/srm-innovations-hub",
      label: "LinkedIn",
      active: true,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      active: false,
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      active: false,
    },
    {
      icon: FaFacebookF,
      label: "Facebook",
      active: false,
    },
    {
      icon: FaXTwitter,
      label: "X",
      active: false,
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      active: false,
    },
  ].map(({ icon: Icon, href, label, active }) => (
    <div key={label} className="group relative">
      {active ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-muted-foreground
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-400
            hover:bg-cyan-500/10
            hover:text-cyan-400
            hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]
          "
        >
          <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
        </a>
      ) : (
        <button
          type="button"
          aria-label={`${label} Coming Soon`}
          className="
            flex
            h-11
            w-11
            cursor-not-allowed
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-muted-foreground/60
            opacity-70
            transition-all
            duration-300
            hover:border-amber-400
            hover:bg-amber-500/10
            hover:text-amber-300
          "
        >
          <Icon className="h-5 w-5" />
        </button>
      )}

      {!active && (
        <div
          className="
            pointer-events-none
            absolute
            -top-11
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            rounded-lg
            border
            border-white/10
            bg-[#0f172a]
            px-3
            py-1.5
            text-xs
            text-white
            opacity-0
            shadow-lg
            transition-all
            duration-200
            group-hover:opacity-100
          "
        >
          Coming Soon
        </div>
      )}
    </div>
  ))}
</div>

          <div className="flex flex-wrap gap-5">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>

            <Link
              to="/security-policy"
              className="hover:text-white transition-colors"
            >
              Security
            </Link>

            <Link
              to="/cookie-policy"
              className="hover:text-white transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
