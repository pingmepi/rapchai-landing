import Link from "next/link";
import Image from "next/image";
import { MapPin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "3px solid var(--border)",
        background: "var(--foreground)",
        color: "#f5f0e8",
      }}
    >
      {/* Yellow top strip */}
      <div
        style={{
          borderBottom: "2.5px solid var(--border)",
          background: "var(--yellow)",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span style={{ fontWeight: 900, fontSize: "0.9rem", color: "#1a1a1a", letterSpacing: "-0.02em" }}>
          RAPCHAI · BANGALORE
        </span>
        <span style={{ fontSize: "1.2rem", color: "#1a1a1a" }}>→</span>
        <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "#1a1a1a" }}>
          Food. Music. Conversations.
        </span>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-4"
        style={{ borderBottom: "2px solid rgba(245,240,232,0.15)" }}
      >
        {/* Brand block */}
        <div
          style={{ borderRight: "2px solid rgba(245,240,232,0.15)", padding: "32px 24px" }}
          className="col-span-1 md:col-span-2"
        >
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: 64, height: 64, flexShrink: 0 }}>
              <Image src="/logo.png" alt="Rapchai logo" width={64} height={64} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
            </div>
            <span style={{ fontWeight: 900, fontSize: "1.6rem", letterSpacing: "-0.04em", color: "#f5f0e8" }}>
              Rapchai
            </span>
          </div>
          <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.9rem", lineHeight: 1.6, maxWidth: 320, marginBottom: 20 }}>
            A café and community space in Bangalore where people gather over food, culture, and ideas.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "rgba(245,240,232,0.8)", fontSize: "0.85rem", fontWeight: 500, lineHeight: 1.5, maxWidth: 320 }}>
              <MapPin size={16} style={{ marginTop: 2, flexShrink: 0, color: "var(--yellow)" }} />
              <span>86/7, KR Gardens 2nd main road Koramangala 8th Block, Koramangala, Bengaluru, Karnataka 560095, India</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(245,240,232,0.8)", fontSize: "0.85rem", fontWeight: 500 }}>
              <span style={{ paddingLeft: 24 }}>+91 87928 96633</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                border: "2px solid var(--pink)",
                color: "var(--pink)",
                padding: "6px 14px",
                borderRadius: "2px",
                fontWeight: 700,
                fontSize: "0.8rem",
                boxShadow: "2px 2px 0 var(--pink)",
              }}
            >
              <Instagram size={14} />
              @rapchai
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div style={{ borderRight: "2px solid rgba(245,240,232,0.15)", padding: "32px 24px" }}>
          <h3 style={{ fontWeight: 900, fontSize: "0.8rem", letterSpacing: "0.1em", color: "var(--cyan)", marginBottom: 16 }}>
            ECOSYSTEM
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "Food & Café", href: "https://wa.me/918792896633?text=Hi%20Rapchai!%20I%27d%20like%20to%20order%20food." },
              { label: "Communities", href: "https://mythirdplace.rapchai.com" },
              { label: "Events", href: "https://mythirdplace.rapchai.com" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} style={{ color: "rgba(245,240,232,0.7)", fontWeight: 700, fontSize: "0.9rem" }} className="hover:text-[var(--yellow)]">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ padding: "32px 24px" }}>
          <h3 style={{ fontWeight: 900, fontSize: "0.8rem", letterSpacing: "0.1em", color: "var(--pink)", marginBottom: 16 }}>
            COLLABORATE
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "Host an Event", href: "https://mythirdplace.rapchai.com/host" },
              { label: "Partner with us", href: "#" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} style={{ color: "rgba(245,240,232,0.7)", fontWeight: 700, fontSize: "0.9rem" }} className="hover:text-[var(--yellow)]">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.8rem", color: "rgba(245,240,232,0.4)", fontWeight: 600, flexWrap: "wrap", gap: 8 }}>
        <span>© {new Date().getFullYear()} Rapchai. All rights reserved.</span>
        <span>Built with ☕ in Bangalore</span>
      </div>
    </footer>
  );
}
