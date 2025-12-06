'use client';

import { motion } from 'framer-motion';

export default function AnimatedLongTerm() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Growing tree trunk */}
      <rect
        x="27"
        y="35"
        width="6"
        height="15"
        fill="currentColor"
        opacity="0.8"
      />

      {/* Ground line */}
      <line
        x1="15"
        y1="50"
        x2="45"
        y2="50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Roots */}
      <motion.path
        d="M 27 50 Q 20 52 15 50"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{
          duration: 1.5,
          delay: 0,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />
      <motion.path
        d="M 33 50 Q 40 52 45 50"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      {/* Growing leaves/branches - animated in sequence */}
      {/* Small leaf (early stage) */}
      <motion.circle
        cx="24"
        cy="32"
        r="3"
        fill="currentColor"
        opacity="0.6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      {/* Medium leaves (growth stage) */}
      <motion.circle
        cx="36"
        cy="28"
        r="4"
        fill="currentColor"
        opacity="0.7"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      <motion.circle
        cx="22"
        cy="24"
        r="4"
        fill="currentColor"
        opacity="0.7"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{
          duration: 0.5,
          delay: 1.7,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      {/* Large leaves (mature stage) */}
      <motion.circle
        cx="30"
        cy="18"
        r="5"
        fill="currentColor"
        opacity="0.8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{
          duration: 0.5,
          delay: 2.2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      <motion.circle
        cx="38"
        cy="20"
        r="5"
        fill="currentColor"
        opacity="0.8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{
          duration: 0.5,
          delay: 2.4,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      {/* Timeline arrow showing progression */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1] }}
        transition={{
          duration: 0.5,
          delay: 3,
          repeat: Infinity,
          repeatDelay: 3,
          times: [0, 0.5, 1],
        }}
      >
        <line
          x1="10"
          y1="12"
          x2="50"
          y2="12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
        <path
          d="M 50 12 L 47 10 M 50 12 L 47 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.g>
    </svg>
  );
}
