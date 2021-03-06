/** @format */
const express = require("express");
const env = require("./config/envConfig");
const connect = require("./config/db");
const userRoutes = require("./routes/users/userRoutes");
const app = express();

// connection function
connect();
// add middelware to access the data in jasson ussing express
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to LezaMERN !!" });
});

// user Routes middelware
app.use("/api", userRoutes);
const port = env.PORT || 5000;
app.listen(port, () => {
  console.log(
    `Your server is running at port number: http://localhost:${port}`
  );
});
