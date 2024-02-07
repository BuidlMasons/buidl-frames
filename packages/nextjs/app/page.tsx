"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "🏃💨 Start",
    },
  ],
  image: `https://speedrunethereum.com/thumbnail.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Speed Run Ethereum",
  description: "Learn how to build on Ethereum; the superpowers and the gotchas.",
  openGraph: {
    title: "Speed Run Ethereum",
    description: "Learn how to build on Ethereum; the superpowers and the gotchas.",
    images: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/bafybeieshch2n347ttuuuyfkkemydwg7sxfsaemalrp3f5bujt4p3fxrei/0.png`,
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("https://speedrunethereum.com/");
  }, [router]);

  return (
    <>
      <h1>Speed Run Ethereum</h1>
    </>
  );
}
