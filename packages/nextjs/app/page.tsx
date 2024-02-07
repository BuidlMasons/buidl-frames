"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect users to the desired URL
    router.push("https://speedrunethereum.com/");
  }, [router]);

  return null;
}
