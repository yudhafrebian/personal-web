import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FiDatabase } from "react-icons/fi";
import { IoIosColorPalette } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

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
                <img className="lg:w-12 lg:h-12 w-10 h-10" src="/assets/Html 5.png" alt="HTML5 Logo" />
                <img className="lg:w-12 lg:h-12 w-10 h-10" src="/assets/CSS3.png" alt="CSS3 Logo" />
                <img className="lg:w-12 lg:h-12 w-10 h-10" src="/assets/React Native.png" alt="React Native Logo" />
                <img className="lg:h-5 h-4" src="/assets/Next.js 1.png" alt="Next.js Logo" />
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
                <img className="lg:w-12 lg:h-12 w-10 h-10" src="/assets/Nodejs.png" alt="Node.js Logo" />
                <img className="lg:w-12 lg:h-12 w-10 h-10" src="/assets/Express js.png" alt="Express.js Logo" />
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
                <img className="lg:w-12 lg:h-12 w-10 h-10" src="/assets/Figma.png" alt="Figma Logo" />
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
                <img className="lg:w-12 lg:h-12 w-10 h-10" src="/assets/Github.png" alt="GitHub Logo" />
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
