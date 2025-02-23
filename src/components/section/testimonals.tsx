import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FaUserCircle } from "react-icons/fa";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="flex flex-col bg-gradient-to-bl from-zinc-800 to-zinc-900 lg:p-24 p-8"
    >
      <h1 className="font-montserrat font-bold lg:text-3xl text-xl text-white underline text-center mb-9">
        Testimonials
      </h1>

      <div className="lg:grid-areas-layout grid-areas-layout-mobile sm:flex sm:flex-col gap-6">
        <Card className="grid-card-1 bg-card p-6">
          <CardHeader>
            <CardTitle className="lg:text-2xl text-lg flex items-center gap-2">
              <FaUserCircle size={24} aria-label="Siti Aisyah" />
              <span>Siti Aisyah</span>
            </CardTitle>
            <CardDescription className="lg:text-sm text-xs italic">
              Owner of Aroma Bumi Cafe
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-montserrat italic lg:text-sm text-xs font-medium text-gray-100 text-opacity-70">
              &quot;Collaborating on the development of the Aroma Bumi Cafe website
              was truly an amazing experience! The website perfectly captures
              the essence of our brand—natural, eco-friendly, and full of
              warmth. The clean and user-friendly design makes it easier for our
              customers to order their favorite menu items online from the
              comfort of their homes. The final result exceeded my expectations,
              and the feedback from our customers has been overwhelmingly
              positive. Thank you for helping bring Aroma Bumi to the next level
              digitally!&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="grid-card-2 bg-card lg:p-6 p-3">
          <CardHeader>
            <CardTitle className="lg:text-2xl text-lg flex items-center gap-2">
              <FaUserCircle size={24} aria-label="Clara" />
              <span>Clara</span>
            </CardTitle>
            <CardDescription className="lg:text-sm text-xs italic">
              Customer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-montserrat italic lg:text-sm text-xs font-medium text-gray-100 text-opacity-70">
              &quot;Finally, a caf&eacute; website that&rsquo;s easy to navigate! I can check the
              menu, order for delivery, and even find special promotions right
              on the homepage. It&rsquo;s been a game-changer for our weekend family
              brunches!&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="grid-card-3 bg-card lg:p-6 p-3">
          <CardHeader>
            <CardTitle className="lg:text-2xl text-lg flex items-center gap-2">
              <FaUserCircle size={24} aria-label="Amanda" />
              <span>Amanda</span>
            </CardTitle>
            <CardDescription className="lg:text-sm text-xs italic">
              Customer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-montserrat italic lg:text-sm text-xs font-medium text-gray-100 text-opacity-70">
              &quot;I love how easy it is to browse the Aroma Bumi website! The menu
              is well-organized, and I can now pre-order my favorite coffee
              before heading to the caf&eacute;. The website&apos;s design is simple but
              beautiful—just like the caf&eacute; itself!&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="grid-card-4 bg-card lg:p-6 p-3">
          <CardHeader>
            <CardTitle className="lg:text-2xl text-lg flex items-center gap-2">
              <FaUserCircle size={24} aria-label="Rina Kartika" />
              <span>Rina Kartika</span>
            </CardTitle>
            <CardDescription className="lg:text-sm text-xs italic">
              Customer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-montserrat italic lg:text-sm text-xs font-medium text-gray-100 text-opacity-70">
              &quot;The new Aroma Bumi website has made my coffee runs so much
              easier! I love how simple it is to browse the menu and customize
              my orders. The checkout process is quick, and I even get updates
              on my order status in real-time. The website really captures the
              cozy vibe of the caf&eacute; while offering a smooth online experience.
              Now I can pre-order my coffee before heading to the caf&eacute; and skip
              the waiting time!&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="grid-card-5 bg-card p-6">
          <CardHeader>
            <CardTitle className="lg:text-2xl text-lg flex items-center gap-2">
              <FaUserCircle size={24} aria-label="Laura" />
              <span>Laura</span>
            </CardTitle>
            <CardDescription className="lg:text-sm text-xs italic">
              Customer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-montserrat italic lg:text-sm text-xs font-medium text-gray-100 text-opacity-70">
              &quot;As someone who frequently orders coffee while working from home,
              the new Aroma Bumi website has been a total game-changer. The
              intuitive layout makes it incredibly easy to browse through the
              menu, customize my order, and check out—all in just a few clicks.
              I especially love how the website reflects the caf&eacute;&rsquo;s cozy and
              eco-conscious vibe, from the earthy color scheme to the subtle
              design touches. Plus, the responsive design means I can order just
              as easily from my phone when I&rsquo;m on the go.&quot;
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
