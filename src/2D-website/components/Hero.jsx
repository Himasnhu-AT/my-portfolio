import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { styles } from '../styles';

const Hero = () => {

    const downloadResume = () => {
        const resumeURL = './resume.pdf';
        const link = document.createElement('a');
        link.href = resumeURL;
        link.download = 'Himanshu_Resume.pdf';
        link.click();
    };


    const buttonVariants = {
        initial: { scale: 0 },
        animate: { scale: 1 },
    };

    const heroVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const textVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 10,
                stiffness: 100,
            },
        },
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: 0 },
        visible: {
            scale: 1,
            rotate: [0, -20, 20, -20, 20, 0],
            transition: {
                delay: 0.2,
                type: 'spring',
                stiffness: 150,
                damping: 10,
            },
        },
    };

    return (
        <motion.section
            className="w-screen h-screen flex items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
        >
            <motion.div
                className="text-white text-center rounded-lg p-8 max-w-3xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
                <motion.h1
                    className={`${styles.heroHeadText} text-4xl mt-4`}
                    variants={textVariants}
                >
                    Hi, I'm <span className=''>Himanshu</span>
                </motion.h1>
                <motion.p
                    className={`${styles.heroSubText} mt-4 text-gray-200 text-lg`}
                    variants={textVariants}
                >
                    Coder in the day, reader at night, and writer on weekends.
                </motion.p>

                <motion.div
                    className="flex mt-6 space-x-4 justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                    <motion.div
                        variants={iconVariants}
                        whileHover={{ scale: 1.2, rotate: [0, 20, -20, 20, -20, 0] }}
                        transition={{ duration: 1 }}
                    >
                        <a
                            href="https://github.com/himanshu-at"
                            target="_blank"
                            rel="Github Account">
                            <AiFillGithub className="text-5xl" />
                        </a>
                    </motion.div>

                    <motion.div
                        variants={iconVariants}
                        whileHover={{ scale: 1.2, rotate: [0, -20, 20, -20, 20, 0] }}
                        transition={{ duration: 1 }}
                    >
                        <a
                            href="https://linkedin.com/in/himanshu-at"
                            target="_blank"
                            rel="linkedin ID">
                            <AiFillLinkedin className="text-5xl" />
                        </a>
                    </motion.div>

                    <motion.div
                        variants={iconVariants}
                        whileHover={{ scale: 1.2, rotate: [0, 20, -20, 20, -20, 0] }}
                        transition={{ duration: 1 }}
                    >
                        <a
                            href="https://www.instagram.com/himanshu.him010/"
                            target="_blank"
                            rel="insta ID">
                            <AiFillInstagram className="text-5xl" />
                        </a>
                    </motion.div>
                </motion.div>

                <div className="mt-6">
                    {
                        <motion.button
                            className="border border-[#FFA500] text-[#FFA500] hover:bg-[#FFA500] hover:text-black px-4 py-2 rounded-full focus:outline-none transform scale-100 hover:scale-105"
                            initial="initial"
                            animate="animate"
                            variants={buttonVariants}
                            onClick={downloadResume}
                        >
                            Download Resume
                        </motion.button>

                    }
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
