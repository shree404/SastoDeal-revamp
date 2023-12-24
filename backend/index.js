const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const REACT_URI = process.env.REACT_URI || "http://localhost:3000";
const authRouter = require("./routes/authRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Enable CORS for specified origins and allow credentials
const corsOptions = {
  origin: REACT_URI,
  credentials: true,
};

app.use(cors(corsOptions));

dbConnect();

app.use(express.json());
app.use(cookieParser());
app.use("/api/user", authRouter);
app.use("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

//middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
