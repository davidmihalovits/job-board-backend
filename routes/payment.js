require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE);

exports.payment = async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 9900,
        currency: "usd",
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
};
