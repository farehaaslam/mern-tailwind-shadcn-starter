import express from "express";
import cors from "cors";
import "dotenv/config";
import startserver from "./db.js";

const PORT = process.env.PORT || 5000;
const app = express();
const allowedOrigins = [];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

startserver(app, PORT);

// copy paste in terminal (powershell)
// first come in server
// mkdir controller models middleware routes lib
