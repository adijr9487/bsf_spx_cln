require("dotenv").config();
const express = require("express");
const db = require("./config/db_config");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require('cors');

// Routers
const auth = require("./routes/auth");
const spacex = require("./routes/spacex");

// PORT
const PORT = process.env.PORT || 5000;

// App
const app = express();

//MiddleWares
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: '*', // Replace with your frontend's origin
  credentials: true,
}));

app.use("/public", express.static(path.resolve(__dirname, "./public")));
app.use(express.static(path.resolve(__dirname, "./client/build")));

// Routes
app.use("/api/auth", auth);
app.use("/api/spacex", spacex);

if (process.env.NODE_ENV === "production") {
  // Basename is client should be '/app'
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Listen
db.connect(process.env.MONGO_URI)
.then(() => {

  //starting server
  app.listen(PORT, () => {
    console.log("Server is up and running! PORT=", PORT);
  });
})
