"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, MapPin, CalendarDays } from "lucide-react";
import React, { useRef } from "react";

const cardAccents = ["var(--yellow)", "var(--pink)", "var(--cyan)", "var(--secondary)"];

function TiltedCard({ event, idx }: { event: any; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const accent = cardAccents[idx % cardAccents.length];

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        border: "2.5px solid var(--border)",
        boxShadow: "5px 5px 0 var(--border)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        background: "var(--card)",
        cursor: "pointer",
      }}
      whileHover={{ translateX: -3, translateY: -3, boxShadow: "8px 8px 0 var(--border)" }}
      transition={{ duration: 0.15 }}
      className="flex flex-col"
    >
      {/* Image */}
      <div
        style={{
          height: 180,
          backgroundImage: `url(${event.cover_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "2.5px solid var(--border)",
          position: "relative",
        }}
      >
        {/* Date badge — uses card accent color */}
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: accent,
            border: "2px solid var(--border)",
            borderRadius: "var(--radius-sm)",
            padding: "2px 10px",
            fontWeight: 700,
            fontSize: "0.7rem",
            color: "#1a1a1a",
          }}
        >
          {event.date}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontWeight: 900, fontSize: "1.05rem", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 8 }}>
          {event.title}
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: "var(--muted-foreground)", fontWeight: 600 }}>
          <MapPin size={12} />
          {event.location}
        </div>
        <div style={{ marginTop: "auto", paddingTop: 14 }}>
          <Link
            href={`https://mythirdplace.rapchai.com/event/${event.slug}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: accent,
              color: "#1a1a1a",
              border: "2px solid var(--border)",
              boxShadow: "3px 3px 0 var(--border)",
              padding: "8px 14px",
              borderRadius: "var(--radius-sm)",
              fontWeight: 700,
              fontSize: "0.8rem",
              transition: "all 0.1s",
            }}
          >
            View Event
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedEvents() {
  const events = [
    {
      title: "Rapchai Ragas",
      date: "Oct 12",
      location: "Rapchai Café",
      slug: "rapchai-ragas",
      cover_image:
        "https://images.unsplash.com/photo-1514320291840-2de18b6256f1?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "Jazz Jam Session",
      date: "Oct 15",
      location: "Rapchai Café",
      slug: "jazz-jam",
      cover_image:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2669&auto=format&fit=crop",
    },
    {
      title: "Creative Writing",
      date: "Oct 18",
      location: "Rapchai Café",
      slug: "creative-writing",
      cover_image:
        "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=2673&auto=format&fit=crop",
    },
    {
      title: "Open Mic Night",
      date: "Oct 20",
      location: "Rapchai Café",
      slug: "open-mic",
      cover_image:
        "https://images.unsplash.com/photo-1516280440502-628d05202a50?q=80&w=2670&auto=format&fit=crop",
    },
  ];

  return (
    <section
      style={{
        borderTop: "2.5px solid var(--border)",
        background: "var(--background)",
        padding: "40px 20px 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 28,
            flexWrap: "wrap",
            gap: 12,
            borderBottom: "2.5px solid var(--border)",
            paddingBottom: 20,
          }}
        >
          <div>
            <div className="brut-tag" style={{ marginBottom: 8 }}>
              <CalendarDays size={11} style={{ display: "inline", marginRight: 4 }} />
              UPCOMING
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, color: "var(--foreground)" }}>
              Upcoming at Rapchai
            </h2>
          </div>
          <Link
            href="https://mythirdplace.rapchai.com"
            className="brut-btn"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              borderColor: "var(--cyan)",
              padding: "8px 16px",
              fontSize: "0.9rem",
            }}
          >
            All Events
            <ArrowRight size={14} />
          </Link>
        </div>

        <div style={{ perspective: "1000px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((event, idx) => (
            <TiltedCard key={idx} event={event} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
