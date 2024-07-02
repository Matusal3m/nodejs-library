import express from "express";
import bookRouter from "./src/routes/bookRoute.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(bookRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
