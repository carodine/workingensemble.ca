'use client';

import { motion } from 'framer-motion';

export default function AnimatedProactive() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Radar/monitoring circle */}
      <circle
        cx="30"
        cy="30"
        r="20"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Inner circles */}
      <circle
        cx="30"
        cy="30"
        r="14"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
        fill="none"
      />
      <circle
        cx="30"
        cy="30"
        r="8"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
        fill="none"
      />

      {/* Center dot */}
      <circle cx="30" cy="30" r="2" fill="currentColor" />

      {/* Rotating radar sweep */}
      <motion.line
        x1="30"
        y1="30"
        x2="30"
        y2="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ originX: "30px", originY: "30px" }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Detected issues/items appearing as radar sweep passes */}
      {[
        { angle: 45, radius: 16, delay: 0.375 },
        { angle: 135, radius: 18, delay: 1.125 },
        { angle: 225, radius: 15, delay: 1.875 },
        { angle: 315, radius: 17, delay: 2.625 },
      ].map((item, i) => {
        const x = 30 + item.radius * Math.cos((item.angle * Math.PI) / 180);
        const y = 30 + item.radius * Math.sin((item.angle * Math.PI) / 180);

        return (
          <motion.g key={i}>
            <motion.circle
              cx={x}
              cy={y}
              r="2.5"
              fill="currentColor"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 1, 1],
                opacity: [0, 1, 1, 0.3],
              }}
              transition={{
                duration: 3,
                delay: item.delay,
                repeat: Infinity,
                times: [0, 0.1, 0.7, 1],
              }}
            />
            {/* Pulse ring around detected item */}
            <motion.circle
              cx={x}
              cy={y}
              r="2.5"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: [1, 2],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 1,
                delay: item.delay + 0.1,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          </motion.g>
        );
      })}

      {/* Alert indicator */}
      <motion.path
        d="M 26 52 L 30 46 L 34 52 Z"
        fill="currentColor"
        initial={{ opacity: 0, y: -2 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [-2, 0, 0, -2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          times: [0, 0.2, 0.8, 1],
        }}
      />
    </svg>
  );
}
