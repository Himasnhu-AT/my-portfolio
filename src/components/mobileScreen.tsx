import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { MenuIcon } from "lucide-react";

const MobileScreen = () => {
  return (
    <Sheet>
      <SheetTrigger className=" justify-items-end items-end">
        <MenuIcon size={30} />
      </SheetTrigger>
      <SheetContent side={"left"} className="text-xl">
        <SheetHeader>
          <SheetTitle className="pb-5">Contents</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col space-y-2">
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
          <Link href="/contact">
            <li className="mx-2">Contact</li>
          </Link>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileScreen;
