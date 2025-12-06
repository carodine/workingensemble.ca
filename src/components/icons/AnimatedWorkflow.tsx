'use client';

import { motion } from 'framer-motion';

export default function AnimatedWorkflow() {
  return (
    <svg
      width="80"
      height="60"
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Three connected nodes */}
      <circle cx="20" cy="30" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="40" cy="30" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="60" cy="30" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />

      {/* Connection lines */}
      <line x1="28" y1="30" x2="32" y2="30" stroke="currentColor" strokeWidth="1.5" />
      <line x1="48" y1="30" x2="52" y2="30" stroke="currentColor" strokeWidth="1.5" />

      {/* Animated data flow particles */}
      {[0, 1].map((i) => (
        <motion.circle
          key={`flow1-${i}`}
          r="1.5"
          fill="currentColor"
          initial={{ x: 28, y: 30 }}
          animate={{
            x: [28, 30, 32],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.75,
            ease: "easeInOut",
          }}
        />
      ))}

      {[0, 1].map((i) => (
        <motion.circle
          key={`flow2-${i}`}
          r="1.5"
          fill="currentColor"
          initial={{ x: 48, y: 30 }}
          animate={{
            x: [48, 50, 52],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.75,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Rotating gears inside nodes */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ originX: "20px", originY: "30px" }}
      >
        <path
          d="M 20 27 L 21 28 L 23 28 L 23 32 L 21 32 L 20 33 L 19 32 L 17 32 L 17 28 L 19 28 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </motion.g>

      <motion.g
        animate={{ rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ originX: "40px", originY: "30px" }}
      >
        <path
          d="M 40 27 L 41 28 L 43 28 L 43 32 L 41 32 L 40 33 L 39 32 L 37 32 L 37 28 L 39 28 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </motion.g>

      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ originX: "60px", originY: "30px" }}
      >
        <path
          d="M 60 27 L 61 28 L 63 28 L 63 32 L 61 32 L 60 33 L 59 32 L 57 32 L 57 28 L 59 28 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </motion.g>

      {/* Checkmark in final node (appears periodically) */}
      <motion.path
        d="M 57 30 L 59 32 L 63 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1, 1, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          times: [0, 0.3, 0.7, 1],
        }}
      />
    </svg>
  );
}
