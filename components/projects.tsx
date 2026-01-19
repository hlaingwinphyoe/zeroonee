"use client";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import ShinyText from "@/components/ui/shiny-text";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Tarot By Charm",
    image: "/projects/tarotbycharm.png",
    badges: ["Web Development"],
    description:
      "Discover your future and gain clarity with Tarot by Charm. Expert tarot readings, love & career insights, and personalized spiritual guidance.",
    link: "https://www.futureadvicebycharm.com",
    highlight: true,
  },
  {
    id: 2,
    title: "Job Seeker",
    image: "/projects/jobseeker.png",
    badges: ["Web Design", "UX Research"],
    description:
      "The ultimate platform for job seekers. Explore thousands of opportunities, upload your resume, and connect with top employers.",
    link: "https://antiquewhite-chinchilla-670257.hostingersite.com",
    highlight: false,
  },
  {
    id: 3,
    title: "Pathology Biopsy Report",
    image: "/projects/pathology.png",
    badges: ["Admin Dashboard"],
    description:
      "Biopsy Report With ICSH Guidelines.Can report for bonemarrow aspirate, bonemarrrow trephine, histological report and cytological report in one place.",
    link: "#ICSH Guidlines",
    highlight: false,
  },
];

function Projects() {
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
      },
    );
  }, []);

  return (
    <div
      id="projects"
      className="max-w-screen-lg mx-auto flex justify-center items-center py-20"
    >
      <div className="h-full w-full text-center">
        <div className="shiny-container">
          <ShinyText text="Our Projects" speed={3} />
        </div>
        <h2
          ref={titleRef}
          className="my-6 text-4xl md:text-5xl font-bold text-center tracking-tight px-6"
        >
          Featured Projects
        </h2>
        <p ref={descRef} className="text-lg mb-20 text-foreground/70">
          Some creative designs created by our agency
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 sm:gap-y-28 w-full">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="w-full flex items-center justify-center"
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
            >
              <PinContainer
                title={project.link}
                href={project.link}
                className="w-full h-full"
              >
                <div
                  className={`flex flex-col overflow-hidden w-[17.5rem] h-[20rem] sm:h-[22rem]`}
                >
                  <div className="w-full h-full relative rounded-[20px] overflow-hidden border">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3 mt-4">
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-4 py-1 rounded-full text-xs font-medium border border-neutral-400 bg-transparent text-black dark:text-gray-200"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold mb-2 w-full text-left text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm w-full text-left pb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
