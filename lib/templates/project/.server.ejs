require("express-async-errors");
const app = require("express")();
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const { MONGODB_URI } = require("./src/config");

// Pre-route middlewares
require("./src/middlewares/pre-route.middleware")(app);

// API routes
app.use("/api", require("./src/routes"));

// Ping me 🙂
app.get("/ping", (req, res) => res.status(200).send("Hello world!"));

// Error middlewares
require("./src/middlewares/error.middleware")(app);


app.listen(PORT, async () => {
  //Initialize Database
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  };
  await mongoose.connect(MONGODB_URI, options)
  console.log(':::> Connected to database')
  console.log(`:::> Server listening on port ${PORT} @ http://localhost:${PORT}`);
});

app.on("error", (error) => {
  console.error(`<::: An error occiurred in our server: \n ${error}`);
});
