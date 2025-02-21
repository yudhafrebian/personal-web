import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ContactMeSection() {
  return (
    <section
      id="contact-me"
      className="flex flex-col h-contact bg-gradient-to-br from-gray-700 to-zinc-900 p-24"
    >
      <h1 className="font-montserrat font-bold text-3xl text-white underline text-center mb-9">
        Contact Me
      </h1>
      <form
        action="https://formspree.io/f/mjkglyod"
        method="POST"
        className="flex flex-col justify-center w-custom1 mx-auto outline rounded-md outline-white  p-8"
      >
        <div className="flex justify-between gap-8">
          <div className="w-72">
            <Label htmlFor="name">Name</Label>
            <Input name="name" type="text" placeholder="Input Your Name Here" required/>
          </div>
          <div className="w-72">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="Input Your Email Here"
              required
            />
          </div>
        </div>
        <div className="flex justify-between gap-8 mt-6">
          <div className="w-72">
            <Label htmlFor="phone">Phone</Label>
            <Input
              name="phone"
              type="number"
              placeholder="Input Your Phone Number Here"
            />
          </div>
          <div className="w-72">
            <Label htmlFor="subject">Subject</Label>
            <Input
              name="subject"
              type="text"
              placeholder="Input Your Subject Here"
            />
          </div>
        </div>
        <div className="mt-6">
          <Label htmlFor="message">Message</Label>
          <Textarea name="message" placeholder="Input Your Message Here"/>
        </div>
        <div className="mx-auto mt-6">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </section>
  );
}
