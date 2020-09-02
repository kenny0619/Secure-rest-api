const express = require("express");
const { urlencoded, json } = express;
const logger = require("morgan");

const postRoutes = require("./routes/posts.routes");

const app = express();
app.use([urlencoded({ extended: true }), json()]);
app.use(logger("dev"));

app.use("/", postRoutes);

const normalizePort = () => {
  const port = parseInt(process.env.PORT, 10);
  if (Number.isNaN(port) && typeof process.env.PORT !== "undefined")
    return process.env.PORT;
  if (port >= 0) return port;
  return 3000;
};

const port = normalizePort();

app.get("/", (req, res) =>
  res.status(200).send({
    message: "welcome to The Blog API",
  })
);

const hostname = process.env.HOSTNAME || "localhost";
app.listen(port, () => console.log(`Server listening on ${hostname}:${port}`));
