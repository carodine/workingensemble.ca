'use client';

import { motion } from 'framer-motion';

export default function AnimatedAI() {
  return (
    <svg
      width="80"
      height="60"
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Brain outline */}
      <path
        d="M 20 30 Q 20 20 30 18 Q 35 17 40 17 Q 45 17 50 18 Q 60 20 60 30 Q 60 40 50 42 Q 45 43 40 43 Q 35 43 30 42 Q 20 40 20 30 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Brain hemispheres */}
      <path
        d="M 40 17 Q 40 30 40 43"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />

      {/* Left hemisphere folds */}
      <path
        d="M 28 25 Q 30 27 28 30"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 32 24 Q 34 27 32 32"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />

      {/* Right hemisphere folds */}
      <path
        d="M 52 25 Q 50 27 52 30"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 48 24 Q 46 27 48 32"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />

      {/* Animated neural connections - dots that light up */}
      <motion.circle
        cx="30"
        cy="26"
        r="1.5"
        fill="currentColor"
        animate={{
          opacity: [0.3, 1, 0.3],
          r: [1.5, 2.5, 1.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.circle
        cx="50"
        cy="26"
        r="1.5"
        fill="currentColor"
        animate={{
          opacity: [0.3, 1, 0.3],
          r: [1.5, 2.5, 1.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.4,
          ease: "easeInOut",
        }}
      />

      <motion.circle
        cx="40"
        cy="20"
        r="1.5"
        fill="currentColor"
        animate={{
          opacity: [0.3, 1, 0.3],
          r: [1.5, 2.5, 1.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.2,
          ease: "easeInOut",
        }}
      />

      <motion.circle
        cx="40"
        cy="40"
        r="1.5"
        fill="currentColor"
        animate={{
          opacity: [0.3, 1, 0.3],
          r: [1.5, 2.5, 1.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.6,
          ease: "easeInOut",
        }}
      />

      {/* Animated connecting lines between neurons */}
      <motion.line
        x1="30"
        y1="26"
        x2="40"
        y2="20"
        stroke="currentColor"
        strokeWidth="0.8"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.line
        x1="50"
        y1="26"
        x2="40"
        y2="20"
        stroke="currentColor"
        strokeWidth="0.8"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.3,
          ease: "easeInOut",
        }}
      />

      <motion.line
        x1="30"
        y1="26"
        x2="40"
        y2="40"
        stroke="currentColor"
        strokeWidth="0.8"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5,
          ease: "easeInOut",
        }}
      />

      <motion.line
        x1="50"
        y1="26"
        x2="40"
        y2="40"
        stroke="currentColor"
        strokeWidth="0.8"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.7,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}
