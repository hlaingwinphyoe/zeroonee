"use client";
import React, { useRef, useEffect } from "react";
import ShinyText from "./ui/shiny-text";
import { Facebook, Mail, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const contactList = [
  {
    id: 1,
    title: "Facebook",
    icon: <Facebook className="h-10 w-10" />,
    link: "https://www.facebook.com/profile.php?id=61575649200750",
    desc: "Find us on social media",
  },
  {
    id: 2,
    title: "admin@zeroonee.com",
    icon: <Mail className="h-10 w-10" />,
    link: "mailto:admin@zeroonee.com",
    desc: "Chat with us",
  },
  {
    id: 3,
    title: "+66944912812",
    icon: <Phone className="h-10 w-10" />,
    link: "tel:+66944912812",
    desc: "Give us a ring",
  },
];

const Contact = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div id="contact" className="max-w-screen-lg mx-auto flex justify-center items-center py-20">
      <div className="h-full w-full text-center">
        <div className="shiny-container">
          <ShinyText text="Contact Us" speed={3} />
        </div>
        <h2 ref={titleRef} className="my-6 text-4xl md:text-5xl font-bold text-center tracking-tight px-6 capitalize">
          Get in touch with us
        </h2>
        <p ref={descRef} className="mb-20 text-foreground/70">
          We are here to help you with any questions or inquiries you may have.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contactList.map((caItem, i) => (
            <div key={caItem.id} ref={el => { cardsRef.current[i] = el; }}>
              <div className="flex items-center justify-center">
                {caItem.icon}
              </div>
              <h1 className="my-4 text-foreground/80 text-sm">{caItem.desc}</h1>
              <Link target="_blank" href={caItem.link} className="mt-1 font-bold text-[15px]">
                {caItem.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
