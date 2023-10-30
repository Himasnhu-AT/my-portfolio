import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
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
  const downloadResume = () => {
    const resumeURL = './resume.pdf';
    const link = document.createElement('a');
    link.href = resumeURL;
    link.download = 'Himanshu_Resume.pdf';
    link.click();
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled student and aspiring AI researcher with a strong background in programming languages like Python,
        C++, and JavaScript. I have expertise in frameworks like TensorFlow and Node.js, and I'm passionate about AI/ML
        development. As a quick learner and problem solver, I collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that address real-world challenges. Let's work together to turn your
        ideas into reality!

        <motion.button
          className="mt-4 border border-[#FFA500] text-[#FFA500] hover:bg-[#FFA500] hover:text-black px-4 py-2 rounded-full focus:outline-none transform scale-100 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          onClick={downloadResume}
        >
          Download Resume
        </motion.button>
      </motion.p>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");