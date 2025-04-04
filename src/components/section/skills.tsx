import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FiDatabase } from "react-icons/fi";
import { IoIosColorPalette } from "react-icons/io";
import { FaGithub, FaHtml5, FaCss3Alt, FaReact, FaNode, FaFigma, FaGithubAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiExpress } from "react-icons/si";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex flex-col bg-gradient-to-br from-gray-700 to-zinc-900 lg:p-24 p-8"
    >
      <h1 className="font-montserrat font-bold lg:text-3xl text-xl text-white underline text-center mb-9">
        My Skills
      </h1>

      <div className="flex lg:flex-row flex-col justify-center gap-4">
        {/* Front-End Card */}
        <Card className="lg:w-80 lg:h-52 bg-white">
          <CardHeader className="p-4">
            <CardTitle className="flex items-center gap-4">
              <LiaLaptopCodeSolid className="lg:w-16 lg:h-16 w-10 h-10 text-purple-600" aria-label="Front-End Icon" />
              <p className="text-slate-700 lg:text-2xl text-xl">Front-End</p>
            </CardTitle>
            <CardContent className="text-slate-700 font-medium">
              <p>Technologies Used:</p>
              <div className="flex items-center gap-2 lg:my-4 my-2">
                <FaHtml5 size={36} aria-label="HTML5 Icon" />
                <FaCss3Alt size={36} aria-label="CSS3 Icon" />
                <FaReact size={36} aria-label="React Icon" />
                <RiTailwindCssFill size={36} aria-label="Tailwind CSS Icon" />
                <SiNextdotjs size={36} aria-label="Next.js Icon" />
              </div>
            </CardContent>
          </CardHeader>
        </Card>

        {/* Back-End Card */}
        <Card className="lg:w-80 lg:h-52 bg-white">
          <CardHeader className="p-4">
            <CardTitle className="flex items-center gap-4">
              <FiDatabase className="lg:w-16 lg:h-16 w-10 h-10 text-purple-600" aria-label="Back-End Icon" />
              <p className="text-slate-700 lg:text-2xl text-xl">Back-End</p>
            </CardTitle>
            <CardContent className="text-slate-700 font-medium">
              <p>Technologies Used:</p>
              <div className="flex items-center gap-2 lg:my-4 my-2">
                <FaNode size={36} aria-label="Node.js Icon" />
                <SiExpress size={36} aria-label="Express.js Icon" />
              </div>
            </CardContent>
          </CardHeader>
        </Card>

        {/* UI/UX Design Card */}
        <Card className="lg:w-80 lg:h-52 bg-white">
          <CardHeader className="p-4">
            <CardTitle className="flex items-center gap-4">
              <IoIosColorPalette className="lg:w-16 lg:h-16 w-10 h-10 text-purple-600" aria-label="UI/UX Icon" />
              <p className="text-slate-700 lg:text-2xl text-xl">UI/UX Design</p>
            </CardTitle>
            <CardContent className="text-slate-700 font-medium">
              <p>Technologies Used:</p>
              <div className="flex items-center gap-2 lg:my-4 my-2">
                <FaFigma size={36} aria-label="Figma Icon" />
              </div>
            </CardContent>
          </CardHeader>
        </Card>

        {/* DevOps Card */}
        <Card className="lg:w-80 lg:h-52 bg-white">
          <CardHeader className="p-4">
            <CardTitle className="flex items-center gap-4">
              <FaGithub className="lg:w-16 lg:h-16 w-10 h-10 text-purple-600" aria-label="DevOps Icon" />
              <p className="text-slate-700 lg:text-2xl text-xl">DevOps</p>
            </CardTitle>
            <CardContent className="text-slate-700 font-medium">
              <p>Technologies Used:</p>
              <div className="flex items-center gap-2 lg:my-4 my-2">
                <FaGithubAlt size={36} aria-label="GitHub Icon" />
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
