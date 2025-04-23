"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Optionally return a placeholder or nothing while the theme is loading
    return null;
  }

  const logoSrc = resolvedTheme === "dark" ? "/full_logo_white.png" : "/full_logo.png";

  return (
    <Link href="/">
      <Image
        src={logoSrc}
        alt="Brand Logo"
        width={100}
        height={100}
        priority
      />
    </Link>
  );
};
