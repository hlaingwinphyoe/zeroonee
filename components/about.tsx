"use client";
import RotatingText from "@/components/ui/rotating-text";
import ShinyText from "@/components/ui/shiny-text";
import { HoverEffect } from "./ui/card-hover-effect";

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
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center">
            <div className="shiny-container">
                <ShinyText text="Who We Are" className="text-sm" speed={3} />
            </div>
            <h1 className="my-6 flex items-center justify-center gap-3 text-4xl sm:text-5xl md:text-6xl font-bold">
                Creative 
                <RotatingText
                    texts={['Solution', 'Website', 'Team', 'Design', 'Development']}
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
            </h1>
            <p className="text-[17px] sm:text-lg">
                Our team is passionate about building digital experiences that not only look beautiful, but perform flawlessly. Whether you&apos;re launching something new or upgrading your online presence, our team is here to make sure your website stands out — and stands strong.
            </p>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <HoverEffect items={features} />
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
