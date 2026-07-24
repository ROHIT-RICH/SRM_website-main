import { Link } from "@tanstack/react-router";

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";

import {
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import { motion } from "framer-motion";

import logo from "@/assets/new-logo.png";

const highlights = [
  "Enterprise Software",
  "AI Solutions",
  "Cloud Native",
  "Business Automation",
  "Mobile Apps",
  "SaaS Platforms",
];

const technologies = [
  "React",
  "Next.js",
  "Flutter",
  ".NET",
  "ASP.NET",
  "Node.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Azure",
];

const socials = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/srm-innovations-hub",
  },

  {
    icon: FaGithub,
    href: "#",
  },

  {
    icon: FaInstagram,
    href: "#",
  },

  {
    icon: FaFacebookF,
    href: "#",
  },

  {
    icon: FaXTwitter,
    href: "#",
  },
];

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
      { label: "Mobile Applications", path: "/services/mobile-app-development" },
      { label: "SaaS Development", path: "/services/saas-development" },
      { label: "AI Solutions", path: "/services/ai-solutions" },
      { label: "Business Automation", path: "/services/business-automation" },
    ],
  },

  {
    title: "Technologies",
    links: [
      { label: "React & Next.js", path: "/technology" },
      { label: "Flutter", path: "/technology" },
      { label: ".NET", path: "/technology" },
      { label: "Cloud & DevOps", path: "/technology" },
      { label: "AI Integration", path: "/technology" },
    ],
  },

  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Founder", path: "/founders" },
      { label: "Careers", path: "/careers" },
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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030712]">
      {/* Background Effects */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute -bottom-48 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

      </div>

      {/* CTA */}

      <section className="relative border-b border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-white/[0.05] via-white/[0.03] to-transparent p-10 lg:p-16"
          >
                        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-[120px]" />

            <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="relative max-w-3xl">

              <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">

                Build With SRM

              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-6xl">

                Engineering

                <span className="block text-cyan-400">

                  Business Software

                </span>

                That Scales.

              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">

                We design and develop enterprise software,
                AI-powered automation,
                scalable SaaS platforms,
                websites,
                eCommerce solutions,
                ERP,
                CRM,
                HRMS,
                and mobile applications that help businesses
                innovate faster and grow smarter.

              </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300"
                >
                  Start Your Project

                  <FiArrowRight className="transition group-hover:translate-x-1" />

                </Link>

                <Link
                  to="/services"
                  className="rounded-xl border border-white/10 px-7 py-4 text-white transition-all duration-300 hover:border-cyan-400 hover:bg-white/[0.04]"
                >
                  Explore Services
                </Link>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

            <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-[420px_1fr]">

          {/* ================= LEFT SIDE ================= */}

<div>

  {/* Company Card */}

  <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-xl">

    <Link
      to="/"
      className="flex items-center gap-4"
    >
      <img
        src={logo}
        alt="SRM"
        className="h-16 w-auto drop-shadow-[0_0_25px_rgba(0,229,255,0.65)]"
      />

      <div>

        <h3 className="text-xl font-bold text-white">

          SRM Innovations Hub

        </h3>

        <p className="mt-1 text-xs uppercase tracking-[0.28em] text-cyan-400">

          Smart Software • Real Results

        </p>

      </div>

    </Link>

    <p className="mt-8 leading-8 text-white/65">

      SRM Innovations Hub engineers enterprise software,
      AI-powered automation,
      SaaS platforms,
      websites,
      eCommerce,
      CRM,
      ERP,
      HRMS,
      and mobile applications that help businesses streamline operations,
      increase productivity,
      and scale confidently.

    </p>

        <div className="mt-10">

      <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">

        What We Build

      </h4>

      <div className="flex flex-wrap gap-3">

        {highlights.map((item) => (

          <div
            key={item}
            className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
          >

            <FiCheckCircle className="text-cyan-400" />

            {item}

          </div>

        ))}

      </div>

    </div>

        <div className="mt-12">

      <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">

        Technologies

      </h4>

      <div className="flex flex-wrap gap-2">

        {technologies.map((tech) => (

          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/70 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
          >

            {tech}

          </span>

        ))}

      </div>

    </div>

        <div className="mt-12 grid gap-4">

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

        <div className="flex items-start gap-3">

          <HiOutlineEnvelope className="mt-1 text-xl text-cyan-400" />

          <div>

            <div className="text-xs uppercase tracking-widest text-white/40">

              Email

            </div>

            <div className="mt-1 text-white">

              info@srminnovationshub.com

            </div>

          </div>

        </div>

      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

        <div className="flex items-start gap-3">

          <HiOutlineMapPin className="mt-1 text-xl text-cyan-400" />

          <div>

            <div className="text-xs uppercase tracking-widest text-white/40">

              Offices

            </div>

            <div className="mt-1 leading-7 text-white/80">

              Gwalior (Head Office)

              <br />

              Indore (Branch Office)

            </div>

          </div>

        </div>

      </div>

    </div>

        <div className="mt-10 flex gap-4">

      {socials.map(({ icon: Icon, href }, index) => (

        <motion.a
          key={index}
          whileHover={{
            y: -5,
            scale: 1.08,
          }}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
        >

          <Icon />

        </motion.a>

      ))}

    </div>

  </div>

</div>

          {/* ================= RIGHT SIDE ================= */}

<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

  {cols.map((column) => (

    <div key={column.title}>

      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">

        {column.title}

      </h3>

      <ul className="mt-6 space-y-4">

        {column.links.map((link) => (

          <li key={link.path}>

            <Link
              to={link.path}
              className="group inline-flex items-center gap-2 text-sm text-white/60 transition-all duration-300 hover:text-cyan-300"
            >

              <span className="h-[2px] w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-4" />

              {link.label}

            </Link>

          </li>

        ))}

      </ul>

    </div>

  ))}

</div>
          </div>

              <div className="mt-20 border-t border-white/10 pt-8">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                  <div>

  <p className="text-sm text-white/60">

    © {new Date().getFullYear()} SRM Innovations Hub LLP.

    All rights reserved.

  </p>

  <p className="mt-2 text-sm text-white/40">

    Engineering enterprise software, AI solutions,
    SaaS platforms, websites, eCommerce, and mobile
    applications for businesses worldwide.

  </p>

</div>

                  <div className="flex flex-wrap items-center gap-6">

  <Link
    to="/privacy-policy"
    className="text-sm text-white/50 transition hover:text-cyan-300"
  >
    Privacy
  </Link>

  <Link
    to="/terms-and-conditions"
    className="text-sm text-white/50 transition hover:text-cyan-300"
  >
    Terms
  </Link>

  <Link
    to="/security-policy"
    className="text-sm text-white/50 transition hover:text-cyan-300"
  >
    Security
  </Link>

  <Link
    to="/cookie-policy"
    className="text-sm text-white/50 transition hover:text-cyan-300"
  >
    Cookies
  </Link>

  <Link
    to="/refund-policy"
    className="text-sm text-white/50 transition hover:text-cyan-300"
  >
    Refunds
  </Link>

</div>

                  </div>
                </div>

              </footer>

);
}
