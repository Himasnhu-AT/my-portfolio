"use client";

import { LampContainer } from "@/components/lampUi";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Hi Their <br /> I'm Himanshu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent"
        >
          Coder at Day, Reader by Night. Writer on Weekends.
        </motion.p>
      </LampContainer>
    </>
  );
}
