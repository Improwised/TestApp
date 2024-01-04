// import * as utils from "common";
import { Sum } from "common/sum";
import { Subtract } from "common/subtract";
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.json(["Hello World"]);
});

app.get("/sum", (req: any, res: any) => {
  res.json({
    "Number 1": req.query.num1,
    "Number 2": req.query.num2,
    Answer: Sum(req.query.num1, req.query.num2),
    // Answer: req.query.num1 + req.query.num2,
  });
});

app.get("/sub", (req: any, res: any) => {
  res.json({
    "Number 1": req.query.num1,
    "Number 2": req.query.num2,
    Answer: Subtract(req.query.num1, req.query.num2),
    // Answer: req.query.num1 - req.query.num2,
  });
});

app.listen(port, () => {
  console.log(`My app listening on port ${port}`);
});
