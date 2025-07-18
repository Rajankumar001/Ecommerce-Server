import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("hi i am rajan");
});

//PORT
const PORT=process.env.PORT||8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on port ${PORT}`
  );
});