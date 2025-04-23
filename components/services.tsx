"use client";
import React from "react";
import SpotlightCard from "./ui/spotlight-card";
import ShinyText from "./ui/shiny-text";
import { Component, LayoutTemplate, Store } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Website Development",
    description: "Need something beyond a simple website? We create powerful web applications — from dashboards to booking systems — tailored for performance and scalability.",
    icon: LayoutTemplate,
  },
  {
    id: 2,
    title: "E-Commerce Development",
    description: "From small shops to full-scale online stores, we develop secure, user-friendly e-commerce websites that boost conversions and deliver seamless shopping experiences.",
    icon: Store
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Before writing a single line of code, we design user-friendly interfaces that deliver seamless experiences — making your website not just beautiful, but intuitive and easy to use.",
    icon: Component
  },
];

const Services = () => (
  <div id="services" className="max-w-screen-lg mx-auto flex justify-center items-center py-20">
    <div className="h-full w-full text-center">
        <div className="shiny-container">
            <ShinyText text="What we offer" speed={3} />
        </div>
        <h2 className="my-6 text-4xl md:text-5xl font-bold text-center tracking-tight px-6">
            Our Services
        </h2>
        <p className="mb-20 text-foreground/70">
          Building Digital Solutions That Power Your Growth.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ServiceCardList />
        </div> 
    </div>
  </div>
);

const ServiceCardList = () =>
  services.map((service) => (
    <SpotlightCard key={service.id} className="rounded-xl space-y-5 bg-transparent" spotlightColor="rgba(249, 249, 249, 0.2)">
        <div className="flex items-center justify-center">
            <service.icon className="h-16 w-16 text-foreground/80" />
        </div>
        <h1 className="text-lg sm:text-xl font-bold">{service.title}</h1>
        <p className="mt-1 text-foreground/80 text-[15px]">
            {service.description}
        </p>
    </SpotlightCard>
  ));

export default Services;
