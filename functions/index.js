const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// secret key:
const stripe = require("stripe")(
  "sk_test_51Lx0a1SHhaEGKBwTHYZz1kBNCTvfOIDnr3CL4BNNv4P6Eo7oNNehsq6hmcbp8lMSUepEmcLYcXgSaN4gH56vTIJ400V9YguWW2"
);

// API

// -App config
const app = express();

// -Middlewares
// cors is like a security
app.use(cors({ origin: true }));
app.use(express.json()); // will allow us to send data and pass it in json format

// -API routes
app.get("/", (request, response) => response.status(200).send("hello world")); // this is how rest api works.

// we used '/payments/create' in pyaments.js
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request receieved BOOM!! for this amount>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/clone-6a5f5/us-central1/api
