require("dotenv").config()

const functions = require("firebase-functions")
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  

// - API

// - APP Config
const app = express()

// - Middleware
app.use(cors({origin: true}));
app.use(express.json());

// - API Routes
app.get('/', (req, res) => res.status(200).send('Hello World'))

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received:", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "zar",
    });

    //If okay created
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// - Listen Commands
exports.api = functions.https.onRequest(app);

