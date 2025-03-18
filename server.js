const express = require("express");
require("dotenv").config();
const cors = require("cors");
const myRouter = require("./src/routes/data.route");
const connectDB = require("./src/config/connectDB");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", myRouter);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("welcome to server");
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  connectDB();
});
