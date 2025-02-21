import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="h-20 w-full bg-white flex justify-between items-center px-24 border-b-8 border-b-primary fixed z-50">
        <h1 className="text-4xl font-bold tracking-custom text-slate-700">YUDHA</h1>
        <ul className="flex gap-9 text-slate-700 font-medium">
            <Link className="hover:font-bold hover:text-orange-600 duration-300 ease-in-out" href='/#hero'>Home</Link>
            <Link className="hover:font-bold hover:text-orange-600 duration-300 ease-in-out" href='/#about-me'>About Me</Link>
            <Link className="hover:font-bold hover:text-orange-600 duration-300 ease-in-out" href='/#skills'>Skills</Link>
            <Link className="hover:font-bold hover:text-orange-600 duration-300 ease-in-out" href='/#portofolio'>Portofolio</Link>
            <Link className="hover:font-bold hover:text-orange-600 duration-300 ease-in-out" href='/#experience'>Experience</Link>
            <Link className="hover:font-bold hover:text-orange-600 duration-300 ease-in-out" href='/#testimonials'>Testimonials</Link>
            <Link className="hover:font-bold hover:text-orange-600 duration-300 ease-in-out" href='/#contact-me'>Contact Me</Link>
        </ul>
      </div>
    </>
  );
}
