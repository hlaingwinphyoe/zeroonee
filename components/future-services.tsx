"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  Component,
  LayoutTemplate,
  Store,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Crafting powerful web applications with modern technologies. From dynamic dashboards to scalable systems that drive your business forward.",
    icon: LayoutTemplate,
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    id: 2,
    title: "E-Commerce Development",
    description:
      "Building seamless online stores that convert visitors into customers. Secure, fast, and optimized for maximum sales performance.",
    icon: Store,
    gradient: "from-purple-500 to-pink-500",
    delay: 0.2,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Creating intuitive interfaces that users love. Every pixel is crafted for seamless experiences that keep users engaged and coming back.",
    icon: Component,
    gradient: "from-emerald-500 to-teal-500",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Business Solutions",
    description:
      "Strategic digital solutions that transform your business. From process automation to data-driven insights that fuel growth and efficiency.",
    icon: TrendingUp,
    gradient: "from-orange-500 to-red-500",
    delay: 0.4,
  },
];

export default function FutureService() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Our Expertise
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6">
            Digital Solutions
          </h2>

          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We transform ideas into powerful digital experiences that drive
            results. Every solution is crafted with precision, performance, and
            purpose.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                {/* Gradient Background */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br",
                    service.gradient
                  )}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center",
                      service.gradient
                    )}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    service.gradient
                  )}
                  style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors cursor-pointer">
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
