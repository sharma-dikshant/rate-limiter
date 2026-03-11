import express from "express";
import { rateLimit, ALGORITHM } from "./src/index.js";

const app = express();

app.use(rateLimit());

app.get("/test", (_req, res) => {
  res.status(200).send("OK");
});

app.listen(5500, () => console.log("Server is listening..."));
