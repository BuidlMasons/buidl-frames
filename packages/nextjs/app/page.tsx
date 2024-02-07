import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/bafybeieshch2n347ttuuuyfkkemydwg7sxfsaemalrp3f5bujt4p3fxrei/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Speed Run Ethereum",
  description: "Learn how to build on Ethereum",
  openGraph: {
    title: "Speed Run Ethereum",
    description: "Learn how to build on Ethereum",
    images: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/bafybeieshch2n347ttuuuyfkkemydwg7sxfsaemalrp3f5bujt4p3fxrei/0.png`,
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Speed Run Ethereum</h1>
    </>
  );
}
