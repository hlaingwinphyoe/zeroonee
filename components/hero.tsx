"use client"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
    );
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3 }
    );
    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.5 }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.7 }
    );
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-md">
        <div ref={badgeRef}>
          <Badge className="rounded-full border-none px-5 py-1">
            ZeroOnee Team
          </Badge>
        </div>
        <h1
          ref={headingRef}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight"
        >
          Build More Than Just a Website — Build a Digital Experience.
        </h1>
        <p
          ref={descRef}
          className="mt-6 text-[17px] md:text-lg"
        >
          We bring ideas to life with intuitive design, and we specialize in creating custom websites that are fast, beautiful, and built to perform. 🚀
        </p>
        <div
          ref={buttonRef}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <Link href="#services">
            <Button size="lg" className="rounded-full text-base">
              See What We Do <CircleArrowDown className="ml-2 !h-5.5 !w-5.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
