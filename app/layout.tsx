import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZeroOnee",
  description:
    "Zeroonee offers top-quality website development services — modern design, clean code, and a focus on user experience. Let’s build your future.",
  keywords: [
    "ZeroOnee",
    "Zero One",
    "Website development services",
    "Custom web development",
    "Professional website design",
    "Business website solutions",
    "Responsive website development",
    "SEO-friendly web development",
    "Web application development",
    "Modern web design and development",
    "Build your website with Zeroonee",
  ],
  openGraph: {
    type: "website",
    siteName: "ZeroOnee",
    locale: "en_US",
    url: "https://zeroonee.vercel.app",
    title: "ZeroOnee",
    description:
      "Zeroonee offers top-quality website development services — modern design, clean code, and a focus on user experience. Let’s build your future.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZeroOnee Team",
      },
    ],
  },
  authors: [
    {
      name: "Zeroonee Team",
    },
  ],
  creator: "Zeroonee Team",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
          <Navbar />
            <main className="pt-16 xs:pt-20 sm:pt-20">
              {children}
            </main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
