import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FiDatabase } from "react-icons/fi";
import { IoIosColorPalette } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex flex-col h-skills bg-gradient-to-br from-gray-700 to-zinc-900 p-24"
    >
      <h1 className="font-montserrat font-bold text-3xl text-white underline text-center mb-9">
        My Skills
      </h1>
      <div className="flex justify-center gap-4">
        <Card className="w-80 h-52 bg-white">
          <CardHeader className="p-4">
            <CardTitle>
              <LiaLaptopCodeSolid color="#652CEA" size={60} />
              <p className="text-slate-700">Front-End</p>
            </CardTitle>
            <CardContent className="text-slate-700 font-medium">
              <p>Technologies Used :</p>
              <div className="flex items-center gap-2 my-4">
                <img src="\assets\Html 5.png" />
                <img src="\assets\CSS3.png" />
                <img src="\assets\React Native.png" />
                <img className="h-5" src="\assets\Next.js 1.png" />
              </div>
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="w-80 h-52 bg-white">
          <CardHeader className="p-4">
            <CardTitle>
              <FiDatabase color="#652CEA" size={60} />
              <p className="text-slate-700">Back-End</p>
            </CardTitle>
            <CardContent className="text-slate-700 font-medium">
              <p>Technologies Used :</p>
              <div className="flex items-center gap-2 my-4">
                <img src="\assets\Nodejs.png" />
                <img src="\assets\Express js.png" />
              </div>
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="w-80 h-52 bg-white">
          <CardHeader className="p-4">
            <CardTitle>
              <IoIosColorPalette color="#652CEA" size={60} />
              <p className="text-slate-700">UI/UX Design</p>
            </CardTitle>
            <CardContent className="text-slate-700 font-medium">
              <p>Technologies Used :</p>
              <div className="flex items-center gap-2 my-4">
                <img src="\assets\Figma.png" />
              </div>
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="w-80 h-52 bg-white">
          <CardHeader className="p-4">
            <CardTitle>
              <FaGithub color="#652CEA" size={60} />
              <p className="text-slate-700">DevOps</p>
            </CardTitle>
            <CardContent className="text-slate-700 font-medium">
              <p>Technologies Used :</p>
              <div className="flex items-center gap-2 my-4">
                <img src="\assets\Github.png" />
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
