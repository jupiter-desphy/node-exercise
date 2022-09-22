import express from "express";
import morgan from "morgan";
import config from "./config";
// TODO: import router from routes/
import apiRouter from "./routes";
import path from "path";

const app = express();
app.use(morgan("dev"));

// parses incoming requests to JSON
app.use(express.json());

//takes a file path that points to a folder holding static assets
app.use(express.static(path.join(__dirname, "./public")));

// TODO: use the imported router to handle all requests

app.use("/api", apiRouter);

/* Default Error Handler (for when errors are sent to Next)
*/
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
