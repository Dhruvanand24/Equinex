import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import homeRouter from "./routes/home.routes.js";
import orderRouter from "./routes/order.routes.js";
import materialRequest from "./routes/materialRequest.routes.js";


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/", homeRouter)
app.use("/order", orderRouter)
app.use("/material-request", materialRequest)

export {app};