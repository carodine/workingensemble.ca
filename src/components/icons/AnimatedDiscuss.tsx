'use client';

import { motion } from 'framer-motion';

export default function AnimatedDiscuss() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Two people talking - represented by circles with speech bubbles */}
      <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="30" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />

      {/* Speech bubble from left person */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 1], opacity: [0, 1, 1] }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          repeat: Infinity,
          repeatDelay: 3,
          times: [0, 0.3, 1],
        }}
      >
        <rect
          x="10"
          y="26"
          width="10"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 15 34 L 14 37 L 16 35"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Dots indicating talking */}
        <circle cx="13" cy="30" r="0.8" fill="currentColor" />
        <circle cx="15" cy="30" r="0.8" fill="currentColor" />
        <circle cx="17" cy="30" r="0.8" fill="currentColor" />
      </motion.g>

      {/* Speech bubble from right person */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 1], opacity: [0, 1, 1] }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Infinity,
          repeatDelay: 3,
          times: [0, 0.3, 1],
        }}
      >
        <rect
          x="28"
          y="26"
          width="10"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 33 34 L 34 37 L 32 35"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Dots indicating talking */}
        <circle cx="31" cy="30" r="0.8" fill="currentColor" />
        <circle cx="33" cy="30" r="0.8" fill="currentColor" />
        <circle cx="35" cy="30" r="0.8" fill="currentColor" />
      </motion.g>

      {/* Connection line showing collaboration */}
      <motion.line
        x1="18"
        y1="40"
        x2="30"
        y2="40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          delay: 2.5,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      {/* Heart/connection icon in center */}
      <motion.circle
        cx="24"
        cy="40"
        r="2.5"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{
          duration: 0.5,
          delay: 3,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />
    </svg>
  );
}
