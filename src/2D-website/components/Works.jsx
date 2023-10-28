import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";

// Define the textVariant function here
const textVariant = () => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
});

const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    deployment_link,
}) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
            {/* The card content */}
            <div className='relative w-full h-[230px]'>
                <img
                    src={image}
                    alt='project_image'
                    className='w-full h-full object-cover rounded-2xl'
                />

                {/* Display GitHub icon */}
                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                        <img
                            src={github}
                            alt='source code'
                            className='w-1/2 h-1/2 object-contain'
                        />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                {/* <p className='mt-2 text-secondary text-[14px]'>{description}</p> */}
            </div>

            <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <p
                        key={`${name}-${tag.name}`}
                        className={`text-[14px] ${tag.color}`}
                    >
                        #{tag.name}
                    </p>
                ))}
            </div>

            <div className='mt-5'>
                <a
                    href={deployment_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-[14px] text-secondary underline'
                >
                    View Deployment
                </a>
            </div>

            <button
                className='text-secondary underline mt-4 cursor-pointer'
                onClick={() => setShowDetails(!showDetails)}
            >
                {showDetails ? "Read Less" : "Read More"}
            </button>

            {showDetails && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    <div className='mt-5'>
                        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                    </div>
                </motion.div>
            )}
        </Tilt>
    );
};

const Works = () => {
    return (
        <>
            <motion.div id="work" className="mt-60" variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My Projects</p>
                <h2 className={`${styles.sectionHeadText}`}>Portfolio.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Below are some of my featured projects that showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. These projects reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default Works;
