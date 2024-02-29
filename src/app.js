import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import homeRouter from "./routes/home.routes.js";
import itemRouter from "./routes/item.routes.js";
import materialRouter from "./routes/material.routes.js";

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
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes declaration
app.use("/", homeRouter);
app.use("/api/v1/users", userRouter);

app.use("/api/v1/item", itemRouter);
app.use("/api/v1/material", materialRouter);

export { app };
