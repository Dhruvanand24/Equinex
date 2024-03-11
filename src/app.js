import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import homeRouter from "./routes/home.routes.js";
import itemRouter from "./routes/item.routes.js";
import materialRouter from "./routes/material.routes.js";
import purchaseRouter from "./routes/purchase.routes.js";
import inventoryRouter from "./routes/inventory.routes.js";
import sellerRoutes from "./routes/seller.routes.js";
import grnRoutes from "./routes/grn.routes.js";
import departmentRouter from "./routes/department.routes.js";
import buyerRouter from "./routes/buyer.routes.js";
import processRouter from "./routes/process.routes.js";
import orderRouter from "./routes/order.routes.js";
import warehouseRouter from "./routes/warehouse.routes.js";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes declaration
app.use("/", homeRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/item", itemRouter);
app.use("/api/v1/material", materialRouter);
app.use("/api/v1/purchase", purchaseRouter);
app.use("/api/v1/seller", sellerRoutes);
app.use("/api/v1/grn", grnRoutes);
app.use("/api/v1/buyer", buyerRouter);
app.use("/api/v1/inventory", inventoryRouter);
app.use("/api/v1/department", departmentRouter);
app.use("/api/v1/process", processRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/warehouse", warehouseRouter);

export { app };
