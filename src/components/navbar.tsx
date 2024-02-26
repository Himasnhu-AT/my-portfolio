"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MobileScreen from "./mobileScreen";

const Navbar = () => {
  const [mobileScreen, setMobileScreen] = useState(false);
  useEffect(() => {
    const smallDevice = window.innerWidth <= 800;

    if (smallDevice) {
      setMobileScreen(true);
    }
  }, []);

  return (
    <nav className="text-white w-full flex items-center justify-between px-9 md:px-10 lg:px-24">
      <div className="flex flex-row justify-between items-center w-full h-16 px-4">
        <div className="text-2xl font-bold">Logo</div>
        {mobileScreen ? (
          <MobileScreen />
        ) : (
          <div>
            <ul className="flex space-x-4">
              <Link href="/">
                <li className="mx-2">Home</li>
              </Link>
              <Link href="/about">
                <li className="mx-2">About</li>
              </Link>
              <Link href="/uiux">
                <li className="mx-2">UI-UX </li>
              </Link>
              <Link href="/projects">
                <li className="mx-2">Projects</li>
              </Link>
              <Link href="/experience">
                <li className="mx-2">Experience</li>
              </Link>
              <Link href="https://himasnhu-at.hashnode.dev/">
                <li className="mx-2">Blog</li>
              </Link>
              <Link href="/contact">
                <li className="mx-2">Contact</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
