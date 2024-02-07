import { NextRequest, NextResponse } from "next/server";

/**
 * Iterate through folder of images using "nextId"
 */
async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const id: any = searchParams.get("id");
  const idAsNumber = parseInt(id);

  const data = await req.json();
  const buttonId = data.untrustedData.buttonIndex;

  let slideNumber: number;
  if (buttonId === 1) {
    slideNumber = idAsNumber - 1;
  } else if (buttonId === 2) {
    slideNumber = idAsNumber + 1;
  } else {
    slideNumber = 0;
  }

  if (idAsNumber === 7) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 7</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/bafybeieshch2n347ttuuuyfkkemydwg7sxfsaemalrp3f5bujt4p3fxrei/7.png" />
    <meta property="fc:frame:button:1" content="Speed Run Ethereum" />
    <meta property="fc:frame:button:1:action" content="post_redirect" />
    <meta property="fc:frame:button:2" content="Buidl Guidl" />
    <meta property="fc:frame:button:2:action" content="post_redirect" />
    <meta property="fc:frame:button:3" content="Telegram" />
    <meta property="fc:frame:button:3:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  </head></html>`);
  } else {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/bafybeieshch2n347ttuuuyfkkemydwg7sxfsaemalrp3f5bujt4p3fxrei/${id}.png" />
    <meta property="fc:frame:button:1" content="Previous Challenge" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${slideNumber}" />
    <meta property="fc:frame:button:2" content="Next Challenge" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${slideNumber}" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
