import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-background dark:bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 text-center">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-black  text-center font-bold">
          Page Not Found
        </h1>
        <p className="my-10 text-neutral-500 max-w-lg mx-auto text-center relative z-10">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Button asChild className="z-[999]">
          <Link href="/">
            Back to homepage
          </Link>
        </Button>
      </div>
    </div>
  )
}