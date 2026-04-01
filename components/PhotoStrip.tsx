"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  { src: "/images/cafe/interior-wide.jpg", alt: "Rapchai café interior with string lights and tile roof" },
  { src: "/images/branding/neon-sign.jpg", alt: "Rapchai neon sign — Your community café" },
  { src: "/images/cafe/interior-night-books.jpg", alt: "Rapchai café seating area with book cart" },
  { src: "/images/cafe/interior-window-view.jpg", alt: "Guest working at Rapchai café" },
];

const accents = ["var(--yellow)", "var(--pink)", "var(--cyan)", "var(--secondary)"];

export function PhotoStrip() {
  return (
    <section
      style={{
        borderTop: "2.5px solid var(--border)",
        background: "var(--primary)",
        padding: "32px 20px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            marginBottom: 20,
            paddingBottom: 16,
            borderBottom: "2.5px solid rgba(245,240,232,0.2)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              background: "var(--yellow)",
              border: "2px solid var(--border)",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              padding: "2px 10px",
              borderRadius: "2px",
              color: "#1a1a1a",
            }}
          >
            GLIMPSES
          </span>
          <span
            style={{
              fontWeight: 800,
              fontSize: "0.9rem",
              color: "rgba(245,240,232,0.5)",
              letterSpacing: "-0.02em",
            }}
          >
            Inside Rapchai
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                border: "2.5px solid var(--border)",
                boxShadow: `4px 4px 0 ${accents[i]}`,
                borderRadius: "var(--radius)",
                overflow: "hidden",
                background: "var(--card)",
              }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
