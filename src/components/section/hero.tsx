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
      className="flex lg:flex-row sm:flex-col-reverse justify-between items-center h-custom1 bg-gradient-to-br from-gray-700 to-zinc-900 px-24 pt-20 "
    >
      <div className="w-3/5">
        <h1 className="font-montserrat text-white font-semibold text-6xl mb-1">
          I&apos;m <span className="text-orange-600">Yudha!</span>
        </h1>
        <h1 className="font-montserrat text-orange-600 font-semibold text-6xl mb-9">
          A Full-Stack Developer
        </h1>
        <p className="font-roboto w-3/4 text-white font-medium text-xl mb-9">
          &quot;Hi, I&apos;m Yudha, a Junior Fullstack Developer with a passion for
          building scalable and efficient web applications. I specialize in
          JavaScript, Next, and Node.js, creating seamless user experiences from
          front-end to back-end. Excited to collaborate on innovative projects!&quot;
        </p>
        <div className="flex items-center gap-12">
          <Link href="/#contact-me">
            <Button size="lg">Contact Me</Button>
          </Link>
          <div className="flex gap-6">
            <a href="https://github.com/yudhafrebian" target="_blank" rel="noopener noreferrer">
              <RiGithubFill
                className="hover:scale-125 duration-200 ease-out"
                color="white"
                size={36}
              />
            </a>
            <a href="https://www.linkedin.com/in/ananda-yudha-382533190/" target="_blank" rel="noopener noreferrer">
              <RiLinkedinBoxFill
                className="hover:scale-125 duration-200 ease-out"
                color="white"
                size={36}
              />
            </a>
            <a href="https://www.instagram.com/yudha_frebian/" target="_blank" rel="noopener noreferrer">
              <RiInstagramFill
                className="hover:scale-125 duration-200 ease-out"
                color="white"
                size={36}
              />
            </a>
            <a href="https://wa.me/6289637663755" target="_blank" rel="noopener noreferrer">
              <RiWhatsappFill
                className="hover:scale-125 duration-200 ease-out"
                color="white"
                size={36}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-custom2 h-custom2 rounded-full bg-white relative overflow-hidden">
        <Image
          className="absolute h-full w-full object-contain object-center top-2"
          src="/assets/profile-pic.png"
          alt="Profile Picture"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
