const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./router/user.js");

// App Config.
const app = express();
app.use(cors()); // Cross Origin
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Body Parser

// DB config
require("./models/database/connection.js");

// Routes
app.use("/user", userRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
