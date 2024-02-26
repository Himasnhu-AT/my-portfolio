"use client";

import { LampContainer } from "@/components/lampUi";
import { motion } from "framer-motion";
import { LinkedinIcon, LucideGithub } from "lucide-react";
import Link from "next/link";

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
          Hi Their <br /> I&apos;m Himanshu
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
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-5 flex flex-row justify-center items-center space-x-4 "
        >
          <h1>My Socials: </h1>
          <Link href={"https://www.linkedin.com/in/himanshu-at/"}>
            <LinkedinIcon size={24} color="#cbd5e1" />
          </Link>
          <Link href={"https://github.com/Himasnhu-AT/"}>
            <LucideGithub size={24} color="#cbd5e1" />
          </Link>
        </motion.div>
      </LampContainer>
    </>
  );
}
