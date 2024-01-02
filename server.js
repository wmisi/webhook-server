const express = require("express");
const app = express();
const port = 3000; // Make sure it matches with the port on railway if any

app.get("/", function (req, res) {
  res.send("Server running");
});

// Webhook endpoint
app.post("/webhook", (req, res) => {
  console.log("Received webhook:", req.body);

  // Additional webhook handling logic
  const response = {
    message: "Webhook received successfully!",
    payload: req.body,
  };

  return res.status(200).json(response);
});

app.get("/webhook", (req, res) => {
  return res.status(405).json({
    error: "Webhook endpoint only accepts POST requests",
  });
});

// Global error handling
app.use((err, req, res, next) => {
  console.error(err);
  return res.status(500).send("Internal Server Error");
});

app.listen(port, () => {
  console.log("App started succesfully");
});
