import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app: Application = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log("Connected");
    res.send("Hello, World!");
  });

  app.listen(5173, () => {
    console.log("Listening on port 5173");
  });