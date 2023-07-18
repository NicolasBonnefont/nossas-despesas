
const stripe = require('stripe')('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');

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_ca93dae62cbaf0238344f2f9bf0f241b541a8d61be395a5860c68d482c60fa0d";

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

    console.log('ENTREI NO GET')

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


