import { motion } from "framer-motion";
import { SectionHeader } from "./Products";

const quotes = [
  {
    q: "The team maintained excellent communication throughout the project and delivered a solution tailored to our business needs.",
    a: "Director",
    c: "Client · United Kingdom",
  },
  {
    q: "SRM Innovations Hub was proactive, professional, and easy to work with. They were always willing to suggest better approaches whenever needed.",
    a: "Business Owner",
    c: "Client · United Kingdom",
  },
  {
    q: "We appreciated their structured development process and timely updates. The project was delivered as discussed and met our expectations.",
    a: "Operations Manager",
    c: "Client · India",
  },
  {
    q: "Their technical knowledge and commitment to quality gave us confidence throughout the engagement. We look forward to working together again.",
    a: "Managing Director",
    c: "Client",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Operators who've shipped with us."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {quotes.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-strong rounded-2xl p-7"
            >
              <div className="text-2xl leading-none text-[#00E5FF]">“</div>
              <blockquote className="mt-2 text-base leading-relaxed text-white/90">
                {t.q}
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-white">{t.a}</span>
                <span className="text-muted-foreground"> · {t.c}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
