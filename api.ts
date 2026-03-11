import express from "express";
import rateLimiter from "./index.js";

const app = express();

app.use(rateLimiter);

app.get("/test", (_req, res) => {
  res.status(200).send("OK");
});

app.listen(5500, "localhost", () => console.log("Server is listening..."));
