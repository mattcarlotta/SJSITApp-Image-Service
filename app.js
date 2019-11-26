import express from "express";
import morgan from "morgan";
import cors from "cors";
import moment from "moment-timezone";

const app = express();

moment.tz.setDefault("America/Los_Angeles");
//= ===========================================================//
// EXPRESS SERVE IMAGES
//= ===========================================================//
morgan.token("date", () => moment().format("MMMM Do YYYY, h:mm:ss a"));

app.use(cors());
app.use(
  morgan(
    ":remote-addr [:date] :referrer :method :url HTTP/:http-version :status :res[content-length]",
  ),
);
app.use("/", express.static("images"));
app.listen(4000, () => {
  console.log(
    "\nImage microservice is up and running on port \x1b[1m4000\x1b[0m",
  );
});
