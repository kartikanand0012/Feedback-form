const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const corsOptions = {
  Credential: "true",
};

require("dotenv").config();

const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.options("*", cors(corsOptions));
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api", require("./src/routes/index"));

app.listen(PORT, console.log(`Server is running at PORT:${PORT} `));
