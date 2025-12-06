'use client';

import { motion } from 'framer-motion';

export default function AnimatedUnderstand() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Listening ear */}
      <motion.path
        d="M 18 20 Q 14 20 14 24 Q 14 28 18 28"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />

      {/* Sound waves */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M ${8 - i * 2} 24 Q ${6 - i * 2} 20 ${8 - i * 2} 16`}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0] }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        />
      ))}

      {/* Conversation bubbles */}
      <motion.circle
        cx="30"
        cy="22"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />
      <motion.path
        d="M 27 29 L 25 32 L 28 30"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 1.3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />

      {/* Checkmarks appearing in bubble */}
      <motion.path
        d="M 27 20 L 29 22 L 33 18"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />
    </svg>
  );
}
