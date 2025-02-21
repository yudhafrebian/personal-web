import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { SlUser, SlRocket } from "react-icons/sl";
import { FaCode } from "react-icons/fa";

export default function AboutMeSection() {
  return (
    <section
      id="about-me"
      className="flex flex-col justify-center h-about bg-gradient-to-bl from-zinc-800 to-zinc-900 p-24"
    >
      <h1 className="font-montserrat font-bold text-3xl text-white underline text-center mb-9">
        About Me
      </h1>
      <div className="flex justify-center gap-12">
        <Card className="w-cardlg h-cardlg px-9 py-7 bg-card">
          <CardHeader>
            <CardTitle>
              <SlUser size={60} color="#652CEA" />
              <p>Brief Bio</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I am a web developer with a background in information technology
              and experience in building responsive and modern web applications.
              My passion for web development started with a curiosity about how
              technology can simplify everyday life. With a strong eagerness to
              learn, I continuously enhance my skills through various projects
              and by staying updated with the latest advancements in the
              industry.
            </p>
          </CardContent>
        </Card>
        <Card className="w-cardlg h-cardlg px-9 py-7 bg-card">
          <CardHeader>
            <CardTitle>
              <FaCode size={60} color="#652CEA" />
              <p>Core Skills</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              My core skills include JavaScript for dynamic applications, React
              and Next.js for high-performance interfaces, and HTML, CSS, and
              Tailwind CSS for responsive, clean designs. I also use Node.js to
              build scalable server-side applications, delivering seamless and
              optimized web solutions. Additionally, I focus on writing clean,
              maintainable code and continuously learning new technologies to
              stay updated with industry trends.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex mt-12 justify-center">
        <Card className="w-cardlg h-cardlg px-9 py-7 bg-card">
          <CardHeader>
            <CardTitle>
              <SlRocket size={60} color="#652CEA" />
              <p>Key Values</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              My key values center around delivering high-quality work with a
              strong commitment to timeliness, ensuring that projects are
              completed on schedule. I pay close attention to detail,
              maintaining clean, efficient, and maintainable code. Clear and
              transparent communication is also a priority, as I believe
              collaboration and understanding are essential for successful
              project outcomes.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
