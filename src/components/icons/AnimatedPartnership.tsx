'use client';

import { motion } from 'framer-motion';

export default function AnimatedPartnership() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Two hands meeting in handshake */}
      {/* Left hand */}
      <motion.path
        d="M 15 35 L 15 30 L 20 25 L 25 25 L 30 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      />

      {/* Right hand */}
      <motion.path
        d="M 45 35 L 45 30 L 40 25 L 35 25 L 30 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      />

      {/* Connection lines showing collaboration */}
      <motion.line
        x1="20"
        y1="40"
        x2="40"
        y2="40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />

      {/* Connecting nodes */}
      {[
        { x: 20, y: 40, delay: 1.5 },
        { x: 30, y: 40, delay: 1.7 },
        { x: 40, y: 40, delay: 1.9 },
      ].map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="2"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
          transition={{
            duration: 0.3,
            delay: node.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}

      {/* Success pulse */}
      <motion.circle
        cx="30"
        cy="30"
        r="15"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.5],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 1.5,
          delay: 2.2,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeOut",
        }}
      />
    </svg>
  );
}
