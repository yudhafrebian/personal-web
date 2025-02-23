import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <>
      <div className="h-20 w-full bg-white flex justify-between items-center lg:px-24 px-8 border-b-8 border-b-primary fixed z-50">
        <h1 className="lg:text-4xl text-xl font-bold lg:tracking-custom tracking-sm text-slate-700">
          YUDHA
        </h1>
        <ul className="lg:flex hidden gap-9 text-slate-700 font-medium">
          <Link
            className="hover:font-bold hover:text-orange-600 duration-300 ease-in-out"
            href="/#hero"
          >
            Home
          </Link>
          <Link
            className="hover:font-bold hover:text-orange-600 duration-300 ease-in-out"
            href="/#about-me"
          >
            About Me
          </Link>
          <Link
            className="hover:font-bold hover:text-orange-600 duration-300 ease-in-out"
            href="/#skills"
          >
            Skills
          </Link>
          <Link
            className="hover:font-bold hover:text-orange-600 duration-300 ease-in-out"
            href="/#portofolio"
          >
            Portofolio
          </Link>
          <Link
            className="hover:font-bold hover:text-orange-600 duration-300 ease-in-out"
            href="/#experience"
          >
            Experience
          </Link>
          <Link
            className="hover:font-bold hover:text-orange-600 duration-300 ease-in-out"
            href="/#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="hover:font-bold hover:text-orange-600 duration-300 ease-in-out"
            href="/#contact-me"
          >
            Contact Me
          </Link>
        </ul>
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"}>
                <RxHamburgerMenu size={32} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuItem>
                <Link href={'/#hero'}>Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/#about-me'}>About Me</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/#skills'}>Skills</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/#portofolio'}>Portofolio</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/#experience'}>Experience</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/#testimonials'}>Testimonials</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/#contact-me'}>Contact Me</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
