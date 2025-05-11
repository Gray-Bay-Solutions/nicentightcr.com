"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
  message: string;
  actionLabel: string;
  actionHref: string;
  onClose: () => void;
}

export function Toast({ message, actionLabel, actionHref, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 10000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", bounce: 0.3 }}
          className="fixed bottom-0 sm:bottom-4 left-0 sm:left-4 right-0 sm:right-4 z-50 p-2 sm:p-0"
        >
          <div className="bg-primary mx-auto max-w-md rounded-2xl sm:rounded-full shadow-lg flex items-center justify-between p-3 sm:px-6 sm:py-3">
            <p className="text-white font-medium text-sm sm:text-base">
              {message}
            </p>
            <div className="flex items-center gap-2 sm:gap-3 ml-3 sm:ml-4">
              <Link 
                href={actionHref}
                className="bg-white text-primary min-w-[64px] text-center px-3 sm:px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-light hover:text-white transition-all"
              >
                {actionLabel}
              </Link>
              <button
                onClick={() => {
                  setIsVisible(false);
                  onClose();
                }}
                className="text-white/80 hover:text-white transition-all p-2"
                aria-label="Close notification"
              >
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 