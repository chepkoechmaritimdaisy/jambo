import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('Stripe-Signature') as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Here you would typically:
    // 1. Get the user's email from the session: session.customer_details.email
    // 2. Check if the user exists in your database.
    // 3. If not, create a new user.
    // 4. Create an order in your `orders` table.

    console.log('Payment was successful!', session);
  }

  return new NextResponse(null, { status: 200 });
}
