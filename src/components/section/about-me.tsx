import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { SlUser, SlRocket } from "react-icons/sl";
import { FaCode } from "react-icons/fa";

export default function AboutMeSection() {
  return (
    <section
      id="about-me"
      className="flex flex-col justify-center bg-gradient-to-bl from-zinc-800 to-zinc-900 lg:p-24 p-8"
    >
      <h1 className="font-montserrat font-bold lg:text-3xl text-xl text-white underline text-center mb-9">
        About Me
      </h1>

      {/* Cards for Bio and Skills */}
      <div className="flex lg:flex-row flex-col justify-center gap-12">
        {/* Brief Bio Card */}
        <Card className="lg:w-cardlg lg:h-cardlg lg:px-9 lg:py-7 p-5 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <SlUser
                className="lg:w-16 lg:h-16 w-10 h-10 text-purple-600"
                aria-label="User Icon"
              />
              <p className="lg:text-2xl text-xl">Brief Bio</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="lg:text-sm text-xs text-muted-foreground">
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

        {/* Core Skills Card */}
        <Card className="lg:w-cardlg lg:h-cardlg lg:px-9 lg:py-7 p-5 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <FaCode
                className="lg:w-16 lg:h-16 w-10 h-10 text-purple-600"
                aria-label="Code Icon"
              />
              <p className="lg:text-2xl text-xl">Core Skills</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="lg:text-sm text-xs text-muted-foreground">
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

      {/* Key Values Card */}
      <div className="flex mt-12 justify-center">
        <Card className="lg:w-cardlg lg:h-cardlg lg:px-9 lg:py-7 p-5 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <SlRocket
                className="lg:w-16 lg:h-16 w-10 h-10 text-purple-600"
                aria-label="Rocket Icon"
              />
              <p className="lg:text-2xl text-xl">Key Values</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="lg:text-sm text-xs text-muted-foreground">
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
