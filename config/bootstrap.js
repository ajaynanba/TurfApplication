// const http = require('http');
// const { Server } = require('socket.io');

// // Create an HTTP server using Node's http module
// const httpServer = http.createServer();

// // Create a new instance of Socket.IO attached to the HTTP server
// const io = new Server(httpServer, {
//   cors: {
//     origin: 'http://localhost:3000', // Replace with your React application URL
//     methods: ['GET', 'POST'],
//   },
// });

// // Define socket.io event handlers
// // io.on('connection', (socket) => {
// //   console.log(`Socket ${socket.id} connected`);

//   // Add your event handlers here
//   // For example: socket.on('customEvent', (data) => { console.log(data); });
// // });

// // Listen on a specific port, replace 3001 with your desired port number
// const PORT = process.env.PORT || 3000; // Change the port as needed
// httpServer.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
