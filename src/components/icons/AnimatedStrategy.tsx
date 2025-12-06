'use client';

import { motion } from 'framer-motion';

export default function AnimatedStrategy() {
  return (
    <svg
      width="80"
      height="60"
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Axes */}
      <line
        x1="15"
        y1="10"
        x2="15"
        y2="50"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="15"
        y1="50"
        x2="70"
        y2="50"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Axis arrows */}
      <path
        d="M 15 10 L 13 13 M 15 10 L 17 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 70 50 L 67 48 M 70 50 L 67 52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Upward trend line - animated drawing */}
      <motion.path
        d="M 20 45 L 30 40 L 40 32 L 50 28 L 60 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
      />

      {/* Data points */}
      {[
        { x: 20, y: 45, delay: 0 },
        { x: 30, y: 40, delay: 0.3 },
        { x: 40, y: 32, delay: 0.6 },
        { x: 50, y: 28, delay: 0.9 },
        { x: 60, y: 20, delay: 1.2 },
      ].map((point, i) => (
        <motion.circle
          key={i}
          cx={point.x}
          cy={point.y}
          r="2.5"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: [0, 1, 1],
          }}
          transition={{
            duration: 0.5,
            delay: point.delay,
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        />
      ))}

      {/* Success indicator at end */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.2, 1],
          opacity: [0, 1, 1],
        }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
      >
        <circle cx="60" cy="15" r="4" fill="currentColor" opacity="0.2" />
        <path
          d="M 58 15 L 59.5 16.5 L 62 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.g>
    </svg>
  );
}
