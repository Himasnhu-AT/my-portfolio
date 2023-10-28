import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles"; // Import your styles if not already imported.
import { services } from "../constants"; // Import the services data.

// Define the textVariant function.
const textVariant = () => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
});

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariant()}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                <img
                    src={icon}
                    alt='service-icon'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div id="about" variants={textVariant()} initial="hidden" animate="visible">
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                initial="hidden"
                animate="visible"
                variants={textVariant()}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                I'm a skilled student and aspiring AI researcher with a strong background in programming languages like Python,
                C++, and JavaScript. I have expertise in frameworks like TensorFlow and Node.js, and I'm passionate about AI/ML
                development. As a quick learner and problem solver, I collaborate closely with clients to create efficient,
                scalable, and user-friendly solutions that address real-world challenges. Let's work together to turn your
                ideas into reality!
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default About;
