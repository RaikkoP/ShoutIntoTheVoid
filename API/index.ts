import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Connected");
  res.send("Hello, World!");
});

import getAllRoutes from "./routes/getPost";
import newMessageRoutes from "./routes/newPost";
app.use("/get", getAllRoutes);
app.use("/create", newMessageRoutes)

app.listen(5173, () => {
  console.log("Listening on port 5173");
});