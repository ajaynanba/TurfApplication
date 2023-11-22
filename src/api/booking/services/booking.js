'use strict';

/**
 * booking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::booking.booking',({strapi}) =>({

    // async createMyEnum() {
    //     try {
    //       // Perform actions to create your enumeration here
    //       // For example, interact with the database to insert values into your enumeration table
    //       // Replace this with your logic as needed
    
    //       // Example using Knex (Strapi's ORM for database interaction)
    //       await strapi.query('myEnumeration').create({
    //         name: 'Value 1',
    //         value: 'val_1',
    //       });
    
    //       await strapi.query('myEnumeration').create({
    //         name: 'Value 2',
    //         value: 'val_2',
    //       });
    
    //       // Add more entries as needed
    //     } catch (err) {
    //       console.error('Error creating enumeration:', err);
    //     }
    //   }
}));
