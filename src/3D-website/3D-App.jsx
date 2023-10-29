import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";


const ThreeApp = () => {
    return (
        <>
            <div className='relative z-0 bg-primary'>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
        </>
    );
}

export default ThreeApp;
