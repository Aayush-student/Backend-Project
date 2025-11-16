import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}
))

app.use(express.json({limit:"16kb"})) /*handles json data in server jo object ki form mai aata hai */
app.use(express.urlencoded({extended: true, limit: "16kb"})) /* handles htmlform data*/ 
app.use(express.static('public')) /*handles images js css files means can directly access them store them */
app.use(cookieParser())


export default app