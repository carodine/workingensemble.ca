'use client';

import { motion } from 'framer-motion';

export default function AnimatedWebApps() {
  return (
    <svg
      width="80"
      height="60"
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Browser window */}
      <rect
        x="10"
        y="15"
        width="60"
        height="40"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Browser top bar */}
      <line
        x1="10"
        y1="22"
        x2="70"
        y2="22"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Browser dots */}
      <circle cx="15" cy="18.5" r="1" fill="currentColor" />
      <circle cx="19" cy="18.5" r="1" fill="currentColor" />
      <circle cx="23" cy="18.5" r="1" fill="currentColor" />

      {/* Content lines */}
      <line x1="18" y1="30" x2="45" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="36" x2="55" y2="36" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="18" y1="40" x2="50" y2="40" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

      {/* Animated sync/refresh icon */}
      <motion.g
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ originX: "60px", originY: "35px" }}
      >
        <path
          d="M 60 32 A 3 3 0 1 1 60 38"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 60 32 L 58 30 M 60 32 L 62 30"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.g>

      {/* Animated loading progress bar */}
      <rect
        x="18"
        y="46"
        width="44"
        height="3"
        rx="1.5"
        fill="currentColor"
        opacity="0.2"
      />
      <motion.rect
        x="18"
        y="46"
        height="3"
        rx="1.5"
        fill="currentColor"
        initial={{ width: 0 }}
        animate={{ width: [0, 44, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}
