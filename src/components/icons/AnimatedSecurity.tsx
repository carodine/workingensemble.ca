'use client';

import { motion } from 'framer-motion';

export default function AnimatedSecurity() {
  return (
    <svg
      width="80"
      height="60"
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Shield outline */}
      <path
        d="M 40 12 L 50 15 C 50 15 52 25 50 35 C 48 45 40 52 40 52 C 40 52 32 45 30 35 C 28 25 30 15 30 15 L 40 12 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Lock body */}
      <rect
        x="35"
        y="30"
        width="10"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Lock shackle */}
      <path
        d="M 37 30 L 37 26 C 37 24 38 23 40 23 C 42 23 43 24 43 26 L 43 30"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Keyhole */}
      <circle cx="40" cy="33" r="1" fill="currentColor" />
      <line
        x1="40"
        y1="34"
        x2="40"
        y2="36"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Animated scanning lines */}
      {[0, 1, 2].map((i) => (
        <motion.line
          key={`scan-${i}`}
          x1="30"
          x2="50"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
          initial={{ y1: 15, y2: 15 }}
          animate={{
            y1: [15, 50],
            y2: [15, 50],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear",
          }}
        />
      ))}

      {/* Checkmark indicator (appears after scan) */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 0, 1.2, 1],
          opacity: [0, 0, 1, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          times: [0, 0.7, 0.85, 1],
        }}
      >
        <circle cx="52" cy="20" r="4" fill="currentColor" opacity="0.2" />
        <path
          d="M 50 20 L 51.5 21.5 L 54 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.g>

      {/* Protective pulse effect */}
      <motion.circle
        cx="40"
        cy="32"
        r="18"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.3],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </svg>
  );
}
