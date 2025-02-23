import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiWhatsappFill,
  RiGithubFill
} from "react-icons/ri";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex w-full lg:flex-row flex-col-reverse lg:justify-between justify-evenly items-center h-custom1 bg-gradient-to-br from-gray-700 to-zinc-900 lg:px-24 px-8 pt-20"
    >
      <div className="lg:w-3/5">
        <h1 className="font-montserrat text-white font-semibold lg:text-6xl text-2xl mb-1">
          I&apos;m <span className="text-orange-600">Yudha!</span>
        </h1>
        <h1 className="font-montserrat text-orange-600 font-semibold lg:text-6xl text-2xl lg:mb-9 mb-6">
          A Full-Stack Developer
        </h1>
        <p className="font-roboto lg:w-3/4 text-white font-medium lg:text-xl text-sm lg:mb-9 mb-6">
          &quot;Hi, I&apos;m Yudha, a Junior Fullstack Developer with a passion for
          building scalable and efficient web applications. I specialize in
          JavaScript, Next.js, and Node.js, creating seamless user experiences from
          front-end to back-end. Excited to collaborate on innovative projects!&quot;
        </p>
        <div className="flex items-center lg:gap-12 gap-6">
          <Link href="/#contact-me" passHref>
            <Button className="h-10 rounded-md lg:px-6 lg:py-6">Contact Me</Button>
          </Link>
          <div className="flex lg:gap-6 gap-4">
            <a href="https://github.com/yudhafrebian" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <RiGithubFill
                className="hover:scale-125 duration-200 ease-out lg:w-9 lg:h-9 h-7 w-7"
                color="white"
              />
            </a>
            <a href="https://www.linkedin.com/in/ananda-yudha-382533190/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <RiLinkedinBoxFill
                className="hover:scale-125 duration-200 ease-out lg:w-9 lg:h-9 h-7 w-7"
                color="white"
              />
            </a>
            <a href="https://www.instagram.com/yudha_frebian/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <RiInstagramFill
                className="hover:scale-125 duration-200 ease-out lg:w-9 lg:h-9 h-7 w-7"
                color="white"
              />
            </a>
            <a href="https://wa.me/6289637663755" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <RiWhatsappFill
                className="hover:scale-125 duration-200 ease-out lg:w-9 lg:h-9 h-7 w-7"
                color="white"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-custom2 lg:h-custom2 w-60 h-60 rounded-full bg-white relative overflow-hidden">
        <Image
          className="absolute h-full w-full object-contain object-center top-2"
          src="/assets/profile-pic.png"
          alt="Profile Picture of Yudha"
          width={500}
          height={500}
          priority
        />
      </div>
    </section>
  );
}
