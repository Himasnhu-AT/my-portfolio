import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaExclamationTriangle } from 'react-icons/fa';
import TwoApp from './2D-website/App';
import { Link } from 'react-router-dom';

const URLError = () => {
    const notFoundStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const titleAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-30px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    });

    const iconAnimation = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
    });

    return (
        <div style={notFoundStyle}>
            <animated.h1 style={titleAnimation} className="text-4xl text-red-500 mb-2">
                404 - Page Not Found
            </animated.h1>
            <p>The page you are looking for does not exist.<br /> Visit, Homepage:</p>
            <button
                className="mt-4 border border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white px-4 py-2 rounded-full focus:outline-none"
            >
                <Link to={"/"}> 2D-Website </Link>
            </button>
            <animated.div style={iconAnimation} className="text-6xl text-red-500 mt-4">
                <FaExclamationTriangle />
            </animated.div>
        </div>
    );
};

export default URLError;
