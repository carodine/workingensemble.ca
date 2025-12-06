'use client';

import { motion } from 'framer-motion';

export default function AnimatedNoPressure() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Relaxed/comfortable person - smiling face */}
      <circle cx="24" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />

      {/* Happy eyes */}
      <motion.path
        d="M 19 18 Q 19 20 19 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{
          d: [
            "M 19 18 Q 19 20 19 20",
            "M 18 19 Q 20 17 22 19",
            "M 19 18 Q 19 20 19 20",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          times: [0, 0.1, 1],
        }}
      />
      <motion.path
        d="M 29 18 Q 29 20 29 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{
          d: [
            "M 29 18 Q 29 20 29 20",
            "M 26 19 Q 28 17 30 19",
            "M 29 18 Q 29 20 29 20",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          times: [0, 0.1, 1],
        }}
      />

      {/* Smile */}
      <path
        d="M 19 23 Q 24 26 29 23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Check/thumbs up gesture */}
      <motion.g
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <path
          d="M 36 24 L 36 28 C 36 29 35 30 34 30 L 30 30"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 30 26 L 30 34 C 30 35 31 36 32 36 L 40 36 C 41 36 42 35 42 34 L 42 28 C 42 27 41 26 40 26 L 30 26"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.g>

      {/* Positive vibes - floating sparkles */}
      {[
        { x: 14, y: 12, delay: 0.5 },
        { x: 34, y: 10, delay: 1 },
        { x: 10, y: 22, delay: 1.5 },
      ].map((spark, i) => (
        <motion.g
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [0, -5],
          }}
          transition={{
            duration: 2,
            delay: spark.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <line
            x1={spark.x}
            y1={spark.y - 2}
            x2={spark.x}
            y2={spark.y + 2}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1={spark.x - 2}
            y1={spark.y}
            x2={spark.x + 2}
            y2={spark.y}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </motion.g>
      ))}
    </svg>
  );
}
