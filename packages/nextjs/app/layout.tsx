import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "⚡ Start",
    },
  ],
  image: `https://speedrunethereum.com/thumbnail.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=0`,
});

export const metadata: Metadata = {
  title: "Speed Run Ethereum",
  description: "Learn how to build on Ethereum; the superpowers and the gotchas.",
  openGraph: {
    title: "Speed Run Ethereum",
    description: "Learn how to build on Ethereum; the superpowers and the gotchas.",
    images: [`https://speedrunethereum.com/thumbnail.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
