import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ContactMeSection() {
  return (
    <section
      id="contact-me"
      className="flex flex-col bg-gradient-to-br from-gray-700 to-zinc-900 lg:p-24 p-8"
    >
      <h1 className="font-montserrat font-bold lg:text-3xl text-xl text-white underline text-center mb-9">
        Contact Me
      </h1>
      <form
        action="https://formspree.io/f/mjkglyod"
        method="POST"
        className="flex flex-col justify-center mx-auto outline rounded-md outline-white lg:p-8 p-4"
      >
  
        <div className="flex lg:flex-row flex-col justify-between lg:gap-8 gap-4">
          <div className="lg:w-72 w-60">
            <Label className="lg:text-sm text-xs" htmlFor="name">
              Name
            </Label>
            <Input
              className="lg:placeholder:text-sm placeholder:text-xs"
              id="name"
              name="name"
              type="text"
              placeholder="What's your name?"
              required
              autoComplete="name"
              aria-label="Your name"
            />
          </div>
          <div className="lg:w-72 w-60">
            <Label className="lg:text-sm text-xs" htmlFor="email">
              Email
            </Label>
            <Input
              className="lg:placeholder:text-sm placeholder:text-xs"
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              required
              autoComplete="email"
              aria-label="Your email"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between lg:gap-8 gap-4 lg:mt-6 mt-4">
          <div className="lg:w-72 w-60">
            <Label className="lg:text-sm text-xs" htmlFor="phone">
              Phone <span className="text-gray-400">(optional)</span>
            </Label>
            <Input
              className="lg:placeholder:text-sm placeholder:text-xs"
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your contact number"
              autoComplete="tel"
              aria-label="Your phone number"
            />
          </div>
          <div className="lg:w-72 w-60">
            <Label className="lg:text-sm text-xs" htmlFor="subject">
              Subject
            </Label>
            <Input
              className="lg:placeholder:text-sm placeholder:text-xs"
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              aria-label="Subject of your message"
            />
          </div>
        </div>

        <div className="mt-6">
          <Label className="lg:text-sm text-xs" htmlFor="message">
            Message
          </Label>
          <Textarea
            className="lg:placeholder:text-sm placeholder:text-xs"
            id="message"
            name="message"
            placeholder="Tell me more about your project or idea..."
            required
            aria-label="Your message"
          />
        </div>

        <div className="mx-auto mt-6">
          <Button type="submit" aria-label="Submit your message">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}
