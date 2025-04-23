"use client";
import React from "react";
import ShinyText from "./ui/shiny-text";
import { Facebook, Mail, Phone } from "lucide-react";
import Link from "next/link";

const contactList = [
  {
    id: 1,
    title: "Facebook",
    icon: <Facebook className="h-10 w-10" />,
    link: "https://www.facebook.com/yourpage",
    desc: "Find us on social media",
  },
  {
    id: 2,
    title: "zeroonee@gmail.com",
    icon: <Mail className="h-10 w-10" />,
    link: "mailto:zeroonee@gmail.com",
    desc: "Chat with us",
  },
  {
    id: 3,
    title: "+66944912812",
    icon: <Phone className="h-10 w-10" />,
    link: "tel:+66944912812",
    desc: "Give us a ring"
  },
];

const Contact = () => (
  <div id="contact" className="max-w-screen-lg mx-auto flex justify-center items-center py-20">
    <div className="h-full w-full text-center">
        <div className="shiny-container">
            <ShinyText text="Contact Us" speed={3} />
        </div>
        <h2 className="my-6 text-4xl md:text-5xl font-bold text-center tracking-tight px-6 capitalize">
            Get in touch with us
        </h2>
        <p className="mb-20 text-foreground/70">
            We are here to help you with any questions or inquiries you may have.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ServiceCardList />
        </div> 
    </div>
  </div>
);

const ServiceCardList = () =>
  contactList.map((caItem) => (
    <div key={caItem.id}>
        <div className="flex items-center justify-center">
             {caItem.icon}
        </div>
        <h1 className="my-4 text-foreground/80 text-sm">{caItem.desc}</h1>
        <Link href={caItem.link} className="mt-1 font-bold text-[15px]">
            {caItem.title}
        </Link>
    </div>
  ));

export default Contact;
