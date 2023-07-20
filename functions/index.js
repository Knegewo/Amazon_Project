const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51MJ83ZC0x9Q1Z7ysw0GKVZ6UebjpqpYfLyjF6JflyXEWTaijsY1eJtZJbrOnbz5fQqB8yndcjGDZHtbyGflBjKwu00AcQmTI0m');

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// res.header("Access-Control-Allow-Origin", "http://localhost:3000, http://example.com");

app.get('/', (request, response) => response.status(200).send('Hello world'));
// app.get('/NewYear', (request, response) => response.status(200).send('Happy New Year'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command - setup needed backend express running in cloud function 
exports.api = functions.https.onRequest(app);

