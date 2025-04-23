import Image from "next/image";
import Link from "next/link";
import { SparklesCore } from "./ui/sparkles";

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
    title: "Contact Us",
    href: "#contact",
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
  return (
    <footer className="dark:border-t mt-40 dark bg-background text-foreground">
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:grid lg:grid-cols-5">
          <div className="lg:col-span-2 flex flex-col justify-center space-y-4">
              <Image src="/full_logo_white.png" alt="Brand Logo" width={150} height={150} priority />
              <div className="w-40 h-10 relative">
        {/* Gradients */}
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
              <p className="text-gray-700 dark:text-gray-300">
                ZeroOnee is a dynamic web and app development team driven by a passion for innovation, design, and technology.
              </p>
              <p className="text-gray-700 dark:text-white flex items-center gap-2">
                <span className="text-gray-700 dark:text-gray-400">Email:</span>
                <Link href="mailto:zeroone@gmail.com" target="_blank">zeroonee@gmail.com</Link>
              </p>
          </div>

          <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p>
                  <span className="text-xs tracking-wide text-black dark:text-white uppercase"> Call us </span>

                  <a href="#" className="block text-2xl font-medium text-gray-900 dark:text-white hover:opacity-75 sm:text-3xl">
                    +66944912812
                  </a>
                </p>

                <ul className="mt-8 space-y-1 text-sm text-gray-700 dark:text-white">
                  <li>Monday to Friday: 10am - 5pm</li>
                  <li>Weekend: 10am - 3pm</li>
                </ul>

                <ul className="mt-8 flex gap-6">
                  <li>
                    <Link
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 dark:text-white transition hover:opacity-75"
                    >
                      <span className="sr-only">Facebook</span>

                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256"/></svg>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 dark:text-white transition hover:opacity-75"
                    >
                      <span className="sr-only">Telegram</span>

                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248s248-111.033 248-248S384.967 8 248 8m114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3c-3.476 18.584-10.322 24.816-16.948 25.425c-14.4 1.326-25.338-9.517-39.287-18.661c-21.827-14.308-34.158-23.215-55.346-37.177c-24.485-16.135-8.612-25 5.342-39.5c3.652-3.793 67.107-61.51 68.335-66.746c.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142q-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123c-15.523-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7q108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789c2.052-.034 6.639.474 9.61 2.885a10.45 10.45 0 0 1 3.53 6.716a43.8 43.8 0 0 1 .417 9.769"/></svg>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 dark:text-white transition hover:opacity-75"
                    >
                      <span className="sr-only">Line</span>

                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5L254 230v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7v-81.3c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4.6 3 1.6l37.3 50.3v-48.2c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7v-81.3c0-1.9-1.6-3.7-3.7-3.7m-31.4 68.1h-35.6v-64.4c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7.6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1h-52.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344v-13.6h35.5c2.1 0 3.7-1.6 3.7-3.7v-13.1c0-2.1-1.6-3.7-3.7-3.7H344v-13.7h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4v326c-.1 51.2-42.1 92.7-93.4 92.6h-326C41.4 511.9-.1 469.8 0 418.6v-326C.1 41.4 42.2-.1 93.4 0h326c51.2.1 92.7 42.1 92.6 93.4m-70.4 140.1c0-83.4-83.7-151.3-186.4-151.3S68.8 150.1 68.8 233.5c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"/></svg>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Services</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    {services.map((service) => (
                      <li key={service.id}>
                        <Link className="text-gray-700 dark:text-white transition hover:opacity-75" href="#">{service.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Quick Links</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    {footerLinks.map((footerLink) => (
                      <li key={footerLink.title} >
                          <Link className="text-gray-700 dark:text-white transition hover:opacity-75" href={footerLink.href}>{footerLink.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-gray-100 pt-12">
              <div className="sm:flex sm:items-center sm:justify-between">
                <ul className="flex flex-wrap gap-4 text-xs">
                  <li>
                    <Link href="/terms" className="text-gray-500 dark:text-white transition hover:opacity-75"> Terms & Conditions </Link>
                  </li>

                  <li>
                    <Link href="#" className="text-gray-500 dark:text-white transition hover:opacity-75"> Privacy Policy </Link>
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
