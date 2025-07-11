"use client";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Code,
  Smartphone,
  Database,
  Cpu,
  BarChart3,
  Users,
} from "lucide-react";
import ShinyText from "./ui/shiny-text";
import SpotlightCard from "./ui/spotlight-card";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const services = [
    {
      title: "Custom Website Development",
      description: (
        <>
          <span className="block font-semibold mb-1">
            Professional, high-performance websites
          </span>
          <span className="block text-sm text-muted-foreground">
            Built for your business using modern technologies. Fast, flexible,
            and reliable—whether you need a business site or a custom web app.
          </span>
        </>
      ),
      icon: <Code className="w-8 h-8 text-primary" />,
      className: "col-span-1 row-span-1",
    },
    {
      title: "Responsive Design",
      description: (
        <>
          <span className="block font-semibold mb-1">
            Seamless experience on any device
          </span>
          <span className="block text-sm text-muted-foreground">
            Your site adapts perfectly to any screen size—desktop, tablet, or
            mobile.
          </span>
        </>
      ),
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      className: "col-span-1 row-span-1",
    },
    {
      title: "E-commerce Website Setup",
      description: (
        <>
          <span className="block font-semibold mb-1">
            Sell online with ease
          </span>
          <span className="block text-sm text-muted-foreground">
            Secure, user-friendly online stores with shopping carts, payment
            integration, and product management.
          </span>
        </>
      ),
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      className: "col-span-1 row-span-1",
    },
    {
      title: "Landing Page & Portfolio Sites",
      description: (
        <>
          <span className="block font-semibold mb-1">
            Showcase your brand or product
          </span>
          <span className="block text-sm text-muted-foreground">
            Beautiful, focused landing pages and portfolios designed to convert
            visitors into customers. We craft compelling layouts and clear
            calls-to-action to help you stand out and achieve your goals.
            Whether you need a single-page site for a campaign or a personal
            portfolio to highlight your work, we make sure your online presence
            leaves a lasting impression.
          </span>
        </>
      ),
      icon: <Users className="w-8 h-8 text-primary" />,
      className: "col-span-2 row-span-1",
    },
    {
      title: "Website Redesign & Optimization",
      description: (
        <>
          <span className="block font-semibold mb-1">
            Refresh and boost your site
          </span>
          <span className="block text-sm text-muted-foreground">
            Is your website looking outdated or not performing well? We
            transform old sites into modern, high-converting experiences.
          </span>
          <ul className="list-disc leading-7 pl-5 text-sm text-muted-foreground space-y-1 mt-1">
            <li>Modern, clean visual design</li>
            <li>Improved navigation and user experience</li>
            <li>Faster load times and better performance</li>
            <li>SEO and analytics optimization</li>
            <li>Mobile-friendly and accessible</li>
            <li>Designed to increase leads, sales, and engagement</li>
          </ul>
        </>
      ),
      icon: <Cpu className="w-8 h-8 text-primary" />,
      className: "col-span-1 row-span-2",
    },
    {
      title: "CMS Integration",
      description: (
        <>
          <span className="block font-semibold mb-1">
            Easy content management
          </span>
          <span className="block text-sm text-muted-foreground">
            Update your site&apos;s text, images, and blog posts anytime with
            WordPress or a headless CMS—no coding needed.
          </span>
        </>
      ),
      icon: <Database className="w-8 h-8 text-primary" />,
      className: "col-span-1 row-span-1",
    },
    {
      title: "Domain, Hosting & Deployment",
      description: (
        <>
          <span className="block font-semibold mb-1">
            Launch your site, stress-free
          </span>
          <span className="block text-sm text-muted-foreground">
            We handle domain registration, secure hosting, and deployment so
            your website is live and reliable.
          </span>
        </>
      ),
      icon: <Code className="w-8 h-8 text-primary" />,
      className: "col-span-1 row-span-1",
    },
  ];

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
    <section id="services" className="relative py-20 overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-black dark:via-black dark:to-black pointer-events-none" /> */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="shiny-container">
            <ShinyText text="Our Services" speed={3} />
          </div>
          <h2 ref={titleRef} className="my-6 text-4xl md:text-5xl font-bold text-center tracking-tight px-6">
            Digital Solutions
          </h2>
          <p ref={descRef} className="text-lg mb-20 text-foreground/70">
            Digital solutions for every business need, crafted with precision
            and innovation.
          </p>
        </div>
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(180px,1fr)] overflow-hidden">
          {services.map((service, i) => (
            <div key={service.title} ref={el => { cardsRef.current[i] = el; }} className={service.className}>
              <FeatureCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({
  title,
  description,
  icon,
  className,
}: {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const spotlightColor =
    resolvedTheme === "light"
      ? "rgba(0, 0, 0, 0.2)"
      : "rgba(249, 249, 249, 0.2)";
  return (
    <SpotlightCard
      spotlightColor={spotlightColor}
      className={cn(
        "flex flex-col items-start p-8 border border-neutral-400 dark:border-white/[0.1] transition-all duration-300 bg-transparent backdrop-blur-sm h-full min-h-[180px] rounded-none",
        className
      )}
    >
      <div className="flex items-center gap-4 mb-3">
        {icon}
        <span className="text-base font-bold tracking-tight text-foreground">
          {title}
        </span>
      </div>
      <div className="mt-2">{description}</div>
    </SpotlightCard>
  );
};
