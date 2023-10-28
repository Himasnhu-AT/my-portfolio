import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SiteUnderProgressAlert from "./components/SiteUnderProgress";

const TwoApp = () => {
  return (
    <>



      <div className='relative z-0'>

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar className='mt-16' /> {/* Increase the margin */}
          <Hero />
        </div>

        <div className='relative z-0'>

        </div>
      </div>
    </>
  );
}

export default TwoApp;
