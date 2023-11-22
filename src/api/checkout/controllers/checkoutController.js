'use Strict';
const dotenv = require("dotenv");
const { default: Stripe } = require("stripe");
dotenv.config();
// const stripe = require("stripe")("pk_test_51ODLKGSF9iDZ6jEYwG3BzYtnbBzoHHHEFvyja9xSgLiwypqxZ4msGIMSq6jjM9ZwwPu5xMoSNjP1x6jCtK46c5DD00L4qXiNDW");
// const stripe = require('stripe')(process.env.STRIPE_KEY);    
const stripe = new Stripe(process.env.STRIPE_KEY);

module.exports = {
  async create(ctx) {
    try {
      const YOUR_DOMAIN = 'http://localhost:3000/'; // Replace with your domain

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'football', // Replace with your product name
              },
              unit_amount: 200, // Replace with your product price in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success.html`, // Replace with your success URL
        cancel_url: `${YOUR_DOMAIN}/cancel.html`, // Replace with your cancel URL
      });

      ctx.send({ sessionId: session.id });
    } catch (error) {
      ctx.send({ error: 'Failed to create checkout session' }, 500);
    }
  },
};
