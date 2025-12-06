'use client';

import { motion } from 'framer-motion';

export default function AnimatedInfrastructure() {
  return (
    <svg
      width="80"
      height="60"
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Router (left side) */}
      <rect
        x="4"
        y="20"
        width="20"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="10" cy="28" r="1.5" fill="currentColor" />
      <circle cx="18" cy="28" r="1.5" fill="currentColor" />

      {/* Router antenna */}
      <line
        x1="14"
        y1="20"
        x2="14"
        y2="14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Access Point (right side) */}
      <rect
        x="56"
        y="20"
        width="20"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="62" cy="28" r="1.5" fill="currentColor" />
      <circle cx="70" cy="28" r="1.5" fill="currentColor" />

      {/* Connection line between devices */}
      <line
        x1="24"
        y1="28"
        x2="56"
        y2="28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 2"
      />

      {/* Animated data packets moving left to right */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`packet-${i}`}
          r="1.5"
          fill="currentColor"
          initial={{ x: 24, y: 28 }}
          animate={{
            x: [24, 40, 56],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "linear",
          }}
        />
      ))}

      {/* WiFi waves emanating from Access Point */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={`wave-${i}`}
          d={`M ${66 + i * 6} 18 Q ${70 + i * 6} 13 ${74 + i * 6} 18`}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
