// ./api/post/controllers/PostController.js
module.exports = {
    async create(ctx) {
      try {
        const { email, password } = ctx.request.body;
  
        // Your logic to process the received data
        // For simplicity, this example just logs the data
        console.log('Received data:', { email, password });
  
        // Send a response
        return ctx.send({ message: 'Data received successfully!' });
      } catch (error) {
        // Handle errors
        return ctx.send({ error: 'Error processing the request.' }, 500);
      }
    },
  };