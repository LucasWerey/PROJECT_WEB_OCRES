const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("JE SUIS CONNECTE")
);

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.listen(4000, () => console.log("server running on port 4000"));
