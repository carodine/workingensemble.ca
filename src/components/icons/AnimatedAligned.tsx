'use client';

import { motion } from 'framer-motion';

export default function AnimatedAligned() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Four puzzle pieces that come together */}

      {/* Top-left piece */}
      <motion.path
        d="M 15 25 L 15 15 L 25 15 L 25 18 L 27 18 L 27 22 L 25 22 L 25 25 L 22 25 L 22 27 L 18 27 L 18 25 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        initial={{ x: -5, y: -5, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      {/* Top-right piece */}
      <motion.path
        d="M 35 15 L 45 15 L 45 25 L 42 25 L 42 27 L 38 27 L 38 25 L 35 25 L 35 22 L 33 22 L 33 18 L 35 18 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        initial={{ x: 5, y: -5, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      {/* Bottom-left piece */}
      <motion.path
        d="M 15 35 L 18 35 L 18 33 L 22 33 L 22 35 L 25 35 L 25 45 L 15 45 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        initial={{ x: -5, y: 5, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      {/* Bottom-right piece */}
      <motion.path
        d="M 35 35 L 38 35 L 38 33 L 42 33 L 42 35 L 45 35 L 45 45 L 35 45 L 35 42 L 33 42 L 33 38 L 35 38 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        initial={{ x: 5, y: 5, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      {/* Connection indicators appear when pieces are together */}
      <motion.circle
        cx="30"
        cy="30"
        r="3"
        fill="currentColor"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.2, 1],
          opacity: [0, 1, 1],
        }}
        transition={{
          duration: 0.5,
          delay: 1.2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      {/* Lines connecting to center */}
      {[
        { x1: 20, y1: 20, x2: 27, y2: 27 },
        { x1: 40, y1: 20, x2: 33, y2: 27 },
        { x1: 20, y1: 40, x2: 27, y2: 33 },
        { x1: 40, y1: 40, x2: 33, y2: 33 },
      ].map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{
            duration: 0.5,
            delay: 1.4 + i * 0.1,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
      ))}
    </svg>
  );
}
