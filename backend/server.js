import express from 'express';
import data from './data.js';
const app = express();

// Express has get method that we use here, it has 2 parameters -->
//Paramter1--> URL we are going to serve
//Parameter2--> Function which responds to this api , when user will go to this address we need to return products to the frontend
//res.send --> This sends back data to the frontend-
// We get cannot get error if we don't create AP for the root of the Backend
// We can install JSON viewer for beautiful JSON represented data on chrome
// We can install nodemon , which dynamically updoates any changes made to backend , otherwise we will have to run "node server.js" again and again
// We use the data.js we copied from frontend here, as we don't have access to the data.js in the frontend
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

//Define port where we will respond, for the backend
//This is convention to access the free port, but if it does not set we can set the deefault port number (We kept it as 5000)
const port = process.env.PORT || 5000;

//With app.listen() the server starts and gets ready for responding to the frontend
//The first parameter is port and the second is a callback function that will run when the server is ready
//We use backtick literal [``] --> This allows us to access the variable inside your literal string
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
