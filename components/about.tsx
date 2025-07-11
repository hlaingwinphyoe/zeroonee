"use client";
import RotatingText from "@/components/ui/rotating-text";
import ShinyText from "@/components/ui/shiny-text";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    icon: "🌟",
    title: "Our Vision",
    description:
      "Empowering businesses to thrive online with powerful, beautiful, and high-performing websites.",
  },
  {
    id: 2,
    icon: "🚀",
    title: "Our Mission",
    description:
      "To deliver custom website development solutions that blend creativity, strategy, and technology — helping businesses unlock their full digital potential.",
  },
  {
    id: 3,
    icon: "💡",
    title: "Values",
    description:
      "Your success is our success. We focus on delivering real results that help your business grow and evolve.",
  },
];
const About = () => {
  const titleRef = useRef(null);
  const rotatingRef = useRef(null);
  const descRef = useRef(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

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
      rotatingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rotatingRef.current,
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
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      featuresRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current[0],
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center">
          <div className="shiny-container">
            <ShinyText text="Who We Are" className="text-sm" speed={3} />
          </div>
          <h1 ref={titleRef} className="my-6 flex items-center justify-center gap-3 text-3xl sm:text-5xl md:text-6xl font-bold">
            Creative
            <span ref={rotatingRef}>
              <RotatingText
                texts={["Solution", "Website", "Team", "Design", "Development"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-black dark:bg-white dark:text-black text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </h1>
          <p ref={descRef} className="text-base sm:text-lg">
            We craft beautiful, high-performing websites that leave a lasting
            impression. Whether you&apos;re starting fresh or leveling up, our
            team is here to make your digital presence stand out — and stay
            strong.
          </p>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              ref={el => { featuresRef.current[i] = el; }}
              className="flex flex-col bg-background border rounded-xl py-6 px-5 shadow-md"
            >
              <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                {feature.icon}
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;

// {features.map((feature) => (
//   <div
//       key={feature.title}
//       className="flex flex-col bg-background border rounded-xl py-6 px-5"
//   >
//       <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
//       {/* <feature.icon className="h-6 w-6" /> */}
//       {feature.icon}
//       </div>
//       <span className="text-lg font-semibold">{feature.title}</span>
//       <p className="mt-1 text-foreground/80 text-[15px]">
//       {feature.description}
//       </p>
//   </div>
//   ))}
