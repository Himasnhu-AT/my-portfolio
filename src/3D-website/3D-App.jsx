import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import SiteUnderProgressAlert from "./SiteUnderProgress";

const ThreeApp = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <SiteUnderProgressAlert className='mb-8' />
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar className='mt-42' />
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
        </div>
    );
}

export default ThreeApp;
