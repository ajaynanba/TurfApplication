'use strict';

/**
 * booking controller
 */

// const stripe = require("stripe")(process.env.STRIPE_KEY)

// const Stripe = require("stripe")(process.env.STRIPE_KEY);
// const stripe = Stripe('sk_test_51ODLKGSF9iDZ6jEYxMYb0yqFMHqkmJ1Vuo0rhczGbXUpKASRO1kPmmauzB9a6AIGuyqTddES5eKJHwLs9OvVJXRW00XlM4Nb3j', {
//   apiVersion: '2023-10-16',
// });
const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::booking.booking', ({ strapi }) => ({
    // async create(ctx) {
    //     const { bookingData } = ctx.request.body;
    //     try {
    //       // Assuming you receive turfId, date, and time from the frontend
    
    //       // Perform booking logic here
    //       // Save booking details to your database or perform necessary actions for turf booking
    
    //       // Create a Stripe checkout session
    //       const session = await stripe.checkout.sessions.create({
    //         payment_method_types: ['card'],
    //         line_items: [
    //           {
    //             price_data: {
    //               currency: 'inr', // Replace with your desired currency
    //               product_data: {
    //                 name: 'Turf Booking', // Replace with the product name or booking details
    //               },
    //               unit_amount: 1000, // Replace with the amount in cents
    //             },
    //             quantity: 1,
    //           },
    //         ],
    //         mode: 'payment',
    //         success_url: 'http://localhost:3000/turf', // Replace with your success URL
    //         cancel_url: 'http://localhost:3000/turf', // Replace with your cancel URL
    //       });
    //       const newBooking = await strapi.service('api::booking.booking').create({
    //         // Map the received data to the Booking content type fields
    //         // For example:
    //            bookingData,
    //             stripeId: session.id
    //           // ... other fields related to your Booking content type
    //       });
    
    //       // Send the session ID to the frontend
    //       return ctx.send({ sessionId: session.id });
    //     } catch (error) {
    //       // Handle errors
    //       return ctx.send({ error: 'Error creating checkout session' }, 500);
    //     }
    //   },
}));
