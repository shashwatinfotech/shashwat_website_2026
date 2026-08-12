"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Globe2, ArrowUpRight } from "lucide-react";

const LETTERS = ["S", "H", "A", "S", "H", "W", "A", "T"];
const NAVY = "#1E293B";
const LIME = "#A3E635";

export function GlobeCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 400;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const center = size / 2;
    const earthRadius = 110;

    // Pixel dot grid for the "pixel earth" sphere
    const dots: { x: number; y: number; z: number }[] = [];
    const gridStep = 9;
    for (let lat = -earthRadius; lat <= earthRadius; lat += gridStep) {
      const rowRadius = Math.sqrt(Math.max(0, earthRadius * earthRadius - lat * lat));
      const circumference = 2 * Math.PI * rowRadius;
      const count = Math.max(1, Math.floor(circumference / gridStep));
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        dots.push({
          x: Math.cos(angle) * rowRadius,
          y: lat,
          z: Math.sin(angle) * rowRadius,
        });
      }
    }

    // Orbit rings — each tilted at a different angle, letters ride on these
    const orbits = LETTERS.map((letter, i) => ({
      letter,
      radius: 140 + (i % 3) * 22,
      tilt: (i * 37) % 180,
      speed: 0.006 + (i % 4) * 0.002,
      angle: (i / LETTERS.length) * Math.PI * 2,
    }));

    let rotation = 0;
    let raf: number;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);

      rotation += 0.004;

      // Draw pixel earth (rotating dot sphere)
      for (const dot of dots) {
        const cosR = Math.cos(rotation);
        const sinR = Math.sin(rotation);
        const rx = dot.x * cosR - dot.z * sinR;
        const rz = dot.x * sinR + dot.z * cosR;

        const scale = (rz + 250) / 350;
        const px = center + rx * scale;
        const py = center + dot.y * scale;
        const depthFade = (rz + earthRadius) / (earthRadius * 2);

        ctx.beginPath();
        ctx.arc(px, py, 1.4 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(163, 230, 53, ${0.15 + depthFade * 0.55})`;
        ctx.fill();
      }

      // Draw crossing orbit rings
      orbits.forEach((orbit) => {
        ctx.save();
        ctx.translate(center, center);
        ctx.rotate((orbit.tilt * Math.PI) / 180);
        ctx.scale(1, 0.35);
        ctx.beginPath();
        ctx.arc(0, 0, orbit.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(163, 230, 53, 0.18)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      });

      // Draw orbiting letters
      orbits.forEach((orbit) => {
        orbit.angle += orbit.speed;
        const tiltRad = (orbit.tilt * Math.PI) / 180;
        const ex = Math.cos(orbit.angle) * orbit.radius;
        const ey = Math.sin(orbit.angle) * orbit.radius * 0.35;

        const x = center + ex * Math.cos(tiltRad) - ey * Math.sin(tiltRad);
        const y = center + ex * Math.sin(tiltRad) + ey * Math.cos(tiltRad);

        ctx.beginPath();
        ctx.arc(x, y, 11, 0, Math.PI * 2);
        ctx.fillStyle = NAVY;
        ctx.strokeStyle = LIME;
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();

        ctx.font = "bold 12px sans-serif";
        ctx.fillStyle = LIME;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(orbit.letter, x, y);
      });

      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

 return (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 shadow-[0_30px_100px_rgba(15,23,42,.35)]"
  >
    {/* Background Glow */}

    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/10 blur-[140px]" />

    <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">

      {/* Left Content */}

      <div>

        <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">
          <Globe2 className="h-4 w-4" />
          Global Presence
        </span>

        <h2 className="mt-8 text-5xl font-black leading-tight text-white">
          Engineering
          <br />
          Without Borders.
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          We build secure, scalable digital products for organizations
          around the world, delivering enterprise-grade engineering with
          reliability, speed and long-term partnership.
        </p>

        <div className="mt-10 flex flex-wrap gap-8">

          <div>
            <p className="text-4xl font-black text-white">24/7</p>
            <p className="mt-2 text-slate-400">Global Support</p>
          </div>

          <div>
            <p className="text-4xl font-black text-white">30+</p>
            <p className="mt-2 text-slate-400">Countries Served</p>
          </div>

          <div>
            <p className="text-4xl font-black text-white">99.9%</p>
            <p className="mt-2 text-slate-400">Availability</p>
          </div>

        </div>

        <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-400">
          Explore Global Solutions
          <ArrowUpRight className="h-4 w-4" />
        </button>

      </div>

      {/* Globe */}

      <div className="flex justify-center">

        <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

          <canvas
            ref={canvasRef}
            style={{
              width: 400,
              height: 400,
              maxWidth: "100%",
            }}
          />

        </div>

      </div>

    </div>
    </motion.section>
  );
}