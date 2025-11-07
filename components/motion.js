import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeDelay = (i = 0) => ({
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  },
});

export const revealFromBottom = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const MotionDiv = motion.div;
export const MotionH2 = motion.h2;
export const MotionP = motion.p;
