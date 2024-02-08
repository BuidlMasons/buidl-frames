import { NextRequest, NextResponse } from "next/server";

type ChallengeInfo = {
  text: string;
  target: string;
};

const CHALLENGE_MAP: { [key: number]: ChallengeInfo } = {
  0: { text: "🎟 Simple NFT Example", target: "https://speedrunethereum.com/challenge/simple-nft-example" },
  1: { text: "🥩  Staking App", target: "https://speedrunethereum.com/challenge/decentralized-staking" },
  2: { text: "🏵 Token Vendor", target: "https://speedrunethereum.com/challenge/token-vendor" },
  3: { text: "🎲 Dice Game", target: "https://speedrunethereum.com/challenge/dice-game" },
  4: { text: "⚖️ Build a DEX", target: "https://speedrunethereum.com/challenge/minimum-viable-exchange" },
  5: { text: "📺 A State Channel Application", target: "https://speedrunethereum.com/challenge/state-channels" },
  6: { text: "👛 Multisig Wallet Challenge", target: "https://t.me/+zKllN8OlGuxmYzFh" },
  7: { text: "🎁 SVG NFT 🎫 Building Cohort Challenge", target: "https://t.me/+mUeITJ5u7Ig0ZWJh" },
};

/**
 * Respond with the challenge frame if query param "id" is < 7
 * Respond with the end frame if query param "id" is equal to 7
 */
async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const id: any = searchParams.get("id");
  const idAsNumber = parseInt(id);

  const nextId = idAsNumber + 1;

  if (idAsNumber === 7) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 7</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://buidlguidl.com/thumbnail.png" />
    <meta property="fc:frame:button:1" content="🏃 SpeedRun" />
    <meta property="fc:frame:button:1:action" content="post_redirect" />
    <meta property="fc:frame:button:2" content="🏰 BuidlGuidl" />
    <meta property="fc:frame:button:2:action" content="post_redirect" />
    <meta property="fc:frame:button:3" content="💬 Telegram" />
    <meta property="fc:frame:button:3:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  </head></html>`);
  } else {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/bafybeieshch2n347ttuuuyfkkemydwg7sxfsaemalrp3f5bujt4p3fxrei/${id}.png" />
    <meta property="fc:frame:button:1" content="${CHALLENGE_MAP[idAsNumber].text}" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="${CHALLENGE_MAP[idAsNumber].target}" />
    <meta property="fc:frame:button:2" content="Next Challenge ⏭️" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
