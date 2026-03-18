"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Tent } from "lucide-react";

const words = ["recharge.", "adapt.", "prosper."];
const wordColors = ["var(--yellow)", "var(--pink)", "var(--cyan)"];

export function HeroSection() {
  return (
    <section style={{ background: "var(--background)" }} className="relative overflow-hidden">
      {/* Marquee ticker tape — yellow */}
      <div className="ticker-tape font-mono text-sm font-bold w-full overflow-hidden flex whitespace-nowrap">
        <div
          className="flex gap-12 w-max px-4 py-2"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="shrink-0 flex gap-12">
              <span>FOOD</span><span>★</span>
              <span>MUSIC</span><span>★</span>
              <span>CONVERSATIONS</span><span>★</span>
              <span>BANGALORE</span><span>★</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="px-5 md:px-10 pt-10 pb-10 md:pt-16 md:pb-16 grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch max-w-7xl mx-auto">
        {/* Left: headline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col justify-center pr-0 md:pr-10 py-4"
        >
          <div className="brut-tag mb-5 self-start" style={{ fontSize: "0.8rem" }}>
            BANGALORE, INDIA
          </div>

          <h1
            style={{
              fontSize: "clamp(3rem, 9vw, 7rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "var(--foreground)",
            }}
          >
            Rapchai
          </h1>

          {/* recharge. adapt. prosper. in yellow / pink / cyan */}
          <div style={{ marginTop: "0.4rem", display: "flex", flexDirection: "column", gap: "0.2rem" }}>
            {words.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.12, duration: 0.4 }}
                style={{
                  fontSize: "clamp(1.6rem, 4.5vw, 3.5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  color: wordColors[i],
                  textDecoration: i === 2 ? "underline" : "none",
                  textDecorationThickness: i === 2 ? "4px" : undefined,
                  textDecorationColor: i === 2 ? wordColors[i] : undefined,
                }}
              >
                {w}
              </motion.span>
            ))}
          </div>

          <p
            style={{
              marginTop: "1.6rem",
              fontSize: "1.05rem",
              color: "var(--muted-foreground)",
              fontWeight: 500,
              maxWidth: "420px",
              lineHeight: 1.5,
            }}
          >
            A café + community space in Bangalore where people gather over food, culture, and ideas.
          </p>

          {/* CTAs — matching mythirdplace button style */}
          <div style={{ marginTop: "2rem", display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="https://mythirdplace.rapchai.com"
              className="brut-btn"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                padding: "14px 24px",
                fontSize: "1rem",
                borderColor: "var(--yellow)",
              }}
            >
              <Tent size={18} />
              Explore Communities
              <ArrowRight size={16} />
            </Link>
            <Link
              href="https://rapchai.com/food"
              className="brut-btn"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                padding: "14px 24px",
                fontSize: "1rem",
                borderColor: "var(--cyan)",
              }}
            >
              <Coffee size={18} />
              Order Food
            </Link>
          </div>
        </motion.div>

        {/* Right: cafe image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hidden md:flex items-stretch justify-center"
        >
          <div
            className="brut-card-lg w-full flex flex-col overflow-hidden"
            style={{ background: "var(--primary)", minHeight: 400 }}
          >
            <div
              style={{
                flex: 1,
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2694&auto=format&fit=crop)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              style={{
                borderTop: "2.5px solid var(--border)",
                background: "var(--yellow)",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontWeight: 800, fontSize: "0.85rem", color: "#1a1a1a" }}>
                RAPCHAI CAFÉ · HSR LAYOUT
              </span>
              <span style={{ fontWeight: 700, fontSize: "0.75rem", color: "#1a1a1a" }}>
                OPEN NOW →
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
