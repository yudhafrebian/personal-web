import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function PortofolioSection() {
  return (
    <section
      id="portofolio"
      className="bg-gradient-to-bl from-zinc-800 to-zinc-900 lg:p-24 p-8"
    >
      <h1 className="font-montserrat font-bold lg:text-3xl text-xl text-white underline text-center mb-9">
        Portofolio
      </h1>

      <Card className="lg:w-cardxl lg:h-cardxl w-full lg:p-9 p-4 m-auto bg-card">
        <CardHeader>
          <CardTitle>
            <div className="flex lg:flex-row flex-col-reverse justify-between items-start lg:gap-10 gap-4">
              <div className="w-2/3">
                <h1 className="lg:text-2xl text-xl">Aroma Bumi Cafe</h1>
                <div className="flex items-start lg:mt-2 gap-2">
                  <p className="font-roboto font-extralight text-sm text-orange-600">
                    Technologies:
                  </p>
                  <img
                    className="lg:w-12 lg:h-12 w-10 h-10"
                    src="/assets/Html 5.png"
                    alt="HTML5 Logo"
                  />
                  <img
                    className="lg:w-12 lg:h-12 w-10 h-10"
                    src="/assets/CSS3.png"
                    alt="CSS3 Logo"
                  />
                  <img
                    className="lg:w-12 lg:h-12 w-10 h-10"
                    src="/assets/Github.png"
                    alt="GitHub Logo"
                  />
                </div>
                <p className="font-roboto text-sm font-light lg:w-96 w-60 lg:mt-7 mt-4 text-white">
                  Project Aroma Bumi is a web platform that promotes
                  eco-friendly practices by providing accessible information and
                  encouraging community participation.
                </p>
              </div>
              <img
                className="w-full"
                src="/assets/project-portofolio.png"
                alt="Aroma Bumi Cafe Screenshot"
              />
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="lg:grid grid-cols-2 lg:gap-7 flex flex-col gap-4 lg:mt-4">
            {/* Situation Card */}
            <Card className="lg:w-cardmd lg:h-cardmd p-4 outline outline-white">
              <CardHeader>
                <CardTitle>
                  <h1 className="font-bold lg:text-xl text-lg">Situation</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-roboto text-xs text-white">
                  The increasing need for accessible, engaging, and informative
                  platforms about sustainable living motivated the development
                  of Project Aroma Bumi. The platform aims to educate and
                  inspire the public to adopt greener lifestyles.
                </p>
              </CardContent>
            </Card>

            {/* Task Card */}
            <Card className="lg:w-cardmd lg:h-cardmd p-4 outline outline-white">
              <CardHeader>
                <CardTitle>
                  <h1 className="font-bold text-xl">Task</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-roboto text-xs text-white">
                  The primary goal was to design a clean, responsive, and
                  user-friendly website to share educational resources about
                  environmental care. The platform needed to be visually
                  appealing while ensuring optimal performance across devices.
                </p>
              </CardContent>
            </Card>

            {/* Action Card */}
            <Card className="lg:w-cardmd lg:h-cardmd p-4 outline outline-white">
              <CardHeader>
                <CardTitle>
                  <h1 className="font-bold text-xl">Action</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-roboto text-xs text-white">
                  I built a responsive front end with HTML and CSS, ensuring
                  compatibility across various devices. I optimized performance
                  for better user experience by minimizing load times and used
                  GitHub for version control, managing code efficiently.
                </p>
              </CardContent>
            </Card>

            {/* Result Card */}
            <Card className="lg:w-cardmd lg:h-cardmd p-4 outline outline-white">
              <CardHeader>
                <CardTitle>
                  <h1 className="font-bold text-xl">Result</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-roboto text-xs text-white">
                  The platform was successfully launched as a responsive and
                  user-friendly website, achieving a 40% increase in traffic
                  within the first month and receiving positive feedback for its
                  simplicity, performance, and educational value.
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>

        <CardFooter className="mt-6">
          <Link
            className="m-auto"
            href="https://yudhafrebian.github.io/project-aroma-bumi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Aroma Bumi Project"
          >
            <Button type="button" className="m-auto">
              Visit Project
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
