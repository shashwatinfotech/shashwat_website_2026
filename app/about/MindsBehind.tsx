"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

interface Engineer {
  name: string;
  role: string;
  quote: string;
  speciality: string;
  image: string;
}

function MindCard({
  person,
  index,
}: {
  person: Engineer;
  index: number;
}) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothX = useSpring(rotateX, { stiffness: 120, damping: 15 });
  const smoothY = useSpring(rotateY, { stiffness: 120, damping: 15 });

  function move(e: React.MouseEvent<HTMLDivElement>) {
    const box = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    const rotateYValue = (x - box.width / 2) / 15;
    const rotateXValue = -(y - box.height / 2) / 15;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  }

  function leave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX: smoothX,
        rotateY: smoothY,
        transformPerspective: 1000,
      }}
      onMouseMove={move}
      onMouseLeave={leave}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="
        group
        relative
        h-[480px]
        rounded-3xl
        overflow-hidden
        border
        border-[#E2E8F0]
        bg-[#F8FAFC]
      "
    >
      {/* IMAGE AREA — full visibility now, no fade/grayscale-by-default */}
      <div className="absolute inset-0">
        <img
          src={person.image}
          alt={person.name}
          className="
            h-full
            w-full
            object-cover
            group-hover:scale-110
            transition
            duration-700
          "
        />
      </div>

      {/* DARK SCRIM — replaces the white-fog gradient, keeps image clear + text readable */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/85
          via-black/40
          to-transparent
        "
      />

      {/* CONTENT — text colors flipped to light since background under them is now dark */}
      <div className="absolute bottom-0 p-8">
        <p className="text-[#2563EB] font-mono text-sm">
          {person.role}
        </p>

        <h3 className="mt-3 text-3xl font-semibold text-white">
          {person.name}
        </h3>

        <p
          className="
            mt-4
            text-white/85
            leading-relaxed
            opacity-0
            translate-y-5
            group-hover:opacity-100
            group-hover:translate-y-0
            transition
            duration-500
          "
        >
          "{person.quote}"
        </p>

        <div className="mt-5 text-xs tracking-widest uppercase text-white/60">
          {person.speciality}
        </div>
      </div>

      {/* CURSOR GLOW — cyan/purple swapped for dark blue tones */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          bg-gradient-to-tr
          from-[#1E3A8A]/15
          via-transparent
          to-[#2563EB]/15
        "
      />
    </motion.div>
  );
}

export default function MindsBehind({
  engineers,
}: {
  engineers: Engineer[];
}) {
  return (
    <section className="relative z-10 px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono tracking-[0.3em] text-[#1E3A8A] uppercase text-sm">
            04 / TECHNOLOGY LEGENDS
          </p>

          <h2 className="mt-8 text-5xl md:text-7xl font-semibold text-[#0F172A]">
            The minds that
            <br />
            <span className="bg-[#1E3A8A] text-white px-3 rounded-md inline-block">
              changed technology.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-xl text-[#334155]">
            Every breakthrough begins with someone
            who thinks differently. We are inspired by
            the engineers who transformed ideas into
            the foundations of modern computing.
          </p>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engineers.map((person, index) => (
            <MindCard key={person.name} person={person} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}