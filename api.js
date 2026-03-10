const express = require("express");
const rateLimiter = require("./index");

const app = express();

app.use(rateLimiter);

app.get("/test", (req, res, next) => {
  res.status(200).send("OK");
});

app.listen(5500, "localhost", () => console.log("server is listening ..."));
