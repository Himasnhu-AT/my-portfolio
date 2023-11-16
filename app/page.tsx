"use client";

import { Code2, Terminal } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const MotionCode = motion(Code2);
const MotionH1 = motion.h1;
const MotionP = motion.p;

const MotionButton = motion(Button);

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 2, delay: 1 },
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 md:p-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <MotionCode className="text-emerald-300" size={350} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <MotionH1 className="text-6xl md:text-6xl  font-bold text-emerald-300 mt-4">
          Himanshu
        </MotionH1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <MotionP className="text-lg md:text-2xl text-emerald-300 my-4">
          Developer by day, reader by night, writer on weekends (site under progress)
        </MotionP>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={controls}

        transition={{ duration: 2 }}
        className='mt-9 text-emerald-300'>
        <MotionButton
          variant={'ghost'}

          size={'lg'}
          whileHover={{ scale: 1.2, zIndex: 1.4 }}
          className="text-emerald-300 text-2md mr-9 border z-15 shadow-md shadow-emerald-400 border-emerald-300 rounded-3xl px-4 py-2"
        >
          Download CV
        </MotionButton>
        <MotionButton
          variant={'ghost'}
          whileHover={{ scale: 1.2, zIndex: 0.1 }}
          className="text-emerald-300 text-2md mr-9 border border-transparent rounded-3xl px-4 py-2"
        >
          Contact Me
        </MotionButton>
      </motion.div>
    </main>
  );
}
