import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FaUserCircle } from "react-icons/fa";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="flex flex-col h-testi bg-gradient-to-bl from-zinc-800 to-zinc-900 p-24"
    >
      <h1 className="font-montserrat font-bold text-3xl text-white underline text-center mb-9">
        Testimonials
      </h1>
      <div className="flex justify-center gap-6">
        <Card className="w-cardlg h-72 bg-card p-6">
          <CardHeader>
            <CardTitle>
              <FaUserCircle size={24} />
              <p>Siti Aisyah</p>
            </CardTitle>
            <CardDescription>
              <p className="italic">Owner of Aroma Bumi Cafe</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-montserrat italic text-sm font-medium">
              "Collaborating on the development of the Aroma Bumi Cafe website
              was truly an amazing experience! The website perfectly captures
              the essence of our brand—natural, eco-friendly, and full of
              warmth. The clean and user-friendly design makes it easier for our
              customers to order their favorite menu items online from the
              comfort of their homes. The final result exceeded my expectations,
              and the feedback from our customers has been overwhelmingly
              positive. Thank you for helping bring Aroma Bumi to the next level
              digitally!"
            </p>
          </CardContent>
        </Card>
        <div>
          <Card className="w-80 h-72 bg-card p-6">
            <CardHeader>
              <CardTitle>
                <FaUserCircle size={24} />
                <p>Laura</p>
              </CardTitle>
              <CardDescription>
                <p className="italic">Customer</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-montserrat italic text-sm font-medium">
                "Aroma Bumi Cafe is my favorite spot! The cozy vibe,
                eco-friendly concept, and delicious menu never disappoint. Their
                new website makes ordering super easy and fast. I love how
                everything feels so thoughtful, both in the cafe and online.
                Highly recommend!"
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
