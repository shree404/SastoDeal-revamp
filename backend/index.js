const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const REACT_URI = process.env.REACT_URI || "http://localhost:3000";
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const productcategoryRouter = require("./routes/productcategoryRoute");
const brandRouter = require("./routes/brandRoute");
const couponRouter = require("./routes/couponRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

// Enable CORS for specified origins and allow credentials
const corsOptions = {
  origin: REACT_URI,
  credentials: true,
};

if (dotenv.error) {
  console.log("Error loading .env file:", dotenv.error);
}

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

dbConnect();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/category", productcategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

//middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
