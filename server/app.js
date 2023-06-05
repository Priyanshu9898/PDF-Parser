import express from "express";
import dotnev from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

dotnev.config({path: "./config/config.env"});

app.use(express.json());
app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
  app.use(morgan("dev"));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});