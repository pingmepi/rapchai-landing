"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section
      style={{
        borderTop: "2.5px solid var(--border)",
        background: "var(--primary)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto" style={{ minHeight: 360 }}>
        {/* Left: text with background image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center relative overflow-hidden"
          style={{ padding: "48px 36px", borderRight: "2.5px solid rgba(245,240,232,0.2)" }}
        >
          <Image
            src="/images/cafe/outdoor-seating.jpg"
            alt=""
            fill
            style={{ objectFit: "cover", opacity: 0.1 }}
            sizes="50vw"
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-block",
                background: "var(--cyan)",
                border: "2px solid var(--border)",
                color: "#1a1a1a",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                padding: "2px 10px",
                borderRadius: "2px",
                marginBottom: 16,
                width: "fit-content",
              }}
            >
              OUR STORY
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, color: "#f5f0e8", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 20 }}>
              More than just a café.
            </h2>
            <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "1rem", lineHeight: 1.65, fontWeight: 500, marginBottom: 12 }}>
              Rapchai began as a café but quickly became a gathering space for people who wanted more than just a place to eat.
            </p>
            <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "1rem", lineHeight: 1.65, fontWeight: 500 }}>
              Today it hosts music, conversations, creative communities, and events that bring people together.
            </p>
          </div>
        </motion.div>

        {/* Right: Host CTA box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center"
          style={{ padding: "48px 36px" }}
        >
          <div
            style={{
              border: "2.5px solid var(--yellow)",
              boxShadow: "6px 6px 0 var(--yellow)",
              padding: "32px",
              borderRadius: "2px",
              background: "#f5f0e8",
              width: "100%",
              maxWidth: 400,
            }}
          >
            <div style={{ fontWeight: 900, fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.03em", color: "var(--primary)", marginBottom: 12, lineHeight: 1.1 }}>
              Have a community idea?
            </div>
            <p style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", lineHeight: 1.6, fontWeight: 500, marginBottom: 24 }}>
              We provide the space, you bring the people. Host your next creative gathering at Rapchai.
            </p>
            <Link
              href="https://mythirdplace.rapchai.com/host"
              className="brut-btn"
              style={{
                background: "var(--primary)",
                color: "#f5f0e8",
                padding: "12px 22px",
                fontSize: "0.95rem",
                borderColor: "var(--pink)",
              }}
            >
              Host an Event at Rapchai
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
