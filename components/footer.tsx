"use client";
import Image from "next/image";
import Link from "next/link";
import { SparklesCore } from "./ui/sparkles";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Projects",
    href: "#projects",
  },
];

const services = [
  {
    id: 1,
    title: "Website Development",
  },
  {
    id: 2,
    title: "E-Commerce Development",
  },
  {
    id: 3,
    title: "UI/UX Design",
  },
];

const Footer = () => {
  const logoRef = useRef(null);
  const descRef = useRef(null);
  const linkGroupsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: logoRef.current,
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
      linkGroupsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: linkGroupsRef.current[0],
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <footer className="dark:border-t mt-40 dark bg-background text-foreground">
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:grid lg:grid-cols-5">
          <div className="lg:col-span-2 flex flex-col justify-center space-y-4">
            <div ref={logoRef}>
              <Image
                src="/full_logo_white.png"
                alt="Brand Logo"
                width={150}
                height={150}
                priority
              />
              <div className="w-40 h-10 relative">
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-px w-1/4" />

                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />

                <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>
            <p ref={descRef} className="text-gray-700 dark:text-gray-300">
              ZeroOnee is a dynamic web and app development team driven by a
              passion for innovation, design, and technology.
            </p>
            <p className="text-gray-700 dark:text-white flex items-center gap-2">
              <span className="text-gray-700 dark:text-gray-400">Email:</span>
              <Link href="mailto:admin@zeroonee.com" target="_blank">
                admin@zeroonee.com
              </Link>
            </p>
          </div>

          <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div ref={el => { linkGroupsRef.current[0] = el; }}>
                <p className="font-medium text-gray-900 dark:text-white">
                  Services
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  {services.map((service) => (
                    <li key={service.id}>
                      <Link
                        className="text-gray-700 dark:text-white transition hover:opacity-75"
                        href="#"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div ref={el => { linkGroupsRef.current[1] = el; }}>
                <p className="font-medium text-gray-900 dark:text-white">
                  Quick Links
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  {footerLinks.map((footerLink) => (
                    <li key={footerLink.title}>
                      <Link
                        className="text-gray-700 dark:text-white transition hover:opacity-75"
                        href={footerLink.href}
                      >
                        {footerLink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-gray-100 pt-12">
              <div className="sm:flex sm:items-center sm:justify-between">
                <ul className="flex flex-wrap gap-4 text-xs">
                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-500 dark:text-white transition hover:opacity-75"
                    >
                      {" "}
                      Terms & Conditions{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-500 dark:text-white transition hover:opacity-75"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </Link>
                  </li>
                </ul>

                <p className="mt-8 text-xs text-gray-500 dark:text-white sm:mt-0">
                  &copy; 2025 ZeroOnee. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
