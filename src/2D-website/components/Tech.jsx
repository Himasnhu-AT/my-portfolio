import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariant = () => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
});

const TechCard = ({ technology }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({
                x: 10,
                y: 10,
                scale: 1.4,
                rotate: 0,
            });
        }
    }, [controls, inView]);

    return (
        <motion.div
            className="w-28 h-28"
            initial={{
                x: 0,
                y: 0,
                scale: 0.3,
                rotate: -120,
            }}
            animate={controls}
            transition={{ duration: 2, loop: Infinity, ease: "easeInOut" }}
            ref={ref}
        >
            <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain"
            />
            <p>{technology.name}</p>
        </motion.div>
    );
};

const Tech = () => {
    return (
        <>
            <motion.div
                className="mt-60"
                variants={textVariant()}
                initial="hidden"
                animate="visible"
            >
                <p className={`${styles.sectionSubText} text-center`}>
                    Some of the prominent frameworks and libraries I've worked
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    My tech stack
                </h2>
            </motion.div>

            <div className="flex mt-16 flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                    <TechCard key={technology.name} technology={technology} />
                ))}
            </div>
        </>
    );
};

export default Tech;
