import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRoute from "./routes/user.route.js"
import restaurantRoute from "./routes/restaurant.route.js";
import menuRoute from "./routes/menu.route.js"
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json({limit: '5mb'}));
app.use(express.urlencoded({extended: true, limit: '5mb'}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: "http://localhost:5173",
    credential: true
}

app.use(cors(corsOptions))

// api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/restaurant", restaurantRoute);
app.use("/api/v1/menu", menuRoute);


app.listen(PORT, () => {
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});