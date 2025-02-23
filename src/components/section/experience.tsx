import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="flex flex-col bg-gradient-to-br from-gray-700 to-zinc-900 lg:p-24 p-8"
    >
      <h1 className="font-montserrat font-bold lg:text-3xl text-xl text-white underline text-center mb-9">
        Experience
      </h1>

      <div className="flex lg:flex-row flex-col justify-center lg:gap-12 gap-6">
        {/* UI/UX Designer Card */}
        <Card className="lg:w-cardmd2 lg:h-cardmd2 lg:p-8 p-4 bg-card">
          <CardHeader className="text-center">
            <CardTitle className="m-auto">
              <span className="font-semibold lg:text-2xl text-lg">
                UI/UX Designer
              </span>
            </CardTitle>
            <CardDescription>
              <p className="font-medium lg:text-xl text-white">
                At{" "}
                <span className="text-orange-600">PT Inovasi Solusi Muda</span>
              </p>
              <p className="lg:text-sm text-xs text-white">2023 - Present</p>
            </CardDescription>
          </CardHeader>

          <CardContent className="lg:text-sm text-xs text-white">
            <p className="mb-2">
              As a UI/UX Designer for the HR Management web application at PT
              Inovasi Solusi Muda, my responsibilities include:
            </p>
            <ul className="list-disc ml-5">
              <li className="mb-1">
                Creating wireframes, prototypes, and user flows to guide the
                development process.
              </li>
              <li className="mb-1">
                Designing intuitive, responsive, and visually appealing
                interfaces for the web application.
              </li>
              <li className="mb-1">
                Collaborating with cross-functional teams, including developers
                and product managers, to implement design solutions.
              </li>
              <li className="mb-1">
                Conducting usability testing and gathering feedback to iterate
                and improve designs.
              </li>
              <li className="mb-1">
                Ensuring design consistency with the company's branding and
                industry standards.
              </li>
              <li>
                Utilizing design tools such as Figma to craft detailed UI
                components.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Front-End Developer Card */}
        <Card className="lg:w-cardmd2 lg:h-cardmd2 lg:p-8 p-4 bg-card">
          <CardHeader className="text-center">
            <CardTitle className="m-auto">
              <span className="font-semibold lg:text-2xl text-lg">
                Front-End Developer
              </span>
            </CardTitle>
            <CardDescription>
              <p className="font-medium lg:text-xl text-white">
                At{" "}
                <span className="text-orange-600">PT Inovasi Solusi Muda</span>
              </p>
              <p className="lg:text-sm text-xs text-white">2023 - Present</p>
            </CardDescription>
          </CardHeader>

          <CardContent className="lg:text-sm text-xs text-white">
            <p className="mb-2">
              As a Front-End Developer for the HR Management web application at
              PT Inovasi Solusi Muda, my responsibilities include:
            </p>
            <ul className="list-disc ml-5">
              <li className="mb-1">
                Developing responsive web interfaces using React.
              </li>
              <li className="mb-1">
                Implementing interactive features to enhance user experience.
              </li>
              <li className="mb-1">
                Collaborating with UI/UX designers to translate designs into
                functional code.
              </li>
              <li className="mb-1">
                Ensuring cross-browser compatibility and performance
                optimization.
              </li>
              <li className="mb-1">
                Utilizing frameworks like React and Next.js for efficient
                component-based development.
              </li>
              <li>Maintaining clean, maintainable, and reusable code.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
