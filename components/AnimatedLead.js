'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedLead() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const companies = [
    // { name: 'Chronically Online', color: '#E50914' },
    { name: 'Cloud Architect', color: '#A100FF' },
    { name: 'Devops Engineer', color: '#0CAA41' },
    { name: 'Backend Developer', color: '#0A46FF' },
    { name: 'Cybersecurity Enthusiast', color: '#d348a5ff' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length);
    }, 1200);
    return () => clearInterval(timer);
  }, [companies.length]);

  return (
    <p className="mt-0" style={{ margin: 'calc(var(--spacing) * 0)' }}>
      <strong className="relative z-10">
        {' '}
        <span className="relative inline-flex h-7 min-w-[100px] items-center align-bottom">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={currentIndex}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.5, 1, 0.5, 1] }}
              className="absolute left-0 text-[18px] whitespace-nowrap"
              style={{ color: companies[currentIndex].color }}
            >
              {companies[currentIndex].name}
            </motion.span>
          </AnimatePresence>
        </span>
      </strong>
    </p>
  );
}
