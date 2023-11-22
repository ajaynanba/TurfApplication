// // api/customer/controllers/customer.js
// import { ContentTypeBuilder } from 'strapi-utils';


// 'use strict';

// module.exports = {
//   async create(ctx) {
//     try {
//       const { name, email } = ctx.request.body;

//       // Perform any necessary validation

//       // Create a new customer
//       const createdCustomer = await strapi.query('customer').create({
//         name,
//         email,
//         // Other fields if applicable
//       });

//       // Respond with the created customer
//       ctx.send(createdCustomer);
//     } catch (error) {
//       // Handle any errors
//       ctx.throw(400, 'Error creating customer', { error });
//     }
//   },
// };
