import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

//= ===========================================================//
// EXPRESS SERVE IMAGES
//= ===========================================================//
app.use(cors());
app.use(morgan("tiny"));
app.use("/", express.static("images"));
app.listen(4000, () => {
  console.log(
    `\nImage microservice is up and running on port \x1b[1m4000\x1b[0m`,
  );
});
