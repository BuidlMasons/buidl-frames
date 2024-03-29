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
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/bafybeiefo4lpojgsq6n5trcfq45r6xw6v6u3mhy2gtvr66qmdxl3zfwdaa/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Speed Run Ethereum",
  description: "Learn how to build on Ethereum; the superpowers and the gotchas.",
  openGraph: {
    title: "Speed Run Ethereum",
    description: "Learn how to build on Ethereum; the superpowers and the gotchas.",
    images: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/bafybeiefo4lpojgsq6n5trcfq45r6xw6v6u3mhy2gtvr66qmdxl3zfwdaa/0.png`,
    ],
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
