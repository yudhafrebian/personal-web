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
      className="h-portofolio bg-gradient-to-bl from-zinc-800 to-zinc-900 p-24"
    >
      <h1 className="font-montserrat font-bold text-3xl text-white underline text-center mb-9">
        Portofolio
      </h1>
      <Card className="w-cardxl h-cardxl p-9 m-auto bg-card">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between items-start gap-10">
              <div className="w-2/3">
                <h1>Aroma Bumi Cafe</h1>
                <div className="flex items-start mt-2 gap-2">
                  <p className="font-roboto font-extralight text-sm mt-2 text-orange-600">
                    Technologies :
                  </p>
                  <img src="\assets\Html 5.png" />
                  <img src="\assets\CSS3.png" />
                  <img src="\assets\Github.png" />
                </div>
                <p className="font-roboto text-sm font-light w-96 mt-7">
                  Project Aroma Bumi is a web platform that promotes
                  eco-friendly practices by providing accessible information and
                  encouraging community participation.
                </p>
              </div>
              <img src="\assets\project-portofolio.png" />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-7 mt-4">
            <Card className="w-cardmd h-cardmd p-4 outline outline-white">
              <CardHeader>
                <CardTitle>
                  <h1 className="font-bold text-xl">Situation</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-roboto text-xs">
                  The increasing need for accessible, engaging, and informative
                  platforms about sustainable living motivated the development
                  of Project Aroma Bumi. The platform aims to educate and
                  inspire the public to adopt greener lifestyles.
                </p>
              </CardContent>
            </Card>
            <Card className="w-cardmd h-cardmd p-4 outline outline-white">
              <CardHeader>
                <CardTitle>
                  <h1 className="font-bold text-xl">Task</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-roboto text-xs">
                  The primary goal was to design a clean, responsive, and
                  user-friendly website to share educational resources about
                  environmental care. The platform needed to be visually
                  appealing while ensuring optimal across devices.
                </p>
              </CardContent>
            </Card>
            <Card className="w-cardmd h-cardmd p-4 outline outline-white">
              <CardHeader>
                <CardTitle>
                  <h1 className="font-bold text-xl">Action</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-roboto text-xs">
                  I built a responsive front end with HTML and CSS, ensuring
                  compatibility across various devices. I optimized performance
                  for better experience by minimizing load times. I used GitHub
                  for version control, managing code efficiently and tracking
                  changes throughout development.
                </p>
              </CardContent>
            </Card>
            <Card className="w-cardmd h-cardmd p-4 outline outline-white">
              <CardHeader>
                <CardTitle>
                  <h1 className="font-bold text-xl">Result</h1>
                </CardTitle>
                <CardContent>
                  <p className="font-roboto text-xs">
                    The platform was successfully launched as a responsive and
                    user-friendly website, achieving a 40% increase in traffic
                    within the first month and receiving positive feedback for
                    its simplicity, performance, and educational value.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </CardContent>
        <CardFooter className="mt-6">
          <Link className="m-auto" href="https://yudhafrebian.github.io/project-aroma-bumi/" target="blank">
            <Button type="button" className="m-auto">
              Visit Project
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
