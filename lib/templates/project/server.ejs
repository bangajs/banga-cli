require("express-async-errors")
const express = require("express");
const path = require("path")
const app = express();

const preRouteMiddlewares = require("./src/middlewares/preRouteMiddlewares");
const errorMiddlewares = require("./src/middlewares/errorMiddlewares");
const apiRoute = require("./src/routes");
const databaseConfig = require("./src/config/db");
const PORT = process.env.PORT;

preRouteMiddlewares(app);

app.use("/api", apiRoute)

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname + "/public/index.html"));
})

errorMiddlewares(app)

app.listen(PORT, () => {
  console.log(`::: server listening on port ${PORT}. Open via http://localhost:${PORT}/`);
  databaseConfig();
});

app.on("error", (error) => {
  console.log(`::> an error occiurred in our server: \n ${error}`);
});
