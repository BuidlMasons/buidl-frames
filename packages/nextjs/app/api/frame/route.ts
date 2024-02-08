import { NextRequest, NextResponse } from "next/server";

type ChallengeInfo = {
  text: string;
  target: string;
};

const CHALLENGE_MAP: { [key: number]: ChallengeInfo } = {
  1: { text: "🎟 Simple NFT Example", target: "https://speedrunethereum.com/challenge/simple-nft-example" },
  2: { text: "🥩  Staking App", target: "https://speedrunethereum.com/challenge/decentralized-staking" },
  3: { text: "🏵 Token Vendor", target: "https://speedrunethereum.com/challenge/token-vendor" },
  4: { text: "🎲 Dice Game", target: "https://speedrunethereum.com/challenge/dice-game" },
  5: { text: "⚖️ Build a DEX", target: "https://speedrunethereum.com/challenge/minimum-viable-exchange" },
  6: { text: "📺 A State Channel Application", target: "https://speedrunethereum.com/challenge/state-channels" },
  7: { text: "👛 Multisig Wallet Challenge", target: "https://t.me/+zKllN8OlGuxmYzFh" },
  8: { text: "🎁 SVG NFT 🎫 Building Cohort Challenge", target: "https://t.me/+mUeITJ5u7Ig0ZWJh" },
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

  if (idAsNumber === 9) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 9</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/bafybeiefo4lpojgsq6n5trcfq45r6xw6v6u3mhy2gtvr66qmdxl3zfwdaa/9.png" />
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
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/bafybeiefo4lpojgsq6n5trcfq45r6xw6v6u3mhy2gtvr66qmdxl3zfwdaa/${id}.png" />
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
