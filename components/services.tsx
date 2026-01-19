"use client";
import React, { useRef, useEffect } from "react";
import {
  Code,
  Smartphone,
  Database,
  Cpu,
  BarChart3,
  Users,
} from "lucide-react";
import ShinyText from "./ui/shiny-text";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagicBento, { BentoCardProps } from "./ui/magic-bento";
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const services: BentoCardProps[] = [
    {
      title: "E-commerce Setup",
      label: "E-Commerce",
      description:
        "Launch a secure, user-friendly online store with inventory management, and customer checkout experience.",
      icon: <BarChart3 className="w-6 h-6 text-gray-400" />,
    },
    {
      title: "Responsive Design",
      label: "Design",
      description:
        "Adapts flawlessly to any screen size—desktop, tablet, or mobile—ensuring a seamless user experience across all devices.",
      icon: <Smartphone className="w-6 h-6 text-gray-400" />,
    },
    {
      title: "Custom Website Development",
      label: "Development",
      description: (
        <ul className="list-disc leading-8 pl-5 text-muted-foreground space-y-1 mt-1">
          <li>Modern, clean visual design with custom branding</li>
          <li>Improved navigation and user experience</li>
          <li>Faster load times and better performance</li>
          <li>SEO and analytics optimization</li>
          <li>Mobile-friendly and accessible design</li>
          <li>Designed to increase leads, sales, and engagement</li>
          <li>Ongoing support and maintenance included</li>
        </ul>
      ),
      icon: <Code className="w-6 h-6 text-gray-400" />,
    },
    {
      title: "Website Redesign",
      label: "Optimization",
      description: (
        <ul className="list-disc leading-8 pl-5 text-muted-foreground space-y-1 mt-1">
          <li>Transform outdated designs into modern aesthetics</li>
          <li>Improved navigation and user experience</li>
          <li>Faster load times and better performance</li>
          <li>SEO and analytics optimization</li>
          <li>Mobile-friendly and accessible layout</li>
          <li>Designed to increase leads, sales, and engagement</li>
          <li>Complete brand refresh and visual identity update</li>
        </ul>
      ),
      icon: <Cpu className="w-6 h-6 text-gray-400" />,
    },
    {
      title: "Landing Pages",
      label: "Marketing",
      description:
        "Converting landing pages with compelling layouts, clear calls-to-action, and optimized to turn visitors into loyal customers.",
      icon: <Users className="w-6 h-6 text-gray-400" />,
    },
    {
      title: "CMS Integration",
      label: "Content",
      description:
        "Easily manage your website content with headless CMS—update text, images, and blog posts anytime.",
      icon: <Database className="w-6 h-6 text-gray-400" />,
    },
  ];

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const bentoRef = useRef<HTMLDivElement>(null);

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
      },
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
      },
    );
    gsap.fromTo(
      bentoRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bentoRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <section
      id="services"
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="shiny-container">
            <ShinyText text="Our Services" speed={3} />
          </div>
          <h2
            ref={titleRef}
            className="my-4 sm:my-6 text-3xl sm:text-4xl md:text-5xl font-bold text-center tracking-tight px-4 sm:px-6"
          >
            Digital Solutions
          </h2>
          <p
            ref={descRef}
            className="text-base sm:text-lg mb-16 sm:mb-20 text-foreground/70 px-4"
          >
            Digital solutions for every business need, crafted with precision
            and innovation.
          </p>
        </div>
        {/* Magic Bento Grid */}
        <div ref={bentoRef} className="flex justify-center">
          <MagicBento
            cards={services}
            textAutoHide={false}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="128, 128, 128"
            disableAnimations={false}
          />
        </div>
      </div>
    </section>
  );
}
