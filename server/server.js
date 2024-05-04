import express from "express";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
