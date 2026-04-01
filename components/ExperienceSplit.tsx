"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Coffee, Tent, ArrowRight } from "lucide-react";

export function ExperienceSplit() {
  return (
    <section
      style={{
        borderTop: "2.5px solid var(--border)",
        borderBottom: "2.5px solid var(--border)",
        background: "var(--background)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* --- Food card — PINK --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative flex flex-col overflow-hidden min-h-[380px]"
          style={{
            borderRight: "2.5px solid var(--border)",
            background: "#FF0080",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url(/images/cafe/interior-day.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
            }}
          />
          <div style={{ position: "relative", zIndex: 1, padding: "36px 32px 28px", flex: 1 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 52,
                height: 52,
                border: "2.5px solid var(--border)",
                background: "#FFE500",
                borderRadius: "2px",
                boxShadow: "3px 3px 0 var(--border)",
                marginBottom: 20,
              }}
            >
              <Coffee size={26} color="#1a1a1a" />
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 900,
                color: "#1a1a1a",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              Food
            </h2>
            <p style={{ color: "rgba(26,26,26,0.75)", maxWidth: 280, marginTop: 12, lineHeight: 1.5, fontWeight: 500 }}>
              Fresh food, coffee, and conversations. Experience the Rapchai café.
            </p>
          </div>
          <div style={{ position: "relative", zIndex: 1, padding: "0 32px 32px" }}>
            <a
              href="https://wa.me/918792896633?text=Hi%20Rapchai!%20I%27d%20like%20to%20order%20food."
              target="_blank"
              rel="noopener noreferrer"
              className="brut-btn"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                padding: "12px 22px",
                fontSize: "0.95rem",
                borderColor: "var(--yellow)",
              }}
            >
              View Menu
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* --- Communities card — CYAN --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative flex flex-col overflow-hidden min-h-[380px]"
          style={{ background: "#00E5FF" }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url(/images/branding/wall-graffiti-posters.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
            }}
          />
          <div style={{ position: "relative", zIndex: 1, padding: "36px 32px 28px", flex: 1 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 52,
                height: 52,
                border: "2.5px solid var(--border)",
                background: "#FF0080",
                borderRadius: "2px",
                boxShadow: "3px 3px 0 var(--border)",
                marginBottom: 20,
              }}
            >
              <Tent size={26} color="#fff" />
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 900,
                color: "#1a1a1a",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              Communities
            </h2>
            <p style={{ color: "rgba(26,26,26,0.75)", maxWidth: 280, marginTop: 12, lineHeight: 1.5, fontWeight: 500 }}>
              Events, music, discussions, and creative gatherings. Discover your third place.
            </p>
          </div>
          <div style={{ position: "relative", zIndex: 1, padding: "0 32px 32px" }}>
            <Link
              href="https://mythirdplace.rapchai.com"
              className="brut-btn"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                padding: "12px 22px",
                fontSize: "0.95rem",
                borderColor: "var(--pink)",
              }}
            >
              Explore Events
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
