import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import homeRouter from "./routes/home.routes.js";
import orderRouter from "./routes/order.routes.js";
import buyerRouter from "./routes/buyer.routes.js";
import processRouter from "./routes/process.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/", homeRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/buyer", buyerRouter);
app.use("/api/v1/process", processRouter);

export { app };
