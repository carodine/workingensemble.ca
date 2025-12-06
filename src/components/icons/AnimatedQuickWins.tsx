'use client';

import { motion } from 'framer-motion';

export default function AnimatedQuickWins() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Lightbulb */}
      <circle
        cx="24"
        cy="20"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Bulb base */}
      <rect
        x="21"
        y="28"
        width="6"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Light rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const radian = (angle * Math.PI) / 180;
        const x1 = 24 + 12 * Math.cos(radian);
        const y1 = 20 + 12 * Math.sin(radian);
        const x2 = 24 + 16 * Math.cos(radian);
        const y2 = 20 + 16 * Math.sin(radian);

        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            style={{ originX: "24px", originY: "20px" }}
          />
        );
      })}

      {/* Filament inside bulb - animated glow */}
      <motion.path
        d="M 22 18 L 24 22 L 26 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Quick indicator - fast forward arrows */}
      <motion.g
        initial={{ x: -5, opacity: 0 }}
        animate={{
          x: [- 5, 5],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
      >
        <path
          d="M 18 36 L 22 34 L 18 32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 24 36 L 28 34 L 24 32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.g>
    </svg>
  );
}
