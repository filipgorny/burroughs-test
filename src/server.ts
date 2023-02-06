import express, { Express, Request, Response } from "express";
import { burroughsTestCalendar } from "./burroughs-test-calendar";
import { csvGenerator } from "./csv/csv-generator";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Burroughs test API");
});

app.get("/dates", (req: Request, res: Response) => {
  if (!req.query.from) {
    res.status(400).send("Missing from date");
    return;
  }

  const from = new Date(req.query.from as string);
  const end = new Date(from.getFullYear(), from.getMonth() + 12, 0);

  const payDays = burroughsTestCalendar.getPayDays(from, end);
  res.header("Content-Type", "text/csv");
  res.send(csvGenerator(payDays));
});

export const server: Express = app;
