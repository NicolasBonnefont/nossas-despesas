const stripe = require('stripe')(process.env.StripeSecret);

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = process.env.StripeEndPointSecret;

export async function POST(req: Request, res: Response) {

  try {
    console.log('ENTREI NO POST')
    const sig = req.headers.get('stripe-signature');

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      console.log(event)
    } catch (err) {
      console.log(err)

      /*   res.status(400).send(`Webhook Error: ${err}`); */
      return;
    }

    // Handle the event
    console.log(`Unhandled event type ${event.type}`);

    // Return a 200 response to acknowledge receipt of the event

  } catch (error) {
    throw error
  }

}
export async function GET(req: Request, res: Response) {

  try {

    const sig = req.headers.get('stripe-signature');

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      console.log(err)

      /*   res.status(400).send(`Webhook Error: ${err}`); */
      return;
    }

    // Handle the event
    console.log(`Unhandled event type ${event.type}`);

    // Return a 200 response to acknowledge receipt of the event

  } catch (error) {
    throw error
  }

}


